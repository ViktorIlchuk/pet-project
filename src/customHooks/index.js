import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const useForm = (callback, validation) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false)
    const history = useHistory();

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback()
            history.push('/students');
        }
    }, [errors]);

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setErrors(validation(values))
        setIsSubmitting(true)
    }

    const handleChange = (event) => {
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    }

    return {
        handleChange,
        handleSubmit,
        setValues,
        values,
        errors
    }
};

export function useDebounce(value, delay = 500) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(
        () => {
            const handler = setTimeout(() => {
                setDebouncedValue(value)
            }, delay);

            return () => clearTimeout(handler);
        }, [value]);
    
    return debouncedValue;
}