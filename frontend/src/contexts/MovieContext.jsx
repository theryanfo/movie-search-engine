import {createContext, useState, useContext, useEffect} from 'react'

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favoriteMovies, setFavoriteMovies] = useState(() => {
        const storedFavs = localStorage.getItem('favoriteMovies');
        return storedFavs ? JSON.parse(storedFavs) : [];
    });

    // useEffect(() => {
    //     const storedFavs = localStorage.getItem('favoriteMovies');

    //     if (storedFavs) {
    //         setFavoriteMovies(JSON.parse(storedFavs));
    //     }
    // }, [])

    useEffect(() => {
        localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
    }, [favoriteMovies]);

    const addToFavorites = (movie) => {
        setFavoriteMovies((prev) => [...prev, movie]);
    };

    const removeFromFavorites = (movieId) => {
        setFavoriteMovies((prev) => prev.filter((movie) => movie.id !== movieId));
    };

    const isFavorite = (movieId) => {
        return favoriteMovies.some((movie) => movie.id === movieId);
    };

    const value = {
        favoriteMovies,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    };

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}