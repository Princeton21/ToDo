import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { BsCheck2All } from "react-icons/bs";
import styles from "./Task.module.css";
import { completeTask, deleteCompletedTasks } from "../../utils/HandleApi";
const Task = ({ taskId, task, setTodolist,setTaskId, handleUpdateTask }) => {
  const handleCompleteTask = () => {
    console.log(taskId);
    // completeTask(taskId,setTodolist);
    deleteCompletedTasks(taskId, setTodolist);
    // setTaskId(task.filter((item) => item._id !== taskId));
  };
  return (
    <div className={styles.task}>
      <div className={styles.text}>{task}</div>
      <div className={styles.icons}>
        <BiEdit className={styles.icon} onClick={handleUpdateTask} />
        <BsCheck2All className={styles.icon} onClick={handleCompleteTask} />
      </div>
    </div>
  );
};

export default Task;
