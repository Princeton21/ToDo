import { Router } from 'express';
import { getTask, addTask, updateTask, completeTask, deleteCompletedTasks } from '../controllers/todo.controller.js';
const router = Router();

router.get('/', getTask);
router.post("/add", addTask);
router.put("/update", updateTask);
router.delete("/complete", completeTask);
router.delete("/delete", deleteCompletedTasks)
export default router;