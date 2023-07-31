import { useContext } from "react";
import { Context } from "../context/AppContext";

const Remaining = () => {
  const { currency, remaining } = useContext(Context);

  return (
    <div className="col">
      <div className="alert alert-primary">
        Remaining: {currency} {remaining}
      </div>
    </div>
  );
};

export default Remaining;
