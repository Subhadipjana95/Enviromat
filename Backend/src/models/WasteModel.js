const mongoose = require('mongoose');

const WasteUploadSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    wasteType: {
        type: String,
        enum: [
            'plastic',
            'metal',
            'organic',
            'e_waste',
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
        lat: {
            type: Number,
            required: true
        },
        lng: {
            type: Number,
            required: true
        }
    },
    address:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('WasteUpload', WasteUploadSchema);