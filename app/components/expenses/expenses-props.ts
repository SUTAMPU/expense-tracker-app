export interface Expense {
  id: string;
  description: string;
  amount: number;
  date: Date;
}

export interface ExpensesProps {
  expenses: Expense[];
  expensesTitle: string;
  expensesPeriod: string;
}
