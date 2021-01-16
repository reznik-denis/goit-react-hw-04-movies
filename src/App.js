import './App.css';
import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Container from "./Container/Container";
import Navigation from "./Navigation/Navigation";
import { ToastContainer } from 'react-toastify';
import Loader from "./services/Loader/loader";

const HomePage = lazy(() => import('./views/HomePage/HomePage.js' /* webpackChunkName: "home-page" */));
const Movies = lazy(() => import('./views/Movies/Movies.js' /* webpackChunkName: "movies" */));
const NotFoundViews = lazy(() => import('./views/NotFoundViews.js' /* webpackChunkName: "not-found" */));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage/MovieDetailsPage.js' /* webpackChunkName: "movie-details-page" */));

function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Switch>
        <Route path="/" exact>
          <HomePage/>
        </Route>
        <Route path="/movies" exact>
          <Movies/>
        </Route>
        <Route path='/movies/:movieId'>
          <MovieDetailsPage/>
        </Route>
        <Route>
          <NotFoundViews/>
         </Route>
        </Switch>
      </Suspense>
      <ToastContainer
          position="bottom-right"
          autoClose={3000}
        />
    </Container>
    
  );
}

export default App;
