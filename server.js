require('dotenv').config();
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

const db = mysql.createConnection({
  url: process.env.DB_URL,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  connectionLimit: 10,
});

// Express server middleware
// Allows us to parse JSON data from the client
app.use(express.json());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  db.query('SELECT * FROM games', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Unable to retrieve games');
    } else {
      res.render('index.ejs', { games: results, indexJS: 'index.js' });
    }
  });
});

// Get all games
app.get('/games', (req, res) => {
  const query = 'SELECT * FROM games LIMIT 100';
  db.query(query, (err, results) => {
    if (err) {
      return console.error(err);
    }
    res.json(results);
  });
});

// Get game by id
app.get('/games/:id', (req, res) => {
  const query = 'SELECT * FROM games WHERE id = ?';
  const values = [req.params.id];
  db.query(query, values, (err, results) => {
    if (err) {
      return console.error(err);
    }
    res.json(results);
  });
});

// Add a game
app.post('/games', (req, res) => {
  const query =
    'INSERT INTO games (title, game_desc, release_date, developer, publisher, genre) VALUES (?,?,?,?,?,?)';
  const values = [
    req.body.title,
    req.body.game_desc,
    req.body.release_date,
    req.body.developer,
    req.body.publisher,
    req.body.genre,
  ];

  db.query(query, values, (err, data) => {
    if (err) {
      return console.error(err);
    }
    return res.json('game added successfully!');
  });
});

// Delete a game
app.delete('/games/:id', (req, res) => {
  const query = 'DELETE FROM games WHERE id = ?';
  const gameId = [req.params.id];

  db.query(query, gameId, (err, data) => {
    if (err) {
      return console.error(err);
    }
    return res.json('game deleted successfully!');
  });
});

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT + '...');
  console.log('http://localhost:' + PORT + '/');
});
