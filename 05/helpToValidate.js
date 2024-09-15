export default  function validate(data, values) {
    const errors = []
    data.forEach(({name, validation}) => {
        const value = values[name]

        if(validation.isReq && value === '') {
            errors.push(`Pole ${name} jest wymagane`)
        }
        
        if(validation.regex && !validation.regex.test(value))
            errors.push(`Pole ${name} jest niepoprawnie uzupełnione`)
        

    } )

    return errors;
}