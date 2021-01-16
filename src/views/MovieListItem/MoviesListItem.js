import s from './MoviesListItem.module.css';
import React from 'react';
import NoImage from "../../images/noimage.png";
// import PropTypes from 'prop-types';


export default function MoviesListItem({ userMovieImageURL, altImage }) {
    const URL_IMG = "https://image.tmdb.org/t/p/w500";
    return (<div><img src={userMovieImageURL ? `${URL_IMG}${userMovieImageURL}` : NoImage} alt={altImage} width='400' height='550'/>
        <h3 className={s.titleMovie}>{altImage}</h3>
        </div>);
}