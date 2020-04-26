import React, { useState, useEffect, useContext } from "react";

import { GlobalContext } from "../context/globalContext";

const useFetchTransactions = () => {
  // get the global context
  const { getTransactions, error, loading, transactions } = useContext(
    GlobalContext
  );

  const [data, setData] = useState();
  const [isloading, setIsLoading] = useState();
  const [isError, setIsError] = useState();

  useEffect(() => {
    // fetch all the transactions
    setIsLoading(true);
    getTransactions();

    if (!loading) setIsLoading(false);

    if (error) {
      setIsError(error);
      setData(null);
    } else {
      setIsError(null);
      setData(transactions);
    }
  }, []);

  return {
    data,
    isloading,
    isError,
  };
};

export default useFetchTransactions;
