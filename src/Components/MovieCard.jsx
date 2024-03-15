import React from 'react';
import '../App.css';



const MovieCard = ({ movie }) => {
    return (
      <div className="movie-card" style={{}}>
        <img src={'https://amazing.tn/wp-content/uploads/2021/03/netflix-cover.jpg'} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <p>Rating: {movie.rating}</p>
      </div>
    );
  };

  export default MovieCard;