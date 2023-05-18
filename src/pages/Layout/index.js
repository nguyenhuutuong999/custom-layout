import React, { useState } from "react";
import styles from "./Layout.module.css";
// import {pictureIcon} from "./../../assets/index";
import Image from "../../components/Image";
import Head from "../../components/Head";
import Para from "../../components/Para";

const Layout = () => {

  const [border, setBorder] = useState({
    image: false,
    head: false,
    para: false
  });

  const resetBorder = () => {
    setBorder({
      image: false,
      head: false,
      para: false
    })
  }
  
  const onBorder = (type) => {
    let defaultBorder = {
      image: false,
      head: false,
      para: false
    }
    let newBorder = {...defaultBorder};
    newBorder[type] = true;
    setBorder(newBorder);
  }

  return (
    <section className={styles.layout}>
      <div className={styles.container}>
        <Image border={border.image} onBorder={() => onBorder("image")} />
        <Head border={border.head} onBorder={() => onBorder("head")} />
        <Para border={border.para} onBorder={() => onBorder("para")} />
      </div>
    </section>
  );
};

export default Layout;
