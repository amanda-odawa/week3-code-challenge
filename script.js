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

                //Check if the movie is sold out and add the "sold-out" class if necessary
                if (movie.capacity - movie.tickets_sold === 0) {
                    movieItem.classList.add('sold-out');
                }

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
    const buyButton = document.getElementById('buy-ticket');

    //Calculate available tickets
    const availableTickets = movie.capacity - movie.tickets_sold;

    //Update details with movie's info
    title.textContent = movie.title;
    poster.src = movie.poster;
    description.textContent = movie.description;
    runtime.textContent = `${movie.runtime} minutes`;
    showtime.textContent = movie.showtime;
    tickets.textContent = availableTickets;

    //Update the button based on ticket availability
    if (availableTickets > 0) {
        buyButton.disabled = false;
        buyButton.textContent = 'Buy Ticket';
    } else {
        buyButton.disabled = false;
        buyButton.textContent = 'Sold Out';
    }

    //Event to buy ticket
    
    buyButton.onclick = () => {
        if (availableTickets > 0) {
            buyTicket(movie);
        } 
        else 
        {
            alert(`Sorry, "${movie.title}" is sold out!`);
        }
        
    }
}

//Handle ticket purchase
function buyTicket(movie) {
    const availableTickets = movie.capacity - movie.tickets_sold;

    if (availableTickets > 0) {
        movie.tickets_sold += 1; 

        //Update ticket count in UI
        document.getElementById('tickets').textContent = movie.capacity - movie.tickets_sold;
    
        //Update the button if tickets are sold out
        if (movie.capacity - movie.tickets_sold === 0) {
            document.getElementById('buy-ticket').disabled = true;
            document.getElementById('buy-ticket').textContent = 'Sold Out';

            //Update the movie item in the films list
            const filmsListItems = document.querySelectorAll('#films li');
            filmsListItems.forEach(item => {
                if (item.textContent === movie.title) {
                    item.classList.add('sold-out');
                }
            });
        }    
    // Simulate persistence as irl solution (not required)
    fetch(`${baseURL}/${movie.id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({tickets_sold: movie.tickets_sold})
    });
    }

    
}

//Initialize app
loadFirstMovie();
loadMoviesMenu();