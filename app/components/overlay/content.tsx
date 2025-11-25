import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../ui/button";
import Form, { InputKeys } from "./form";

interface ContentProps {
  mode: string;
  title: string;
  confirm: string;
  cancel: string;
  onClose: () => void;
  onConfirm: (data?: {
    date: string;
    description: string;
    price: string;
  }) => void;
}

function Content({
  mode,
  title,
  confirm,
  cancel,
  onClose,
  onConfirm,
}: ContentProps) {
  const [input, setInput] = useState({
    date: "",
    description: "",
    price: "",
  });

  function inputHandler(identifier: InputKeys, enteredValue: string) {
    setInput((i) => {
      return {
        ...i,
        [identifier]: enteredValue,
      };
    });
  }

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={[styles.main, { fontSize: 20 }]}>{title}</Text>

        {/* During remove*/}
        {mode === "remove" && (
          <>
            <View>
              <Text style={styles.text}>
                Are you sure you want to remove your expense?
              </Text>
            </View>
          </>
        )}

        {mode === "add" && (
          <>
            {/* During add*/}
            <View>
              <Form input={input} inputHandler={inputHandler} />
            </View>
          </>
        )}

        <Button
          mode="default"
          onPress={() => {
            if (mode === "add") onConfirm(input);
            else onConfirm();
          }}
        >
          {confirm}
        </Button>
        <Button mode="flat" onPress={onClose}>
          {cancel}
        </Button>
      </View>
    </View>
  );
}

export default Content;

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
});
