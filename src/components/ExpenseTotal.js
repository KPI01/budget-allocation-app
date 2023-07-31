import { useContext } from "react";
import { Context } from "../context/AppContext";

const ExpenseTotal = () => {
    const {expenses, currency} = useContext(Context);
    let total_exp = 0;

    total_exp = expenses.reduce((total, item) => {return total += item.cost},0);

    return (
        <div className="col">
            <div className="alert alert-danger">
                Spent: {currency}{total_exp}
            </div>
        </div>
    )
}

export default ExpenseTotal