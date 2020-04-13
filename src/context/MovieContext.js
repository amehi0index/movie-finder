import React, {useState, createContext } from 'react';

//let API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY ='dfe6d885';

export const MovieContext = createContext();

export const MovieProvider = (props) =>{

  const [search, setSearch] = useState('');

	const [movies, setMovies] = useState([]); 

  const [selected, setSelected] = useState({});

	const searchMovies = async (text) => {
		const response = await fetch(`http://www.omdbapi.com/?s=${text}&apikey=${API_KEY}`);
		const data =  await response.json();
		setMovies(data.Search);
		console.log(data.Search);
	}

	const openPopup = async (match) => {
		const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${match}`);
		const movie = await response.json();
	
		console.log(movie);
		setSelected(movie); 
		
}
	
	const closePopup = () => {
	setSelected(prevState => {
			return {selected: {}, ...prevState }
		});
	}

	return(

		<MovieContext.Provider value={{
				search,
				movies, 
				selected,
				openPopup,
				closePopup,
				setSelected,
				setMovies,
				searchMovies
				}}> 
				{props.children}  
		</MovieContext.Provider>
	);
}

