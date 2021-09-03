
const numberOnly = (event) => {
    if (!/[0-9]/.test(event.key)) {
        event.preventDefault();
    }
};

export default numberOnly;