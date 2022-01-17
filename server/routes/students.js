import express from 'express';

import {getStudents, postStudents} from '../controllers/students.js';

const router = express.Router();

router.get('/', getStudents);
router.post('/', postStudents);

export default router;