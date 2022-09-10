import React from 'react';
import ReactDOM from 'react-dom';
import SpeedTest from './SpeedTest';

const App = function App() {
    return <SpeedTest />;
};

ReactDOM.render(<App />, document.querySelector('#root'));
