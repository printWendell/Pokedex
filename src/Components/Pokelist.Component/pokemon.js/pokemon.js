import React, { useEffect, useState } from 'react';
import './pokemon.css'

function Pokemon({ name, id }) {
    // props from pokelist component
    const [pokemon, setPokemon] = useState([])

    useEffect(() =>{
     getOnePokemon()   
    }, [])

    const getOnePokemon = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const data = await res.json()
        setPokemon(data)        
    }

    // const upperCase = ({name}) => {
    //     return string.charAt(0).toUpperCase() + string.slice(1)
    // }

    // console.log(pokemon)

    return (
        <div className="card">
            <p>#{pokemon.id}</p>
            <h2>{name}</h2>
            <div className="img">
                {
                    !`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png` ?
                     <p>Cant Catch</p>: <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt="pokemon"/>
                    
                }
            </div>
        </div>
    )
}

export default Pokemon
