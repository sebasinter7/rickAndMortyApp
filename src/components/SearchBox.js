import axios from 'axios';
import React, { useState } from 'react';

const SearchBox = ( { setRickAndMorty } ) => {
        const [ search, setSearch ] = useState( " " )

        const searchType = (  ) => {
            axios.get( `https://rickandmortyapi.com/api/location/${ search }` )
                .then( ( res ) => setRickAndMorty( res.data ) )
        }
    

    return (
        <div>
            <input type="text"
                onChange={( e ) => setSearch( e.target.value )}
                value = { search }
            />
            <button onClick={searchType}>Search</button>
        </div>
    );
};

export default SearchBox;