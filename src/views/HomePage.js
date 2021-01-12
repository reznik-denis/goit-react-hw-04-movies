import { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import s from "./MoviesList.module.css";

export default function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=129416bf942708f7409389a07be62439`).then(res => res.json()).then(movies => { setMovies(movies.results); console.log(movies) })
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