import filterParamsReducer from './filterParams';
import * as ActionCreators from './../actionCreators';

describe('FilterParams reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      sortBy: 'release_date',
      sortOrder: 'desc',
      searchBy: 'title',
      filter: [],
    };
  })

  it('should return initial state if action is not recognized', () => {
    expect(filterParamsReducer(initialState, {})).toEqual(initialState);
  })

  it('should return state with updated sortBy if action is SORT_BY_CHANGED', () => {
    const newSortBy = 'title';
    expect(filterParamsReducer(initialState, ActionCreators.sortByChanged(newSortBy))).toEqual({
      ...initialState,
      sortBy: newSortBy
    });
  })

  it('should return state with updated filters if action is FILTER_BY_CHANGED', () => {
    const filter = ['genre'];
    expect(filterParamsReducer(initialState, ActionCreators.filterByChanged(filter))).toEqual({
      ...initialState,
      filter
    });
  })
})