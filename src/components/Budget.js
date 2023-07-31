import { useContext } from "react";
import { Context } from "../context/AppContext";

const Budget = () => {
  const { budget, currency } = useContext(Context);

  return (
    <div className="col">
      <div className="alert alert-secondary">
        Current budget: {currency}
        {budget}
      </div>
    </div>
  );
};

export default Budget;
