import MovieCard from "../components/MovieCard";
import {useEffect, useState} from 'react';
import { searchMovies, getPopularMovies } from "../services/api";
import '../css/Home.css'

function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch popular movies
        const loadPopularMovies = async () => {
            setLoading(true);
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (error) {
                console.error("Error fetching popular movies:", error);
                setError(error);
            } finally {
                setLoading(false);
            }
            }

        loadPopularMovies();
    }, []);

    // [
    //     { id: 1, title: "Backrooms", year: 2026, poster: "https://upload.wikimedia.org/wikipedia/en/3/3d/Backrooms_%28film%29_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" },
    //     { id: 2, title: "La La Land", year: 2016, poster: "https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" },
    //     { id: 3, title: "Your Name", year: 2016, poster: "https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" }
    // ];

    const handleSearch = async (e) => {
        e.preventDefault();
        // Handle search logic here
        if (!searchTerm.trim()) return;
        if (loading) return;
        
        setLoading(true);

        try {
            const searchResults = await searchMovies(searchTerm);
            setMovies(searchResults);
            setError(null);
        } catch (error) {
            console.error("Error searching movies:", error);
            setError(error);
        } finally {
            setLoading(false);
        }

    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for movies..." 
                    className="search-input" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>

            {error && (
                <div className="error-message">
                    Error: {error}
                </div>
            )}

            {loading ? (
                <div className="loading">
                    Loading movies...
                </div>
            ): (     
            <div className="movies-grid">
                {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                ))}
            </div> )}
        </div>
    )
}

export default Home