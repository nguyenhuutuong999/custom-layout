import Head from "../Head";
import Image from "../Image";
import Para from "../Para";
import "./../../index.css";

function Content({
  onChangeImage,
  comp,
  border,
  content,
  onBorder,
  name,
  style,
  imageURL,
}) {
  let currentComp;
  switch (comp) {
    case "head": {
      currentComp = (
        <div>
          <button style={{ display: border ? "block" : "none" }}>+</button>
          <Head
            content={content}
            border={border}
            onBorder={() => onBorder(name)}
            style={style}
          />
          <button style={{ display: border ? "block" : "none" }}>+</button>
        </div>
      );
      break;
    }
    case "image": {
      currentComp = (
        <div>
          <button style={{ display: border ? "block" : "none" }}>+</button>
          <Image
            content={content}
            imageURL={imageURL}
            onChangeImage={onChangeImage}
            border={border}
            onBorder={() => onBorder(name)}
            style={style}
          />
          <button style={{ display: border ? "block" : "none" }}>+</button>
        </div>
      );
      break;
    }
    case "para": {
      currentComp = (
        <div>
          <button style={{ display: border ? "block" : "none" }}>+</button>
          <Para
            border={border}
            style={style}
            content={content}
            onBorder={() => onBorder(name)}
          />
          <button style={{ display: border ? "block" : "none" }}>+</button>
        </div>
      );
      break;
    }
  }
  return currentComp;
}

export default Content;
