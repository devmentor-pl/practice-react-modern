const validationEmail = (email) => {
    if (!email.includes('@') || !email.includes('.') || email.length <= 8) {
        return true;
    }
}

export default validationEmail;