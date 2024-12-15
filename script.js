//Base URL for the API
const baseURL = 'http://localhost:3000/films';

//Fetch and display first movie's details
function loadFirstMovie() {
    fetch(`${baseURL}/1`) //Fetch 1st
        .then(response => response.json()) //Convert response to JSON
        .then(movie => displayMovieDetails(movie)); //Display movie details
}

//Fetch and display movies list
function loadMoviesMenu() {
    fetch(baseURL) //Fetch all
        .then(response => response.json())
        .then(movies => {
            const filmsList = document.getElementById('films');

            //Loop through movies, add each to the list
            movies.forEach(movie => {
                //Create list item
                const movieItem = document.createElement('li');
                //Set title as text
                movieItem.textContent = movie.title;
                //Add styling classes to movieItem
                movieItem.classList.add('film', 'item');
                //Click event to display movie details
                movieItem.addEventListener('click', () => {
                    displayMovieDetails(movie);
                });

                //Add list item to films list
                filmsList.appendChild(movieItem);
            })
        })
}