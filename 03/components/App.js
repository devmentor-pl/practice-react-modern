// ./src/components/App.js
import React from 'react';
import Box from './Box';
import {TextContext, ColorContext} from '../context'

class App extends React.Component {
    state = {
        text: 'React HelloWorld Modern!',
    };

    render() {
        const {Provider: TextProvider} = TextContext;
        const {Provider: ColorProvider} = ColorContext;
        
        return (
            <TextProvider>
                <ColorProvider>
                    <Box/>         
                </ColorProvider>
            </TextProvider>
        )
    }
}

export default App;
