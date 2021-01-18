import React from 'react';
import PropTypes from 'prop-types';

const FormRow = (props) => {
    const {definition} = props;

    return (
        <p>
            <label htmlFor={ definition.id }>{ definition.labelText }
                <definition.tag type={ definition.type } 
                    id={ definition.id }
                    value={ definition.value }
                    onChange={ e => definition.onChangeHandler(
                        { type: definition.actionType, payload: e.target.value }) 
                    }
                    placeholder={ definition.placeholder} 
                    minLength={ definition. minLength }
                    required={ definition.required }
                    pattern={ definition.pattern }
                    rows={ definition.rows }
                    cols={ definition.cols } />
            </label>
        </p>
    )
}

FormRow.propTypes = {
    definition: PropTypes.isRequired

}

export default FormRow;