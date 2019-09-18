import React, { useEffect, useState } from 'react';

function Pokemon({ name }) {
    console.log(name)

    const [pokemon, setPokemon] = useState([])

    useEffect(() =>{
     getOnePokemon()   
    }, [])

    const getOnePokemon = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const data = await res.json()
        setPokemon(data)        
    }
    console.log(pokemon)

    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default Pokemon
