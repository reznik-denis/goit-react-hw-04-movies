import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import NoImage from "../../images/noimage.png";
import s from "./Cast.module.css";

import { fetchMoviesCreditsViews } from "../../services/movie-api";

export default function Cast() {
    const { movieId } = useParams();
    const [credit, setCredit] = useState(null);

    useEffect(() => {
        fetchMoviesCreditsViews(movieId).then(credit => setCredit(credit.cast));
    }, [movieId]);

    return (credit && credit.length > 0 ? (<ul className={s.movieItem}>
        {credit.map(({ original_name, character, id, profile_path }) => (
          <li className={s.list} key={id}>
            <img
              src={profile_path ? `https://image.tmdb.org/t/p/w200${profile_path}` : NoImage}
                    alt={original_name ? original_name : `image`}
                    width='150' height='230'
            />
            <h4 className={s.title}>{original_name ? original_name : `No name`}</h4>
            <p className={s.title}>{character ? character : `No character`}</p>
          </li>
        ))}
        </ul>) : (<p>We don't have information for this film</p>)
    )
}
