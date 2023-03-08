import React, { useState } from "react";
import styles from "./Taskbar.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "../Button/Button";
import { addTask, updateTask } from "../../utils/HandleApi";

const Taskbar = ({ setTodolist, isUpdating, setIsUpdating, taskId }) => {
  const [task, setTask] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    // addTask(task, setTask, setTodolist);
    if (isUpdating) {
      updateTask(taskId, task, setTask, setIsUpdating, setTodolist);
    } else {
      addTask(task, setTask, setTodolist);
      setTask("");
    }
  };

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <>
      <form className={styles.container} onSubmit={handleAddTask}>
        <input
          className={styles.search_input}
          type="text"
          value={task}
          onChange={handleTaskChange}
        />
        <Button icon={AiOutlinePlus}>{isUpdating ? "Update" : "Add"}</Button>
      </form>
    </>
  );
};

export default Taskbar;
