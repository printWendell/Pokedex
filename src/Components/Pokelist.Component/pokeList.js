import React, { useEffect, useState } from 'react';
import Pokemon from './pokemon.js/pokemon'

function PokeList() {

    const [name, setName] = useState([])

    useEffect(() => {
       getAllPokemon()
    }, [])

    const getAllPokemon = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=30`)
        const data = await res.json()
       setName(data.results)
    }

    return (
        <div>
           {
               name.map(name=>(
                   <Pokemon name={name.name}/>
               ))
           }  
        </div>
    )
}

export default PokeList
