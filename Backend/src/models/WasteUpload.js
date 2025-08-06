const mongoose = require("mongoose");

const WasteUploadSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    wasteType: {
        type: String,
          enum: [
            'plastic',
            'metal',
            'organic',
            'e-waste',
            'glass',
            'paper',
            'textile',
            'hazardous',
            'mixed',
            'others'
        ],
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    location: {
        lat: { type: Number, required: true },
        long: { type: Number, required: true }
    },
    date: {
        type: Date,
        default: Date.now
    }
});