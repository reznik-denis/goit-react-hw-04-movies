import { useState, useEffect } from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import { fetchMoviesDetailsViews } from "../services/movie-api";
import Cast from "./Cast";
import s from "./MovieDetailsPage.module.css";


export default function MovieDetailsView() {
  const { movieId } = useParams();
  const {url, path} = useRouteMatch();
  const [movie, setMovie] = useState(null);
  const URL_IMG = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetchMoviesDetailsViews(movieId).then(movie => setMovie(movie));

  }, [movieId]);

  return (
      <>
          {movie && 
        <div className={s.flex}>   
              <img src={`${URL_IMG}${movie.poster_path}`} className={s.imgStyle} alt={movie.title ?? movie.name} width='400' height='600'/>
          <div>
                    <h1 className={s.title}>{movie.title ?? movie.name}</h1>
                    <p>User Score: {movie.vote_average * 10}%</p>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                  <h2>Genres</h2>
                  <div className={s.listGenres}>
                      {movie.genres.map((genre, index) => <p key={index} className={s.listItem}>{genre.name}</p>)}
                  </div>
          <hr />
          <Link to={`${url}/cast`}>Cast</Link>
          <br />
          <hr />
          <Route path={`${path}/cast`}>
             {movie && <Cast/>}
          </Route>
          </div>
        </div>}
    </>
  );
}