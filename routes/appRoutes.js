import express from 'express';
const router = express.Router();

import { getAllTasks,addTask,editTask,updateTask,deleteTask,markTaskAsCompleted } from '../controllers/appControllers.js';

router.get('/', getAllTasks);
router.post('/add-tasks', addTask);

router.get('/delete/:id', deleteTask);
router.get('/edit/:id', editTask);
router.post('/update/:id', updateTask);
router.get('/toggle/:id',markTaskAsCompleted)





export default router;