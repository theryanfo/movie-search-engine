import '../css/Favorites.css'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from "../components/MovieCard"

function Favorites() {

    const { favoriteMovies } = useMovieContext();

    if (favoriteMovies) {
        return (
            <>
                <div className="favorites">
                    <h2>Favorite Movies</h2>
                </div>
                <div className="movies-grid">
                    {favoriteMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </>
        );
    }


    return (
        <div className="favorites-empty">
            <p>You haven't added any favorite movies yet.</p>
        </div>
    );
}

export default Favorites;