 
const API_KEY = import.meta.env.VITE_API_KEY
const API_READ_ACCESS_TOKEN = import.meta.env.VITE_API_READ_ACCESS_TOKEN

const BASE_URL = 'https://api.themoviedb.org/3';


export const getPopularMovies = async () => {
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`

    }
    };
   const response = await fetch(`${BASE_URL}/movie/popular`, options);
   const data = await response.json();
   return data.results;
}

export const searchMovies = async (query) => {
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`

    }
    };

   const searchParams = new URLSearchParams({ query: query });
   const response = await fetch(`${BASE_URL}/search/movie?${searchParams}`, options);
   const data = await response.json();
   return data.results;
}