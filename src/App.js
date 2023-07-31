import React from "react";
import { Provider } from "./context/AppContext";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";

function App() {
  return (
    <Provider>
      <div className="container">
        <h1 className="display-1 mb-5">Budget Allocation App</h1>
        <div className="row">
          <Budget />
          <Remaining />
          <ExpenseTotal />
        </div>
        <div className="row">
          
        </div>
      </div>
    </Provider>
  );
}

export default App;
