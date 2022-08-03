// ./src/components/App.js
import React from 'react';
import Box from './Box';
import textContext from '../context';

class App extends React.Component {
    state = {
        // text: 'React HelloWorld Modern!',
    };

    render() {
        /* eslint no-console: "off" */
        // const { text } = this.state;
        console.log( textContext )
        const {Provider} = textContext
        return (
            <Provider value="React HelloWorld Modern from Context">
                <Box />
            </Provider>
        )
    }
}

export default App;
