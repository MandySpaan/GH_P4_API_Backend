import { roleSeeder } from "./roleSeeder";
import { userSeeder } from "./userSeeder";

(async () => {
  console.log("Starting seeders...");
  await roleSeeder();
  await userSeeder();
})();
