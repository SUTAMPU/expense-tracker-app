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
          <Text style={[styles.main, { fontSize: 20 }]}>Title</Text>
          <View>
            <Text>Content</Text>
          </View>
          <Button mode="default" onPress={onClose}>
            Done
          </Button>
          <Button mode="flat" onPress={onClose}>
            Cancel
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
