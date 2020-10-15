import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import Logo from './Logo';

describe('Logo component', () => {
  it('should render Logo snapshot', () => {
    const { asFragment } = render(<MemoryRouter><Logo/></MemoryRouter>);
    expect(asFragment(<MemoryRouter><Logo/></MemoryRouter>)).toMatchSnapshot();
  })
})