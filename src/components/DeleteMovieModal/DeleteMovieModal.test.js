import React from 'react';
import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';

import DeleteMovieModal from './DeleteMovieModal';

describe('DeleteMovieModal component', () => {
  it('should call handleClose with positive result', () => {
    const handleClose = jest.fn();
    render(<DeleteMovieModal handleClose={handleClose} show={true}/>);

    const agreeBtn = screen.getByText('Confirm');

    fireEvent.click(agreeBtn);

    expect(handleClose).toHaveBeenCalledWith(true);
  })
})