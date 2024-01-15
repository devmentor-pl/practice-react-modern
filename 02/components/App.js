// ./src/components/App.js
import React from 'react';
import Box from './Box';
import TextContent from '../context/TextContext';

class App extends React.Component {
    // eslint-disable-next-line
    state = {
        text: 'React HelloWorld Modern!',
    };

    render() {
        const { Provider } = TextContent;
        const { text } = this.state;

        return (
            <Provider value={text}>
                <Box />
            </Provider>
        );
    }
}

export default App;
