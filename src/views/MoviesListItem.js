import s from './MoviesList.module.css';
import React from 'react';
// import PropTypes from 'prop-types';


export default function MoviesListItem({ userMovieImageURL, altImage }) {
    const URL_IMG = "https://image.tmdb.org/t/p/w500";
    return (<div><img src={`${URL_IMG}${userMovieImageURL}`} alt={altImage} />
        <h3 className={s.titleMovie}>{altImage}</h3>
        </div>);
}