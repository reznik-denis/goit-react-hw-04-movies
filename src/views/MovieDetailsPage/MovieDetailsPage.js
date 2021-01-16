import { useState, useEffect, lazy, Suspense, useRef } from 'react';
import { NavLink, Route, useParams, useRouteMatch, useHistory, useLocation, } from 'react-router-dom';
import { fetchMoviesDetailsViews } from "../../services/movie-api";
import Loader from "../../services/Loader/loader";
import NoImage from "../../images/noimage.png";
import s from "./MovieDetailsPage.module.css";

const Rewiews = lazy(() => import('../Rewiews/Rewiews.js' /* webpackChunkName: "rewiews" */));
const Cast = lazy(() => import('../Cast/Cast.js' /* webpackChunkName: "cast" */));

export default function MovieDetailsView() {
  const { movieId } = useParams();
  const {url, path} = useRouteMatch();
  const [movie, setMovie] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();
  const location = useLocation();
   const refLocation = useRef(location);
  const URL_IMG = "https://image.tmdb.org/t/p/w500";

  console.log(history);
  console.log(location);

  useEffect(() => {
    setLoader(true);
    fetchMoviesDetailsViews(movieId).then(movie => {
      if (movie.status_message) {
        return setError(movie.status_message)
      }
      return setMovie(movie)
    }).catch(error => setError(error)).finally(() => setLoader(false));
  }, [movieId]);

  console.log(refLocation)

 function goBack() {
    if (refLocation.current.state) {
      const { pathname, search } = refLocation.current.state.from;
      history.push(search ? pathname + search : pathname);
    } else {
      const path = refLocation.current.pathname.includes('movies')
        ? '/movies'
        : '/';
      history.push(path);
    }
  }

  return (
    <>
       {loader && <Loader />}
       {movie ? 
        (<div className={s.flex}>   
              <img src={movie.poster_path ? `${URL_IMG}${movie.poster_path}` : NoImage} className={s.imgStyle} alt={movie.title ?? movie.name} width='400' height='600'/>
          <div>
            <button type="button" onClick={goBack} className={s.goBack}>Назад</button>
                    <h1 className={s.title}>{movie.title ?? movie.name}</h1>
                    <p>User Score: {movie.vote_average * 10}%</p>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                  <h2>Genres</h2>
                  <div className={s.listGenres}>
            {movie.genres ? (movie.genres.map((genre, index) => (<p key={index} className={s.listItem}>{genre.name}</p>))) : (<p>No Genges</p>)}
                  </div>
          <hr />
          <NavLink className={s.link} activeClassName={s.activeLink} to={`${url}/cast`}>Cast</NavLink>
          <br />
          <NavLink className={s.link} activeClassName={s.activeLink} to={`${url}/rewiews`}>Rewiews</NavLink>
            <hr />
        <Suspense fallback={<Loader />}>
          <Route path={`${path}/cast`}>
             {movie && <Cast/>}
          </Route>
          <Route path={`${path}/rewiews`}>
             {movie && <Rewiews/>}
          </Route>
        </Suspense>
          </div>
        </div>) : (<h2 className={s.noDetails}>No detail information for this film!</h2>)}
    </>
  );
}