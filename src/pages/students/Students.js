import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import Button from '../../components/button';
import Table from '../../components/table';
import studentsData from '../../mocks/studentsData.json';
import './Students.scss';

const Students = () => {
    let { students, setStudents } = useContext(AppContext);
    
    useEffect(() => {
        setStudents([...studentsData])
    }, [setStudents]);

    const addStudent = () => {
        console.log('clicked')
    };

    const removeStudent = () => {
        return setStudents(students.filter( student => !student.checked))
    };

    const checkedToggle = ({target}) => {
        return setStudents(students.map( student => {
            if(student.id === target.id) {
                return {...student, checked: !student.checked}
            }
            return student;
        }))
    } 
    console.log(students)
    return (
        <div className='students'>
            <Table
                students={students}
                checkedToggle={checkedToggle}
            />
            <Button 
                text='Add student' 
                className='button'
                onClick={addStudent}
            />
            <Button 
                text='Remove student' 
                className='button'
                onClick={removeStudent}
            />
        </div>
    )
};

export default Students;