import React from 'react';

export const ColorContext = React.createContext('red');
export const TextContext = React.createContext('nested');

TextContext.displayName = 'TextContext';
ColorContext.displayName = 'ColorContext';