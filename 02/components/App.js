// ./src/components/App.js
import React from 'react';
import Box from './Box';
import TextContent from './context';

class App extends React.Component {
    state = {
        text: 'React HelloWorld Modern!',
    };

    render() {
        const { Provider } = TextContent;

        return (
            <Provider value = 'React HelloWorld Modern!'>
                <Box text={text} />,
            </Provider>
        )
    }
}

export default App;
