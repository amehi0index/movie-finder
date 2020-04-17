import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import MovieList from './components/movies/MovieList';
import Nav from './components/layout/Nav';
import {MovieProvider} from './context/MovieContext';  
import MovieDetails from './components/movies/MovieDetails';
import Popup from './components/movies/Popup';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <MovieProvider>
          <Nav />
          <main>
            <MovieList />
          </main>
          <Switch>
            <Route path='/moviedetails/:id' component={MovieDetails} />
            <Route path="/popup" component={Popup} />
          </Switch>
        </MovieProvider>
      </Router>
  );
}

export default App;
