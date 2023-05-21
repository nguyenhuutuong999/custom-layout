import "./../../index.css";
import styles from "./Head.module.css";

function Head({ border, onBorder, content, style }) {
  return (
    <h3
      style={style}
      className={`${styles.heading} ${border ? "border" : ""}`}
      onClick={() => onBorder("head")}
    >
      {content}
    </h3>
  );
}

export default Head;
