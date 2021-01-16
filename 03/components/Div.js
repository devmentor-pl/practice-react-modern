// ./src/components/Div.js
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ColorContext, TextContext } from '../context';

const Div = props => {
    const { title } = props;
    const borderColor = useContext(ColorContext);
    const text = useContext(TextContext);

    const style = { border: `1px solid ${borderColor} ` };
    return (
        <div style={style}>
            <h1>{title}</h1>
            <p>{text}</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia, justo
                et posuere viverra, ligula turpis egestas nisi, id iaculis augue ex non nisi. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra, pedr inceptos
                himenaeos. Etiam at ex orci. Praesent hendrerit diam quis tempor cursus. Aenean
                vitae porttitor purj us, eget luctus nisi. Mauris ex nibh, aliquet venenatis
                sagittis vitae, lobortis vitae ex. Donec congue dui leo, at auctor est laoreet
                gravida.
            </p>
        </div>
    );
};

Div.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Div;
