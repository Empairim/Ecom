import mongoose from "mongoose";

export async function initMongoose() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } //coonections can have diff states 1 is checking if its rdy
  return await mongoose.connect(process.env.MONGODB_URL);
} // name doesnt matter
// async function this connect so have to await it
