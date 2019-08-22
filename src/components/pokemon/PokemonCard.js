import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Pokemon from './Pokemon';
function PokemonCard(props)
{
const [url, setUrl] = useState('');
    useEffect(() => {
    setUrl( "https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/" + props.url.split('/')[props.url.split('/').length - 2 ] + ".png?raw=true");
   
    }, [])    
    return(
       
        <div className="col-md-3 col-sm-6 mb-5">
    <Link to = {`pokemon/`+ props.url.split('/')[props.url.split('/').length - 2 ]}> 
      
        <div className="card">
        <div className="card-header">
        <h3>{props.name}</h3>
        </div>
        <div className="card-body mx-auto">
        <img src= {url} alt =""/>
        </div>
       </div>
        </Link>
   
        </div>
        )    
}

export default PokemonCard;