import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import MovieSearch from '../movies/MovieSearch';
import { MovieContext } from '../../context/MovieContext';


const Nav = () => {  
	
const { clearMovies } = useContext(MovieContext); 

	return(
        //get movie name from embedded <Movie  name={movie.name} /> in MovieList.js
		<div className="nav fixed-top">
			  <div className= "nav-brand mt-4">
					<h1 onClick={clearMovies}><Link className="nav-link" to={'/'} style={{ textDecoration: 'none'}} ><i className="fas fa-film pr-2" />
							<span className="blue-span">Movie</span>
							Finder</Link> 
					</h1>
				</div>
			
			<MovieSearch />
		</div>
	);
}
	//if movie link is clicked, clear movie list go home

export default Nav;