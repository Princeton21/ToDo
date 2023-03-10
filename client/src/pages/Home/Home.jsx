import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import Button from "../../components/Button/Button";
import CreatePopup from "../../components/CreatePopup/CreatePopup";
import {FaTools} from "react-icons/fa";
import {FaPlus} from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import {MdSpaceDashboard} from "react-icons/md";
import styles from "./Home.module.css";
import Dropdown from "../../components/Dropdown/Dropdown";
import { getAllLists } from "../../utils/HandleListApis";
const Home = () => {
  const [listArray, setListArray] = useState([]);
  


  const [popupIsOpen, setpopupIsOpen] = useState(false); 
  const [dropdownIsOpen, setdropdownIsOpen] = useState(false);

  const toggleDropdown = () => {
    setdropdownIsOpen(!dropdownIsOpen)
  }

  const togglePopup = () => {
    setpopupIsOpen(!popupIsOpen)
  }


  useEffect(() => {
    // console.log(dropdownIsOpen);//
    getAllLists(setListArray);
  }, [dropdownIsOpen, popupIsOpen]);

  return (
    <>
      <div className={styles.dashboard}>
        <Button icon={MdSpaceDashboard}>
          <Link to="/dashboard">Dashboard</Link>
        </Button>
      </div>
      <div className={styles.container}>
        <div className={styles.header}>Todo Checklist App</div>
        <div className={styles.btn_flex}>
          <div className={styles.drop_flex}>
            <Button icon={HiMenu} onClick={toggleDropdown}>
              Select a List
            </Button>
            <div className={styles.dropdown}>
              {dropdownIsOpen && <Dropdown listArray={listArray}/>}
            </div>
          </div>
          <Button icon={FaPlus} onClick={togglePopup}>
            New List
          </Button>
          <Button icon={FaTools}>
            <Link to="/manage">Manage Lists</Link>
          </Button>
        </div>
        <CreatePopup isOpen={popupIsOpen} togglePopup={togglePopup} />
      </div>
      {/* {
        listArray.map((list,index) => {
          return (
            <div className={styles.list_container} key={index}>
              <div className={styles.list_title}>{list.title}</div>
              <div className={styles.list_desc}>{list.color}</div>
            </div>
          )
        }
      )} */}
      
    </>
  );
};

export default Home;
