import React, { useState } from "react";
import "../../sass/sourceCode/_types.scss";
import Table from "../../components/table";

const MultiAction = () => {
  const [displayCode, setDisplayCode] = useState(false as boolean);
  const handleCodeClick = () => {
    if (displayCode) {
      setDisplayCode(false);
    } else setDisplayCode(true);
  };
  const edit = () => {
    console.log("Edit Clicked");
  };
  const deleteHandler = () => {
    console.log("Delete Clicked");
  };
  const columns = [
    { title: "Name", key: "name" },
    { title: "Age", key: "age" },
    { title: "Address", key: "address" },
    { title: "Edit", key: "edit" },
    { title: "Delete", key: "delete" }
  ];
  const dataSource = [
    {
      key: "1",
      dataValues: ["Binaya Rijal", "24", "Pepsicola, Kathmandu"],
      render: [
        {
          title: "Edit",
          click: () => edit()
        },
        {
          title: "Delete",
          click: () => deleteHandler()
        }
      ]
    },
    {
      key: "2",
      dataValues: ["Niraj Sitoula", "24", "Balwatar, Kathmandu"],
      render: [
        {
          title: "Edit",
          click: () => edit()
        },
        {
          title: "Delete",
          click: () => deleteHandler()
        }
      ]
    },
    {
      key: "3",
      dataValues: ["Arsan Pokharel", "23", "Chandragadhi, Jhapa"],
      render: [
        {
          title: "Edit",
          click: () => edit()
        },
        {
          title: "Delete",
          click: () => deleteHandler()
        }
      ]
    },
    {
      key: "4",
      dataValues: ["Mahesh Lamichhane", "24", "Balewa, Baglung"],
      render: [
        {
          title: "Edit",
          click: () => edit()
        },
        {
          title: "Delete",
          click: () => deleteHandler()
        }
      ]
    }
  ];
  return (
    <div className="single-example-unit">
      <div className="display-example extra-margin">
        <div className="example-large align">
          <Table columns={columns} dataSource={dataSource} />
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Basic</div>
        <div className="desc-wrapper">MUltiple action table</div>
      </div>
      <div className="source">
        <span onClick={handleCodeClick}>code</span>
      </div>
      {displayCode ? (
        <>
          <div className="source-code">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            iusto facere maxime facilis vero fugit ratione rerum eaque, sapiente
            ipsam voluptas velit quod dolores eos, fuga est? Omnis, magni
            ratione?
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MultiAction;