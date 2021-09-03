
const alphaOnly = (event) => {
    if (!/[a-z]/.test(event.key) && !/[A-Z]/.test(event.key) && !/[ąćęłóńśźż]/.test(event.key) && !/[ĆŁŚŹŻ]/.test(event.key) && !/[-]/.test(event.key)) {
        event.preventDefault();
    }
};

export default alphaOnly;