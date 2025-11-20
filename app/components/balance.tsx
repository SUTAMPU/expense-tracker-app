import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function handleCurrency() {}

function Balance() {
  return (
    <View style={styles.wrapper}>
      <Text>Total Blanace</Text>
      <Text>€450.00</Text>
      <TouchableOpacity onPress={() => Alert.alert("Currency button pressed!")}>
        <View>
          <Text style={[styles.font, styles.button]}>Euro</Text>
        </View>
      </TouchableOpacity>
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
});
