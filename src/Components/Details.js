import React from "react";

const Details = ({ movie }) => {
  console.log(movie);
  return (
    <div>
      <h1>Titulo: {movie.Title}</h1>
      <h3>
        Tipo: {movie.Type} / Año: {movie.Year} / Valoración: {movie.Value}
      </h3>
      <img
        src={movie?.Carrusel}
        alt=""
        style={{
          width: 480,
        }}
      />
      <p>{movie?.Description}</p>
      <iframe
        id="inlineFrameExample"
        title="Inline Frame Example"
        width="480"
        height="200"
        src={movie.Trailer}
      ></iframe>
    </div>
  );
};

export default Details;
