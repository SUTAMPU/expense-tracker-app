import { GlobalStyles } from "@/app/constants/global-styles";
import { StyleSheet, Text, TextInput, View } from "react-native";

export type InputKeys = "date" | "description" | "price";

interface FormProps {
  input: {
    date: string;
    description: string;
    price: string;
  };
  inputHandler: (key: InputKeys, value: string) => void;
}

function Form({ input, inputHandler }: FormProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>Date</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        placeholderTextColor={GlobalStyles.colours.gray}
        maxLength={10}
        onChangeText={(text) => inputHandler("date", text)}
        value={input.date}
      />

      <Text style={styles.heading}>Description</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={GlobalStyles.colours.gray}
        onChangeText={(text) => inputHandler("description", text)}
        value={input.description}
      />

      <Text style={styles.heading}>Price</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={GlobalStyles.colours.gray}
        keyboardType="decimal-pad"
        onChangeText={(text) => inputHandler("price", text)}
        value={input.price}
      />
    </View>
  );
}

export default Form;

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 10,
    marginHorizontal: 25,
  },
  heading: {
    fontFamily: "LeagueSpartan-Regular",
    fontSize: 16,
    marginBottom: 5,
    marginTop: 15,
  },
  input: {
    padding: 15,
    borderRadius: 12,
    width: 220,
    height: 40,
    backgroundColor: GlobalStyles.colours.light,
    fontFamily: "GlacialIndifference-Regular",
    fontSize: 16,
  },
});
