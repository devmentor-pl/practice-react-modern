// ./src/components/App.js
import React from 'react';
import Box from './Box';
import AppContext from './context';

class App extends React.Component {
    state = {
        text: 'React HelloWorld Modern!',
    };

    render() {
        const { Provider: AppContextProvider } = AppContext;
        const { text } = this.state;

        return (
            <AppContextProvider value={text}>
                <Box />
            </AppContextProvider>
        );
    }
}

export default App;
