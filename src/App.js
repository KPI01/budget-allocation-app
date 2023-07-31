import React from "react";
import { Provider } from "./context/AppContext";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AllocationForm from "./components/AllocationForm";
import NewBudget from "./components/NewBudget";
import ChangeCurrency from "./components/ChangeCurrency";

function App() {
  return (
    <Provider>
      <div className="container">
        <h1 className="display-1 mb-5 fw-bold">Budget Allocation App</h1>
        <div className="row">
          <Budget />
          <Remaining />
          <ExpenseTotal />
        </div>
        <h2 className="display-3">Allocation</h2>
        <div className="row">
          <ExpenseList />
        </div>
        <h3 className="display-5">Form</h3>
        <div className="row mt-3">
          <h4 className="display-6">Allocate funds</h4>
          <AllocationForm />
        </div>
        <div className="row mt-3">
           <h4 className="display-6">Set budget</h4>
           <NewBudget />
        </div>
        <div className="row mt-3">
          <h4 className="display-6">Change currency</h4>
          <ChangeCurrency />
        </div>
      </div>
    </Provider>
  );
}

export default App;
