import { StyleSheet, View } from "react-native";
import { DUMMY_EXPENSES } from "../components/expenses/dummy-data";
import Expenses from "../components/expenses/expenses";
import Header from "../components/header";

function History() {
  return (
    <View style={styles.wrapper}>
      <Header title={"History"} />

      <Expenses
        expensesTitle={"All Eggspences"}
        expensesPeriod={"Since 11/11/2025"}
        expenses={DUMMY_EXPENSES}
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
