import { useContext } from "react";
import { Context } from "../context/AppContext";

const Remaining = () => {
  const { budget, expenses, currency } = useContext(Context);
  let total_exp = 0;
  let remaining = 0;

  total_exp = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  remaining = budget - total_exp;

  return (
    <div className="col">
      <div className="alert alert-primary">
        Remaining: {currency}
        {remaining}
      </div>
    </div>
  );
};

export default Remaining;
