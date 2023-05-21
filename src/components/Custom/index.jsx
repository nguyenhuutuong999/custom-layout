import styles from "./CustomContent.module.css";
import "../../index.css";
function CustomContent({
  onChangeImage,
  children,
  itemSelected,
  onChangeColor,
  onChangeFontWeight,
  onChangeContent,
  onChangeSize,
  onChangeWidth,
}) {
  let currentType;
  switch (itemSelected?.type) {
    case "head": {
      currentType = (
        <div className={styles.drawer_content}>
          {children}
          <div className={styles.wrap_input}>
            <label>Font Size</label>
            <input
              defaultValue={14}
              type="number"
              name="size"
              onChange={onChangeSize}
            />
          </div>
          <div className={styles.wrap_input}>
            <label>Color</label>
            <div>
              <button onClick={() => onChangeColor("red")}>Red</button>
              <button onClick={() => onChangeColor("blue")}>Blue</button>
              <button onClick={() => onChangeColor("green")}>Green</button>
              <button onClick={() => onChangeColor("yellow")}>Yellow</button>
            </div>
          </div>
          <div className={styles.wrap_input}>
            <label>Font Weight</label>
            <div>
              <button onClick={() => onChangeFontWeight("100")}>Light</button>
              <button onClick={() => onChangeFontWeight("600")}>Regular</button>
              <button onClick={() => onChangeFontWeight("800")}>Bold</button>
            </div>
          </div>
          <div className={styles.wrap_input}>
            <label>Content</label>
            <textarea
              className={styles.textarea_content}
              value={itemSelected.content}
              onChange={onChangeContent}
            />
          </div>
        </div>
      );
      break;
    }
    case "image": {
      currentType = (
        <div className={styles.drawer_content}>
          {children}
          <div className={styles.wrap_input}>
            <label>Width</label>
            <input
              defaultValue={100}
              max={100}
              min={0}
              type="number"
              name="width"
              onChange={onChangeWidth}
            />
          </div>
          <div className={styles.wrap_input}>
            <label className={styles.image_label} for="upload_photo">
              Change Image
            </label>
            <div>
              <label className={styles.image_label} for="upload_photo">
                Broswer...
              </label>
              <input
                type="file"
                name="photo"
                id="upload_photo"
                onChange={onChangeImage}
              />
            </div>
          </div>
        </div>
      );
      break;
    }
    case "para": {
      currentType = (
        <div className={styles.drawer_content}>
          {children}
          <div className={styles.wrap_input}>
            <label>Font Size</label>
            <input
              defaultValue={14}
              type="number"
              name="size"
              onChange={onChangeSize}
            />
          </div>
          <div className={styles.wrap_input}>
            <label>Color</label>
            <div>
              <button onClick={() => onChangeColor("red")}>Red</button>
              <button onClick={() => onChangeColor("blue")}>Blue</button>
              <button onClick={() => onChangeColor("green")}>Green</button>
              <button onClick={() => onChangeColor("yellow")}>Yellow</button>
            </div>
          </div>
          <div className={styles.wrap_input}>
            <label>Font Weight</label>
            <div>
              <button onClick={() => onChangeFontWeight("100")}>Light</button>
              <button onClick={() => onChangeFontWeight("600")}>Regular</button>
              <button onClick={() => onChangeFontWeight("800")}>Bold</button>
            </div>
          </div>
          <div className={styles.wrap_input}>
            <label>Content</label>
            <textarea
              className={styles.textarea_content}
              value={itemSelected.content}
              onChange={onChangeContent}
            />
          </div>
        </div>
      );
      break;
    }
  }
  return currentType;
}

export default CustomContent;
