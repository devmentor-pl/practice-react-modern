import React from 'react';
import PropTypes from 'prop-types';

const RenderForm = ({
    state: { successMessage, firstName, lastName, email, phoneNumber, subject, message, errors },
    handleInputChange,
    handleSubmit,
}) => (
    <div className="form">
        <h1 className="form__title">Contact Form</h1>
        {successMessage && <p className="form__success">{successMessage}</p>}
        <form className="form__container" onSubmit={handleSubmit}>
            <label className="form__label" htmlFor="firstName">
                <input
                    placeholder="First name"
                    className="form__input"
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={firstName}
                    onChange={handleInputChange}
                />
                {errors.firstName !== null && <p className="form__error">{errors.firstName}</p>}
            </label>

            <label className="form__label" htmlFor="lastName">
                <input
                    placeholder="Last name"
                    className="form__input"
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={lastName}
                    onChange={handleInputChange}
                />
                {errors.lastName !== null && <p className="form__error">{errors.lastName}</p>}
            </label>

            <label className="form__label" htmlFor="email">
                <input
                    placeholder="Email"
                    className="form__input"
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleInputChange}
                />
                {errors.email !== null && <p className="form__error">{errors.email}</p>}
            </label>

            <label className="form__label" htmlFor="phoneNumber">
                <input
                    placeholder="Phone number"
                    className="form__input"
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={handleInputChange}
                />
                {errors.phoneNumber !== null && <p className="form__error">{errors.phoneNumber}</p>}
            </label>

            <label className="form__label" htmlFor="subject">
                <input
                    placeholder="Subject"
                    className="form__input"
                    type="text"
                    name="subject"
                    id="subject"
                    value={subject}
                    onChange={handleInputChange}
                />
                {errors.subject !== null && <p className="form__error">{errors.subject}</p>}
            </label>

            <label className="form__label" htmlFor="message">
                <textarea
                    placeholder="Message"
                    className="form__input form__textarea"
                    name="message"
                    id="message"
                    value={message}
                    onChange={handleInputChange}
                />
                {errors.message !== null && <p className="form__error">{errors.message}</p>}
            </label>

            <button className="form__button" type="submit">
                Submit
            </button>
        </form>
    </div>
);

RenderForm.propTypes = {
    state: PropTypes.shape({
        successMessage: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        email: PropTypes.string,
        phoneNumber: PropTypes.string,
        subject: PropTypes.string,
        message: PropTypes.string,
        errors: PropTypes.shape({
            firstName: PropTypes.string,
            lastName: PropTypes.string,
            email: PropTypes.string,
            phoneNumber: PropTypes.string,
            subject: PropTypes.string,
            message: PropTypes.string,
        }),
    }),
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

RenderForm.defaultProps = {
    state: {},
};
export default RenderForm;
