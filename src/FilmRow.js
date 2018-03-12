import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

const FilmRow = props => {

  const { title, date, url, isFave } = props
  const posterUrl = "https://image.tmdb.org/t/p/w780/" + url
  const year = new Date(date).getFullYear()

  return (
    <div className="film-row" onClick={ props.onDetailsClick }>
      <FilmPoster title={title} url={posterUrl} />
      <div className="film-summary">
        <h1>{title}</h1>
        <p>{year}</p>
      </div>
      <Fave isFave={isFave} onFaveToggle={props.onFaveToggle} />
    </div>
  )
}

export default FilmRow;
