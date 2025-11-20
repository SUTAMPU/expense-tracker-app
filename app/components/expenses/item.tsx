import { GlobalStyles } from "@/app/constants/global-styles";
import { getFormattedDate } from "@/util/date";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Expense } from "./expenses-props";

function ExpenseItem({ id, description, date, amount }: Expense) {
  function handleRemove() {}

  return (
    <Pressable>
      <View style={styles.wrapper}>
        <View>
          <Text style={[styles.font, styles.main]}>{description}</Text>
          <Text style={[styles.font, styles.date]}>
            {getFormattedDate(date)}
          </Text>
        </View>

        <View style={styles.right}>
          <Text style={[styles.font, styles.main]}>{amount.toFixed(2)}</Text>
          <TouchableOpacity onPress={() => handleRemove}>
            <View>
              <Text style={[styles.font, styles.button]}>Remove</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  right: {
    alignItems: "flex-end",
  },
  font: {
    fontFamily: "GlacialIndifference-Regular",
    color: "black",
  },
  main: {
    fontSize: 15,
    textTransform: "uppercase",
  },
  date: {
    fontSize: 12,
    color: GlobalStyles.colours.gray,
  },
  button: {
    fontSize: 10,
    paddingVertical: 2,
    paddingHorizontal: 5,
    backgroundColor: GlobalStyles.colours.primary,
    borderRadius: 100,
  },
});
