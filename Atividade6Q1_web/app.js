const express = require('express');
const animecontroller = require('./controller/animecontroller');

const app = express();
app.use(express.json());

app.get('/animes', (req, res) => animecontroller.getAll(req, res));
app.get('/animes/:id', (req, res) => animecontroller.getById(req, res));
app.post('/animes', (req, res) => animecontroller.create(req, res));
app.put('/animes/:id', (req, res) => animecontroller.update(req, res));
app.delete('/animes/:id', (req, res) => animecontroller.delete(req, res));

module.exports = app;