import { useContext } from "react";
import { Context } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(Context);

  const delAllocation = (id) => {
    dispatch({
        type: "DEL_EXP",
        payload: id,
    })
  }

  const incrAllocation = (name,qty) => {
    const expense = {
      name: name,
      cost: qty,
    };
    dispatch({
      type: "ADD_EXP",
      payload: expense,
    });
  };
  
  const decAllocation = (name,qty) => {
    const expense = {
      name: name,
      cost: qty,
    };
    dispatch({
      type: "RED_EXP",
      payload: expense,
    });
  };

  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.name}</td>
      <td>{currency} {props.cost}</td>
      <td>
        <button
          className="btn btn-secondary mx-1 fw-bold"
          onClick={(event) => decAllocation(props.id,5)}
        >
        - {currency} 5
        </button>
        <button
          className="btn btn-secondary mx-1 fw-bold"
          onClick={(event) => decAllocation(props.id,10)}
        >
        - {currency} 10
        </button>
        <button
          className="btn btn-primary mx-1 fw-bold"
          onClick={(event) => incrAllocation(props.id,5)}
        >
        + {currency} 5
        </button>
        <button
          className="btn btn-primary mx-1 fw-bold"
          onClick={(event) => incrAllocation(props.id,10)}
        >
        + {currency} 10
        </button>
      </td>
      <td>
        <button className="btn btn-danger mx-1 fw-bold rounded-circle" onClick={(event)=> delAllocation(props.id)}>X</button>
      </td>
    </tr>
  );
};

export default ExpenseItem;
