import { Router } from 'express';
import { addTask, updateTask, completeTask, deleteCompletedTasks } from '../controllers/task.controller.js';
const router = Router();

router.post("/:listId/add", addTask);
router.put("/:listId/update", updateTask);
router.patch("/:listId/complete", completeTask);
router.delete("/:listId/delete", deleteCompletedTasks)
export default router;