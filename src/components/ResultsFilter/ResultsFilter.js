import React from "react";
import PropTypes from "prop-types";

import "./ResultsFilter.scss";
import MoviesList from "../MoviesList/MoviesList";

const ResultsFilter = ({categories}) => {
  return (
    <ul className="genres d-flex p-0 m-0">
      {categories.map(({id, name, active}) =>
        <li
          key={id}
          className={`genre text-uppercase py-3 mr-3 ${active ? 'genre--active' : ''}`}
        >
          {name}
        </li>
        )}
    </ul>
  )
}

MoviesList.propTypes = {
  categories: PropTypes.arrayOf({
    id: PropTypes.number,
    name: PropTypes.string,
    active: PropTypes.bool
  })
}

export default ResultsFilter;