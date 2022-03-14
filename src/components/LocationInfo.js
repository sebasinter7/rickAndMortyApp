import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ResidentList from './ResidentList';
import SearchBox from './SearchBox';

const LocationInfo = () => {

    const [ rickAndMorty, setRickAndMorty ] = useState( )

    useEffect( ( ) => {
        const random = Math.floor( Math.random( ) * 125 ) + 1
        axios.get( `https://rickandmortyapi.com/api/location/${ random }` )
            .then( res => setRickAndMorty( res.data ) )
    }, [ ] )

    console.log( rickAndMorty )

    return (
        <div>
            <SearchBox setRickAndMorty={setRickAndMorty} />
            <div className='info'>
                <h1>{ rickAndMorty?.name }</h1>
                <div className='info-planet'>
                    <h3><b>Type: </b>{ rickAndMorty?.type }</h3>
                    <h3><b>Dimension: </b>{ rickAndMorty?.dimension }</h3>
                    <h3><b>Residents: </b>{ rickAndMorty?.residents.length }</h3>
                </div>                
            </div>
            <ResidentList  rickAndMorty ={ rickAndMorty?.residents }  />
            
        </div>
    );
};

export default LocationInfo;