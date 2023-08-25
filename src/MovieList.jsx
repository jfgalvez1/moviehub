import React from 'react';
import MovieCard from './MovieCard';
import MovieInfo from './MovieInfo';

function MovieList({ movies, selectMovie, showMovieInfo, setShowMovieInfo }) {
  return (
    <div className="container">
      {movies.map((movie) => (
        <MovieCard
          movie={movie}
          key={movie.imdbID}
          onClick={() => selectMovie(movie)}
        />
      ))}
      {showMovieInfo !== null && (
        <MovieInfo
          movie={showMovieInfo} // Pass the selected movie to MovieInfo
          onClose={() => setShowMovieInfo(null)}
        />
      )}
    </div>
  );
}

export default MovieList;