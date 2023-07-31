import { useContext } from "react";
import { Context } from "../context/AppContext";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
    const {expenses} = useContext(Context);

    return (
        <div className="col">
            <table className="table table-striped table-responsive">
                <thead>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Spent</th>
                    <th scope="col">Options</th>
                    <th scope="col">Delete</th>
                </thead>
                <tbody className="table-group-divider">
                    {expenses.map((expense) => {
                       return (<ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ExpenseList;