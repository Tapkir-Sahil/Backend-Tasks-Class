const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  contactNumber: String,
  course: String,
  batchCode: String,
  joiningDate: String,
  remarks: String,
});

module.exports = mongoose.model("Student", studentSchema);