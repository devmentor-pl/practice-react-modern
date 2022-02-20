export function getNameRegex() {
    return /^[\w'\-,.][^0-9_!¡?÷?¿\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/; //eslint-disable-line
}

export function getEmailRegex() {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //eslint-disable-line
}

export function getDateRegex() {
    // format YYYY-MM-DD
    return /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/; //eslint-disable-line
}

export function getTimeRegex() {
    // format HH:MM
    return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/; //eslint-disable-line
}

export function getPhoneRegex() {
    // with white spaces and +() ... ... ...
    return /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\.0-9]*$/; //eslint-disable-line
}
