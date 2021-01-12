const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '129416bf942708f7409389a07be62439';

export function fetchTrendingsMovies() {
    return fetch(`${BASE_URL}/trending/all/day?api_key=${KEY}`).then(res => res.json())
}

export function fetchSearchMovies(search, pageFetch) {
    return fetch(`${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${search}&page=${pageFetch}&include_adult=false`)
}