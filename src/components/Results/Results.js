import React from 'react';
import PropTypes from 'prop-types';

import './Results.scss';
import ResultsSort from '../ResultsSort/ResultsSort';
import ResultsFilter from '../ResultsFilter/ResultsFilter';
import MoviesList from '../MoviesList/MoviesList';
import { fetchMoviesData } from './../../store/asyncActionCreators';
import categoriesVocabulary from './../../mocks/categories';
import { MOVIES_API_PATH } from './../../core/api-config';
import { initialState as initialFilterParams } from './../../store/reducers/filterParams';
import { isEqual } from './../../core/helpers';

class Results extends React.Component {
  static propTypes = {
    movies: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.string,
    totalAmount: PropTypes.number,
    filterParams: PropTypes.object,
    fetchMoviesData: PropTypes.func,
    deleteMovie: PropTypes.func,
    editMovieSuccess: PropTypes.func,
    sortByChanged: PropTypes.func,
    filterByChanged: PropTypes.func,
  };

  static initialAction(req) {
    const decodedUrl = decodeURIComponent(req.url);
    const search = decodedUrl.split('/').slice(-1)[0];

    return fetchMoviesData({search, ...initialFilterParams});
  }

  getMovies() {
    const {fetchMoviesData, filterParams, params} = this.props;
    fetchMoviesData({...filterParams, search: params?.value || ''});
  }

  componentDidMount() {
    if (!this.props.movies) {
      this.getMovies();
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!isEqual(prevProps.filterParams, this.props.filterParams) || !isEqual(prevProps.params, this.props.params)) {
      this.getMovies();
    }
  }

  handleMovieEditing = (movie) => {
    return fetch(MOVIES_API_PATH, {
      method: 'PUT',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(async response => {
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.messages.toString());
        }

        this.props.editMovieSuccess(data);
      });
  }

  handleMovieDeleting = (id) => this.props.deleteMovie(id)

  render() {

    const {
      movies, loading, error, totalAmount, filterParams,
      sortByChanged, filterByChanged
    } = this.props;

    const categories = categoriesVocabulary.map((name, inx) =>
      ({
        id: [name, inx].join('-'),
        name,
        active: filterParams?.filter?.length ? filterParams.filter.includes(name) : inx === 0
      }));

      return (
        <main className="results mb-4">
          <div className="container">
            <div className="results__controls d-flex justify-content-between align-items-center mb-3">
              <ResultsFilter categories={categories} onHandleSelected={filterByChanged}/>
              <div className="ml-2"><ResultsSort onHandleChange={sortByChanged}/></div>
            </div>

            {loading && <div className="f-size-18 text-center">Loading...</div>}
            {error && !loading && <div className="f-size-18 text-center">Error happened, status: {status}</div>}

            {!loading && !error && movies &&
            (movies.length
                ? <MoviesList
                  totalAmount={totalAmount}
                  movies={movies}
                  onEditMovie={this.handleMovieEditing}
                  onDeleteMovie={this.handleMovieDeleting}
                />
                : <div className="results__empty-msg text-center mt-5 pt-5">No Movie Found</div>
            )}
          </div>
        </main>
      )
  }
}

export default Results;
