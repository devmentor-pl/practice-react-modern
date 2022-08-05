/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import useRandomItem from './hook';

function SpeedTest() {
    const textInput = useRef(null)
    const intervalRef = useRef();
    const timeRef = useRef();
    /* eslint no-console: "off" */

    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    // const [word, regenerateWord] = useRandomItem(['aaa', 'abc', 'bbb']);

    const [wordInput, setWordInput] = React.useState('')
    // eslint-disable-next-line no-unused-vars
    const [wordInputLength, setWordInputLength] = React.useState(0)
    const [result, setResult] = React.useState('')
    const [focus, setFocus] = React.useState('')
    const [blur, setBlur] = React.useState('')

    const stopInterval = () => {
        clearInterval(intervalRef.current)
    }

    useEffect(() => {
        regenerateWord();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (!focus) { return undefined }
        console.log('START')
        setBlur('')
        setResult('')
        setWordInputLength(0)
        timeRef.current = 0
        let time = 1
        intervalRef.current = setInterval(() => {
            console.log('interval')
            // eslint-disable-next-line no-plusplus
            timeRef.current = (time++) * 10
        }, 10)
        return () => stopInterval()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [focus])

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (!blur) { return undefined }
        console.log('END')
        setFocus('')
        stopInterval()
        if (word === wordInput) {
            console.log('word === wordInput')
            setWordInputLength(textInput.current.value.length)
            regenerateWord()
            textInput.current.value = ''
            setResult('Brawo - poprawnie napisałeś')
        } else {
            console.log('word <> wordInput')
            setWordInputLength(textInput.current.value.length)
            textInput.current.value = ''
            setResult('Niepoprawny wpis - spróbuj jeszcze raz')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [blur])

    const onInput = (e) => {
        setWordInput(e.target.value)
    }

    const styleH1 = {
        height: '24px',
        lineHeight: '24px',
        border: '1px dotted gray'
    }

    return (
        <div>
            <h1>{word}</h1>
            <h1 style={styleH1}>{wordInput}</h1>
            <input ref={textInput}
                onChange={onInput}
                onFocus={() => setFocus(`focus`)}
                onBlur={() => setBlur(`blur`)}
            />
            <h2>
                {result}
            </h2>
            <h2>Your time is: {!focus && timeRef.current !== undefined ? `${timeRef.current} ms` : null}</h2>
            <h2>sentence length: {!focus && wordInputLength !== 0 ? wordInputLength : null}</h2>
        </div>
    );
}

export default SpeedTest;
