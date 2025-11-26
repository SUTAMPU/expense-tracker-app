import { AuthContext } from "@/store/auth-context";
import { useContext } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GlobalStyles } from "../constants/global-styles";
const logoutIcon = require("../../assets/images/logout-icon.png");

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  const authCtx = useContext(AuthContext);

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={authCtx.logout}>
        <View>
          <Image
            source={logoutIcon}
            style={{
              width: 20,
              height: 20,
            }}
          />
        </View>
      </TouchableOpacity>

      <Text style={styles.text}>{title}</Text>

      <TouchableOpacity onPress={() => Alert.alert("Profile button pressed!")}>
        <View style={styles.profile}>
          <Text style={styles.name}>SP</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  text: {
    fontFamily: "LeagueSpartan-Bold",
    color: "black",
    fontSize: 24,
  },
  profile: {
    backgroundColor: GlobalStyles.colours.primary,
    borderRadius: 100,
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontFamily: "GlacialIndifference-Regular",
    fontSize: 16,
    color: "white",
    textTransform: "uppercase",
  },
});
