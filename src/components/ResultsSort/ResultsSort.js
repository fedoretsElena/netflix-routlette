import React from 'react';
import { Form } from 'react-bootstrap';

import './ResultsSort.scss';

const ResultsSort = () => {
  const options = [{
    label: 'Release Date'
  }, {
    label: 'Name'
  }];

  return <div className="sort-control d-flex align-items-center">
    <span className="sort-control__name text-uppercase">Sort by</span>
    <span className="ml-3">
      <Form.Control className="select" as="select">
        {options.map(({label}) => <option key={label}>{label}</option>)}
      </Form.Control>
    </span>
  </div>
}

export default ResultsSort;