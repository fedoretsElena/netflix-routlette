import React, { useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';

import './Details.scss';
import Header from './Header/Header';
import ErrorBoundary from './../../components/ErrorBoundary/ErrorBoundary';
import Results from './../../components/Results/Results';
import Footer from './../../components/Footer/Footer';

function Details({movies}) {
  const movieId = +useParams().id;
  const [movie, setMovie] = useState(null);

  const {poster_path, title, genres = [], release_date = null, runtime, overview, vote_average} = movie || {};
  const releaseYear = useMemo(() => new Date(release_date).getFullYear(), [release_date]);
  const genresList = useMemo(() => genres.join(', '), [genres]);

  useEffect(() => {
    let available = movies?.find(({id}) => id === movieId);

    if (available) {
      setMovie(available);
    }
  }, [movies, movieId]);

  return <>
    <div className="img-blur-container">
      <Header/>

      <section className="details d-flex align-items-center container py-4">
        {!movie
          ? <div className="mt-5 text-center w-100">Loading...</div>
          : <>
            <img className="details__poster" src={poster_path} alt="poster"/>
            <div className="ml-5">
              <div className="d-flex align-items-center">
                <h1 className="font-weight-light mb-1">{title}</h1>
                <div
                  className="details__vote-average f-size-26 ml-3 d-flex align-items-center justify-content-center">{vote_average}</div>
              </div>
              <p>{genresList}</p>
              <div className="d-flex align-items-center text-primary f-size-26 my-3">
                <span>{releaseYear}</span>
                {runtime > 0 && <span className="ml-4">{runtime} min</span>}
              </div>
              <p>{overview}</p>
            </div>
          </>
        }
      </section>
    </div>

    <ErrorBoundary>
      <Results/>
    </ErrorBoundary>

    <div className="footer"><Footer/></div>
  </>
}

const mapStateToProps = (state) => {
  const {movies: {data}} = state;
  return {movies: data};
}

export default connect(mapStateToProps)(Details);

Details.propTypes = {
  movies: PropTypes.array,
};
