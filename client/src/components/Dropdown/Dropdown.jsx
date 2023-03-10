import React from "react";
import styles from "./Dropdown.module.css";
// import { Todo } from "../../data/Todo.js";
import { Link } from "react-router-dom";
const Dropdown = ({listArray}) => {
  return (
    <>
      <div className={styles.container}>
        {listArray.map((list) => {
          return (
            <>
              <div
                key={list._id}
                className={styles.item}
                style={{
                  backgroundColor: `hsl(${list.color}, 50%, 61%)`,
                  border: `4px solid hsl(${list.color}, 100%, 30%)`,
                }}
              >
                <Link to={`/list/${list._id}`}>{list.title}</Link>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Dropdown;
