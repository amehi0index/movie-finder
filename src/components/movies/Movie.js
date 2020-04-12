import React from 'react';
import MovieDetails from './MovieDetails'
import {Link} from 'react-router-dom';

const Movie = ({ poster, id }) => {   //ES6 convention

	return(
		<div className="result"  > 
			<Link to={`/moviedetails/${id}`} > <img src={poster} alt="Poster" /> </Link>
		</div>
	);
}

export default Movie;