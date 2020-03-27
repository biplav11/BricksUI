import React, { useState } from "react";
import "../../sass/sourceCode/_types.scss";
import Table from "../../components/table";

const Dynamic = () => {
  const [displayCode, setDisplayCode] = useState(false as boolean);
  const handleCodeClick = () => {
    if (displayCode) {
      setDisplayCode(false);
    } else setDisplayCode(true);
  };
  const columns = [
    { title: "Name", key: "name" },
    { title: "Age", key: "age" },
    { title: "Address", key: "address" },
    { title: "State", key: "province" },
    { title: "Status", key: "status" }
  ];
  const dataSource = [
    {
      key: "1",
      dataValues: [
        "Binaya Rijal",
        "24",
        "Pepsicola, Kathmandu",
        "Bagmati",
        "Active"
      ]
    },
    {
      key: "2",
      dataValues: [
        "Niraj Sitoula",
        "24",
        "Balwatar, Kathmandu",
        "Bagmati",
        "Pending"
      ]
    },
    {
      key: "3",
      dataValues: [
        "Arsan Pokharel",
        "23",
        "Chandragadhi, Jhapa",
        "Mechi",
        "Pending"
      ]
    },
    {
      key: "4",
      dataValues: [
        "Mahesh Lamichhane",
        "24",
        "Balewa, Baglung",
        "Gandagi",
        "Active"
      ]
    }
  ];
  const TableClickHandler = (e: any) => {
    console.log(e.dataValues);
  };
  return (
    <div className="single-example-unit">
      <div className="display-example extra-margin">
        <div className="example-large align">
          <Table
            columns={columns}
            dataSource={dataSource}
            onClick={TableClickHandler}
          />
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Dynamic</div>
        <div className="desc-wrapper">
          Dynamic table with onClick functionality. Onclick function receives
          all the table in the table. <code>Note:</code>See Console.log.
        </div>
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

export default Dynamic;
