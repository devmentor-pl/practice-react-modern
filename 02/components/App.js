// ./src/components/App.js
import React from 'react';
import Box from './Box';
import TitleContext from '../context';

function App () {
    const header ='React HelloWorld Modern';

    return (
        <TitleContext.Provider value={header}>
            <Box/>
        </TitleContext.Provider>
    )
}

export default App;
