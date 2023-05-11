
# Game Library

Game Library is a web application created using NodeJS, EJS, Express & MySQL. The application serves as a library for storing and managing games. It allows users to view all games, add a new game, and delete a game from the library. Users can also interact with the backend through the API created by Express.


## Demo

https://game-library-production.up.railway.app/


## Features

- View all games
- Add a new game
- Delete a game
- API to interact with the backend


## Lessons Learned

- **Using Node.js and Express to create a RESTful API**
- Retrieving and manipulating data from a MySQL database (review)
- Working with EJS templates to render dynamic content on the server-side

Throughout the project, I learned the importance of proper planning before diving into any project. I also learned how to use new technologies such as Express.js, and EJS. Additionally, I learned the importance of linking the correct paths when using Express.js to display information to the frontend.

## Environment Variables

To run this project, you will need to set up the following environment variables in your `.env` file:

- `DB_URL`: The URL of your MySQL database.
- `DB_HOST`: The host of your MySQL database.
- `DB_USER`: The username of your MySQL database.
- `DB_NAME`: The name of your MySQL database.
- `DB_PASSWORD`: The password for your MySQL database.
- `DB_PORT`: The port number for your MySQL database.
- `PORT`: The port number on which the server will run.

Make sure to update the values of these variables with your own database credentials and desired port number.

Here's an example of how your `.env` file should look:

```plaintext
DB_URL=mysql://username:password@hostname:port/database
DB_HOST=hostname
DB_USER=username
DB_NAME=database
DB_PASSWORD=password
DB_PORT=3306
PORT=3000
```

Please note that it's important to keep your `.env` file secure and not share it publicly, as it contains sensitive information.
## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd game-library
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

Open a web browser and navigate to http://localhost:3000


## Usage/Examples

### View all games
- Navigate to http://localhost:3000
- Alternatively, navigate to http://localhost:3000/games to see the JSON backend that retrieves data from the database.

### Add a new game
- Click on the "Add Game" button on the homepage.
- Fill out the form with the necessary information.
- Click the "Add Game" button to submit the form and add the new game to the library.

### Delete a game
- Click the "Delete" button next to the game you want to delete

### More information on a game
- Click on the "More Info" button next to the game you wish to see more information on.
- A pop-up modal will display additional information about the game, including its release date, developer, publisher, and genre.
## Tech Stack

**Client:** HTML, CSS, JavaScript, EJS

**Server:** Node, Express, MySQL


## Contributing

Contributions are always welcome!

If you have any ideas or suggestions to improve this project, please feel free to submit a pull request.


## Support

For support, email maria@mariamills.org

