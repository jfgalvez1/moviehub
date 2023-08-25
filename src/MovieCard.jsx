import React from "react";

const MovieCard = ({ movie, onClick }) => {
  return (
    <div className="movie">
      <div className="movie-year">
        <p>{movie.Year}</p>
      </div>
      <div className="movie-poster">
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}
          alt={movie.Title}
          onClick={() => onClick(movie)}
        />
      </div>
      <div className="movie-details">
        <span>{movie.Type}</span>
        <h3 onClick={() => onClick(movie)}>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
