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
  const [taskId, setTaskId] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  const updateTask = (e) => {
    setIsUpdating(true);
    setTask(e.task);
    setTaskId(e._id);
  };
  useEffect(() => {
    getAllTasks(setTodolist);
  },[]);

  return (
    <>
      <div className={styles.back}>
        <Button icon={RiArrowGoBackFill}>
          <Link to="/">Go Back</Link>
        </Button>
      </div>
      <div className={styles.list_container}>
        <Taskbar todolist={todolist} />
        <List todolist={todolist} count={todolist.length} />
      </div>
    </>
  );
};

export default Manage;
