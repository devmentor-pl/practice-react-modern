import React from 'react';
import ReactDOM from 'react-dom';
import SpeedTest from './SpeedTest';

const App = function() {
    return <SpeedTest />;
}

ReactDOM.render(<App />, document.querySelector('#root'));
