import React from 'react';
import { Form } from 'react-bootstrap';

import './ResultsSort.scss';

const ResultsSort = ({onHandleChange}) => {
  const options = [{
    label: 'Release Date',
    value: 'release_date'
  }, {
    label: 'Rating',
    value: 'vote_average'
  }];

  const handleChange = ({target}) => {
    onHandleChange(target.value);
  }

  return <div className="sort-control d-flex align-items-center">
    <span className="sort-control__name text-uppercase">Sort by</span>
    <span className="ml-3">
      <Form.Control className="select" as="select" onChange={handleChange.bind(this)}>
        {options.map(({label, value}) => <option value={value} key={label}>{label}</option>)}
      </Form.Control>
    </span>
  </div>
}

export default ResultsSort;