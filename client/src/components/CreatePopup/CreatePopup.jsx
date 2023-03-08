import React, { useEffect, useRef, useState } from "react";
import styles from "./CreatePopup.module.css";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "../Button/Button";
import { addList } from "../../utils/HandleListApis";

const CreatePopup = (props) => {
  const [hue, setHue] = useState(180);
  const { isOpen, togglePopup } = props;
  const popupRef = useRef(null);
  const [listArray, setListArray] = useState([]);
  const [list, setList] = useState({
    title: "",
    color: "",
    tasks: [],
  })

  const handleHueChange = (event) => {
    setHue(event.target.value);
  };

  //Dark Saturation= 100%, Light = 30%
  //Medium Saturation = 50%, Light = 61%
  //Light  Saturation = 100%, Light = 90%
  const customDarkColor = `hsl(${hue}, 100%, 30%)`;
  const customMediumColor = `hsl(${hue}, 50%, 61%)`;
  const customLightColor = `hsl(${hue}, 100%, 90%)`;

  const handleAddList = () => {
    addList(list, setList, setListArray);
  }


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        togglePopup();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
    // console.log(hue)
  }, [hue, togglePopup, popupRef]);
  return (
    <>
      {isOpen && (
        <div className={styles.main_body}>
          <div>
            <div className={styles.container} ref={popupRef}>
              <div className={styles.close} onClick={togglePopup}>
                <IoCloseSharp />
              </div>
              <div className={styles.list_name}>
                List Name : <input type="text" className={styles.list_input} />
              </div>
              <div className={styles.choose_color}>
                Choose Color :{" "}
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={hue}
                  onChange={handleHueChange}
                />
              </div>
              <div className={styles.color_flex}>
                <div
                  className={styles.color}
                  style={{ backgroundColor: customDarkColor }}
                ></div>
                <div
                  className={styles.color}
                  style={{ backgroundColor: customMediumColor }}
                ></div>
                <div
                  className={styles.color}
                  style={{ backgroundColor: customLightColor }}
                ></div>
              </div>
              <Button
                icon={AiOutlinePlus}
                onClick={handleAddList}
              >Add</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatePopup;
