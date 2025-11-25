import { ExpensesContext } from "@/store/expense-context";
import { useContext } from "react";
import { Alert, Modal } from "react-native";
import Content from "./content";

interface OverlayProps {
  id?: string;
  mode: "add" | "remove";
  visible: boolean;
  onClose: () => void;
}

function Overlay({ mode, id, visible, onClose }: OverlayProps) {
  const expenseCtx = useContext(ExpensesContext);

  function handleRemove() {
    expenseCtx.removeExpense(id!);
    onClose();
  }

  function handleAdd(data?: {
    date: string;
    description: string;
    price: string;
  }) {
    if (!data) return;

    // Check input
    const dateIsValid = data.date.toString() !== "Invalid Date";
    const descriptionIsValid = data.description.trim().length > 0;
    const priceInput = parseFloat(data.price);
    const priceIsValid = !isNaN(priceInput) && priceInput > 0;

    if (!dateIsValid || !descriptionIsValid || !priceIsValid) {
      Alert.alert("Invalid input", "Please check your input values");
      return;
    }
    expenseCtx.addExpense({
      description: data.description,
      amount: parseFloat(data.price),
      date: new Date(data.date),
    });

    onClose();
  }

  const content =
    mode === "remove"
      ? {
          mode: "remove",
          title: "Remove Item",
          confirm: "Yes",
          cancel: "Not sure",
          onConfirm: handleRemove,
        }
      : {
          mode: "add",
          title: "Add Item",
          confirm: "Done",
          cancel: "Cancel",
          onConfirm: handleAdd,
        };

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <Content
        mode={content.mode}
        title={content.title}
        confirm={content.confirm}
        cancel={content.cancel}
        onConfirm={content.onConfirm}
        onClose={onClose}
      />
    </Modal>
  );
}

export default Overlay;
