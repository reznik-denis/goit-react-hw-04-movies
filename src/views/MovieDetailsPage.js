import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesDetailsViews, fetchMoviesCreditsViews } from "../services/movie-api";
import s from "./MovieDetailsPage.module.css";


export default function MovieDetailsView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [credit, setCredit] = useState(null);
  const URL_IMG = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetchMoviesDetailsViews(movieId).then(movie => setMovie(movie));
    fetchMoviesCreditsViews(movieId).then(credit => setCredit(credit));
  }, [movieId]);

  return (
      <>
          {movie && 
              <div className={s.flex}>   
              <img src={`${URL_IMG}${movie.poster_path}`} className={s.imgStyle} alt={movie.title ?? movie.name} width='400'/>
              <div>
                    <h1 className={s.title}>{movie.title ?? movie.name}</h1>
                    <p>User Score: {movie.vote_average * 10}%</p>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                  <h2>Genres</h2>
                  <div className={s.listGenres}>
                      {movie.genres.map((genre, index) => <p key={index} className={s.listItem}>{genre.name}</p>)}
                  </div>
                    
              </div>
        </div>}
      {/* {movie && movie.map()} */}
    </>
  );
}