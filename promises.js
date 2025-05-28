
// const myPromise = new Promise((resolve, reject) => {



// })

// const wait = (ms) => {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             resolve(`waited ${ms} milliseconds`);
//         }, ms)
//     })
// }

// wait(2000)
//     .then((message) => console.log(message));


// const display = document.querySelector('p');


// const fetchData = (ms) => {
//     return new Promise((resoleve, reject) => {
    
//     const inputName = prompt('type your name');

//     setTimeout(() => {

//         if(!inputName) {
//             reject('no input value, failed to fetch');
//             return;
//         }

//         resoleve('my name is, ' + inputName);
//     }, ms);
//     })
// }

// fetchData(2000)
//     .then((data) => display.textContent = `Data: ${data}`)
//     .catch((error) => display.textContent = `Error: ${error}`);



// const btn = document.querySelector('button');
// const containerData = document.querySelector('div');


// function updateContainer(content) {
//     containerData.innerHTML = content;
// }

// function fetchingData() {
//     containerData.innerHTML = `<p></p>fetching your data...</p>`;

//     fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then(res => {
//         if(!res.ok) {
//             throw new Error(`HTTP error! status: ${res.status}`);
//         };
//         return res.json();
//     })
//     .then(data => {
//         setTimeout(() => {
//         updateContainer(`<p>Name: ${data.name}</p>`);
//         }, 3000); 
//     })
//     .catch(err => {
//         updateContainer(`<p>error Message: ${err}</p>`);
//     })
// }

// btn.addEventListener('click', fetchingData);



// function fetchData() {

//     return new Promise((resolve, reject) => {

//         let active = true;

//         if(active) {
//             resolve('yes');
//         } else {
//             reject('no');
//         }
//     })
// }

// fetchData()
// .then(data => console.log(data))
// .catch(err => console.log(err));


// function getWeather() {
//     const city = document.querySelector('input').value;
//     const apiKey = '339107b7f0774358b6781822252705';
//     const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;


//     fetch(url) 
//         .then(res => {
//             if(!res.ok) {
//                 throw new Error(`failed to fetch this ${city}`);
//             }
//             return res.json();
//         })
//         .then(data => {
//             document.querySelector('div').innerHTML = `
//             <h3>📍 ${data.location.name}, ${data.location.country}</h3>
//             <p>🌡️ Temperature: ${data.current.temp_c}°C</p>
//             <p>🌤️ Condition: ${data.current.condition.text}</p>
//             <img src="https:${data.current.condition.icon}" alt="weather icon">
//             <p>💨 Wind: ${data.current.wind_kph} kph</p>
//             `;
//         })
//         .catch(err => {
//             document.querySelector('div').innerText = `❌ ${err.message}`;
//         }) 
// }

// document.querySelector('button').addEventListener('click', getWeather);


'use strict';

// (() => {
//     const inputValue = document.querySelector('#autoSearch').value;
//     document.querySelector('#autoSearch').addEventListener('input', () => {


//         document.querySelector('div').textContent = inputValue;

//     });


// })();

// const input = document.querySelector('#autoSearch');

// function autoSearch() {
//     const getValue = input.value;

//     console.log(getValue);
// }

// document.addEventListener('input', autoSearch);


// (() => {

//     const input = document.querySelector('#autoSearch');
//     const display = document.querySelector('div');
//     const apiKey = '339107b7f0774358b6781822252705';
//     let debounceTimeout;

//     function autoSearch() {
//         const  getValue = input.value.trim(); 

//         if(!getValue || getValue.length < 2) {
//             display.innerHTML = '';
//             return;
//         }

//         const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${getValue}`;

//         fetch(url)
//         .then(res => {
//             if(!res.ok) {
//                 throw new Error('❌ Error fetching weather data.');
//             }
//             return res.json();
//         })
//         .then(data => {
//             display.innerHTML = `
//             <h3>📍 ${data.location.name}, ${data.location.country}</h3>
//             <p>🌡️ Temperature: ${data.current.temp_c}°C</p>
//             <p>🌤️ Condition: ${data.current.condition.text}</p>
//             <img src="https:${data.current.condition.icon}" alt="weather icon">
//             <p>💨 Wind: ${data.current.wind_kph} kph</p>
//             `
//         })
//         .catch(err => {
//             display.textContent = err.message;
//         })
//     }

//     input.addEventListener('input', () => {
//         clearInterval(debounceTimeout);
//         debounceTimeout = setTimeout(autoSearch, 600);
//     })
// })();


// const input = document.querySelector('#autoSearch');
// const display = document.querySelector('div');
// const apiKey = '339107b7f0774358b6781822252705';
// let debounce;

// function autoSearch() {
//   const getValue = input.value.trim();

//   if (!getValue || getValue.length < 2) {
//     display.innerHTML = '';
//     return;
//   }

//     display.innerHTML = '<div class="spinner"></div>';

//   const encodedValue = encodeURIComponent(getValue);
//   const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodedValue}`;

//   fetch(url)
//     .then(res => {
//       if (!res.ok) throw new Error('❌ Invalid location or API error.');
//       return res.json();
//     })
//     .then(data => {
//         const localTime = new Date(data.location.localtime).toLocaleString(); 
//       display.innerHTML = `
//         <h3>📍 ${data.location.name}, ${data.location.country}</h3>
//         <p>🌡️ Temperature: ${data.current.temp_c}°C</p>
//         <p>🕒 Local Time: ${localTime}</p>
//         <p>🌤️ Condition: ${data.current.condition.text}</p>
//         <img src="https:${data.current.condition.icon}" alt="weather icon">
//         <p>💨 Wind: ${data.current.wind_kph} kph</p>
//       `;
//     })
//     .catch(err => {
//       display.textContent = err.message;
//     });
// }

// input.addEventListener('input', () => {
//   clearTimeout(debounce);
//   debounce = setTimeout(autoSearch, 600);
// });


// function searchMovies() {
//       const keyword = document.getElementById('search').value;
//       const apiKey = "5946a407"; // <-- Palitan ito ng real API key mo
//       const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(keyword)}`;

//       fetch(url)
//         .then(res => res.json())
        // .then(data => {
        //   const moviesContainer = document.getElementById('movies');
        //   moviesContainer.innerHTML = '';

        //   if (data.Response === "True") {
        //     data.Search.forEach(movie => {
        //       const card = document.createElement('div');
        //       card.className = 'movie-card';
        //       card.innerHTML = `
        //         <img src="${movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/100'}" alt="Poster">
        //         <div>
        //           <h3>${movie.Title}</h3>
        //           <p>Year: ${movie.Year}</p>
        //           <p>Type: ${movie.Type}</p>
        //         </div>
        //       `;
        //       moviesContainer.appendChild(card);
        //     });
        //   } else {
        //     moviesContainer.innerText = "❌ No movies found.";
        //   }
        // })
//         .catch(error => {
//           console.error("Error:", error);
//           document.getElementById('movies').innerText = "❌ Something went wrong.";
//         });
//     }



// (() => {
//     const inputMovies = document.querySelector('#search');
//     const displayMovies = document.querySelector('#movies');
//     const apiKey = '5946a407';
//     let debounce = null

//     function autoSearchMovies() {
//         let getMovieInput = inputMovies.value.trim();

//         if(!getMovieInput) {
//             displayMovies.innerHTML = '';
//             return;
//         }

//         displayMovies.innerHTML = '<div class="spinner"></div>';

//         const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(getMovieInput)}`;

//         fetch(url) 
//             .then(res => {
//                 if(!res.ok) {
//                     throw new Error('❌ Something went wrong.');
//                 }
//                 return res.json();
//             })
//             .then(data => {
//                 displayMovies.innerHTML = '';

//             if (data.Response === "True") {
//                 data.Search.forEach(movie => {
//                 const card = document.createElement('div');
//                 card.className = 'movie-card';
//                 card.innerHTML = `
//                     <img title='${movie.Title}' src="${movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/100'}" alt="Poster">
//                     <div>
//                     <h3>${movie.Title}</h3>
//                     <p>Year: ${movie.Year}</p>
//                     <p>Type: ${movie.Type}</p>
//                     <p>Ratings: ${movie.imdbRating}</p>
//                     </div>
//                 `;
//                 displayMovies.appendChild(card);
//                 });
//             } else {
//             moviesContainer.innerText = "❌ No movies found.";
//             }
//         })
//     }

//     inputMovies.addEventListener('input', () => {
//         clearTimeout(debounce);
//         debounce = setTimeout(autoSearchMovies, 600);
//     })
// })();


// (() => {
//   const inputMovies = document.querySelector('#search');
//   const displayMovies = document.querySelector('#movies');
//   const apiKey = 'ce3e6953ad16c76a9ccc369a6ab95c89';
//   let debounce = null;

//   function autoSearchMovies() {
//     const getMovieInput = inputMovies.value.trim();

//     if (!getMovieInput) {
//       displayMovies.innerHTML = '';
//       return;
//     }

//     displayMovies.innerHTML = '<div class="spinner"></div>';

//     const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(getMovieInput)}`;

//     fetch(url)
//       .then(res => {
//         if (!res.ok) {
//           throw new Error('❌ Something went wrong.');
//         }
//         return res.json();
//       })
//       .then(data => {
//         displayMovies.innerHTML = '';

//         if (data.Response === "True") {
//           data.Search.forEach(movie => {
//             // fetch full details using imdbID
//             fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}`)
//               .then(res => res.json())
//               .then(details => {
//                 const card = document.createElement('div');
//                 card.className = 'movie-card';
//                 card.innerHTML = `
//                   <img title="${details.Title}" src="${details.Poster !== "N/A" ? details.Poster : 'https://via.placeholder.com/100'}" alt="Poster">
//                   <div>
//                     <h3>${details.Title}</h3>
//                     <p><strong>Year:</strong> ${details.Year}</p>
//                     <p><strong>Type:</strong> ${details.Type}</p>
//                     <p><strong>Rating:</strong> ${details.imdbRating}</p>
//                     <p><strong>Country:</strong> ${details.Country}</p>
//                     <p><strong>Actors:</strong> ${details.Actors}</p>
//                   </div>
//                 `;
//                 displayMovies.appendChild(card);
//               });
//           });
//         } else {
//           displayMovies.innerText = "❌ No movies found.";
//         }
//       })
//       .catch(err => {
//         displayMovies.innerHTML = `❌ ${err.message}`;
//       });
//   }

//   inputMovies.addEventListener('input', () => {
//     clearTimeout(debounce);
//     debounce = setTimeout(autoSearchMovies, 600);
//   });
// })();



// (() => {
//   const apiKey = 'ce3e6953ad16c76a9ccc369a6ab95c89'; 
//   const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
//   const input = document.querySelector('#search');
//   const movieContainer = document.querySelector('#movies');
//   let debounce = null;

//   function showSpinner() {
//     movieContainer.innerHTML = `<div class="spinner"></div>`;
//   }

//   // Render movies to the UI
//   function renderMovies(movies) {
//     movieContainer.innerHTML = '';
//     movies.forEach(movie => {
//       const card = document.createElement('div');
//       card.className = 'movie';
//       card.innerHTML = `
//         <img src="${movie.poster_path ? baseImageUrl + movie.poster_path : 'https://via.placeholder.com/200x300'}" alt="${movie.title}">
//         <h3>${movie.title}</h3>
//         <p>📅 ${movie.release_date || 'N/A'}</p>
//         <p>⭐ ${movie.vote_average}</p>
//       `;
//       movieContainer.appendChild(card);
//     });
//   }

//   function fetchMovies(query = '') {
//     showSpinner();

//     const endpoint = query
//       ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`
//       : `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

//     fetch(endpoint)
//       .then(res => {
//             if(!res.ok) {
//                 movieContainer.innerHTML = `<p>❌ ${res.status}</p>`;
//             }
//             return res.json();
//       })
//       .then(data => {
//         if (data.results && data.results.length > 0) {
//           renderMovies(data.results);
//           console.log(data.results);
//         } else {
//           movieContainer.innerHTML = `<p>❌ No results found.</p>`;
//         }
//       })
//       .catch(() => {
//         movieContainer.innerHTML = `<p>❌ Error fetching movies.</p>`;
//       });
//   }

//   fetchMovies();

//   input.addEventListener('input', () => {
//     clearTimeout(debounce);
//     debounce = setTimeout(() => {
//       const query = input.value.trim();
//       fetchMovies(query);
//     }, 500);
//   });
// })();



(() => {
  const apiKey = 'ce3e6953ad16c76a9ccc369a6ab95c89'; 
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
  const input = document.querySelector('#search');
  const movieContainer = document.querySelector('#movies');
  let debounce = null;

  function showSpinner() {
    movieContainer.innerHTML = `<div class="spinner"></div>`;
  }

  // Modal elements
  const modal = document.createElement('div');
  modal.id = 'trailerModal';
  modal.style.display = 'none';
  modal.style.position = 'fixed';
  modal.style.top = 0;
  modal.style.left = 0;
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.background = 'rgba(0,0,0,0.8)';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';
  modal.style.zIndex = 1000;
  modal.innerHTML = `
    <div style="position: relative; width: 90%; max-width: 800px;">
      <span id="closeModal" style="position:absolute; top:10px; right:20px; font-size:30px; color:#fff; cursor:pointer;">&times;</span>
      <iframe id="trailerFrame" width="100%" height="450" frameborder="0" allowfullscreen></iframe>
    </div>
  `;
  document.body.appendChild(modal);
  document.getElementById('closeModal').onclick = () => {
    modal.style.display = 'none';
    document.getElementById('trailerFrame').src = '';
  };

  function renderMovies(movies) {
    movieContainer.innerHTML = '';
    movies.forEach(movie => {
      const card = document.createElement('div');
      card.className = 'movie';
      card.innerHTML = `
        <img src="${movie.poster_path ? baseImageUrl + movie.poster_path : 'https://via.placeholder.com/200x300'}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p>📅 ${movie.release_date || 'N/A'}</p>
        <p>⭐ ${movie.vote_average}</p>
      `;
      card.addEventListener('click', () => {
        fetchTrailer(movie.id);
      });
      movieContainer.appendChild(card);
    });
  }

  function fetchMovies(query = '') {
    showSpinner();

    const endpoint = query
      ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`
      : `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

    fetch(endpoint)
      .then(res => {
        if (!res.ok) {
          movieContainer.innerHTML = `<p>❌ ${res.status}</p>`;
        }
        return res.json();
      })
      .then(data => {
        if (data.results && data.results.length > 0) {
          renderMovies(data.results);
        } else {
          movieContainer.innerHTML = `<p>❌ No results found.</p>`;
        }
      })
      .catch(() => {
        movieContainer.innerHTML = `<p>❌ Error fetching movies.</p>`;
      });
  }

  function fetchTrailer(movieId) {
    const trailerURL = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`;
    fetch(trailerURL)
      .then(res => {
        if(!res.ok) {
            movieContainer.innerHTML = `<p>❌ ${res.status}</p>`;
        }
        return res.json();
      })
      .then(data => {
        const trailer = data.results.find(v => v.type === 'Trailer' && v.site === 'YouTube');
        if (trailer) {
          const youtubeURL = `https://www.youtube.com/embed/${trailer.key}`;
          document.getElementById('trailerFrame').src = youtubeURL;
          modal.style.display = 'flex';
        } else {
          alert("❌ No trailer available.");
        }
      });
  }

  fetchMovies();

  input.addEventListener('input', () => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      const query = input.value.trim();
      fetchMovies(query);
    }, 500);
  });
})();
