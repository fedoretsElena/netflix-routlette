import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';

import './Search.scss';

export default function Search({handleSearch}) {
  const [search, setSearch] = useState(useParams().value || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(search.trim());
  }

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  return (
    <div className="search my-5">
      <h2 className="search__title text-uppercase mb-4">Find your movie</h2>

      <Form className="d-flex">
        <Form.Control
          size="lg" className="input"
          placeholder="What do you want to watch?"
          value={search}
          onChange={handleChange}
        />

        <Button
          className="text-uppercase ml-2" variant="primary" size="lg" type="submit"
          onClick={handleSubmit}
        >
          Search
        </Button>
      </Form>
    </div>
  )
}

Search.propTypes = {
  handleSearch: PropTypes.func
};