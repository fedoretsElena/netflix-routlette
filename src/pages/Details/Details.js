import React, { useMemo } from "react";

import "./Details.scss";
import movies from "../../mocks/movies";
import Header from "./Header/Header";
import { useComponentDidMount } from "./../../hooks";

export default function Details() {
  useComponentDidMount(() => {
    console.log('fetch movie details should be here');
  });

  const movie = movies[0];
  const {poster_path, title, genres, release_date, runtime, overview, vote_average} = movie;

  const releaseYear = useMemo(() => new Date(release_date).getFullYear(), [release_date]);
  const genresList = useMemo(() => genres.join(', '), [genres]);

  return <div className="img-blur-container">
    <Header/>

    <section className="details d-flex align-items-center container py-4">
      <img className="details__poster" src={poster_path} alt="poster"/>
      <div className="ml-5">
        <div className="d-flex align-items-center">
          <h1 className="font-weight-light mb-0">{title}</h1>
          <div className="details__vote-average f-size-26 ml-3 d-flex align-items-center justify-content-center">{vote_average}</div>
        </div>
        <p>{genresList}</p>
        <div className="d-flex align-items-center text-primary f-size-26 my-3">
          <span>{releaseYear}</span>
          <span className="ml-4">{runtime} min</span>
        </div>
        <p>{overview}</p>
      </div>
    </section>
  </div>
}
