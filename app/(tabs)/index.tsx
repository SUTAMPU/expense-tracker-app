import { ExpensesContext } from "@/store/expense-context";
import { getDateMinusDays } from "@/util/date";
import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import Balance from "../components/balance";
import Expenses from "../components/expenses/expenses";
import Header from "../components/header";

function Index({}) {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <View style={styles.wrapper}>
      <Header title={"Home"} />

      <Balance />

      <Expenses
        expensesTitle={"Recent Eggspences"}
        expensesPeriod={"Last 7 Days"}
        expenses={recentExpenses}
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
