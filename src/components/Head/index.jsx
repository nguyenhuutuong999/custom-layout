import "./../../index.css"
import styles from "./Head.module.css";

function Head({border, onBorder}) {
  return (
    <h3 className={`${styles.heading} ${border ? 'border' : ''}`} onClick={() => onBorder("head")}>Heading</h3>
  );
}

export default Head;
