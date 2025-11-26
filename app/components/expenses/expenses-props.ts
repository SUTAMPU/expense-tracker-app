export interface Expense {
  id: string;
  description: string;
  price: number;
  date: Date;
}

export interface ExpensesProps {
  expenses: Expense[];
  expensesTitle: string;
  expensesPeriod: string;
}
