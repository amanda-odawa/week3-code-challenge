//Base URL for the API
const baseURL = 'http://localhost:3000/films';

//Fetch and display first movie's details
function loadFirstMovie() {
    fetch(`${baseURL}/1`) //Fetch
        .then(response => response.json()) //Convert Response to JSON
        .then(movie => displayMovieDetails(movie)); //Display movie details
}