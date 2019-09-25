import React, { useEffect, useState } from 'react';

export const TypeNames = ({id}) => {
    const[types, setTypes] = useState([])
    console.log(id)

    useEffect(()=>{
        getTypes()
    }, [])

    const getTypes = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/type/${id}`)
        const data = await res.json()
        console.log(data)
    }


    return (
        <div>
            hello
        </div>
    )
}

export const TypesInfo = ({id}) => {
    return(
        <div>
            hi
        </div>
    )
}

