import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { AuthContext } from "./auth-context";

type Expense = {
  id: string;
  description: string;
  price: number;
  date: Date;
};

type ExpenseContextType = {
  expenses: Expense[];
  addExpense: (data: Omit<Expense, "id">) => void;
  removeExpense: (id: string) => void;
};

export const ExpensesContext = createContext<ExpenseContextType>({
  expenses: [],
  addExpense: () => {},
  removeExpense: () => {},
});

function expensesReducer(
  state: Expense[],
  action:
    | { type: "SET"; payload: Expense[] }
    | { type: "ADD"; payload: Omit<Expense, "id"> }
    | { type: "REMOVE"; payload: string }
): Expense[] {
  switch (action.type) {
    case "SET":
      return action.payload;
    case "ADD":
      const id = new Date().toISOString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "REMOVE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ContextProvider({ children }: { children: ReactNode }) {
  const authCtx = useContext(AuthContext);
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  useEffect(() => {
    async function loadExpenses() {
      if (!authCtx.token) return;

      const key = `expenses_${authCtx.token}`;
      const stored = await AsyncStorage.getItem(key);
      if (stored) {
        const parsed = JSON.parse(stored).map((e: any) => ({
          ...e,
          date: new Date(e.date),
        }));
        dispatch({ type: "SET", payload: parsed });
      } else {
        dispatch({ type: "SET", payload: [] });
      }
    }
    loadExpenses();
  }, [authCtx.token]);

  // Update expenses
  useEffect(() => {
    if (!authCtx.token) return;
    const key = `expenses_${authCtx.token}`;
    AsyncStorage.setItem(key, JSON.stringify(expensesState));
  }, [expensesState, authCtx.token]);

  // Add expense
  function addExpense(expenseData: Omit<Expense, "id">) {
    const newExpense: Expense = {
      ...expenseData,
      id: new Date().toISOString() + Math.random().toString(),
    };
    dispatch({ type: "ADD", payload: newExpense });
  }

  // Rmove expense
  function removeExpense(expenseId: string) {
    dispatch({ type: "REMOVE", payload: expenseId });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    removeExpense: removeExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ContextProvider;
