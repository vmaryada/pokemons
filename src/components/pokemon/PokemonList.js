import React,{useState, useEffect} from 'react';
import PokemonCard from './PokemonCard.js';

function PokemonList()
{
 const [pokeApi, setPokeApi] = useState('https://pokeapi.co/api/v2/pokemon/');
 const [pokemon, setPokemon] = useState([]);


const handleClick = () => {};

     useEffect(() => {

        fetch(pokeApi).then(function(response){return response.json()}).then
        (function(myJson)
        {
            console.log(myJson.results)
            setPokemon(myJson.results)
        })
       
      }, [])

 const pokeArray = pokemon.map((el) => <PokemonCard name={el.name} url={el.url} key={el.name}></PokemonCard>);    
    return(
        <div className="container">
        <div className="row">
      {pokeArray}
            <button onClick={handleClick}>CLICK</button> 
        </div>
        </div>
    )
}

export default PokemonList;