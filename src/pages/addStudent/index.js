import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { useHistory } from 'react-router-dom';
import { useInput } from '../../customHooks';
import Button from '../../components/button';
import uniqid from 'uniqid';
import './index.scss';

const AddStudent = () => {
    const { students, setStudents } = useContext(AppContext);
    const {value: name, bind: bindName, reset: resetName} = useInput('');
    const {value: email, bind: bindEmail, reset: resetEmail} = useInput('');
    const {value: position, bind: bindPosition, reset: resetPosition} = useInput('');
    const history = useHistory();
    
    const handleRedirectToStudentsPage = () => {
        history.push('/students');
    };

    const handleResetForm = () => {
        resetName();
        resetEmail();
        resetPosition();
    }

    const handleSubmit = event => {
        event.preventDefault();
        const updatedStudents = [...students, {id: uniqid(), name, email, position}];
        setStudents([...updatedStudents]);
        handleResetForm()
        handleRedirectToStudentsPage();
    };

    return (
        <>
            <h1>Add student</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type='text' {...bindName} />
                </label>
                <label>
                    Email:
                    <input type='text' {...bindEmail} />
                </label>
                <label>
                    Position:
                    <input type='text' {...bindPosition} />
                </label>
                <Button type='submit' text='Add' />
            </form>
        </>
    )
};

export default AddStudent;