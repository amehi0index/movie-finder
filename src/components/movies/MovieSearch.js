import React, { useState, useContext } from 'react';
import Spinner from '../layout/Spinner';
import {MovieContext} from '../../context/MovieContext'

//Adds new movies to movie array
const MovieSearch = () => {

	const { searchMovies, loading  } = useContext(MovieContext);
	
	const [text, setText] = useState('');
	
	const getSearch = (e) =>{ //onSubmit
		e.preventDefault();
		searchMovies(text);
		setText('');
	}

	const updateSearch = (e) =>{ //onChange
		setText(e.target.value);
 }

 if (loading) return <Spinner />;

return(
	 <section className="searchbox-wrap">
			  <form onSubmit={getSearch} className="search-form">
		      <input type="text"
		        className="searchbox"
		        value={text}
		        placeholder="Search for a Movie..." 
		     		onChange={updateSearch}
		      />  
		    	{text.length > 0 ? (<button className={"show-search"} type="submit"> <i className="fas fa-search"></i></button> )
					: (<button className={"hide-search"} disabled aria-disabled="true" type="submit"> <i className="fas fa-search"></i></button> )}
				
 				</form> 
	  </section>
	);

};

export default MovieSearch;