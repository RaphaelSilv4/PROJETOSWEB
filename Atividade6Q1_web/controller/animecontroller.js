const animeService = require('../services/animeservice');

class AnimeController {
    async getAll(req, res) {
        res.json(animeService.getAllAnimes());
    }

    async getById(req, res) {
        const anime = animeService.getAnimeById(req.params.id);
        if (anime) {
            res.json(anime);
        } else {
            res.status(404).json({ message: 'Anime not found' });
        }
    }

    async create(req, res) {
        try {
            const anime = animeService.createAnime(req.body);
            res.status(201).json(anime);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async update(req, res) {
        try {
            const anime = animeService.updateAnime(req.params.id, req.body);
            if (anime) {
                res.json(anime);
            } else {
                res.status(404).json({ message: 'Anime not found' });
            }
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async delete(req, res) {
        const anime = animeService.deleteAnime(req.params.id);
        if (anime) {
            res.json(anime);
        } else {
            res.status(404).json({ message: 'Anime not found' });
        }
    }
}

module.exports = new AnimeController();