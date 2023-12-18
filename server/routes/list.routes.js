import { Router } from "express";
import {
  getLists,
  getList,
  createList,
  deleteList,
} from "../controllers/list.controller.js";

const router = Router();

router.get("/", getLists);
router.get("/:listId", getList);
router.post("/", createList);
// router.put("/", updateList);
router.delete("/:listId", deleteList);

export default router;
