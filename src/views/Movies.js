import {useState} from 'react';
import s from './Movies.module.css';
import MoviesList from "./MoviesList";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Searchbar () {
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);

    const handleChange = event => {
        setSearch(event.currentTarget.value.toLowerCase());
    };

    const fetchMovies = search => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=129416bf942708f7409389a07be62439&language=en-US&query=${search}&page=1&include_adult=false`).then(res => res.json()).then(movies => { setMovies(movies.results); console.log(movies.results) })
    }
    const handleSubmit = event => {
        
        event.preventDefault();
        if (search.trim() === '') {
            toast.error("Введите имя картинки!");
            return
        }
        fetchMovies(search);
        reset();
    };

    const reset = () => {
        setSearch('');
    };

    return (<div>
    <div className={s.Searchbar}>
                <form className={s.SearchForm} onSubmit={handleSubmit}>
                    <button type="submit" className={s.SearchFormButton}>
                        <span className={s.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        className={s.SearchFormInput}
                        type="text"
                        value={search}
                        onChange={handleChange}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movies"
                    />
                </form>
    </div>
        <div>
            <MoviesList movies={movies}/>
        </div>
        </div>
            );
};
