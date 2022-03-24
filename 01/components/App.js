import React from 'react';

import Clock from './Clock';

class App extends React.Component {
    state = { // został mi 1 błąd: State initialization should be in a constructor, mam dodany do .eslintrc  "parser": "@babel/eslint-parser", i zasintalowany: npm i @babel/eslint-parser@7 -D
        date: new Date(),
    };

    componentDidMount() {
        this.intervalId = setInterval(() => {
            const date = new Date();
            this.setState({ date });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        const { date } = this.state;

        return date ? <Clock date={date} /> : null;
    }
}

export default App;
