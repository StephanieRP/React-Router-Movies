import React from "react";
import { NavLink } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { title, director, metascore, stars, id } = movie;
  return (
    <div className="movie-details">
      <NavLink to={`/movies/${id}`}>{title}</NavLink>{" "}
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>
      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
