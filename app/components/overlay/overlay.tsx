import { GlobalStyles } from "@/app/constants/global-styles";
import { Modal, StyleSheet, Text, View } from "react-native";
import Button from "../ui/button";

interface OverlayProps {
  visible: boolean;
  onClose: () => void;
}

function Overlay({ visible, onClose }: OverlayProps) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={[styles.main, { fontSize: 20 }]}>Remove Item</Text>
          <View>
            <Text style={styles.text}>
              Are you sure you want to remove your book expense?
            </Text>
          </View>
          <Button mode="default" onPress={onClose}>
            Yes
          </Button>
          <Button mode="flat" onPress={onClose}>
            Not sure
          </Button>
        </View>
      </View>
    </Modal>
  );
}

export default Overlay;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
  },
  main: {
    fontFamily: "LeagueSpartan-Bold",
    color: "black",
  },
  heading: {
    fontFamily: "LeagueSpartan-Regular",
    fontSize: 16,
  },
  text: {
    fontFamily: "GlacialIndifference-Regular",
    fontSize: 12,
    margin: 25,
    width: 160,
    textAlign: "center",
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
