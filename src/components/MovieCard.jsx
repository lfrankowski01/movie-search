import { Link } from "react-router-dom";
import { useState } from "react";

function MovieCard({ movie }) {
    const [imageError, setImageError] = useState(false);
    return (
        <Link to={`/movie/${movie.imdbID}`} className="movie-link">
            <div className="movie-card">
                <h2>{movie.Title}</h2>
                <p>{movie.Year}</p>
                {movie.Poster === "N/A" || imageError ? (
                    <div className="no-poster">
                        No Poster Available
                    </div>
                ) : (
                    <img className="movie-poster" src={movie.Poster} alt={movie.Title} onError={() => setImageError(true)}></img>
                )} 
            </div>
        </Link>
    );
}
export default MovieCard;