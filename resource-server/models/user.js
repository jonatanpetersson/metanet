import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    user: { type: String, required: true },
    email: { type: String, required: true },
    firstname: { type: String, required: false },
    lastname: { type: String, required: false },
    image: { type: String, required: false },
    description: { type: String, required: false },
  }
)

export const UserModel = mongoose.model('User', userSchema);