const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose
      .set("strictQuery", false)
      .connect("mongodb+srv://admin:admin@cluster0.9hnzoza.mongodb.net/?retryWrites=true&w=majority")
      .then(() => console.log("db connected..."));
  } catch (error) {
    console.log(`db not connected ${error}`);
  }
};
