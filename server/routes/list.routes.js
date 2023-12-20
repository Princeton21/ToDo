import { Router } from "express";
import {
  getLists,
  getList,
  createList,
  deleteList,
  deleteAllLists,
} from "../controllers/list.controller.js";

const router = Router();

router.get("/", getLists);
router.get("/:listId", getList);
router.post("/", createList);
// router.put("/", updateList);
router.delete("/:listId", deleteList);
// router.delete("/", deleteAllLists);
export default router;
