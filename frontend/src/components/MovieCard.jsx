import '../css/MovieCard.css'
import { useMovieContext } from "../contexts/MovieContext"

function MovieCard({ movie }) {

    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext();
    const favorite = isFavorite(movie.id);

    function onFavoriteClick() {
        if (favorite) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie);
        }
    }

    const BASE_URL = 'https://image.tmdb.org/t/p/w500';
    const POSTER_URL = `${BASE_URL}${movie.poster_path}`;

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={POSTER_URL} alt={movie.title} />
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? 'active' : ''}`} onClick={onFavoriteClick}>
                        ❤︎
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-year">{movie.release_date.split('-')[0]}</p>
            </div>
        </div>
    )
}

export default MovieCard