import React from 'react';
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import s from './MoviesList.module.css';
import MoviesListItem from '../MovieListItem/MoviesListItem';
import PropTypes from 'prop-types';

export default function MoviesList({ movies }) {
    const { url } = useRouteMatch();
    const location = useLocation();

    return (<ul className={s.movieItem}>
        {movies && movies.map(({ poster_path, title, name, id }, index) => (<li key={index}>
            <Link to={{
                pathname: `${url}/${id}`,
                state: { from: location}}}>
                <MoviesListItem userMovieImageURL={poster_path} altImage={title ?? name}/>
            </Link>
            </li>
            )) 
        }
        </ul>);    
};

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        poster_path: PropTypes.string,
        id: PropTypes.number.isRequired,
        title: PropTypes.string,
        name: PropTypes.string
    }))
};