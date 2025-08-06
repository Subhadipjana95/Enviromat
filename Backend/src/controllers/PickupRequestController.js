const PickupRequest = require('../models/PickupRequestModel');
const {uploadImageToCloudinary}=require('../utils/imageUploader');

exports.uploadWaste= async (req, res) => {
        try {
            const { wasteType, quantity, address } = req.body;

                const file = req.files.image; // Assuming you're using express-fileupload
                const result = await uploadImageToCloudinary(file,process.env.CLOUDINARY_FOLDER);

            if (!result || !result.secure_url) {
                return res.status(400).json({ error: 'Image upload failed.' });
            }
            const waste = new PickupRequest({
                userId: req.user.id,
                wasteType,
                imageURL:result.secure_url,
                quantity,
                location: {
                    lat: req.body.lat,
                    lng: req.body.lng,
                },
                address:address,
            });

            await waste.save();
            res.status(201).json({ message: 'Waste uploaded successfully.', waste });
        } catch (err) {
            console.log("Error in waste upload", err);
            res.status(500).json({ error: 'Server error.' });
        }
    }