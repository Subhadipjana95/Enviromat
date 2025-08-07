// Import the Mongoose library
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName: {
      minLength: 2,
      maxLength: 20,
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      minLength: 2,
      maxLength: 20,
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },
    accountType: {
      type: String,
      enum: ["Admin", "User", "Picker"],
      default: "User",
      required: true,
    },
    token: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("User", userSchema)
