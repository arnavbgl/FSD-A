import "./moviesList.css";

import movies from "./movies";



const MovieList = () => {

  return (

    <div className="movie-list">

      {movies.map((movie) => (

        <div key={movie.id} className="movie-card">

            <img src = {movie.image} className="movie-img"/>

            <h1>Title: {movie.title}</h1>

            <h2>language: {movie.language}</h2>

            <h2>Cost: {movie.cost}</h2>

        </div>

      ))}

    </div>

  );

};



export default MovieList;