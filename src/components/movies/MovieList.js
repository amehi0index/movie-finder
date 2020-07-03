import React, { useContext } from 'react';
import Movie from './Movie';
import { MovieContext } from '../../context/MovieContext';

const MovieList = () => {

	const {movies, openPopup } = useContext(MovieContext); // values from <MovieContext.Provider value={[movies, setMovies]}> 

		return (
			<section className="results">
				<div className ="move">
					{ movies && movies.map((movie, index) => {    
						return <Movie 
							key={index}
							name={movie.Title} 
							year={movie.Year} 
							id={movie.imdbID} 
							poster={movie.Poster} 
							onClick={openPopup} 
							movie={movie}/> 
					})}  
				</div>
			</section>
		); 

};

export default MovieList;
