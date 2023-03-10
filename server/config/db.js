import mongoose from "mongoose";
import "dotenv/config.js";

const connectDB = async () => {
  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect(process.env.MONGO_URI, { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected");
  } catch (err) {
    console.log("DB Connection Error: ", err);
  }
};
export default connectDB; 
