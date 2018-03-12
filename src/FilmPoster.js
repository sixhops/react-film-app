import React from 'react';

const FilmPoster = props => {
  const { url, title } = props
  return (
    <img src={url} alt={title} />
  )
}

export default FilmPoster;
