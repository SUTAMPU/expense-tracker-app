import { useState } from "react";
import { StyleSheet, View } from "react-native";

import Button from "../ui/button";
import Input from "./input";

interface FormProps {
  isLogin: boolean;
  onSubmit: (credentials: {
    email: string;
    confirmEmail?: string;
    password: string;
    confirmPassword?: string;
  }) => void;
  credentialsInvalid: {
    email: boolean;
    password: boolean;
    confirmPassword: boolean;
  };
}

function AuthForm({ isLogin, onSubmit, credentialsInvalid }: FormProps) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  const {
    email: emailIsInvalid,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  function updateInputValueHandler(
    inputType: "email" | "password" | "confirmPassword",
    enteredValue: string
  ) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
      case "confirmPassword":
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  return (
    <View>
      <View>
        <Input
          label="Email"
          icon="email"
          keyboardType="email-address"
          secure={false}
          onUpdateValue={(value: string) =>
            updateInputValueHandler("email", value)
          }
          value={enteredEmail}
          isInvalid={emailIsInvalid}
        />
        <Input
          label="Password"
          icon="lock"
          keyboardType="default"
          secure={true}
          onUpdateValue={(value: string) =>
            updateInputValueHandler("password", value)
          }
          value={enteredPassword}
          isInvalid={passwordIsInvalid}
        />
        {!isLogin && (
          <Input
            label="Confirm Password"
            icon="lock"
            keyboardType="default"
            secure={true}
            onUpdateValue={(value: string) =>
              updateInputValueHandler("confirmPassword", value)
            }
            value={enteredConfirmPassword}
            isInvalid={passwordsDontMatch}
          />
        )}
        <View style={styles.buttons}>
          <Button mode="default" onPress={submitHandler}>
            {isLogin ? "Sign in" : "Sign up"}
          </Button>
        </View>
      </View>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  buttons: {
    alignItems: "center",
    marginTop: 20,
  },
});
