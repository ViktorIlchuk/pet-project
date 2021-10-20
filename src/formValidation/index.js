import {validateName, validatePosition, validateEmail} from './commonValidation';


const addStudentValidation = (values) => {
    const nameErrors = validateName(values);
    const emailErrors = validateEmail(values);
    const positionErrors = validatePosition(values);
    
    const errors = {...nameErrors, ...emailErrors, ...positionErrors} || {};
    return errors;
}

export default addStudentValidation;