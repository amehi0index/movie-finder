import React from 'react';
import MovieList from '../movies/MovieList';

const Home = () => {
  return (
   <div className="container-fluid main-bg">
      <div className="container-fluid bg-3">    
        <h1>Welcome!!</h1>
        <MovieList />
      </div>
  </div>
  )
}

export default Home;
