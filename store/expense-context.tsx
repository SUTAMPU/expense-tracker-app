import { createContext, ReactNode, useReducer } from "react";

type Expense = {
  id: string;
  description: string;
  amount: number;
  date: Date;
};

type ExpenseContextType = {
  expenses: Expense[];
  addExpense: (data: Omit<Expense, "id">) => void;
  removeExpense: (id: string) => void;
};

export const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "book",
    amount: 4.95,
    date: new Date("2025-11-17"),
  },
  {
    id: "e2",
    description: "sandwich",
    amount: 10.99,
    date: new Date("2025-11-17"),
  },
  {
    id: "e3",
    description: "milk",
    amount: 2.5,
    date: new Date("2025-11-18"),
  },
  {
    id: "e4",
    description: "paper",
    amount: 0.99,
    date: new Date("2025-11-20"),
  },
];

export const ExpensesContext = createContext<ExpenseContextType>({
  expenses: [],
  addExpense: () => {},
  removeExpense: () => {},
});

function expensesReducer(
  state: Expense[],
  action:
    | { type: "ADD"; payload: Omit<Expense, "id"> }
    | { type: "REMOVE"; payload: string }
): Expense[] {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "REMOVE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ContextProvider({ children }: { children: ReactNode }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData: {
    description: string;
    amount: number;
    date: Date;
  }) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function removeExpense(id: string) {
    dispatch({ type: "REMOVE", payload: id });
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
