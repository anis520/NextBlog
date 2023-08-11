import mongoose, { Schema } from "mongoose";

const Userschema = new Schema({
  name: {
    type: String,
    required: [true, "Name Required !!"],
  },
  photo: {
    type: String,
    default: "@/app/user.png",
  },
  email: {
    type: String,
    required: [true, "Email Required !!"],
  },
  password: {
    type: String,
    required: [true, "Password Required !!"],
  },
  role: {
    type: String,
    required: [true, "Role are Required !!"],
  },
  verified: Boolean,
});

export const User = mongoose.model.users || mongoose.model("users", Userschema);
