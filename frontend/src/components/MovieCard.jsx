import '../css/MovieCard.css'

function MovieCard({ movie }) {

    function onFavoriteClick() {
        // Handle favorite button click
        alert("implement favorite functionality")
    }

    const BASE_URL = 'https://image.tmdb.org/t/p/w500';
    const POSTER_URL = `${BASE_URL}${movie.poster_path}`;

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={POSTER_URL} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favorite-button" onClick={onFavoriteClick}>
                        ❤︎
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-year">{movie.year}</p>
            </div>
        </div>
    )
}

export default MovieCard