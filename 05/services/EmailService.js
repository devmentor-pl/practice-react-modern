import emailjs from 'emailjs-com';

const emailServiceConfig = {
    serviceId: 'service_emjaoyi',
    templateId: 'template_u0bkqzm',
    userId: 'f2OjEqG3mY92tMYUT',
};

const createTemplateParams = (state) => ({
    from_name: `${state.firstName} ${state.lastName}`,
    to_name: 'mtest9270@gmail.com',
    subject: state.subject,
    message_html: state.message,
});

const handleEmailSubmission = async (state, dispatch) => {
    try {
        const templateParams = createTemplateParams(state);
        await emailjs.send(
            emailServiceConfig.serviceId,
            emailServiceConfig.templateId,
            templateParams,
            emailServiceConfig.userId
        );
        dispatch({ type: 'RESET_FORM' });

        dispatch({
            type: 'UPDATE_FIELD',
            field: 'successMessage',
            value: 'Mail was sent successfully!',
        });
    } catch (error) {
        // eslint-disable-next-line
        console.error('Error sending email: ', error);
    }
};

export default handleEmailSubmission;
