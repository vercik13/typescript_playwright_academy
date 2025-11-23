import { User } from "./user.ts";

const adminUser = new User("admin", "123456", 37, "it@example.com");
const projectManagerUser: User = new User(
  "po",
  "nejlepsi_role",
  54,
  "po@example.com"
);

adminUser.logUser();
console.log("Věk PO: " + projectManagerUser.getUsername());
console.log("Mail admina " + adminUser.getEmail());
