import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteList, getAllLists } from "../../services/listService";
import List2 from "../../components/List/List2";
import { RiArrowGoBackFill } from "react-icons/ri";
import Button from "../../components/Button/Button";
import styles from "./Manage.module.css";
import DltBtn from "../../components/Button/DltBtn";
const Manage = () => {
  const [listArray, setListArray] = useState([
    {
      _id: "",
      title: "",
      color: 0,
      tasks: [],
    },
  ]);
    const handleDeleteList = async (listId : any) => {
      try {
        await deleteList({ listId });
        getAllLists({ setListArray });
      } catch (err) {
        console.log(err);
      }
    };
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
                <div key={list._id}>
                  <div className={styles.subContainer}>
                    <Link to={`/list/${list._id}`} className={styles.list}>
                      <List2
                        title={list.title}
                        color={list.color}
                        isButton={false}
                        count={list.tasks.length}
                      />
                    </Link>
                    <div className={styles.deleteButton}
                      onClick={() =>  handleDeleteList(list._id)}
                    >
                      <DltBtn listId={list._id} />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Manage;
