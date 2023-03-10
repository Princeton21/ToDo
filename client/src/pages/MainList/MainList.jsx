import React, { useEffect, useState } from "react";
import styles from "./MainList.module.css";
import Button from "../../components/Button/Button";
import { Link,useParams } from "react-router-dom";
import List from "../../components/List/List";
import { RiArrowGoBackFill } from "react-icons/ri";
import Taskbar from "../../components/Taskbar/Taskbar";
import { getAllTasks } from "../../utils/HandleTodoApis";

const MainList = () => {
  const [todolist, setTodolist] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [task, setTask] = useState("");
  const [taskId, setTaskId] = useState("");
  const { listId } = useParams();

  useEffect(() => {
    getAllTasks(setTodolist);
    // console.log(task, taskId)
    console.log(listId);
  }, []);

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
          // isButtonThere={}
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

export default MainList;
