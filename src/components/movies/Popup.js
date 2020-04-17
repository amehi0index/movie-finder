import React, {useEffect,useContext} from 'react';
import {Link} from 'react-router-dom';
import { MovieContext } from '../../context/MovieContext';

function Popup({ selected}) {

    const { closePopup } = useContext(MovieContext); 

    useEffect(()=> {
        closePopup(selected);
		//eslint-disable-next-line
		}, []);
    
	return (
	    <section className="popup">
            <div className="popup-content"> 
            <div className="card-group">
       
                <div className="card">
                        <img className="card-img" src={selected.Poster} alt=""/>
                </div>
                    
                <div className="card p-2 bg-cust">
                            
                    <h3 className="card-title text-title pt-2 font-weight-bold">{ selected.Title }</h3>
                    <div className="card-tags">
                        {selected.Genre &&
                            selected.Genre.split(', ').map(g => (
                            <span key={g}>{g}</span>
                            ))}
                    </div>

                    <p className="card-text text-p">{selected.Plot}</p>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item  bg-transparent"><span className="blue-span pr-2">Release:</span>{ selected.Released }</li>
                        <li className="list-group-item bg-transparent"><span className="blue-span pr-2">Rating:</span>{ selected.Rated}</li>
                        <li className="list-group-item  bg-transparent"><span className="blue-span pr-2">Runtime:</span>{ selected.Runtime}</li>
                        <li className="list-group-item bg-transparent"><span className="blue-span pr-2">Score:</span>{ selected.Metascore}</li>
                    </ul>

                    {selected && (<button className="close-btn" onClick={closePopup} ><Link className="text-link" to="/movielist/"  style={{ textDecoration: 'none'}}>Close</Link></button>
            )}

                </div>
            </div>
            </div>

         
           
     </section>
	)
}

export default Popup    