// ./src/components/App.js
import React from 'react';
import Box from './Box';
import { BoxContext } from './src/context';

class App extends React.Component {
    state = {
        text: 'React HelloWorld Modern!',
    };

    render() {
        const { Provider } = BoxContext;
        const { text } = this.state;
        return (
            <Provider value={ text }>
                <Box />
            </Provider>
        )
    }
}

export default App;
