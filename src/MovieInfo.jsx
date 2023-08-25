import React from "react";

const MovieInfo = ({ movie }) => {
  return (
    <div className="movies">
      <div>
        <h1>Movie Info</h1>
        <h2>{movie.Title}</h2>
        <p>{movie.Year}</p>
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Year}</h3>
      </div>
      <div>
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}
          alt={movie.Title}
        />
      </div>
    </div>
  );
};

export default MovieInfo;
