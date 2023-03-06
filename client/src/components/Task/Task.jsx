import React from 'react'
import { BiEdit } from "react-icons/bi";
import { BsCheck2All } from "react-icons/bs";
import styles from './Task.module.css'
const Task = ({task,updateTask,completeTask}) => {
  return (
    <div className={styles.task}>
      <div className={styles.text}>{task}</div>
      <div className={styles.icons}>
        <BiEdit className={styles.icon} onClick={updateTask} />
        <BsCheck2All className={styles.icon} onClick={completeTask} />
      </div>
    </div>
  );
}

export default Task;