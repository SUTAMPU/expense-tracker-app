import { AuthContext } from "@/store/auth-context";
import { loginUser } from "@/util/auth";
import { router } from "expo-router";
import { useContext } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import AuthForm from "../components/auth/form";
import { GlobalStyles } from "../constants/global-styles";

interface LoginProps {
  email: string;
  password: string;
}

function Login() {
  const authCtx = useContext(AuthContext);

  async function handleLogin({ email, password }: LoginProps) {
    try {
      const token = await loginUser(email, password);
      authCtx.authenticate(token);
      router.replace("/");
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Please check your credentials or try again later!"
      );
    }
  }

  return (
    <View style={styles.centeredView}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Login to your Account</Text>

        <AuthForm
          isLogin={true}
          onSubmit={handleLogin}
          credentialsInvalid={{
            email: false,
            password: false,
            confirmPassword: false,
          }}
        />

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
