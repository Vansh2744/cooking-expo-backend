import { app } from "./app.js";
import { ENV } from "./config/env.js";

const PORT = ENV.PORT;

app.listen(PORT, () => {
  console.log("listening to port:", PORT);
});
