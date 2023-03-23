import React, { useEffect, useRef, useState } from "react";
import styles from "./CreatePopup.module.css";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "../Button/Button";
import { createList} from "../../utils/HandleListApis";

const CreatePopup = (props:any) => {
  const [hue, setHue] = useState(180);
  const { isOpen, togglePopup } = props;
  const popupRef = useRef<HTMLFormElement>(null);
  const [listArray, setListArray] = useState([]);
  const [list, setList] = useState("")
  const [title, setTitle] = useState("");
  const [color,setColor] = useState(0);
  const handleHueChange = (e:any) => {
    setHue(e.target.value);
  };

  //Dark Saturation= 100%, Light = 30%
  //Medium Saturation = 50%, Light = 61%
  //Light  Saturation = 100%, Light = 90%
  const customDarkColor = `hsl(${hue}, 100%, 30%)`;
  const customMediumColor = `hsl(${hue}, 50%, 61%)`;
  const customLightColor = `hsl(${hue}, 100%, 90%)`;

  const handleCreateList = async (e:any) => {
    e.preventDefault();
    try {
      setTitle(list);
      setColor(hue);
      await createList({title,color, setList, setListArray});
      togglePopup();
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const handleClickOutside = (e:any) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        togglePopup(); 
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
    // console.log(hue)
  }, [hue, togglePopup, popupRef,listArray]);
  return (
    <>
      {isOpen && (
        <div className={styles.main_body}>
          <div>
            <form
              className={styles.container}
              ref={popupRef}
              onSubmit={handleCreateList}
            >
              <div className={styles.close} onClick={togglePopup}>
                <IoCloseSharp />
              </div>
              <div className={styles.list_name}>
                List Name : <input
                  type="text"
                  value={list}
                  className={styles.list_input}
                  onChange={(e) => setList(e.target.value)}
                />
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
              >Add</Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatePopup;
