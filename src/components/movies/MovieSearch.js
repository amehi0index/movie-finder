import React, { useState, useContext } from 'react';
import {MovieContext} from '../../context/MovieContext'
import { FaSearch} from 'react-icons/fa';
import { IconContext } from "react-icons";

//Adds new movies to movie array
const MovieSearch = () => {
	
	const { searchMovies } = useContext(MovieContext);
	
	const [text, setText] = useState('');
	
	const getSearch = (e) =>{ //onSubmit
		e.preventDefault();
		searchMovies(text);
		setText('');
	}

	const updateSearch = (e) =>{ //onChange
		setText(e.target.value);
 }

return(
	 <section className="searchbox-wrap">
			  <form onSubmit={getSearch} className="search-form">
		      <input type="text"
		        className="searchbox"
		        value={text}
		        placeholder="Search for a Movie..." 
		     		onChange={updateSearch}
		      />  
		    	{text.length > 0 ? (<button className={"show"} type="submit"> <i className="fas fa-search"></i></button> )
					: (<button className={"hidden"} disabled aria-disabled="true" type="submit"> <i className="fas fa-search"></i></button> )}
				
 				</form> 
	  </section>
	);

};

export default MovieSearch;