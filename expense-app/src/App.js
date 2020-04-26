import React from "react";
import "./App.css";

import Details from "./components/details";
import History from "./components/history";
import Transaction from "./components/new-transaction";
import ContextProvider from "./context";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <h1>Expense Tracker</h1>
        <Details />
        <History />
        <Transaction />
      </div>
    </ContextProvider>
  );
}

export default App;
