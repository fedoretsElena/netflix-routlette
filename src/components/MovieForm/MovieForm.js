import React from "react";
import { Form } from "react-bootstrap";

import categoriesVocabulary from "./../../mocks/categories";

export default function MovieForm() {
  const categories = [...categoriesVocabulary];

  return (
      <Form autoComplete="false">
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control className="input" placeholder="Movie name here" size="lg" autoComplete="off"/>
        </Form.Group>

        <Form.Group controlId="release_date">
          <Form.Label>release date</Form.Label>
          <Form.Control className="input" type="date" placeholder="Select Date" size="lg"/>
        </Form.Group>

        <Form.Group controlId="url">
          <Form.Label>Movie url</Form.Label>
          <Form.Control className="input" placeholder="Movie URL here" size="lg" autoComplete="off"/>
        </Form.Group>

        <Form.Group controlId="genre">
          <Form.Label>Genre</Form.Label>
          <Form.Control as="select" size="lg">
            <option>Select Genre</option>
            {categories.map((name, inx) => <option key={inx}>{name}</option>)}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="overview">
          <Form.Label>Overview</Form.Label>
          <Form.Control className="input" placeholder="Overview here" size="lg" autoComplete="off"/>
        </Form.Group>

        <Form.Group controlId="runtime">
          <Form.Label>Runtime</Form.Label>
          <Form.Control className="input" placeholder="Runtime here" size="lg" autoComplete="off"/>
        </Form.Group>
      </Form>
  )
}