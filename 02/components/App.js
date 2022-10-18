// ./src/components/App.js
import React from 'react';

import Box from './Box';

import TextContentex from '../context';

class App extends React.Component {
    state = {
        text: 'React HelloWorld Modern! xyz',
    };

    render() {
        const { text } = this.state;

        return (
            <TextContentex.Provider value={text}>
                <Box />
            </TextContentex.Provider>
        );
    }
}

export default App;
