# Week 3 Code Challenge: Movie Ticket Booking Application
This project is a simple web application that allows users to view movies and purchase tickets. It fetches movie details from a REST API and allows users to select a movie, view its details, and buy tickets. If a movie is sold out, the interface reflects that by changing the button text to "Sold Out" and applying a `sold-out` class to the corresponding movie item.

## Table of Contents:
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

### Technologies Used
- HTML
- CSS
- JavaScript

### Features

- **Fetch and Display Movies**: Retrieves a list of movies from a server and displays them in a menu.
- **Display Movie Details**: Shows detailed information for the selected movie.
- **Ticket Purchase**: Allows users to buy tickets for a movie. Once sold out, the "Buy Ticket" button changes to "Sold Out" and the movie item gets a `sold-out` class.
- **Interactive UI**: Uses DOM manipulation to dynamically update the movie details and availability.

### Demo
[View Live Demo](https://amanda-odawa.github.io/week3-code-challenge/index.html/)

### Installation
1. Fork and Clone the repository:
    ```bash
    git clone https://github.com/amanda-odawa/week3-code-challenge.git
    ```
2. Navigate to the project directory:
    ```bash
    cd week3-code-challenge
    ```
3. Ensure the API server is running at http://localhost:3000/films.
4. Open index.html in your web browser.

### Usage
Once the app is running, navigate to it in your browser. 
You can purchase a ticket by clicking the 'Buy Ticket' button.
Once tickets run out, the button changes to 'Sold Out'
Purchasing a ticket updates the Database by implementing persistence.

### Contributing
Feel free to contribute! Please follow the steps below:
1. Fork the repository
2. Create a new branch
   ```bash
   git checkout -b Your-Feature-Name
    ```
3. Commit your changes
    ```bash
    git commit -m 'Add a new feature'
    ```
4. Push to the branch
    ```bash
    git push origin Your-Feature-Name
    ```
5. Open a Pull Request

### License
*Distributed under the MIT License.*