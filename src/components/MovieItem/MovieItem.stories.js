import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import MovieItem from './MovieItem';
import movies from'./../../mocks/movies';

const [movie] = movies;

export default {
  component: MovieItem,
  title: 'MovieItem',
  args: {
    ...movie
  }
};

const Template = args => <BrowserRouter>
  <div style={{width: 314 + 'px'}}><MovieItem movie={{...args}}/></div>
</BrowserRouter>

export const Default = Template.bind({});