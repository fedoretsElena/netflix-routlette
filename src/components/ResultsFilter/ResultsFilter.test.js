import React from 'react';
import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';

import ResultsFilter from './ResultsFilter';

describe('ResultsFilter component', () => {
  it('should has categories list with 2 items', () => {
    const categories =[{id: 1}, {id: 2}];
    render(<ResultsFilter categories={categories}/>);

    const list = screen.getAllByRole('listitem');
    expect(list).toHaveLength(categories.length);
  });

  it('should mark as active', () => {
    const onHandleSelected = jest.fn();
    const categories =[{id: 1, name: 'Horror'}, {id: 2, name: 'Mistery'}, {id: 3, name: 'Romance' }];

    render(<ResultsFilter categories={categories} onHandleSelected={onHandleSelected}/>);

    const list = screen.getAllByRole('listitem');
    const [activeCategory] = categories;

    fireEvent.click(list[0]);
    expect(onHandleSelected).toHaveBeenCalledWith([activeCategory.name]);
    expect(activeCategory.active).toBeTruthy();
  });
})