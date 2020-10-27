import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { deleteMovie, fetchMoviesData } from './../../store/asyncActionCreators';
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
  const {movies: {data, loading, error, totalAmount}} = state;
  const {filterParams} = state;

  return {movies: data, loading, error, totalAmount, filterParams};
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
