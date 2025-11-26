const UserSchema = {
  name: "User",
  primaryKey: "id",
  properties: {
    id: "string",
    email: "string",
    password: "string",
    expenses: "Expense[]",
  },
};

const ExpenseSchema = {
  name: "Expense",
  primaryKey: "id",
  properties: {
    id: "string",
    description: "string",
    price: "double",
    date: "date",
  },
};

export { ExpenseSchema, UserSchema };
