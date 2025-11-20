import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={() => Alert.alert("Logout button pressed!")}>
        <View>
          <Text>Logout</Text>
        </View>
      </TouchableOpacity>

      <Text>{title}</Text>

      <TouchableOpacity onPress={() => Alert.alert("Profile button pressed!")}>
        <View>
          <Text>Profile</Text>
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
});
