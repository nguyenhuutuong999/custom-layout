import React, { useEffect, useState } from "react";
import styles from "./Layout.module.css";
import Content from "../../components/Content";
import CustomContent from "../../components/Custom";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const [border, setBorder] = useState({
    image: false,
    head: false,
    para: false,
  });

  const location = useLocation();
  const param = location.pathname.slice(-1);

  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(null);
  const [itemSelected, setItemSelected] = useState(null);
  const listCompDefault = [
    {
      id: 1,
      type: "image",
      name: "image1",
      style: {
        width: "100%",
      },
    },
    {
      id: 2,
      type: "head",
      name: "head1",
      content: "Headindsdg",
    },
    {
      id: 3,
      type: "para",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      name: "para",
      style: {
        color: "red",
        fontSize: "17px",
      },
    },
    {
      id: 4,
      type: "para",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      name: "para1",
    },
  ];
  const [listComp, setListComp] = useState(listCompDefault);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  const updateDate = async newData => {
    const getData = JSON.parse(await localStorage.getItem("data"));
    const newGetData = [...getData];
    newGetData[param].data = newData
    await localStorage.setItem("data", JSON.stringify(newGetData));
  };

  const onBorder = name => {
    let defaultBorder = {
      image: false,
      head: false,
      para: false,
    };
    let newBorder = { ...defaultBorder };
    newBorder[name] = true;
    setBorder(newBorder);
    setIsOpen(true);
    setName(name);
    const itemSelect = listComp.find(item => item.name == name);
    if (itemSelect) setItemSelected(itemSelect);
  };

  const toggleDrawer = () => {
    setIsOpen(false);
  };

  const onChangeSize = e => {
    const fontSize = e.target.value;

    let newListComp = [...listComp];
    newListComp.map((item, index) => {
      if (item.name === name) {
        item.style = {
          ...item.style,
          fontSize: fontSize + "px",
        };
      }
    });
    setListComp(newListComp);
    updateDate(newListComp);
  };

  const onChangeColor = color => {
    let newListComp = [...listComp];
    newListComp.map((item, index) => {
      if (item.name === name) {
        item.style = {
          ...item.style,
          color: color,
        };
      }
    });
    setListComp(newListComp);
    updateDate(newListComp);
  };

  const onChangeFontWeight = fontWeight => {
    let newListComp = [...listComp];
    newListComp.map((item, index) => {
      if (item.name === name) {
        item.style = {
          ...item.style,
          fontWeight: fontWeight,
        };
      }
    });
    setListComp(newListComp);
    updateDate(newListComp);
  };

  const onChangeContent = e => {
    const content = e.target.value;
    let newListComp = [...listComp];
    newListComp.map((item, index) => {
      if (item.name === name) {
        item.content = content;
      }
    });
    setListComp(newListComp);
    updateDate(newListComp);
  };

  const onChangeWidth = e => {
    const width = e.target.value;
    let newListComp = [...listComp];
    newListComp.map((item, index) => {
      if (item.name === name) {
        item.style = {
          ...item.style,
          width: width + "%",
        };
      }
    });
    setListComp(newListComp);
    updateDate(newListComp);
  };

  const onChangeImage = e => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    if (objectUrl) {
      setPreview(objectUrl);
      let newListComp = [...listComp];

      newListComp.map((item, index) => {
        if (item.name === name) {
          item.content = objectUrl;
        }
      });
      setListComp(newListComp);
      updateDate(newListComp);
    }

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("data"));
    if (getData && getData.length !== 0) setListComp(getData[param].data);
  }, []);

  return (
    <div className={styles.wrapper_layout}>
      <section className={`${styles.layout} ${isOpen ? styles.close : ""}`}>
        <div className={styles.container}>
          {listComp &&
            listComp.map((item, index) => {
              return (
                <Content
                  imageURL={preview}
                  style={item.style}
                  key={index}
                  name={item.name}
                  comp={item.type}
                  border={border[item.name]}
                  content={item.content}
                  onBorder={onBorder}
                />
              );
            })}
        </div>
      </section>
      <div className={`${styles.drawer} ${isOpen ? styles.open : ""}`}>
        <CustomContent
          onChangeImage={onChangeImage}
          onChangeWidth={onChangeWidth}
          onChangeSize={onChangeSize}
          itemSelected={itemSelected}
          onChangeColor={onChangeColor}
          onChangeFontWeight={onChangeFontWeight}
          onChangeContent={onChangeContent}
        >
          <div className={styles.drawer_header}>
            <h2>Drawer Content</h2>
            <button className={styles.button_drawer} onClick={toggleDrawer}>
              X
            </button>
          </div>
        </CustomContent>
      </div>
    </div>
  );
};

export default Layout;
