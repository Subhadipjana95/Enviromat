const express = require("express");
const router = express.Router();
const { uploadWaste } = require("../controllers/UploadWasteController");
const { auth } = require("../middleware/auth");

exports.uploadWaste=async (req, res) => {
    try {
        const { wasteType, lat, long } = req.body;
        const file = req.files?.image;

        if (!file) {
            return res.status(400).json({ success: false, message: "Image file is required." });
        }

        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
            folder: "waste_uploads"
        });

        const waste = await WasteUpload.create({
            userId: req.user.id,
            wasteType,
            imageURL: result.secure_url,
            location: { lat, long }
        });

        res.status(201).json({
            success: true,
            message: "Waste uploaded successfully.",
            wasteId: waste._id
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Server error.", error: err.message });
    }
}
