import React from "react";
// import { IconType } from "react-icons";
import styles from "./Button.module.css"
// const Button = ({ icon: Icon, onClick, children }) => {

const Button = (props) => {
  // const { icon: Icon} = props;
  const Icon = props.icon;
  console.log(props);
  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={props.onClick}>
        <Icon className={styles.icon} />
        {props.children}
      </button>
    </div>
  );
};

export default Button;
