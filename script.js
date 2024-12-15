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
            });
        });
}

//Display a movie's details
function displayMovieDetails(movie) {
    //Get DOM elements for movie details
    const title = document.getElementById('title');
    const poster = document.getElementById('poster');
    const description = document.getElementById('description');
    const runtime = document.getElementById('runtime');
    const showtime = document.getElementById('showtime');
    const tickets = document.getElementById('tickets');
    const buyButton = document.getElementById(buy-tickets);

    //Update details with movie's info
    title.textContent = movie.title;
    poster.src = movie.poster;
    description.textContent = movie.description;
    runtime.textContent = movie.runtime;
    showtime.textContent = movie.showtime;
    tickets.textContent = movie.capacity - movie.tickets_sold;

    //Event to buy ticket
    buyButton.onclick = () => {
        buyTicket(movie);
    };
}
