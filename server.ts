import { app } from "./src/app";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI || "mongodb://0.0.0.0:27017/app", {
  useNewUrlParser: true,
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Listening on port: ", port);
  console.log("--------------------------");
});
