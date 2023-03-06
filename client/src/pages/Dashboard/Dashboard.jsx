import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import styles from "./Dashboard.module.css";
import { RiArrowGoBackFill } from "react-icons/ri";

const Dashboard = () => {
  return (
    <>
      This is the Dashboard page
      <div className={styles.back}>
        <Button icon={RiArrowGoBackFill}>
          <Link to="/">Go Back</Link>
        </Button>
      </div>
    </>
  );
};

export default Dashboard;
