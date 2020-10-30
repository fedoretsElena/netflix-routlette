import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Logo from './Logo';

export default {
  component: Logo,
  title: 'Logo',
};

const Template = args => <BrowserRouter>
  <Logo {...args} />
</BrowserRouter>;

export const Default = Template.bind({});