import React from 'react';

const init = {
    borderStyle: '1px solid red',
};

export const ColorContext = React.createContext(init);
export const TextContext = React.createContext('nested');
