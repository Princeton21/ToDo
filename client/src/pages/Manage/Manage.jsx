import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllLists } from "../../utils/HandleListApis";
import List from "../../components/List/List";
import { RiArrowGoBackFill } from "react-icons/ri";
import Button from "../../components/Button/Button";
import styles from "./Manage.module.css";
const Manage = () => {
  const [listArray, setListArray] = useState([
    {
      _id: "",
      title: "",
      color: 0,
    },
  ]);
  useEffect(() => {
    getAllLists(setListArray);
  }, []);
  return (
    <>
      <div className={styles.back}>
        <Button icon={RiArrowGoBackFill}>
          <Link to="/">Go Back</Link>
        </Button>
      </div>
      <div className={styles.list_container}>
        {listArray.map((list) => {
          return (
            <div key={list._id} className={styles.list}>
              {/* <Link to={`/list/${list._id}`}> */}
              <List title={list.title} color={list.color} isButtonThere={false} />
              {/* </Link> */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Manage;
