const express = require('express');
const router = express.Router();
const{uploadWaste}=require('../controllers/WasteController')
const { auth } = require("../middleware/auth")


// POST /api/waste/upload -> for uploading Waste
router.post(
    '/upload',
    auth,
    uploadWaste
);

module.exports = router;