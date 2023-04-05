import emailjs from '@emailjs/browser';
import account from './account';

const sendEmail = (form) => {
    const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = account;
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY).then(
        (result) => {
            // eslint-disable-next-line
            console.log(result);
        },
        (error) => {
            // eslint-disable-next-line
            console.log(error.text);
        },
    );
};

export default sendEmail;
