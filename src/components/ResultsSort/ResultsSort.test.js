import React from 'react';
import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';

import ResultsSort from './ResultsSort';

describe('ResultsSort component', () => {
  it('should trigger handleChange after select new sort option', () => {
    const handleChange = jest.fn();
    render(<ResultsSort onHandleChange={handleChange}/>);

    const select = screen.getByRole('combobox');

    fireEvent.change(select, {
      target: {
        value: 'vote_average'
      }
    });

    expect(handleChange).toHaveBeenCalledWith('vote_average');
  })
})