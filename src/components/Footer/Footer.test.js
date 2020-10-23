import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import Footer from './Footer';

describe('Footer component', () => {
  it('should render Footer snapshot', () => {
    const { asFragment } = render(<MemoryRouter><Footer/></MemoryRouter>);
    expect(asFragment(<MemoryRouter><Footer/></MemoryRouter>)).toMatchSnapshot();
  })
})