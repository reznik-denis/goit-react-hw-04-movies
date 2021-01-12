import s from './MoviesList.module.css';
import React from 'react';
// import PropTypes from 'prop-types';


export default function MoviesListItem({userMovieImageURL, altImage}) {
    return (<div><img src={`https://image.tmdb.org/t/p/w500${userMovieImageURL}`} alt={altImage} />
        <h3 className={s.titleMovie}>{altImage}</h3>
        </div>);
}