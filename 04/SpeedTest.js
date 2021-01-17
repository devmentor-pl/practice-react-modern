import React, { useEffect, useRef, useState }from 'react';
import useRandomItem from './hook';

const SpeedTest = () => {
    const [word, regenerateWord] = useRandomItem(['chrząszcz', 'niezidentyfikowany', 'papcie', 'paralotnia', 'tymoteusz', 'obiekt', 'paprocie', 'gżegżółka', 'bobyśmy' ]);
    const [counter, setCounter] = useState(0);
    const [valueInput, setText] = useState('');
    const [wordCount, setWordCount] = useState(0);
  
    const inputRef = useRef(null)

   

    useEffect(() => {
        if(word != null){
            const wordLength = word.length
            if(word === valueInput) {
                setWordCount(wordCount + wordLength );
                setText('')
                regenerateWord()
            }
        }
    }, [valueInput]);


    useEffect(() => {
        regenerateWord();
        return () => clearInterval(inputRef.current)
    }, []);


    const startTime = () => {
        inputRef.current = setInterval(() => {
            setCounter(value => value + 1)   
            // (jak zrobic warunek, że tylko do 1 minuty ma odliczać ?)  
            // if(value === 60) {
            //     console.log('finish, max 60 sec ')
            // }   
        }, 1000);
        
  
    };


    const stopTime = () => {
        clearInterval(inputRef.current);
        regenerateWord()
        inputRef.current = ''
    }

  

    return (
        <div>
    
            <h1>{word}</h1>
            <input 
                ref = {inputRef}
                onFocus={() => startTime()}
                onBlur={() => stopTime()}
                onChange={e=>setText(e.target.value)}
                value={valueInput}
            />
         
            <p>Number of correct letters: <span style={{color: "red"}}>{wordCount}</span>  in <span style={{color: "red"}}>{counter} sec</span> </p>
          
    
        </div>
    );
};

export default SpeedTest;
