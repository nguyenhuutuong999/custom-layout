import React from "react";
import styles from "./Menu.module.css";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigation = useNavigate()
  const onCustom = (value) => {
    console.log(value)
    navigation("/layout")
  }

  return (
    <section>
      <div><h1>Menu</h1></div>
      <div className={styles.menus}>
        <div className={styles.menu} onClick={() => onCustom(1)}>
          <div className={styles["menu-content"]}>
            <h3>Layout 1</h3>
          </div>
        </div>
        <div className={styles.menu} onClick={() => onCustom(2)}>
          <div className={styles["menu-content"]}>
            <h3>Layout 2</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
