import mongoose from "mongoose";
const url = process.env.MONGODB_URI;

const connectDB = handler => async (req,res) => {
  if (mongoose.connection.readyState) {
    return handler(req, res);
  }
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return handler(req, res);
};

export default connectDB;
