import styles from "./Para.module.css";

function Para({ border, onBorder, content, style }) {
  return (
    <p
      style={style}
      className={`${styles.paragraph} ${border ? "border" : ""}`}
      onClick={() => onBorder("para")}
    >
      {content}
    </p>
  );
}

export default Para;
