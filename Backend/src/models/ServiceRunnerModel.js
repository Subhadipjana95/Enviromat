const mongoose = require("mongoose");

const serviceRunnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["waste", "delivery", "both"],
    default: "both",
  },
  location: {
    lat: { type: Number },
    lng: { type: Number },
  },
  status: {
    type: String,
    enum: ["available", "busy"],
    default: "available",
  },
  assignedPickups: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PickupRequest", // Waste pickups
    },
  ],
  assignedDeliveries: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order", // Online store deliveries
    },
  ],
  creditPoints: {
    type: Number,
    default: 0, // initial points
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ServiceRunner", serviceRunnerSchema);
