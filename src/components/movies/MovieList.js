import React, {useContext} from 'react';
import Movie from './Movie';
import { MovieContext } from '../../context/MovieContext';

const MovieList = () => {

	const { movies, openPopup } = useContext(MovieContext); // values from <MovieContext.Provider value={[movies, setMovies]}> 

	return (
							<section className="results">
								<div className ="move">
									{ movies && movies.map(movie => {    
										return <Movie name={movie.Title} 
										year={movie.Year} 
										id={movie.imdbID} 
										poster={movie.Poster} 
										key={movie.imdbID} 
										onClick={openPopup} 
										movie={movie}
										/> 
									})}  
								</div>
							</section>
	); 
};

export default MovieList;
