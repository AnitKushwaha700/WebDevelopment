import mongoose from "mongoose";

export function connectDB() {
  mongoose.connect(process.env.MONGO_DB_URI);
  console.log("DB is connected");
}
