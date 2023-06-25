const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3',
    apiKey: '19f819fe84c8a3dfc509667bab3208c6',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig