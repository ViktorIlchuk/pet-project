const mongoose = require('mongoose');

const studentsDataSchema = mongoose.Schema({
    id: String,
    name: String,
    email: String,
    position: String,
}, {
    collection: 'studentdatas'
});

const StudentsData = mongoose.model('StudentsData', studentsDataSchema);

module.exports = StudentsData;