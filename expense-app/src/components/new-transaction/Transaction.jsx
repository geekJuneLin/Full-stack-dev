import React from "react";
import "./style.css";

import { GlobalContext } from "../../context/globalContext";

export default function Transaction() {
  // get context
  const { addTransaction } = React.useContext(GlobalContext);

  // handle on add click
  const handleOnAdd = (e) => {
    // prevent default submit
    e.preventDefault();

    const amount = document.getElementById("amount");
    const text = document.getElementById("text");

    const trans = {
      id: Math.floor(Math.random() * 1000000),
      text: text.value,
      amount: +amount.value,
    };

    addTransaction(trans);

    text.value = "";
    amount.value = "";
  };

  return (
    <div className="add-new-transaction">
      <h2>Add new transaction</h2>
      <form>
        <p>Text</p>
        <input type="text" name="text" id="text" placeholder="Enter text..." />
        <p>Amount</p>
        <p>(Negative - expense, positive - income)</p>
        <input
          type="amount"
          name="amount"
          id="amount"
          placeholder="Enter amount..."
        />
        <button type="submit" onClick={handleOnAdd}>
          Add transaction
        </button>
      </form>
    </div>
  );
}
