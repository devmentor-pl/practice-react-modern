import React, { useState, useEffect } from 'react';
import Clock from './Clock';

function App() {
    // state = {
    //     date: new Date(),
    // };

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            // const date = new Date();
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    });

    // const { date } = state;

    return date ? <Clock date={date} /> : null;
}

export default App;
