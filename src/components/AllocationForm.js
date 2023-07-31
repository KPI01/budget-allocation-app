import { useContext, useState } from "react";
import { Context } from "../context/AppContext";

const AllocationForm = () => {
  const { dispatch, remaining, expenses, currency } = useContext(Context);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [action, setAction] = useState("");

  const submitEvent = () => {
    if (cost > remaining) {
      alert(
        "The value cannot exceed the remaining fund: " + currency + remaining
      );
      setCost("");
      return;
    }

    let expense = {
      name: name,
      cost: parseInt(cost),
    };

    if (action === "Add") {
      dispatch({
        type: "ADD_EXP",
        payload: expense,
      });
    } else {
      dispatch({
        type: "RED_EXP",
        payload: expense,
      });
    }
  };

  return (
    <div className="d-flex justify-content-start gap-5">
      <div className="input-group w-auto">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="selectDepartment">
            Department
          </label>
        </div>
        <select
          className="custom-select me-5"
          id="selectDepartment"
          onChange={(event) => setName(event.target.value)}
        >
          <option defaultValue>Choose...</option>
          {expenses.map((item) => {
            return <option value={item.id}>{item.name}</option>;
          })}
        </select>

        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="selectOption">
            Action
          </label>
        </div>
        <select
          className="custom-select me-5"
          id="selectOption"
          onChange={(event) => setAction(event.target.value)}
        >
          <option value="Add" defaultValue>
            Add
          </option>
          <option value="Reduce">Reduce</option>
        </select>
        
        <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputQty">{currency}</label>
        </div>
        <input
          required
          className="form-control"
          style={{ maxWidth: "10ch" }}
          type="number"
          id="inputQty"
          value={cost}
          onChange={(event) => setCost(event.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={submitEvent}>
        Save
      </button>
    </div>
  );
};

export default AllocationForm;
