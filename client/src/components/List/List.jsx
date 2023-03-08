import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Task from "../Task/Task";
import styles from "./List.module.css";
import { BsChevronDown } from "react-icons/bs";
const List = (props) => {

  const handleUpdateTask = (_id, task) => {
    props.setIsUpdating(true);
    props.setTask(task);
    props.setTaskId(_id);
    // console.log(props.task, props.taskId);
  };

  const taskItems = props.todolist;
  
  return (
    <>
      <div className={styles.container} style={{backgroundColor:`hsl(${props.color}, 45%, 63%)`}}>
        <div className={styles.header}>
          <Button icon={BsChevronDown} color={60}>
            {props.count}
          </Button>
          <div className={styles.title}>List Name</div>
        </div>
        {Array.isArray(props.todolist) &&
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
          })}
      </div>
    </>
  );
};

export default List;
