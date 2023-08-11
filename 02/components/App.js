// ./src/components/App.js
import React from 'react';
import Box from './Box';
import TitleContext from '../context';

class App extends React.Component {
    state = {
        text: 'React HelloWorld Modern!',
    };

    render() {
        const { Provider: TitleProvider } = TitleContext;
        const { text } = this.state;
        return (
            <TitleProvider value={text}>
                <Box />
            </TitleProvider>
        );
    }
}

export default App;
