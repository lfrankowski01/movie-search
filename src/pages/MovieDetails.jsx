import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function MovieDetails() {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { id } = useParams();

    useEffect(() => {
            //Fetch movie details whenever movie ID in URL changes
        async function getMovie() {
            try {
               setLoading(true);
               setError("");
               const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`);
               const data = await response.json();

               if (data.Response === "False") {
                     throw new Error(data.Error);
               }

               setMovie(data); 
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            } 
        }
        getMovie();
    }, [id]);

    return (
        <>
        <Link to="/" className="back-button">Back to Search</Link>

        {loading && <h1>Loading Movie...</h1>} 
        
        {error && <h1>{error}</h1>}

        {movie && (
            <div className="movie-details">
            <img src={movie.Poster} alt={movie.Title} />
            <div className="movie-info">
                <h1>{movie.Title}</h1>
                <p>{movie.Year}</p>
                <p>{movie.Genre}</p>
                <p>{movie.Runtime}</p>
                <p>{movie.Rated}</p>
                <p>{movie.Plot}</p>
                <p>Director: {movie.Director}</p>
                <p>Actors: {movie.Actors}</p>
                <p>IMDB Rating: {movie.imdbRating}</p>
            </div>
        </div>
        )}
        </>
    );
}

export default MovieDetails;