import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import s from "./Rewiews.module.css";


import { fetchMoviesRewievsViews } from "../../services/movie-api";

export default function Cast() {
    const { movieId } = useParams();
  const [rewiew, setRewiew] = useState(null);
  

  useEffect(() => {
      fetchMoviesRewievsViews(movieId).then(rewiew => setRewiew(rewiew.results));
    }, [movieId]);

    return (rewiew && rewiew.length > 0 ? (<ul className={s.list}>
        {rewiew.map(({ author, id, content }) => (
          <li key={id}>
            <h3>Autor: {author}</h3>
            <p>{content}</p>
          </li>
        ))}
        </ul>) : (<p>We don't have any rewiews for this movie.</p>))
}