import React from "react";
import styles from "./Dropdown.module.css";
// import { Todo } from "../../data/Todo.js";
const Dropdown = ({listArray}) => {
  const dropdownMenu = (Todo) => {
    return listArray.map((items, index) => {
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
  };
  return (
    <>
      <div className={styles.container}>
        {/* {dropdownMenu(listArray)} */}
        {listArray.map((items) => {
          return (
            <>
              <div className={styles.item_container} key={items.id}>
                <li className={styles.item}>{items.title}</li>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Dropdown;
