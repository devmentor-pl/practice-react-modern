import emailjs from '@emailjs/browser';
import acc from './account';

const SendEmail = (form) => {
    emailjs
        .sendForm(`${acc.serviceId}`, `${acc.temaplteId}`, form.current, `${acc.publicKey}`)
        .then(
            (result) => {
                // eslint-disable-next-line no-console
                console.log(result, 'Succes');
            },
            (error) => {
                // eslint-disable-next-line no-console
                console.log(error.text, 'smth went wrong');
            },
        );
};
export default SendEmail;
