/* eslint-disable react/prefer-stateless-function */
// ./src/components/App.js
import React from 'react';
import Box from './Box';
import Div from './Div';
// eslint-disable-next-line no-unused-vars
import { TextContext, ColorContext } from '../context'

class App extends React.Component {
    render() {
        const {Provider} = TextContext
        return (
            <section>
                <Box />
                <Provider value='sibling'>
                    <Div />
                </Provider>
            </section>
        )
    }
}

export default App;
