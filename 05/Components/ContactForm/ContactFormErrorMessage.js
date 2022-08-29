import React from "react";

const ContactFormErrorMessage = ({errors}) =>
    <ul>
        {errors.map(error => <li key={Math.random()}>{error}</li>)}
    </ul>

export default ContactFormErrorMessage;