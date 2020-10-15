import React from 'react';
import { render } from '@testing-library/react';

import AddMovieModal from './AddMovieModal';

describe('AddMovieModal component', () => {
  it('should render AddMovieModal snapshot', () => {
    const { asFragment } = render(<AddMovieModal/>);
    expect(asFragment(<AddMovieModal/>)).toMatchSnapshot();
  })
})