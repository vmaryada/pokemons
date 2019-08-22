import React, { useEffect, useState } from 'react';

function Pokemon(props) {
    const [pokemonIndex, setPokemonIndex] = useState('');
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    useEffect(() => {
        setPokemonIndex(props.match.params.pokemonIndex);
        console.log(pokemonIndex);   
    }, [])
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonIndex).then(function (response) { return response.json() }).then
    (function (myJson) {
        console.log(pokemonIndex)
        console.log(myJson.name);
        setName(myJson.name);
    })    
    return (
        <div><h1>{name}</h1>
        <img src={"https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/" + pokemonIndex + ".png?raw=true"}></img>
        </div>
    )
}

export default Pokemon;