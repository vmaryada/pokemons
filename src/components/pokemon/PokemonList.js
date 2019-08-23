import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard.js';
import Search from './Search';
function PokemonList() {
    var filteredNames = [];
    const [pokeApi, setPokeApi] = useState('https://pokeapi.co/api/v2/pokemon/');
    const [pokemon, setPokemon] = useState([]);
    const [filteredPoke, setfilteredPoke] = useState([]);
    
    const someFunction = (params) => {
        console.log(params);
        filteredNames = params;
        console.log(filteredNames);
         setfilteredPoke ( pokemon.filter(function(item) { return filteredNames.includes(item.name)}) );

        console.log(filteredPoke);
    };

    useEffect(() => {

        fetch(pokeApi).then(function (response) { return response.json() }).then
            (function (myJson) {
                console.log(myJson.results);
                setPokemon(myJson.results);
                setfilteredPoke(myJson.results);
            })


    }, [])
  

    const pokeArray = filteredPoke.map((el) => <PokemonCard name={el.name} url={el.url} key={el.name}></PokemonCard>);
    return (
        <div className="container">
            <Search pokeListArray={pokemon} someFunction={someFunction}></Search>
            <br />
            <div className="row">

                {pokeArray}

            </div>
        </div>
    )
}

export default PokemonList;