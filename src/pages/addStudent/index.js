import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { useForm } from "../../customHooks";
import uniqid from 'uniqid';
import Form from '../../components/form';
import formValidation from '../../formValidation';
import './index.scss';


const AddStudent = () => {
    const { students, setStudents } = useContext(AppContext);
    const {
        handleChange,
        handleSubmit,
        values,
        errors} = useForm(addData, formValidation);

    function addData() {
        const updatedStudents = [...students,
            {
                id: uniqid(),
                name: values.name,
                email: values.email,
                position: values.position
            }
        ];
        setStudents([...updatedStudents]);
    }

    return (
        <>
            <h1>Add student</h1>
            <Form
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                values={values}
                errors={errors}
            />
        </>
    )
};

export default AddStudent;