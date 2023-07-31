import { createContext, useReducer } from "react"

// 5. Reducer
export const AppReducer = (state, action) => {
    let budget = 0;

    switch (action.type) {
        case "ADD_EXP":
            let total_budget = 0;
            total_budget = state.expenses.reduce((prev, curr) => {return (prev + curr.cost)},0);
            total_budget += action.payload.cost;

            action.type = "DONE";

            if (total_budget <= state.budget) {
                
                total_budget = 0;

                state.expenses.map((currExp) => {
                    if (currExp.id === action.payload.id) {
                        currExp.cost += action.payload.cost;
                    };
                    return currExp;
                });

                return {...state};
            } else {
                alert("Cannot increase expense, out of funds");
                return {...state};
            }

        case "RED_EXP":
            const exp_reduced = state.expenses.map((currExp) => {
                if (currExp.id === action.payload.id && currExp.cost - action.payload.cost >= 0) {
                    currExp.cost =- action.payload.cost;
                    budget = state.budget - action.payload.cost;
                } else if (currExp.cost - action.payload.cost < 0) {
                    alert("The expenses cannot have a negative cost")
                };
                return currExp;
            });

            action.type = "DONE"

            return {
                ...state,
                expenses: [...exp_reduced],
            };

        case "DEL_EXP":
            action.type = "DONE";
            state.expenses.map((currExp) => {
                if (currExp.id === action.payload) {
                    budget = state.budget + currExp.cost;
                    currExp.cost = 0;
                }
                return currExp;
            });

            return {
                ...state,
                budget
            };

        case "SET_BUDGET":
            action.type ="DONE";

            state.budget = action.payload;

            return {...state,};

        case "CHG_CURR":
            action.type = "DONE";

            state.currency = action.payload;

            return {...state,};

        default:
            return state;
    }
}

// 1. Initial state
const initState = {
    budget: 1000,
    expenses: [
        {id: 1, name: "Marketing", cost: 50},
        {id: 2, name: "IT", cost: 125},
        {id: 3, name: "Finances", cost: 260},
        {id: 4, name: "Sales", cost: 180},
    ],
    currency: "$"
};

// 2. Creates context for components to use
export const Context = createContext();

// 3. Provider component - component used to give access other components to the state
export const Provider = (props) => {
    // 4. Set up app state
    const [state, dispatch] = useReducer(AppReducer, initState);
    let remaining = 0;

    if (state.expenses) {
        const totalExp = state.expenses.reduce((total, item) => {return (total += item.cost)},0);
        remaining = state.budget - totalExp;
    }

    return (
        <Context.Provider
            value={{
                budget: state.budget,
                expenses: state.expenses,
                remaining: remaining,
                dispatch,
                currency: state.currency
            }}>
                {props.children}
            </Context.Provider>
    );
}