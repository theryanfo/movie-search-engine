
function MovieCard({ movie }) {

    function onFavoriteClick() {
        // Handle favorite button click
        alert("implement favorite functionality")
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.poster} alt={movie.title} />
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