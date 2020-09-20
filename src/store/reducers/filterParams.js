import * as ACTIONS from "./../actionTypes";

const initialState = {
  sortBy: 'release_date',
  sortOrder: 'desc',
  search: '',
  searchBy: 'title',
  filter: [],
};

export default function filterParams(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SORT_BY_CHANGED: {
      return {
        ...state,
        sortBy: action.payload
      }
    }
    case ACTIONS.FILTER_BY_CHANGED: {
      return {
        ...state,
        filter: action.payload
      }
    }
    default: return state;
  }
}
