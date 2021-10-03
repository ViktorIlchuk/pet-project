import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { useHistory } from 'react-router-dom';
import Button from '../../components/button';
import Table from '../../components/table';
import './Students.scss';

const Students = () => {
    const { students, setStudents } = useContext(AppContext);
    const [markedStudentsId, setMarkedStudentsId] = useState([]);
    const history = useHistory();

    const handleRedirectToCreateNewPage = () => {
        history.push('/students/create-new');
    };

    const handleRemoveStudent = () => {
        setStudents(students.filter( student => {
            return markedStudentsId.indexOf(student.id) === -1;
        }));
    };

    const handleSelectStudent = ({target}) => {
        const index = markedStudentsId.indexOf(target.id);
        if(index !== -1) { 
            return setMarkedStudentsId(markedStudentsId.splice(index, 1));
        }
        return setMarkedStudentsId([...markedStudentsId, target.id]);
    };

    return (
        <div className='students'>
            <Table
                students={students}
                onHandleSelect={handleSelectStudent}
            />
            <Button 
                text='Add student' 
                className='button'
                onClick={handleRedirectToCreateNewPage}
            />
            <Button 
                text='Remove student' 
                className='button'
                onClick={handleRemoveStudent}
            ></Button>
        </div>
    )
};

export default Students;