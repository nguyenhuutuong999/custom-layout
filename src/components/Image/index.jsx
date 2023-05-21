import "./../../index.css";

function Image({ border, onBorder, style, imageURL, content }) {
  return (
    <div
      className={`image ${border ? "border" : ""}`}
      onClick={() => onBorder("image")}
      id={"bannder"}
    >
      <img
        className={`image ${border ? "border" : ""}`}
        style={{ objectFit: "contain", ...style }}
        src={imageURL ? imageURL : content}
        alt="Image"
      />
    </div>
  );
}

export default Image;
