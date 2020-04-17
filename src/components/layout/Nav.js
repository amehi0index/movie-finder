import React from 'react';
import MovieSearch from '../movies/MovieSearch';


const Nav = () => {  
	
	return(
        //get movie name from embedded <Movie  name={movie.name} /> in MovieList.js
		<div className="nav fixed-top">
			  <div className= "nav-brand mt-4">
           <h1><i className="fas fa-film pr-2" /><span className="blue-span" >Movie</span>Finder</h1>
        </div>
			
			<MovieSearch />
			
		</div>
	);
}


export default Nav;