import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/solid")
  .then(() => console.log("mongoDB connected"));

export { mongoose };
