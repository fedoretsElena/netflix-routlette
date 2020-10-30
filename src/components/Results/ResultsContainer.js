import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { deleteMovie, fetchMoviesData } from './../../store/asyncActionCreators';
import {
  moviesDataSelector,
  moviesErrorSelector,
  moviesLoadingSelector,
  moviesTotalAmountSelector,
  filterParamsSelector
} from './../../store/selectors';
import { editMovieSuccess, filterByChanged, sortByChanged } from './../../store/actionCreators';
import Results from './Results';

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMoviesData,
  deleteMovie,
  editMovieSuccess,
  sortByChanged,
  filterByChanged
}, dispatch);

function mapStateToProps(state) {
  return {
    movies: moviesDataSelector(state),
    loading: moviesLoadingSelector(state),
    error: moviesErrorSelector(state),
    totalAmount: moviesTotalAmountSelector(state),
    filterParams: filterParamsSelector(state)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
