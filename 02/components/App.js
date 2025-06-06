// ./src/components/App.js
import React from 'react';
import Box from './Box';
import TextContext from './context';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'React HelloWorld Modern!',
        };
    }

    render() {
        const { text } = this.state;
        const { Provider } = TextContext;

        return (
            <Provider value={text}>
                <Box />
            </Provider>
        );
    }
}

export default App;
