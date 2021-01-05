import React from 'react';
import ReactDOM from 'react-dom';
import Box from './components/Box';
import Div from './components/Div';
import {TextContext} from './context'


const App = () => {
    const {Provider} = TextContext;
    return (
        <section>
            <Box />
            <Provider value='sibling'>
                <Div />
            </Provider>
        </section>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
