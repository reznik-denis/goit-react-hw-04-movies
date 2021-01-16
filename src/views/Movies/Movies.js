import { useState, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import s from './Movies.module.css';
import MoviesList from "../MoviesList/MoviesList";
import { fetchSearchMovies } from "../../services/movie-api";


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Searchbar () {
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);

    const history = useHistory();
    const location = useLocation();
    const refLocation = useRef(location);

    const handleChange = event => {
        setSearch(event.currentTarget.value.toLowerCase());
    };
    
    const queryUrl = new URLSearchParams(location.search).get('query');

    const onQueryChange = query => {
        history.push({...location, search:`query=${query}`})
    }

    const fetchMovies = (search, pageFetch=1) => {
        fetchSearchMovies(search, pageFetch).then(movies => setMovies(movies.results))
    }
    const handleSubmit = event => {
        
        event.preventDefault();
        if (search.trim() === '') {
            toast.error("You don't load name films");
            return
        }
        fetchMovies(search);
        onQueryChange(search);
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
