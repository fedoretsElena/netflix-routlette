import React from "react";

import "./Results.scss";
import ResultsSort from "../ResultsSort/ResultsSort";
import ResultsFilter from "../ResultsFilter/ResultsFilter";
import MoviesList from "../MoviesList/MoviesList";
import movies from "../../mocks/movies";

export default class Results extends React.Component {
  render() {
    const moviesList = [...movies];
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

          {moviesList.length
            ? <MoviesList movies={moviesList}/>
            : <div className="results__empty-msg text-center mt-5 pt-5">No Movie Found</div>
          }
        </div>
      </main>
    )
  }
}