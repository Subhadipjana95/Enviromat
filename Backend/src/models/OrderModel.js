const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product", // your product model (e.g., Medicine or RecycledProduct)
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ["pending", "paid", "failed"],
    default: "pending",
  },
  deliveryStatus: {
    type: String,
    enum: ["processing", "assigned", "delivered", "cancelled"],
    default: "processing",
  },
  deliveredBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ServiceRunner", // who delivered this order
    default: null,
  },
  orderedAt: {
    type: Date,
    default: Date.now,
  },
  deliveredAt: {
    type: Date,
  },
});

module.exports = mongoose.model("Order", orderSchema);
