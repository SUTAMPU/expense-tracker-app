import { StyleSheet, Text, View } from "react-native";
import List from "./list";

import { DUMMY_EXPENSES } from "./dummy-data";
import { ExpensesProps } from "./expenses-props";

function Expenses({ expensesTitle, expensesPeriod }: ExpensesProps) {
  return (
    <View style={styles.wrapper}>
      {/* Header */}
      <View style={styles.header}>
        <Text>{expensesTitle}</Text>
        <Text>{expensesPeriod}</Text>
      </View>

      {/* List of expenses */}
      <View style={styles.main}>
        <List expenses={DUMMY_EXPENSES} />
      </View>
    </View>
  );
}

export default Expenses;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 30,
    alignItems: "center",
    boxShadow: [
      {
        offsetX: 0,
        offsetY: 0,
        blurRadius: 10,
        color: "rgba(0, 0, 0, 0.25)",
      },
    ],
  },
  header: {
    alignItems: "center",
  },
  main: {
    width: "100%",
    height: "100%",
  },
});
