import { Router } from "express";
import {
  getLists,
  getList,
  createList,
  deleteList,
} from "../controllers/list.controller.js";

const router = Router();

router.get("/list", getLists);
router.get("/list/:listId", getList);
router.post("/list", createList);
// router.put("/list", updateList);
router.delete("/list/:listId", deleteList);

export default router;
