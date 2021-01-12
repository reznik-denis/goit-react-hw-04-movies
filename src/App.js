import './App.css';
// import { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import Movies from "./views/Movies";
import Container from "./Container/Container";
import Navigation from "./Navigation/Navigation";
import NotFoundViews from "./views/NotFoundViews";

import { ToastContainer } from 'react-toastify';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function App() {
  // const [search, setSearch] = useState(null);

  // const formSubmitHendler = (userSearch) => {
  //   if (userSearch !== search) {
  //     // setMovies([]);
  //     setSearch(userSearch);
  //     // setPageFetch(1);
  //   } else { toast.error("Вы уже ввели это имя!"); };
  // };

  return (
    <Container>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage/>
        </Route>
        <Route path="/movies">
          <Movies/>
        </Route>
        <Route>
          <NotFoundViews/>
         </Route>
      </Switch>
      <ToastContainer
          position="bottom-right"
          autoClose={3000}
    />
    </Container>
  );
}

export default App;
