import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String,
  createdAt: { type: Date, default: Date.now },
});

export const User = mongoose.model("User", UserSchema);
