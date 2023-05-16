import emailjs from '@emailjs/browser';
import account from './account';

function sendEmail(data) {
    // eslint-disable-next-line camelcase
    const { service_ID, template_ID, public_KEY } = account;

    emailjs.send(service_ID, template_ID, data, public_KEY).then(
        (response) => {
            // eslint-disable-next-line no-console
            console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
            // eslint-disable-next-line no-console
            console.log('FAILED...', error);
        },
    );
}

export default sendEmail;
