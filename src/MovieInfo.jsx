import React from "react";

const MovieInfo = ({ movie }) => {
  return (
    <div className="movies">
      <div className="movie-info-header">
     
      <h1>Movie Info</h1>
      </div>
      <div className="movie-info-details">
     
        <h2>{movie.Title}</h2>
        <span>{movie.Type}</span>
        <h3>{movie.Year}</h3>
      </div>
      <div className="movie-poster">
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}
          alt={movie.Title}
        />
      </div>
      <div>
        {/* You can add additional information here */}
      </div>
      <div className="watch-link">
        <h1><a href={`https://tinyzonetv.se/search/${movie.Title.replace(/\s+/g, '-')}`}>Watch Here</a></h1>
      </div>
    </div>
  );
};

export default MovieInfo;
