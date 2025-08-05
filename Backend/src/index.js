const express = require("express")
const {dbconnect} =require("./config/database")
const cloudinary = require("./config/cloudinary");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
require("dotenv").config();

// Middlewares
const app = express();
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 4000;

app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: "/tmp/",
	})
);






app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});


const InitlizeConnection = async()=>{

    try{
        await dbconnect();
        console.log("connected to MongoDB");
        cloudinary.cloudinaryConnect();
         console.log("connected to Cloudinary");
        app.listen(PORT, ()=>{
            console.log(`Listening at port ${PORT} `);
        })
    }
    catch(err){
        console.log("Error "+err);
    }
}

InitlizeConnection();
