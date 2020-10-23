import React from "react";
import PropTypes from "prop-types";

import "./ResultsFilter.scss";
import MoviesList from "../MoviesList/MoviesList";

const ResultsFilter = ({categories, onHandleSelected}) => {
  const onMarkAsActive = (activeCategory) => {
    categories.forEach((category) => {
      category.active = category.id === activeCategory.id
    });
    const value = activeCategory.name;
    onHandleSelected(value === 'All' ? [] : [value]);
  };

  return (
    <ul className="genres d-flex p-0 m-0">
      {categories?.map((category) =>
        <li
          key={category.id}
          className={`genre text-uppercase text-truncate py-3 mr-3 ${category.active ? 'genre--active' : ''}`}
          onClick={() => onMarkAsActive(category)}
        >
          {category.name}
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
  }),
  onHandleSelected: PropTypes.func,
}

export default ResultsFilter;