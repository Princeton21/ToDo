import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { BsCheck2All } from "react-icons/bs";
import styles from "./Task.module.css";
import { completeTask, deleteCompletedTasks } from "../../services/todoService";

interface TaskProps {
  taskId: string;
  task: string;
  setTodolist: React.Dispatch<React.SetStateAction<[]>>;
  setTaskId: React.Dispatch<React.SetStateAction<string>>;
  handleUpdateTask: () => void;
}

const Task = ({
  taskId,
  task,
  setTodolist,
  setTaskId,
  handleUpdateTask,
}: TaskProps) => {
  const handleCompleteTask = () => {
    console.log(taskId);
    completeTask({ taskId, setTodolist });
    // deleteCompletedTasks({taskId, setTodolist});
    setTaskId(taskId);
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
