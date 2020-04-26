import React from "react";
import "./style.css";

import { GlobalContext } from "../../../context/globalContext";
import { useContext } from "react";

export default function TransactionDetail({ id, index, name, amount }) {
  const { deleteTransaction } = useContext(GlobalContext);

  // handle on mouse over
  const handleOnMouseOver = () => {
    const deleteBtn = document.getElementsByClassName("delete");
    for (var i = 0; i < deleteBtn.length; i++) {
      deleteBtn[i].style.opacity = "0";
      deleteBtn[i].style.transition = "";
    }
    deleteBtn[index].style.transition = "all 0.2s ease";
    deleteBtn[index].style.opacity = "1";
  };

  // handle on mouse leave
  const handleOnMouseLeave = () => {
    const deleteBtn = document.getElementsByClassName("delete");
    for (var i = 0; i < deleteBtn.length; i++) {
      deleteBtn[i].style.opacity = "0";
      deleteBtn[i].style.transition = "";
    }
  };

  return (
    <div
      className="details"
      onMouseOver={handleOnMouseOver}
      onMouseLeave={handleOnMouseLeave}
      style={{
        borderRight: amount > 0 ? "4px solid green" : "4px solid red",
      }}
    >
      <span>{name}</span>
      <span>{amount}</span>
      <div
        className="delete"
        onClick={() => {
          deleteTransaction(id);
        }}
      >
        X
      </div>
    </div>
  );
}
