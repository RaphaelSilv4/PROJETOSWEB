const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();

app.use(express.json());

let animes = [
    {
      id: uuidv4(),
      name: 'Naruto',
      genre: 'Ação',
      studio: 'Pierrot',
    },
    {
        id: uuidv4(),
        name: 'Kuroko no basket',
        genre: 'Esportes',
        studio: 'Production I.G',
      },
      {
        id: uuidv4(),
        name: 'Yu-Gi-Oh!',
        genre: 'Fantasia',
        studio: 'Studio Gallop',
      },
      {
        id: uuidv4(),
        name: 'Rewrite',
        genre: 'Supernatural',
        studio: '8bit',
      },
  ];
  
  // 1. Listar todos os animes
  app.get('/animes', (req, res) => {
    res.json(animes);
  });
  
  // 2. Listar um anime por ID
  app.get('/animes/:id', (req, res) => {
    const { id } = req.params;
    const anime = animes.find(anime => anime.id === id);
    
    if (!anime) {
      return res.status(404).json({ error: 'Anime não encontrado!' });
    }
    
    res.json(anime);
  });
  
  // 3. Criar um novo anime
  app.post('/animes', (req, res) => {
    const { name, genre, studio } = req.body;
    
    // Validações
    if (!name || !genre || !studio) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios!' });
    }
  
    const newAnime = {
      id: uuidv4(),
      name,
      genre,
      studio,
    };
    
    animes.push(newAnime);
    res.status(201).json(newAnime);
  });
  
  // 4. Atualizar um anime por ID
  app.put('/animes/:id', (req, res) => {
    const { id } = req.params;
    const { name, genre, studio } = req.body;
    
    const animeIndex = animes.findIndex(anime => anime.id === id);
  
    if (animeIndex === -1) {
      return res.status(404).json({ error: 'Anime não encontrado!' });
    }
  
    // Validações
    if (!name || !genre || !studio) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios!' });
    }
  
    animes[animeIndex] = { id, name, genre, studio };
    res.json(animes[animeIndex]);
  });
  
  // 5. Deletar um anime por ID
  app.delete('/animes/:id', (req, res) => {
    const { id } = req.params;
    const animeIndex = animes.findIndex(anime => anime.id === id);
    
    if (animeIndex === -1) {
      return res.status(404).json({ error: 'Anime não encontrado!' });
    }
  
    animes.splice(animeIndex, 1);
    res.status(204).send();
  });
  app.listen(3000, () => console.log('Servidor rodando na porta 3000'));