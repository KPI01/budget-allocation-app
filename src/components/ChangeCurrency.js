import { useContext, useState } from "react";
import { Context } from "../context/AppContext";

const ChangeCurrency = () => {
  const { dispatch, currency } = useContext(Context);
  const [crrncy, setCrrncy] = useState(currency);
  const currencies = [
    { name: "Dollar", symbol: "$" },
    { name: "Euro", symbol: "€" },
    { name: "Pound", symbol: "£" },
    { name: "Yen", symbol: "¥" },
  ];

  const submitEvent = () => {
    dispatch({
        type: "CHG_CURR",
        payload: crrncy,
    })
  }

  return (
    <div className="d-flex justify-content-start gap-5">
      <div className="input-group w-auto">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="selectCurrency">
            Currency
          </label>
        </div>
        <select
          className="custom-select"
          onChange={(event) => setCrrncy(event.target.value)}
        >
          {currencies.map((curr) => {
            return <option value={curr.symbol} selected={crrncy.symbol === currency ? true : false}>{curr.name}</option>;
          })}
        </select>
      </div>
      <button className="btn btn-primary" onClick={submitEvent}>Save</button>
    </div>
  );
};

export default ChangeCurrency;
