function isValidAnime(data) {
    return data.name && data.genre && data.studio;
}

module.exports = { isValidAnime };