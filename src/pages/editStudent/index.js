import React from "react";
import AddStudent from "../addStudent";
import './index.scss';

const EditStudent = (props) => {
    return (
        <AddStudent
            action='Edit'
            targetStudentData={props.location.state}
        />
    )
}

export default EditStudent;