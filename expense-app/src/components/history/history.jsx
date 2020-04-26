import React, { useEffect } from "react";
import "./style.css";

import TransactionDetail from "./transaction-detail";
// import { GlobalContext } from "../../context/globalContext";
import useFetchTransactions from "../../hooks/useFetchTransactions";

export default function History() {
  // get the context
  // const { transactions, getTransactions } = React.useContext(GlobalContext);
  // const [allTransactions, setAllTransactions] = transactions;

  const { data, isLoading, isError } = useFetchTransactions();
  if (isLoading) {
    console.log("loading....");
  }

  if (isError) {
    console.log("errors");
  }

  // delete transaction entry
  const handleOnDelete = (id) => {
    // setAllTransactions(allTransactions.filter((t, i) => i !== id));
  };

  useEffect(() => {
    // getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="history-container">
      <h2>History</h2>
      <div className="transaction-detail">
        {data &&
          data.map((t, i) => {
            return (
              <TransactionDetail
                key={t.id}
                id={t._id}
                index={i}
                name={t.text}
                amount={t.amount}
                onDelete={handleOnDelete}
              />
            );
          })}
      </div>
    </div>
  );
}
