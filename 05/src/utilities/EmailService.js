import email from '@emailjs/browser';
import account from './account';

class EmailService {
    // eslint-disable-next-line class-methods-use-this
    send(data) {
        const { serviceID, templateID, publicKey } = account;

        return email.send(serviceID, templateID, data, publicKey);
    }
}

export default EmailService;
