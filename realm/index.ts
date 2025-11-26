import Realm from "realm";
import { ExpenseSchema, UserSchema } from "./schema";

const realm = new Realm({
  path: "ExpenseDB",
  schema: [UserSchema, ExpenseSchema],
});

export default realm;
