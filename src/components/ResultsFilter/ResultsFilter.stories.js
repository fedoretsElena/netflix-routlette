import React from 'react';

import ResultsFilter from './ResultsFilter';
import 'bootstrap/dist/css/bootstrap.css';
import categoriesVocabulary from './../../mocks/categories';

export default {
  component: ResultsFilter,
  title: 'ResultsFilter',
  args: {
    categories: [...categoriesVocabulary].map((name) => ({id: Math.random() * +new Date(), name}))
  }
};

const Template = (args) => <ResultsFilter {...args} />;

export const Default = Template.bind({});