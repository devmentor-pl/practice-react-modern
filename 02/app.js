import React from 'react';
import { createRoot } from 'react-dom/client';

// eslint-disable-next-line import/no-named-as-default
import App from './components/App';

const root = createRoot(document.querySelector('#root'));

root.render(<App />);
