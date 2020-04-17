import React, {useEffect, useContext } from 'react';
import Popup from './Popup';
import { MovieContext } from '../../context/MovieContext';


export default function MovieDetails({match}) {
	
	const { openPopup, selected } = useContext(MovieContext); 
	
	useEffect(()=> {

		openPopup(match.params.id);
		console.log(match.params.id);
		//eslint-disable-next-line
		}, []);
	 
	return (
			<>
				{(typeof selected.Poster != "undefined" ) 
					? <Popup  selected={selected}   /> 
					: false}
			</>
	);

}
