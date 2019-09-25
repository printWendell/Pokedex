import React, { useEffect, useState } from 'react';
import Pokemon from './pokemon.js/pokemon'
import './pokelist.css'

function PokeList() {

    const [name, setName] = useState([])
    const [limit, setLimit] = useState(90)

    useEffect(() => {
       getAllPokemon()
    }, [])

    const getAllPokemon = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=30`)
        const data = await res.json()
       setName(data.results)
    }

    const getMore = async() => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`);
        const data = await res.json()
        setName(data.results)
      }


      const func1 = () => {
        setLimit(limit + 90)
      }
     
    return (
        <React.Fragment className="container">
            <div className="pokelist">


                {
                    name.map(name=>(
                        <Pokemon  key={name.id} name={name.name} id={name.id}/>
                    ))
                }  
            
            </div>

            <button className="btn" onClick={() => {
                getMore()
                func1()
            }
            }>LOAD MORE</button>

           

        </React.Fragment>
    )
}

export default PokeList
