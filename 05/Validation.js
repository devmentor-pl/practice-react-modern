const formFields = [
    {name: "names", label: "Name and surname", pattern: /^[^\s]+( [^\s]+)+$/,  required: true},
    {name: "email", label: "Mail", pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,  required: true},
    {name: "phone", label:"Phone", pattern: /^\+\d{1,12}$/, required: true },
    {name: "subject", label: "Subject", required: true},
    {name: "userMessage", label: "User Message", required: true},
]

const checkCorrectFieldsData = (submittedData) => {
    const errors =[];

    formFields.forEach(field =>{
       
        const {name, label, pattern, required=true, } = field;
        const value = submittedData[name]
    
        if(required) {
            if(value.length === 0) {
                errors.push(`Field ${label} is empty!`)
            } 
        }

        if(pattern) {
            const reg = new RegExp(pattern);
            if(!reg.test(value)) {
                errors.push(`Field ${label} contains invalid characters or data format!`);
            }
        }
        
    })

    if (errors.length) {
        const alertFormattedErrors = errors.map(error=> `${error}`).join("\n")
        // eslint-disable-next-line
        window.alert(alertFormattedErrors);
        return false;
    } 

    return true;
    
}  


export default checkCorrectFieldsData;








