// ./src/components/App.js
import React from 'react';
import Box from './Box';

class App extends React.Component {
    state = {
        text: 'React HelloWorld Modern!',
    };

    
    render() {
        const { Provider } = textContent;
        const { text } = this.state;

        return(
        <Provider value={text}>
            <Box text={text} />;
        </Provider>
        ) 
    }
}

export default App;
