import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import ResultsSort from './ResultsSort';


export default {
  component: ResultsSort,
  title: 'ResultsSort',
};

const Template = args => <ResultsSort {...args} />;

export const Default = Template.bind({});