// ./src/components/App.js
import React from 'react';
import Box from './Box';
import { TextContext } from './context';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
    render() {
        const { Provider } = TextContext;

        return (
            <Provider value="React HelloWorld Modern!">
                <Box />
            </Provider>
        );
    }
}

export default App;
