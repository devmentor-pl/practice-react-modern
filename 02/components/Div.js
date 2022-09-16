import React from 'react';
import TextContext from './context';

function Div() {
    const { Consumer } = TextContext;

    return <Consumer>{(context) => <h1>{context}</h1>}</Consumer>;
}

export default Div;
