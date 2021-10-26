const ValidateData = ({firstName, lastName, email, title, message}) => {
    const errors = [];
    if (firstName.length<3) errors.push('Wpisz poprawnie imię');
    if (lastName.length<3) errors.push('Wpisz poprawnie nazwisko');
    if (email.length<3 || !email.includes('@')) errors.push('Wpisz poprawnie adres email');
    if (title.length<3) errors.push('Wpisz poprawnie temat wiadomości');
    if (message.length<20) errors.push('treść wiadomości powinna zawierać conajmniej 20 znaków');
    // if (errors.length>0) {
    //     alert(errors);
    //     return false
    // } else { 
    //     return true}
    return errors;
}

export default ValidateData;