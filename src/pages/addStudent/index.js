import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { useForm } from '../../customHooks';
import uniqid from 'uniqid';
import Form from '../../components/form';
import addStudentValidation from '../../formValidation';
import './index.scss';


const AddStudent = ({
    action = 'Add',
    targetStudentData = {}
}) => {
    const { students, setStudents } = useContext(AppContext);

    const addData = () => {
        if(!!targetStudentData.id) {
            const updatedStudents = [...students];
            const targetStudentIndex = students.findIndex( student => student.id === targetStudentData.id );
            const updatedStudent = {
                id: targetStudentData.id,
                name: values.name,
                email: values.email,
                position: values.position
            };

            updatedStudents.splice(targetStudentIndex, 1, updatedStudent);
            setStudents([...updatedStudents]);
        } else {
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
    }
    
    const {
        handleChange,
        handleSubmit,
        values,
        errors
    } = useForm(addData, addStudentValidation);

    return (
        <div className='add-student-page'>
            <h1>{`${action} Student`}</h1>
            <Form
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                values={values}
                errors={errors}
                targetStudentData={targetStudentData}
                action={action}
            />
        </div>
    )
};

export default AddStudent;