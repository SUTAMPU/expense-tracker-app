import { StyleSheet, Text, View } from "react-native";
import List from "./list";

import { ExpensesProps } from "./expenses-props";

function Expenses({ expenses, expensesTitle, expensesPeriod }: ExpensesProps) {
  return (
    <View style={styles.wrapper}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>{expensesTitle}</Text>
        <Text style={styles.heading}>{expensesPeriod}</Text>
      </View>

      {/* List of expenses */}
      <View style={styles.main}>
        <List expenses={expenses} />
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
  title: {
    fontFamily: "LeagueSpartan-Bold",
    color: "black",
    fontSize: 20,
    marginBottom: 10,
  },
  heading: {
    fontFamily: "GlacialIndifference-Regular",
    color: "black",
    fontSize: 12,
    letterSpacing: 1.5,
    marginBottom: 10,
  },
});
