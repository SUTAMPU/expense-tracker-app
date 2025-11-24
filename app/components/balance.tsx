import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
const editIcon = require("../../assets/images/edit-icon.png");

interface CurrencyProps {
  currency: "euro" | "dollar" | "pound" | "baht";
}

function Balance() {
  const [currency, setCurrency] = useState<CurrencyProps>({ currency: "euro" });

  const currencySymbols = {
    euro: "€",
    dollar: "$",
    pound: "£",
    baht: "฿",
  };
  return (
    <View style={styles.wrapper}>
      <Text style={[styles.font, styles.text]}>Total Balance</Text>
      <Text style={styles.number}>
        {currencySymbols[currency.currency]}450.00
      </Text>

      <Picker
        selectedValue={currency}
        onValueChange={(item, _) => setCurrency(item)}
      >
        <Picker.Item label="EURO" value="euro" />
        <Picker.Item label="DOLLAR" value="dollar" />
        <Picker.Item label="POUND" value="pound" />
        <Picker.Item label="BAHT" value="baht" />
      </Picker>
    </View>
  );
}

export default Balance;

const styles = StyleSheet.create({
  wrapper: {
    height: 200,
    alignItems: "center",
  },
  font: {
    fontFamily: "GlacialIndifference-Regular",
    color: "black",
  },
  button: {
    fontSize: 10,
    textTransform: "uppercase",
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 1,
  },
  text: {
    fontSize: 12,
    letterSpacing: 1.5,
    margin: 10,
  },
  number: {
    fontFamily: "LeagueSpartan-Bold",
    color: "black",
    fontSize: 64,
  },
});
