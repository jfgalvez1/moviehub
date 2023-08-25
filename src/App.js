import './App.css';
import { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
import MovieInfo from './MovieInfo';

const API_URL = 'http://www.omdbapi.com?apikey=9a5a0738';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showMovieInfo, setShowMovieInfo] = useState(false);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setShowMovieInfo(false);
    console.log(data);
    setMovies(data.Search);
  };

  const selectMovie = (movie) => {
    setSelectedMovie(movie);
    setShowMovieInfo(true);
    console.log('Selected movie:', movie);
  };

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className="app">
      <h1>MovieHub</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              searchMovies(searchTerm);
            }
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {showMovieInfo && selectedMovie ? (
        <MovieInfo
          movie={selectedMovie}
          onClose={() => setShowMovieInfo(false)}
        />
      ) : (
        movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} 
              key={movie.imdbID} 
              onClick={() => selectMovie(movie)}
              />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      )}
    </div>
  );
}

export default App;
