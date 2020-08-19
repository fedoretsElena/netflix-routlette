import React from 'react';
import { Form, Button } from 'react-bootstrap';

import './Search.scss';

export default class Search extends React.Component {
  render() {
    return (
      <div className="search my-5">
        <h2 className="search__title text-uppercase mb-4">Find your movie</h2>

        <Form className="d-flex">
          <Form.Control size="lg" className="input" placeholder="What do you want to watch?" />

          <Button className="text-uppercase ml-2 px-5" variant="primary" size="lg" type="submit">
            Search
          </Button>
        </Form>
      </div>
    )
  }
}