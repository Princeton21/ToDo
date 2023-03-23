import React from "react";
import styles from "./Button.module.css"

const Button = (props:any) => {
  const Icon = props.icon;
  // console.log(props);
  return (
    <div className={styles.container}>
      <button className={styles.btn}
        onClick={props.onClick}
        style={{ backgroundColor: `hsl(${props.color}, 45%, 63%)` }}  
      >
        <Icon className={styles.icon} />
        {props.children}
      </button>
    </div>
  );
};

export default Button;
