import { GlobalStyles } from "@/app/constants/global-styles";
import { ReactNode } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

interface ButtonProps {
  children: ReactNode;
  onPress?: () => void;
  mode?: "flat" | "default";
  style?: ViewStyle;
}

function Button({ children, onPress, mode, style }: ButtonProps) {
  return (
    <View style={style}>
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    padding: 8,
    paddingHorizontal: 75,
    backgroundColor: GlobalStyles.colours.primary,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    fontFamily: "LeagueSpartan-Bold",
    color: "black",
    fontSize: 14,
  },
  flatText: {
    fontFamily: "LeagueSpartan-Regular",
    color: GlobalStyles.colours.gray,
    fontSize: 12,
    textDecorationLine: "underline",
  },
});
