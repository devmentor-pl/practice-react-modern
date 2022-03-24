// ./src/components/App.js
import React from 'react';
import Box from './Box';
import TitleContext from '../context';

function App () {
    return (
        <TitleContext.Provider value='React HelloWorld Modern'>
            <Box/>
        </TitleContext.Provider>
    )
}

export default App;
