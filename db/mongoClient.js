import { MongoClient, ObjectId } from "mongodb";

// Connection URL
const url = process.env.MONGO_URI;
const client = new MongoClient(url);

// Database
import mongoose from "mongoose";

const uri = process.env.MONGO_URI;

// mongoose
//   .connect(uri)
//   .then(console.log("Connected"))
//   .catch((err) => console.log(err));

try {
  await mongoose.connect(uri);
  console.log("Connected (mit try catch)");
} catch (error) {
  console.log(error);
}
