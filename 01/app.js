import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import InstructionWebpack from './utils/InstructionWebpack';

const App2 = InstructionWebpack;

ReactDOM.render(<> <App /> <App2 /> </>, document.querySelector('#root'));