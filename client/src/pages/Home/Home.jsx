import React from "react";
import Button from "../../components/Button/Button";
import styles from "./Home.module.css";
import {FaTools} from "react-icons/fa";
import {FaPlus} from "react-icons/fa";
import {HiMenu} from "react-icons/hi";
const Home = () => {

  const handleMenu = () => {
    console.log("Menu");
  }
  const handleList = () => {
    console.log("List");
  }
  const handleTool = () => {
    console.log("Tool");
  }

  return (
    <>
      <div className={styles.header}>Todo Checklist App</div>
      <div className={styles.btn_flex}>
        <Button icon={HiMenu} onClick={handleMenu}>Select a List</Button>
        <Button icon={FaPlus} onClick={handleList}>New List</Button>
        <Button icon={FaTools} onClick={handleTool}>Manage Lists</Button>
      </div>  
    </>
  )
};

export default Home;
