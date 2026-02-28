// ./src/components/App.js
import React from 'react';
import TextContext from '../context';
import Div from './Div';

class App extends React.Component {
    state = {
        text: 'Hello from context',
    };

    render() {
        const { text } = this.state;

        return (
            <TextContext.Provider value={text}>
                <Div />
            </TextContext.Provider>
        );
    }
}

export default App;
