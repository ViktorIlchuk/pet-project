import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { useForm } from '../../customHooks';
import uniqid from 'uniqid';
import Form from '../../components/form';
import addStudentValidation from '../../formValidation';
import './index.scss';


const AddStudent = () => {
    const { students, setStudents } = useContext(AppContext);
    const {
        handleChange,
        handleSubmit,
        values,
        errors} = useForm(addData, addStudentValidation);

    const addData = () => {
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
        <div className='add-student-page'>
            <h1>Add student</h1>
            <Form
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                values={values}
                errors={errors}
            />
        </div>
    )
};

export default AddStudent;