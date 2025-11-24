import { ExpensesContext } from "@/store/expense-context";
import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import Balance from "../components/balance";
import Expenses from "../components/expenses/expenses";
import Header from "../components/header";

function Index({}) {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {});

  return (
    <View style={styles.wrapper}>
      <Header title={"Home"} />

      <Balance />

      <Expenses
        expensesTitle={"Recent Eggspences"}
        expensesPeriod={"Last 7 Days"}
        expenses={expensesCtx.expenses}
      />
    </View>
  );
}

export default Index;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 50,
    padding: 30,
  },
});
