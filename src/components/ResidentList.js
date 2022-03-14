import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentList = ( { rickAndMorty } ) => {

  
    return (
        <div>
            {
                rickAndMorty?.map( rickAndMorty => (
                    <ResidentInfo rickAndMorty = { rickAndMorty } key = { rickAndMorty } />
                    //<div key = { rickAndMorty }>{ rickAndMorty }</div>
                 ) )
            }
        </div>
    );
};

export default ResidentList;