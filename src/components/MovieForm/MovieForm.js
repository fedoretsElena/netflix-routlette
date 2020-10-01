import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { PropTypes } from "prop-types";

import categoriesVocabulary from './../../mocks/categories';
import './MovieForm.scss';

const schema = yup.object({
  title: yup.string().required('is required'),
  poster_path: yup.string().required('is required').url('not valid'),
  overview: yup.string().required('is required'),
  budget: yup.number().min(0, 'too Short!'),
  revenue: yup.number().min(0, 'too Short!'),
  runtime: yup.number().required('is required').min(0, 'too Short!'),
  genres: yup.array().required('is required').min(1, 'is required'),
  vote_average: yup.number().max(100, 'too long!'),
  release_date: yup.date(),
});

export default function MovieForm({movie, handleSubmit, successCallback}) {
  const movieFormInitial = {
    id: '',
    title: '',
    tagline: '',
    vote_average: '',
    vote_count: '',
    release_date: '',
    poster_path: '',
    overview: '',
    budget: '',
    revenue: '',
    runtime: '',
    genres: [],
  };
  const categories = [...categoriesVocabulary].filter(v => v !== 'All');

  return (
    <Formik
      initialValues={movieFormInitial}
      validationSchema={schema}
      validateOnMount={true}
      onSubmit={(values, {setErrors}) => {
        const formValues = {...values}
        Object.entries(formValues).forEach(([fieldKey, fieldValue]) => {
          if (typeof fieldValue !== "number" && !fieldValue?.length) {
            delete formValues[fieldKey];
          }
        })

        handleSubmit(formValues).then(() => successCallback()).catch(({message})=> {
          const errors = message.split(',').reduce((acc, str) => {
            const fieldName = str.substring(
              str.indexOf('"') + 1,
              str.lastIndexOf('"'));
            const description = str.substring(str.lastIndexOf('"') + 1).trim();
            return {...acc, [fieldName]: description};
          }, {});
          const summarizeErrors = Object.keys(movieFormInitial)
            .reduce((acc, key) => ({...acc, [key]: errors[key]}), {});

         setErrors(summarizeErrors);
        });
      }}
    >{({isValid, setFieldValue}) => {
      useEffect(() => {
        if (movie) {
          Object.keys(movieFormInitial).forEach(field =>
            setFieldValue(field, movie[field] !== null ? movie[field] : '', false));
        }
      }, [movie]);

      return (
      <Form className="form">
        <div className="form-group">
          <div className="form-label">Title</div>
          <Field name="title" className="form-control form-control-lg input" placeholder="Movie name here" autoComplete="off" />
          <ErrorMessage className="error" name="title" component="div" />
        </div>

        <div className="form-group">
          <div className="form-label">Tagline</div>
          <Field name="tagline" className="form-control form-control-lg input" placeholder="Tagline here" autoComplete="off" />
          <ErrorMessage className="error" name="tagline" component="div" />
        </div>

        <div className="form-group">
          <div className="form-label">Vote average</div>
          <Field name="vote_average" type="number" className="form-control form-control-lg input" placeholder="Vote average here" autoComplete="off" />
          <ErrorMessage className="error" name="vote_average" component="div" />
        </div>

        <div className="form-group">
          <div className="form-label">Vote count</div>
          <Field name="vote_count" type="number" className="form-control form-control-lg input" placeholder="Vote count here" autoComplete="off" />
          <ErrorMessage className="error" name="vote_count" component="div" />
        </div>

        <div className="form-group">
          <div className="form-label">release date</div>
          <Field type="date" name="release_date" className="form-control form-control-lg input" placeholder="Select Date" autoComplete="off" />
          <ErrorMessage className="error" name="release_date" component="div" />
        </div>

        <div className="form-group">
          <div className="form-label">Poster path</div>
          <Field name="poster_path" className="form-control form-control-lg input text-truncate" placeholder="Poster path here" autoComplete="off" />
          <ErrorMessage className="error" name="poster_path" component="div" />
        </div>

        <div className="form-group">
          <div className="form-label">Overview</div>
          <Field name="overview" className="form-control form-control-lg input" placeholder="Overview here" autoComplete="off" />
          <ErrorMessage className="error" name="overview" component="div" />
        </div>

        <div className="form-group">
          <div className="form-label">Budget</div>
          <Field name="budget" type="number" className="form-control form-control-lg input" placeholder="Budget here" autoComplete="off" />
          <ErrorMessage className="error" name="budget" component="div" />
        </div>

        <div className="form-group">
          <div className="form-label">Revenue</div>
          <Field name="revenue" type="number" className="form-control form-control-lg input" placeholder="Revenue here" autoComplete="off" />
          <ErrorMessage className="error" name="revenue" component="div" />
        </div>

        <div className="form-group">
          <div className="form-label">Genre</div>
          <Field as="select" multiple={true} name="genres" className="form-control form-control-lg input">
            {categories.map((name, inx) => <option key={inx} value={name}>{name}</option>)}
          </Field>
          <ErrorMessage className="error" name="genres" component="div" />
        </div>

        <div className="form-group">
          <div className="form-label">Runtime</div>
          <Field name="runtime" type="number" className="form-control form-control-lg input" placeholder="Runtime here" autoComplete="off" />
          <ErrorMessage className="error" name="runtime" component="div" />
        </div>

        <div className="d-flex justify-content-end pt-2">
          <Button type="reset" variant="outline-primary" size="lg" >Reset</Button>
          <Button className="ml-3" variant="primary" size="lg" type="submit" disabled={!isValid}>Submit</Button>
        </div>
      </Form>
      )}}
    </Formik>
  )
}
MovieForm.propTypes = {
  movie: PropTypes.object,
  handleSubmit: PropTypes.func,
  successCallback: PropTypes.func
}