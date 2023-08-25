import React from "react";

const MovieCard = ({ movie, onClick }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}
          alt={movie.Title}
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3 onClick={() => onClick(movie)}>{movie.Title}</h3>
        <h3>{movie.Year}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
