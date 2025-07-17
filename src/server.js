import { app } from "./app.js";
import job from "./config/cron.js";
import { ENV } from "./config/env.js";

if (ENV.NODE_ENV === "production") job.start();

const PORT = ENV.PORT;

app.listen(PORT, () => {
  console.log("listening to port:", PORT);
});
