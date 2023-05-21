import React, { useInsertionEffect } from "react";
import styles from "./Menu.module.css";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigation = useNavigate()
  const onCustom = (value) => {
    navigation("/layout/"+ value)
  }

const data = [
  {
    name: "Theme 1",
    data: [
      {
        "id": 1,
        "type": "image",
        "name": "image1",
        "style": {
          "width": "100%"
        },
        "content": "blob:http://localhost:3000/f4fba749-4a3f-407d-8f40-8e8b1991f08c"
      },
      {
        "id": 2,
        "type": "head",
        "name": "head1",
        "content": "Headindsdgdsdsds"
      },
      {
        "id": 3,
        "type": "para",
        "content": "aaaaaa Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "name": "para",
        "style": {
          "color": "red",
          "fontSize": "17px"
        }
      },
      {
        "id": 4,
        "type": "para",
        "content": "Ldsdsdsdsdorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "name": "para1"
      }
    ]
  },
  {
    name: "Theme 2",
    data: [
      {
        "id": 1,
        "type": "image",
        "name": "image1",
        "style": {
          "width": "100%"
        },
        "content": "blob:http://localhost:3000/f4fba749-4a3f-407d-8f40-8e8b1991f08c"
      },
      {
        "id": 2,
        "type": "head",
        "name": "head1",
        "content": "Headindsdgdsdsds"
      },
      {
        "id": 3,
        "type": "para",
        "content": "aaaaaa Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "name": "para",
        "style": {
          "color": "red",
          "fontSize": "17px"
        }
      }
    ]
  }
];

useInsertionEffect(() => {
  const getData = JSON.parse(localStorage.getItem("data"));
  if (!getData) {
    localStorage.setItem("data", JSON.stringify(data));
  }
}, []);

  return (
    <section>
      <div><h1>Menu</h1></div>
      <div className={styles.menus}>
        {data.map((item, index) => (
          <div className={styles.menu} onClick={() => onCustom(index)}>
            <div className={styles["menu-content"]}>
              <h3>{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
