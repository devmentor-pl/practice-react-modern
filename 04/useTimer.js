import { useState, useEffect, useRef } from 'react';

const useTimer = ({isRunning, initialTime = 0, mode = 'up'}) => {
    const [time, setTime] = useState(initialTime);
    const intervalRef = useRef(null);

    useEffect(() => {
        clearInterval(intervalRef.current);
    
        if (!isRunning) {
            return () => {};
        }

        intervalRef.current = setInterval(() => {
            setTime(prev => {
                if(mode === 'down'){
                    if(prev <= 1){
                        clearInterval(intervalRef.current);
                        return 0;
                    }
                    return prev - 1;
                }

                return prev + 1;
            })
        }, 1000)

        return () => clearInterval(intervalRef.current);
    }, [isRunning, mode]);

    const reset = (value = initialTime) => setTime(value);

    return {time, reset}
}

export default useTimer;