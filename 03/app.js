import React from 'react';
import ReactDOM from 'react-dom';
import Box from './components/Box';
import Div from './components/Div';

import { TextContext } from './context';

const App = () => {
    return (
        <section>
            <Box text="text inside" />
            <TextContext.Provider value="sibling">
                <Div title="title" />
            </TextContext.Provider>
        </section>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
