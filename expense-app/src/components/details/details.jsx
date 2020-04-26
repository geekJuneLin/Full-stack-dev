import React from "react";
import "./style.css";

import { GlobalContext } from "../../context/globalContext";

export default function Details() {
  // get the context
  const { transactions } = React.useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = transactions
    .reduce((acc, item) => (acc += item.amount), 0)
    .toFixed(2);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc -= item), 0)
    .toFixed(2);

  return (
    <div className="details-container">
      <h3>your balance</h3>
      <span>$ {total}</span>

      <div className="income-expense-container">
        <div className="income">
          <h3>Income</h3>
          <span>$ {income}</span>
        </div>

        <div className="expense">
          <h3>expense</h3>
          <span>$ {expense}</span>
        </div>
      </div>
    </div>
  );
}
