import React from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import s from './MoviesList.module.css';
import MoviesListItem from './MoviesListItem';
// import PropTypes from 'prop-types';

export default function ImageGallery({ movies }) {
    const { url } = useRouteMatch();

    return (<ul className={s.movieItem}>
        {movies && movies.map(({ poster_path, title, name, id }, index) => (<li key={index}>
            <Link to={`/${url}/${id}`}>
                <MoviesListItem userMovieImageURL={poster_path} altImage={title ?? name}/>
            </Link>
            </li>
            )) 
        }
        </ul>);    
};