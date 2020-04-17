import React from 'react';
import {Link} from 'react-router-dom';

const Movie = ({ poster, id }) => {  

	return(
		<div className="result"  > 
			<Link to={`/moviedetails/${id}`} > <img src={poster} alt="Poster" /> </Link>
		</div>
	);
}

export default Movie;