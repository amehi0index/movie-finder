import React from 'react';
import {Link} from 'react-router-dom';

function Popup({ selected, closePopup }) {
	return (
		<section className="popup">
            <div className="content"> 
            <div className="card-group">
       
                    <div className="card">
                        <img className="card-img" src={selected.Poster} alt=""/>
                    </div>
                    
                    <div className="card p-2 bg-cust">
                            
                            <h3 className="card-title text-title pt-2">{ selected.Title }</h3>
                            <div className="tags-container">
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
                            <button className="close-btn" onClick={closePopup}><Link className="text-link" to="/movielist/"  style={{ textDecoration: 'none'}}>Close</Link></button>

                    </div>
             </div>
                </div>

         
           
     </section>
	)
}

export default Popup    