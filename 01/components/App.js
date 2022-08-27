import React from 'react';

import Clock from './Clock';

class App extends React.Component {
    state = {
        date: new Date(),
    };

    componentDidMount() {
        setInterval(() => {
            const date = new Date();
            this.setState({ date });
        }, 1000);
    }

    render() {
        const { date } = this.state;

        return date ? <Clock date={date} /> : null;
    }
}

export default App;
