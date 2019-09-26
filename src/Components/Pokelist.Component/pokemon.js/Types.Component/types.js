import React from 'react';

export const Types = ({types}) => {

    let typeStyle  = {
        background: '',
        color: 'white',
        width: '5em',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: '0.0002em',
        paddingBottom: '0.0002em',
        paddingLeft: '1.8rem',
        paddingRight: '1.8rem',
        borderRadius: '20px',
               
    
    }

  
    let name = types.type.name
  

    switch(true) {
        case name === 'bug':
          typeStyle.background = 'olive'
          break;
             
        case name === 'grass':
            typeStyle.background = 'Seagreen'
            break;
        case name === 'poison':
            typeStyle.background = 'purple'
            break;
        case name === 'electric':
            typeStyle.background = 'gold'
            break;
        case name === 'fire':
            typeStyle.background = 'red'
            break;
        case name === 'normal':
            typeStyle.background = 'grey'
            break;
        case name === 'rock':
            typeStyle.background = 'Sienna'
            break;
        case name === 'dark':
            typeStyle.background = 'black'
            break;
        case name === 'fairy':
            typeStyle.background = 'pink'
            break;
        case name === 'flying':
            typeStyle.background = 'SlateBlue'
            break;
        case name === 'ground':
            typeStyle.background = 'DarkGoldenrod'
            break;
        case name === 'steel':
            typeStyle.background = 'SlateGrey'
            break;
        case name === 'dragon':
            typeStyle.background = 'Indigo'
            break;
        case name === 'fighting':
            typeStyle.background = 'Maroon'
            break;
        case name === 'ghost':
            typeStyle.background = 'DarkSlateBlue'
            break;
        case name === 'ice':
            typeStyle.background = 'Cyan'
            break;
        case name === 'psychic':
            typeStyle.background = 'HotPink'
            break;
        case name === 'water':
            typeStyle.background = 'blue'
            break;

    }

    return (
        <div className='types' style={typeStyle}>
            <p className='poketype'>{name}</p>
        </div>
    )
}



