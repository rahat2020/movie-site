import React, { createContext, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import MoviesDetails from './components/MoviesDetails/MoviesDetails';

export const movieContext = createContext();
export default function App() {
  const [movies, setMovies] = useState([]);
  return (
    <movieContext.Provider value={[movies, setMovies]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/details/:id">
            <MoviesDetails />
          </Route>
        </Switch>
      </Router>
    </movieContext.Provider>

  )
}
