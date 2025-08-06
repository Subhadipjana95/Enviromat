// Import the required modules
const express = require("express")
const router = express.Router()

// Import the required controllers and middleware functions
const {
  login,
  signup,
  sendotp,
  changePassword,
} = require("../controllers/Auth")


const {
  resetPasswordToken,
  resetPassword,
} = require("../controllers/ResetPassword")

const { auth } = require("../middleware/auth")


// Define the routes for user authentication
router.post("/login", login)
router.post("/signup", signup)
router.post("/send-otp", sendotp)
router.post("/changepassword", auth, changePassword)


// Route for generating a reset password token
router.post("/reset-password-token", resetPasswordToken)

// Route for resetting user's password after verification
router.post("/reset-password", resetPassword);

// Rout for uploading waste data
router.post("/upload", auth,uploadWaste);

// Export the router for use in the main application
module.exports = router