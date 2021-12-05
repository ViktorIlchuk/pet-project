import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { useHistory } from 'react-router-dom';
import { useDebounce } from '../../customHooks';
import Button from '../../components/button';
import Table from '../../components/table';
import SearchBar from '../../components/search-bar';
import './Students.scss';

const Students = () => {
    const studentsOrder = {
        regular: 'regular',
        reverse: 'reverse'
    };

    const { students, setStudents } = useContext(AppContext);
    const [orderType, setOrderType] = useState(studentsOrder.regular);
    const [sortedStudents, setSortedStudents] = useState(students);
    const [name, setName] = useState('');
    const [markedStudentsId, setMarkedStudentsId] = useState([]);
    const history = useHistory();
    const searchValue = useDebounce(name, 500);
    const iconName = orderType === studentsOrder.regular ? 'down_arrow' : 'up_arrow';
    
    useEffect(
        () => {
            if(searchValue) {
                const results = sortedStudents.filter( student => {
                    const [name, surname] = student.name.split(' ');
    
                    return name.toLowerCase().startsWith(searchValue.toLowerCase()) || 
                    surname.toLowerCase().startsWith(searchValue.toLowerCase())
                });
                setSortedStudents(results);
            } else {
                setSortedStudents(students);
            }
        }, [searchValue]
    );

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
    };

    const handleTableSort = () => {
        if(orderType === studentsOrder.regular) {
            setSortedStudents([...sortedStudents].sort((stud1, stud2) => stud2.name.localeCompare(stud1.name)));
            setOrderType(studentsOrder.reverse);
        }
        if(orderType === studentsOrder.reverse) {
            setSortedStudents([...sortedStudents].sort((stud1, stud2) => stud1.name.localeCompare(stud2.name)));
            setOrderType(studentsOrder.regular);
        }
    };

    return (
        <div className='students'>
            <SearchBar 
                onChange={e => setName(e.target.value)}
                placeholder='Search student'
                value={name}
            />
            <Table
                students={sortedStudents}
                onHandleSelect={handleSelectStudent}
                onHandleEdit={handleEditStudent}
                onHandleSort={handleTableSort}
                iconName={iconName}
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