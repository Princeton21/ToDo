import React, { useState } from "react";
import styles from "./Taskbar.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "../Button/Button";
import { addTask } from "../../utils/HandleApi";

const Taskbar = ({ todolist }) => {
  const [task, setTask] = useState("");

    const handleAddTask = (e) => {
        e.preventDefault();
        addTask(task, setTask, todolist);
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
        <Button icon={AiOutlinePlus} onClick={handleAddTask}>
          Add
        </Button>
      </form >
    </>
  );
};

export default Taskbar;
