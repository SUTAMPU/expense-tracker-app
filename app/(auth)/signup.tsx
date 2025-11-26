import { AuthContext } from "@/store/auth-context";
import { createUser } from "@/util/auth";
import { router } from "expo-router";
import { useContext } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import AuthForm from "../components/auth/form";
import { GlobalStyles } from "../constants/global-styles";

interface SignupProps {
  email: string;
  password: string;
}

function Signup() {
  const authCtx = useContext(AuthContext);

  async function handleSignup({ email, password }: SignupProps) {
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
      router.replace("/");
    } catch (error) {
      Alert.alert(
        "Error!",
        "Your password must be at least 6 characters long."
      );
    }
  }

  return (
    <View style={styles.centeredView}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Create your Account</Text>

        <AuthForm
          isLogin={false}
          onSubmit={handleSignup}
          credentialsInvalid={{
            email: false,
            password: false,
            confirmPassword: false,
          }}
        />

        <Text style={styles.link}>
          Already have an account?{" "}
          <Text style={styles.signup} onPress={() => router.push("/login")}>
            Sign in
          </Text>
        </Text>
      </View>
    </View>
  );
}

export default Signup;

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
