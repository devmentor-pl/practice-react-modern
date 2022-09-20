// ./src/components/App.js
import React from 'react';
import Box from './Box';
import { textContent } from '../context';

class App extends React.Component {
    state = {
        text: 'React HelloWorld Modern!',
    };

    render() {
        const { Provider } = textContent;
        const { text } = this.state;

        return (
            <Provider value={text}>
                <Box />
            </Provider>
        );
    }
}

export default App;
