import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Task from "../Task/Task";
import styles from "./List.module.css";
import { BsChevronDown, BsChevronBarUp } from "react-icons/bs";
const List = (props) => {
  const [isListOpen, setIsListOpen] = useState(false);
  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  const handleUpdateTask = (_id, task) => {
    props.setIsUpdating(true);
    props.setTask(task);
    props.setTaskId(_id);
    // console.log(props.task, props.taskId);
  };

  const taskItems = props.todolist;

  return (
    <>
      <div
        className={styles.container}
        style={{
          width: isListOpen ? undefined : "max-content",
          backgroundColor: `hsl(${props.color}, 100%, 90%)`,
        }}
      >
        <div className={styles.header}>
          {props.isButtonThere && (
            <Button
              icon={isListOpen ? BsChevronDown : BsChevronBarUp}
              color={props.color}
              onClick={toggleList}
            >
              {props.count}
            </Button>
          )}
          <div
            className={styles.title}
            style={{
              backgroundColor: `hsl(${props.color}, 45%, 63%)`,
            }}
          >
            {props.title}
          </div>
        </div>
        <div
          className={styles.list_items}
          style={isListOpen ? { display: "block" } : { display: "none" }}
        >
          {/* {Array.isArray(props.todolist) &&
            taskItems.map((item) => {
              return (
                <Task
                  key={item._id}
                  taskId={item._id}
                  setTaskId={props.setTaskId}
                  task={item.task}
                  setTodolist={props.setTodolist}
                  handleUpdateTask={() => {
                    handleUpdateTask(item._id, item.task);
                  }}
                />
              );
            })} */}
        </div>
      </div>
    </>
  );
};

export default List;
