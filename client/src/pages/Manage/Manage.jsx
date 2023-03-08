import React, { useEffect, useState } from "react";
import styles from "./Manage.module.css";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import List from "../../components/List/List";
import { RiArrowGoBackFill } from "react-icons/ri";
import Taskbar from "../../components/Taskbar/Taskbar";
import { getAllTasks } from "../../utils/HandleApi";

const Manage = () => {
  const [todolist, setTodolist] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [task, setTask] = useState("");
  const [taskId, setTaskId] = useState("");
  useEffect(() => {
    getAllTasks(setTodolist);
    // console.log(task, taskId)
  },[]);

  return (
    <>
      <div className={styles.back}>
        <Button icon={RiArrowGoBackFill}>
          <Link to="/">Go Back</Link>
        </Button>
      </div>
      <div className={styles.list_container}>
        <Taskbar
          setTodolist={setTodolist}
          isUpdating={isUpdating}
          setIsUpdating={setIsUpdating}
          taskId={taskId}
        />
        <List
          todolist={todolist}
          count={todolist.length}
          setTodolist={setTodolist}
          isUpdating={isUpdating}
          setIsUpdating={setIsUpdating}
          task={task}
          setTask={setTask}
          taskId={taskId}
          setTaskId={setTaskId}
        />
      </div>
    </>
  );
};

export default Manage;
