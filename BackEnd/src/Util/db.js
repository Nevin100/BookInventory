import mongoose from "mongoose";

const ConnectDB = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB is connected Successfully");
  } catch (error) {
    console.log("Error Occured while Connecting", error);
  }
};

export default ConnectDB;
