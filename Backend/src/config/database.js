require("dotenv").config();
const mongoose = require("mongoose");

const mongodb_url = process.env.MONGODB_URL || 'mongodb+srv://subrata:subratamondal24@subrata.ezsbohu.mongodb.net/ENVIROMAT';

exports.dbconnect = () => {
	console.log("MONGODB_URL", mongodb_url);
	mongoose
		.connect(mongodb_url, {
		})
		.then(()=>console.log(`DB Connection Success`))
		.catch((err) => {
			console.log(`DB Connection Failed`);
			console.log(err);
			process.exit(1);
		});
};
