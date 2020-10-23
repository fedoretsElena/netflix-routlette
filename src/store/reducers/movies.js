import * as ACTIONS from "./../actionTypes";

export const initialState = {
  loading: false,
  error: null,
  data: null,
  totalAmount: 0
};

function  moviesReducer(state = initialState, action) {

  switch (action.type) {
    case ACTIONS.MOVIES_IS_LOADING: {
      return {
        ...state,
        error: null,
        loading: action.payload
      }
    }

    case ACTIONS.FETCH_MOVIES_FAILED: {
      return {
        ...state,
        error: action.payload
      }
    }

    case ACTIONS.FETCH_MOVIES_SUCCESS: {
      const {data, totalAmount} = action.payload;

      return {
        ...state,
        data,
        totalAmount,
        error: null
      };
    }

    case ACTIONS.CREATE_MOVIE_SUCCESS: {
      const movie = action.payload;
      return {
        ...state,
        totalAmount: state.totalAmount + 1,
        data: [movie, ...state.data]
      }
    }

    case ACTIONS.EDIT_MOVIE_SUCCESS: {
      const movie = action.payload;
      const newData = [...state.data];
      const inx = newData.findIndex(({id}) => movie.id === id);
      newData[inx] = movie;

      return {
        ...state,
        data: newData
      }
    }

    case ACTIONS.DELETE_MOVIE_SUCCESS: {
      const deletedId = action.payload;

      return {
        ...state,
        totalAmount: --state.totalAmount,
        data: state.data.filter(({id}) => deletedId !== id)
      };
    }
    default: return state;
  }
}

export default moviesReducer;