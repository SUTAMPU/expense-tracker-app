import { ExpensesContext } from "@/store/expense-context";
import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import Expenses from "../components/expenses/expenses";
import Header from "../components/header";

function History() {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <View style={styles.wrapper}>
      <Header title={"History"} />

      <Expenses
        expensesTitle={"All Eggspences"}
        expensesPeriod={"Since 11/11/2025"}
        expenses={expensesCtx.expenses}
      />
    </View>
  );
}

export default History;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 50,
    padding: 30,
  },
});
