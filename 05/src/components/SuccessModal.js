import React from 'react';
import PropTypes from 'prop-types';

function SuccessModal({ onClick, styles: { aside, h1, p, button } }) {
    return (
        <aside style={aside}>
            <h3 style={h1}>Thank you for your message.</h3>
            <p style={p}>We will do our best to answer you as soon as possible.</p>
            <button
                type="button"
                style={button}
                onClick={onClick}
            >
                Close
            </button>
        </aside>
    );
}

SuccessModal.propTypes = {
    onClick: PropTypes.func.isRequired,
    styles: PropTypes.shape({
        aside: PropTypes.objectOf(PropTypes.string),
        h1: PropTypes.objectOf(PropTypes.string),
        p: PropTypes.objectOf(PropTypes.string),
        button: PropTypes.objectOf(PropTypes.string),
    }).isRequired,
};

export default SuccessModal;
