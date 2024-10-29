const animeRepository = require('../repositories/animerepository');
const validation = require('../utils/validation');

class AnimeService {
    getAllAnimes() {
        return animeRepository.getAll();
    }

    getAnimeById(id) {
        return animeRepository.getById(id);
    }

    createAnime(animeData) {
        if (!validation.isValidAnime(animeData)) {
            throw new Error('Invalid anime data');
        }
        return animeRepository.create(animeData);
    }

    updateAnime(id, animeData) {
        if (!validation.isValidAnime(animeData)) {
            throw new Error('Invalid anime data');
        }
        return animeRepository.update(id, animeData);
    }

    deleteAnime(id) {
        return animeRepository.delete(id);
    }
}

module.exports = new AnimeService();