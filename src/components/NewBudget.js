import { useContext, useState } from "react";
import { Context } from "../context/AppContext";

const NewBudget = () => {
  const { budget, dispatch } = useContext(Context);
  const [cost, setCost] = useState("");

  const submitEvent = () => {
    let new_budget = parseInt(cost);
    setCost("");

    dispatch({
        type: "SET_BUDGET",
        payload: new_budget,
    })
  };

  return (
    <div className="d-flex justify-content-start gap-5">
      <div className="input-group w-auto">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="inputBudget">
            Budget
          </label>
        </div>
        <input
          id="inputBudget"
          required
          type="number"
          className="form-control"
          style={{ maxWidth: "10ch" }}
          placeholder={budget}
          value={cost}
          onChange={(event)=> setCost(event.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={submitEvent}>
        Save
      </button>
    </div>
  );
};

export default NewBudget;
