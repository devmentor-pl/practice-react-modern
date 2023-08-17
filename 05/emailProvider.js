class API {
    constructor() {
        this.url = 'https://api.emailjs.com/api/v1.0/email/send';
    }

    add(data) {
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        return this.#fetch(options);
    }

    #fetch(options) {
        return fetch(this.url, options).then((resp) => {
            if (resp.ok) return resp.text();
            return Promise.reject(resp);
        });
    }
}

const emailProvider = new API();
export default emailProvider;
