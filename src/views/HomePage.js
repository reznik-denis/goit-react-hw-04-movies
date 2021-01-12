import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { fetchTrendingsMovies } from "../services/movie-api";
import s from "./MoviesList.module.css";

export default function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchTrendingsMovies().then(movies => setMovies(movies.results));
    }, [])

    return (<>
    <h1 className={s.header}>Movies in trend</h1>
        <ul className={s.movieItem}>
        {movies && movies.map(({title, name, poster_path, id}, index) => (<li key={index} >
            <Link to={`/movies/${id}`}>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title ?? name}/>
                <h3 className={s.titleMovie}>{title ?? name}</h3>
            </Link>
            </li>
            )) 
        }
        </ul>
    </>
    );
};