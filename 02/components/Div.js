// ./src/components/Div.js
import React from 'react';
import PropTypes from 'prop-types';
import TextContext from "./context";

const Div = () => {
  return (
    <TextContext.Consumer>
      {(text) => (
        <div>
          <h1>{text}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            lacinia, justo et posuere viverra, ligula turpis egestas nisi, id
            iaculis augue ex non nisi. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos.
          </p>
        </div>
      )}
    </TextContext.Consumer>
  );
};

export default Div;
