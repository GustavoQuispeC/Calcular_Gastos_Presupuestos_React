import { useReducer, createContext, Dispatch } from "react"
import { BudgetActions, BudgetState, budgetReducer,initialState } from "../budget-reducer"

type BudgetContextProps = {
    state : BudgetState,
    dispatch : Dispatch<BudgetActions>

}
type BudgetProviderProps = {
    children : React.ReactNode

}

export const BudgetContext = createContext<BudgetContextProps>({} as BudgetContextProps)

export const BudgetProvider =({children} : BudgetProviderProps )=>{
    const [state, dispatch] = useReducer(budgetReducer, initialState)
    return (
        <BudgetContext.Provider value={{state, dispatch}}>
            {children}
        </BudgetContext.Provider>

    )
}