import { Router } from 'express';
import { getTask, addTask, updateTask, deleteTask } from '../controllers/todo.controller.js';
const router = Router();

router.get('/', getTask);
router.post("/add", addTask);
router.post("/update", updateTask);
router.post("/delete", deleteTask);
export default router;