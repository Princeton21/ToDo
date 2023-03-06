import React, { useEffect, useState } from 'react'
import Button from '../Button/Button';
import Task from '../Task/Task';
import styles from './List.module.css'
import { BsChevronDown } from "react-icons/bs";
import Taskbar from '../Taskbar/Taskbar';
const List = (props) => {
  const taskItems = props.todolist;

  // const taskItems = [
  //   {
  //     task: "hello world",
  //   },
  //   {
  //     task: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet consequuntur nobis sequi rerum accusamus quibusdam ullam eum, voluptatibus repudiandae voluptatum.",

  //   },
  //   {
  //     task: "hello world",
  //   },
  //   {
  //     task: "hello world",
  //   },
  // ]
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <Button icon={BsChevronDown} color={60}>{props.count}</Button>
          <div className={styles.title}>List Name</div>
        </div>
        {taskItems.map((item, index) => {
          return <Task key={index} task={item.task} />;
        })}
      </div>
    </>
  );
}

export default List