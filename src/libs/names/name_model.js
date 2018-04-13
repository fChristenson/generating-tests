const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NameSchema = new Schema({
  name: { type: String, required: true },
  type: {
    type: String,
    required: true,
    enum: ["male", "female", "other", "undefined"]
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Name", NameSchema);
