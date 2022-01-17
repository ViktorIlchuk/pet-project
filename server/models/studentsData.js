import mongoose from 'mongoose';

const studentsDataSchema = mongoose.Schema({
    id: String,
    name: String,
    email: String,
    position: String,
});

const StudentsData = mongoose.model('StudentsData', studentsDataSchema);

export default StudentsData;