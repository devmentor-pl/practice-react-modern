import React from 'react';
import Box from './Box';
import TextContext from '../context';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Cokolwiek !',
        };
    }

    render() {
        const { text } = this.state;

        return (
            <TextContext.Provider value={text}>
                <Box />
            </TextContext.Provider>
        );
    }
}

export default App;
