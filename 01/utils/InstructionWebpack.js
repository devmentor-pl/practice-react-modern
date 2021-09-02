import React from 'react';

import style from '../styles/style';

const InstructionWebpack = () => {
    return (
        <div style={style}><strong>Instruction Webpack</strong>:
            <li>otwórz konsolę <strong>cmd</strong> w katalogu głównym</li>
            <li><strong>npm i</strong> (zainstaluj node)</li>
            <li><strong>npm i react@17 react-dom@17</strong> (zainstaluj React)</li>
            <li><strong>npm i -D prettier eslint-config-prettier</strong> (zainstaluj prettier)</li>
            <li><strong>npm i -D eslint-loader@3</strong> (zainstaluj loader eslint)</li>
            <li><strong>npm i uuid --save</strong> (zainstaluj bibliotekę uuid)</li>
        </div>
    );
}

export default InstructionWebpack;