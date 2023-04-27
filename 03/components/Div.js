// ./src/components/Div.js
import React from 'react';
import { TextContext, ColorContext } from '../context';

function Div() {
    const { Consumer: TextConsumer } = TextContext;
    const { Consumer: ColorConsumer } = ColorContext;

    return (
        <ColorConsumer>
            {(color) => (
                <div style={{ border: `1px solid ${color}` }}>
                    <TextConsumer>{(text) => <h1>{text}</h1>}</TextConsumer>
                    <p>
                        {/* eslint-disable max-len */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia, justo et posuere
                        viverra, ligula turpis egestas nisi, id iaculis augue ex non nisi. Class aptent taciti sociosqu
                        ad litora torquent per conubia nostra, pedr inceptos himenaeos. Etiam at ex orci. Praesent
                        hendrerit diam quis tempor cursus. Aenean vitae porttitor purj us, eget luctus nisi. Mauris ex
                        nibh, aliquet venenatis sagittis vitae, lobortis vitae ex. Donec congue dui leo, at auctor est
                        laoreet gravida.
                        {/* eslint-enable max-len */}
                    </p>
                </div>
            )}
        </ColorConsumer>
    );
}

export default Div;
