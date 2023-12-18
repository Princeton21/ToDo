import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllLists } from "../../services/listService";
import List2 from "../../components/List/List2";
import { RiArrowGoBackFill } from "react-icons/ri";
import Button from "../../components/Button/Button";
import styles from "./Manage.module.css";
const Manage = () => {
  const [listArray, setListArray] = useState([
    {
      _id: "",
      title: "",
      color: 0,
      tasks: [],
    },
  ]);
  useEffect(() => {
    getAllLists({ setListArray });
  }, []);
  return (
    <>
      <div className={styles.flexContainer}>
        <div className={styles.back}>
          <Button icon={RiArrowGoBackFill}>
            <Link to="/">Go Back</Link>
          </Button>
        </div>
        <div className={styles.listContainer}>
          {listArray &&
            listArray.length > 0 &&
            listArray.map((list) => {
              return (
                <div key={list._id} className={styles.list}>
                  {/* <Link to={`/list/${list._id}`}> */}
                  <List2
                    title={list.title}
                    color={list.color}
                    isButtonThere={false}
                    count={list.tasks.length}
                  />
                  {/* </Link> */}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Manage;
