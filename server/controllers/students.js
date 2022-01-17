import StudentsData from '../models/studentsData.js';

export const getStudents = async (req, res) => {
    try {
        const students = await StudentsData.find();

        res.status(200).json(students);
    } catch(error) {
        res.statut(404).json({message: error.message})
    }
};

export const postStudents = async (req, res) => {
    const student = req.body;

    const newStudent = new StudentsData(student);

    try {
        await newStudent.save();

        res.status(201).json(newStudent);
    } catch(error) {
        res.status(409).json({message: error.message});
    }
};