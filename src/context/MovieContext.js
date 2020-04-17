import React, {useReducer, createContext } from 'react';
import axios from 'axios';
import MovieReducer from './movieReducer';
import {
  SEARCH_MOVIES, OPEN_POPUP, CLOSE_POPUP, SET_LOADING, SET_SEARCH
} from './types';

//let API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY ='dfe6d885';

export const MovieContext = createContext();

export const MovieProvider = (props) =>{

	const initialState = {
		search: '',
		movies: [],
		selected: {},
		loading: false
	}
		
	const [state, dispatch] = useReducer(MovieReducer, initialState);

	//Search for Movies
	const searchMovies = async (text) => {
		setLoading();
		//setSearch(text);
		
	const response = await axios.get(`http://www.omdbapi.com/?s=${text}&apikey=${API_KEY}`);
	
		dispatch({
		type: SEARCH_MOVIES,
		payload: response.data.Search  		//setMovies(data.Search);
		});
	};
		

	//Get Selected Movie
	const openPopup = async (match) => {
		setLoading();
	
		const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${match}`);

		dispatch ({ 
				type: OPEN_POPUP,
				payload: response.data  //	setSelected(movie); 
		})
	};

	const closePopup = () => dispatch({ type: CLOSE_POPUP  });  //setSelectd

	//SetSearch
	//const setSearch = (text) => dispatch ({ type: SET_SEARCH, payload: text });

	//Set Loading
	const setLoading = () => dispatch ({ type: SET_LOADING });

	return(

		<MovieContext.Provider value={{
				search: state.search,
				movies: state.movies, 
				selected: state.selected,
				loading: state.loading,
				openPopup,
				closePopup,
				searchMovies
				}}> 
				{props.children}  
		</MovieContext.Provider>
	);
}

