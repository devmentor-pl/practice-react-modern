// ./src/components/App.js
import React from 'react';
import Box from './Box';

class App extends React.Component {
    state = {
        text: 'React HelloWorld Modern!',
    };

    render() {
        return (
            <Box/>         
        )
    }
}

export default App;
