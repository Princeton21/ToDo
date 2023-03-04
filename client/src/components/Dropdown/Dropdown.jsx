import React from "react";
import styles from "./Dropdown.module.css";
import { Todo } from "../../data/Todo.js";
const Dropdown = () => {
  const dropdownMenu = () =>{
    Todo.map((items, index) => {
      return (
        <>
          <div className={styles.item_container}>
            <li className={styles.item} key={index}>
              {items.title}
            </li>
          </div>
        </>
      );
    });
  }
  return (
    <>
      <div className={styles.container}>
        {/* <ul className={styles.list}>{dropdownMenu()}</ul> */}
        {
    Todo.map((items, index) => {
      return (
        <>
          <div className={styles.item_container}>
            <li className={styles.item} key={index}>
              {items.title}
            </li>
          </div>
        </>
      );
    })
  }
      </div>
    </>
  );
};

export default Dropdown;
