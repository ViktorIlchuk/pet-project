export default function formValidation(values) {
    const errors = {};
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(!values.email) {
        errors.email = 'Email address is required';
    }else if (!re.test(String(values.email).toLowerCase())) {
        errors.email = 'Email address is invalid';
    }else if(!values.name) {
        errors.name = 'Name is required'
    }else if(values.name.length <= 5) {
        errors.name = 'Name is invalid'
    }else if(!values.position) {
        errors.position = 'Position is required'
    }else if(values.position <= 5) {
        errors.position = 'Position is invalid'
    }

    return errors;
}