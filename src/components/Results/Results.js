import React, { useEffect, useState } from "react";

import "./Results.scss";
import ResultsSort from "../ResultsSort/ResultsSort";
import ResultsFilter from "../ResultsFilter/ResultsFilter";
import MoviesList from "../MoviesList/MoviesList";
import moviesVocabulary from "../../mocks/movies";
import { useComponentWillUnmount } from "./../../hooks";

export default function Results() {

  useEffect(() => {
    console.log('fetch data should be here');
  }, []);

  useComponentWillUnmount(() => {
    console.log('componentWillUnmount');
  });

  const handleMovieEditing = (movie) => {
    console.log('Edit', movie);
  }

  const handleMovieDeleting = (deletedId) => {
    console.log('Delete', deletedId);
  }

  const [movies, setMovies] = useState([...moviesVocabulary]);
  const categories = Array.from(new Set(
    movies.reduce((acc, {genres}) => [...acc, ...genres], ['All'])
  )).map((name, inx) => ({id: [name, inx].join('-'), name, active: inx === 0}));

  return (
    <main className="results mb-4">
      <div className="container">
        <div className="results__controls d-flex justify-content-between align-items-center mb-3">
          <ResultsFilter categories={categories}/>
          <ResultsSort/>
        </div>

        {movies.length
          ? <MoviesList
            movies={movies}
            onEditMovie={handleMovieEditing}
            onDeleteMovie={handleMovieDeleting}
          />
          : <div className="results__empty-msg text-center mt-5 pt-5">No Movie Found</div>
        }
      </div>
    </main>
  )
}