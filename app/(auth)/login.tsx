import { router } from "expo-router";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Button from "../components/ui/button";
import { GlobalStyles } from "../constants/global-styles";

function Login() {
  return (
    <View style={styles.centeredView}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Login to your Account</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={GlobalStyles.colours.gray}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={GlobalStyles.colours.gray}
        />

        <Button
          style={{ marginTop: 20 }}
          mode="default"
          onPress={() => router.push("/")}
        >
          Sign in
        </Button>

        <Text style={styles.link}>
          Don't have an account?{" "}
          <Text style={styles.signup} onPress={() => router.push("/signup")}>
            Sign up
          </Text>
        </Text>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: 70,
    padding: 50,
    alignItems: "center",
  },
  wrapper: {
    width: 300,
    alignItems: "center",
  },
  title: {
    fontFamily: "LeagueSpartan-Bold",
    fontSize: 36,
    marginBottom: 50,
    alignSelf: "flex-start",
  },
  input: {
    padding: 15,
    borderRadius: 12,
    width: 300,
    height: 50,
    backgroundColor: GlobalStyles.colours.light,
    fontFamily: "GlacialIndifference-Regular",
    fontSize: 16,
    marginBottom: 10,
  },
  link: {
    fontFamily: "LeagueSpartan-Regular",
    fontSize: 12,
    marginTop: 5,
  },
  signup: {
    fontFamily: "LeagueSpartan-Bold",
    textDecorationLine: "underline",
    color: GlobalStyles.colours.primary,
  },
});
