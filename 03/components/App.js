// ./src/components/App.js
import React from 'react';
import Box from './Box';
import { ColorContext, TextContext } from '../context'


class App extends React.Component {
    state = {
        text: 'React HelloWorld Modern!',
    };

    render() {
        const { text } = this.state;
        return (
            <ColorContext>
                <TextContext value={ text }>
                    <Box />;
                </TextContext>
            </ColorContext>
        )
        
    }
}

export default App;
