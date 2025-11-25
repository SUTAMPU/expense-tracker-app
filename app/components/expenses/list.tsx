import { FlatList, StyleSheet, Text, View } from "react-native";
import { Expense } from "./expenses-props";
import ExpenseItem from "./item";

interface ListProps {
  expenses: Expense[];
}

function renderItem(itemData: any) {
  return (
    <>
      <ExpenseItem {...itemData.item} />
    </>
  );
}

function List({ expenses }: ListProps) {
  const expensesSum = expenses.reduce(
    (sum: number, expense: { amount: any }) => sum + expense.amount,
    0
  );

  return (
    <FlatList
      data={expenses}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={<View style={styles.header}></View>}
      ListEmptyComponent={
        <Text style={[styles.text, { fontSize: 12, margin: 100 }]}>
          You do not have any eggspences.
        </Text>
      }
      ListFooterComponent={
        <>
          <View style={styles.footer}>
            <Text style={[styles.text, { textTransform: "uppercase" }]}>
              Total
            </Text>
            <Text style={styles.text}>${expensesSum.toFixed(2)}</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={[styles.text, { fontSize: 12 }]}>
              Have a nice day, User!
            </Text>
          </View>
        </>
      }
    />
  );
}

export default List;

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderStyle: "dashed",
    marginBottom: 5,
  },
  footer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderStyle: "dashed",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  text: {
    fontFamily: "GlacialIndifference-Regular",
    color: "black",
    fontSize: 15,
    letterSpacing: 1.5,
    margin: 10,
    textAlign: "center",
  },
});
