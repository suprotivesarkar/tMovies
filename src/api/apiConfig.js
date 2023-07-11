const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'a1e04262b2e86c47d93ba76b1d8d2503',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;