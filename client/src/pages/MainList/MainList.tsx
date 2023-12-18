import React, { useEffect, useState } from "react";
import { getAllTasks } from "../../services/todoService";
import { Link, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import { RiArrowGoBackFill } from "react-icons/ri";
import List from "../../components/List/List";
import Taskbar from "../../components/Taskbar/Taskbar";
import { useSelector ,useDispatch } from "react-redux";
import styles from "./MainList.module.css";
const MainList = () => {

  const dispatch = useDispatch();
  const { listId } = useParams();
  

  const [todolist, setTodolist] = useState([
    {
      task: "",
    },
  ]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [task, setTask] = useState("");
  const [taskId, setTaskId] = useState("");
  const [color, setColor] = useState(0);

  useEffect(() => {
    getAllTasks({ setTodolist });
    // console.log(task, taskId)
    console.log({
      todolist,
      isUpdating,
      setIsUpdating,
      task,
      setTask,
      taskId,
      setTaskId,
    });
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
          title="Tasks"
          isButtonThere={false}
          count={todolist.length}
          todolist={todolist}
          setTodolist={setTodolist}
          isUpdating={isUpdating}
          setIsUpdating={setIsUpdating}
          task={task}
          setTask={setTask}
          taskId={taskId}
          setTaskId={setTaskId}
          color={0}
        />
      </div>
    </>
  );
};

export default MainList;
