import "./../../index.css"
import pictureIcon from "./../../assets/picture.png";

function Image({border, onBorder}) {
  return (
    <div
      className={`${border ? "border" : ""}`}
      onClick={() => onBorder("image")}
    >
      <img src={pictureIcon} alt="Image" />
    </div>
  );
}

export default Image;
