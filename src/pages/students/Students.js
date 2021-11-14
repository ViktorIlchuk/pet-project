import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { useHistory } from 'react-router-dom';
import { useDebounce } from '../../customHooks';
import Button from '../../components/button';
import Table from '../../components/table';
import SearchBar from '../../components/search-bar';
import './Students.scss';

const Students = () => {
    const { students, setStudents } = useContext(AppContext);
    const [foundStudents, setFoundStudents] = useState(students);
    const [name, setName] = useState('')
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

    const handleEditStudent = (target) => {
        history.push({
            pathname: '/students/edit',
            state: target
        });
    }
    const debouncedValue = useDebounce(name, 500);

    useEffect(
        () => {
            if(debouncedValue) {
                const results = foundStudents.filter( student => {
                    const [name, surname] = student.name.split(' ');
    
                    return name.toLowerCase().startsWith(debouncedValue.toLowerCase()) || 
                    surname.toLowerCase().startsWith(debouncedValue.toLowerCase())
                });
                setFoundStudents(results);
            } else {
                setFoundStudents(students);
            }
        }, [debouncedValue]
    );

    return (
        <div className='students'>
            <SearchBar 
                onChange={e => setName(e.target.value)}
                placeholder='Search student'
                value={name}
            />
            <Table
                students={foundStudents}
                onHandleSelect={handleSelectStudent}
                onHandleEdit={handleEditStudent}
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
            />
        </div>
    )
};

export default Students;