import { useState, useEffect } from "react";
import MovieList from "../components/MovieList";

function Home() {
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [year, setYear] = useState("");
  const [page, setPage] = useState(1);
  const [hasSearched, setHasSearched] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  async function getMovies() {
      const searchTerm = input.trim();
      const searchYear = year.trim();

      if(searchTerm === "" && searchYear === "") {
        setError("Please enter movie title");
        return;
      }
            try {
              setLoading(true);
              setError("");
              const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&y=${searchYear}&page=${page}&apikey=1713bdf2`);
              const data = await response.json();

                if (data.Response === "False") {
                  throw new Error(data.Error);
                }
              setMovies(data.Search || []);
              setHasSearched(true);
              setTotalResults(Number(data.totalResults));
              
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }  
    }  

    useEffect(() => {
      if(hasSearched) {
        getMovies();
      }
    }, [page]);

    return (
        <div className='app'>
        <h1>Movie Search Application</h1>
        <div className='search-container'>
          <input onKeyDown={(event) => { event.key === "Enter" ? getMovies() : null}} onChange={(event) => setInput(event.target.value)} type='text' placeholder='Search movie by name...'></input>
          <input onKeyDown={(event) => { event.key === "Enter" ? getMovies() : null}} onChange={(event) => setYear(event.target.value)} type='number' placeholder='Search movie by year...'></input>
          <button onClick={getMovies}>Search</button>
    
        {loading && <h1>Loading Movies...</h1>} 
        
        {error && <h1>{error}</h1>}
              
        {!loading && !error && (<MovieList movies={movies} />)}

        {hasSearched && (
          <div className='pagination'>
            <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
            <button disabled={page >= Math.ceil(totalResults / 12)} onClick={() => setPage(page + 1)}>Next</button>
          </div>
        )}
        </div>
      </div>
    );
}
export default Home;