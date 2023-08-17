export default function findInputElementsInForm(form) {
    const inputs = [...form.elements].filter((input) => input.type !== 'submit');

    return inputs;
}
