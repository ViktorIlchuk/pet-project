import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { useHistory } from 'react-router-dom';
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

    const handleSearch = ({target}) => {
        const keyword = target.value;

        if(keyword !== '') {
            const results = foundStudents.filter( student => {
                const [name, surname] = student.name.split(' ');

                return name.toLowerCase().startsWith(keyword.toLowerCase()) || 
                surname.toLowerCase().startsWith(keyword.toLowerCase())
            });
            setFoundStudents(results);
        } else {
            setFoundStudents(students);
        }

        setName(keyword);
    };

    return (
        <div className='students'>
            <SearchBar 
                handleSearch={handleSearch}
                placeholder='Serch student'
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