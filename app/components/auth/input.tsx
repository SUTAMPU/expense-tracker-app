import { GlobalStyles } from "@/app/constants/global-styles";
import Icons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface InputProps {
  label: string;
  icon: any;
  keyboardType: "default" | "email-address" | "numeric" | "phone-pad";
  secure: boolean;
  onUpdateValue: (value: string) => void;
  value: string;
  isInvalid: boolean;
}

function Input({
  label,
  icon,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}: InputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.wrapper}>
      <Icons
        style={styles.icon}
        name={icon}
        size={24}
        color={focused ? GlobalStyles.colours.primary : "black"}
      />
      <TextInput
        style={[
          styles.input,
          focused && styles.inputFocused,
          isInvalid && styles.inputInvalid,
        ]}
        placeholder={label}
        placeholderTextColor={GlobalStyles.colours.gray}
        autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    left: 15,
    top: 13,
  },
  input: {
    flex: 1,
    padding: 15,
    paddingLeft: 50,
    borderRadius: 12,
    width: 300,
    height: 50,
    backgroundColor: GlobalStyles.colours.light,
    fontFamily: "GlacialIndifference-Regular",
    fontSize: 16,
    marginBottom: 10,
  },
  inputFocused: {
    borderColor: GlobalStyles.colours.primary,
    backgroundColor: GlobalStyles.colours.primary50,
  },
  inputInvalid: {
    borderColor: GlobalStyles.colours.error,
    backgroundColor: GlobalStyles.colours.error50,
  },
});
