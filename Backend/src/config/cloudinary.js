const cloudinary = require("cloudinary").v2;

function cloudinaryConnect() {
	try {
		cloudinary.config({
			cloud_name: process.env.CLOUDINARY_API_KEY,
			api_key: process.env.CLOUDINARY_API_SECRET,
			api_secret: process.env.CLOUDINARY_CLOUD_NAME,
		});
		console.log("Cloudinary connected");
	} catch (error) {
		console.error("Cloudinary connection failed:", error);
	}
}

module.exports = { cloudinaryConnect };
