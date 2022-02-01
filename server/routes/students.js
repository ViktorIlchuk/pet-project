const express = require('express');
const path = require("path");
const StudentsData = require('../models/studentsData.js');

// const {getStudents, postStudents} = require('../controllers/students.js');

const router = express.Router();

router.all('*', (req, res, next) => {
    res
        .header('Access-Control-Allow-Origin', '*')
        .header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
        .header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

router.get('/', (req, res) => res.sendFile(path.join(__dirname + '/build/index.html'))); 

router.get("/students", (req, res, next) => {
    StudentsData.find((err, users) => {
        if (err) return next(err);
        return res.json(users);
    });
});

router.post("/students", (req, res, next) => {
    StudentsData.create(req.body, (err, user) => {
        if (err) return next(err);
        res.json(user);
    });
});
// router.post('/', postStudents);

module.exports = router;