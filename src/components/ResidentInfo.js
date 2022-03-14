import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResidentInfo = ( { rickAndMorty } ) => {

    const [ rickMorty, setRickMorty ] = useState( " " )

    useEffect( ( ) => {
        axios.get( rickAndMorty )
            .then( res => setRickMorty( res.data ) )
    }, [ rickAndMorty ] )

    console.log( rickAndMorty )
    console.log( rickMorty )

    return (
        <div className='cards' key={ rickAndMorty }>
            <img src={ rickMorty.image } alt="" />
            <h4><b>Name: </b>{ rickMorty.name }</h4>
            <p><b>Status: </b>{ rickMorty.status }</p>
            <p><b>Type: </b>{ rickMorty.type }</p>
            <p><b>Birthplace: </b>{ rickMorty.origin?.name }</p>
            <p><b>Episodes: </b>{ rickMorty.episode?.length }</p>
        </div>
    );
};

export default ResidentInfo;