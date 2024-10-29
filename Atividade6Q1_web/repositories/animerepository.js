const Anime = require('../entities/anime');
const { v4: uuidv4 } = require('uuid');

class AnimeRepository {
    constructor() {
        this.animes = []; // Banco de dados em memória
    }

    getAll() {
        return this.animes;
    }

    getById(id) {
        return this.animes.find(anime => anime.id === id);
    }

    create(animeData) {
        const anime = new Anime(uuidv4(), animeData.name, animeData.genre, animeData.studio);
        this.animes.push(anime);
        return anime;
    }

    update(id, animeData) {
        const index = this.animes.findIndex(anime => anime.id === id);
        if (index !== -1) {
            this.animes[index] = { ...this.animes[index], ...animeData };
            return this.animes[index];
        }
        return null;
    }

    delete(id) {
        const index = this.animes.findIndex(anime => anime.id === id);
        if (index !== -1) {
            return this.animes.splice(index, 1)[0];
        }
        return null;
    }
}

module.exports = new AnimeRepository();