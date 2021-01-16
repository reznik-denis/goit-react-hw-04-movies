import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

import { fetchMoviesCreditsViews } from "../services/movie-api";

export default function Cast() {
    const { movieId } = useParams();
    const [credit, setCredit] = useState(null);

    useEffect(() => {
        fetchMoviesCreditsViews(movieId).then(credit => setCredit(credit.cast));
    }, [movieId]);

    return (<ul>
        {credit && credit.map(({ original_name, character, id, profile_path }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={original_name ? original_name : `image`}
            />
            <p>{original_name ? original_name : `No name`}</p>
            <p>{character ? character : `No character`}</p>
          </li>
        ))}
        </ul>
    )
}