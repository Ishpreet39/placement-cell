const mongoose = require("mongoose");

//this will be DB name which will be seen in mongoDB(compass,robo3t etc)
const DB_NAME = "placement-cell";

//default port for mongodb is 27017
// const connectionURI = `mongodb://127.0.0.1:27017/placement-cell}`;
// const connectionURI =  "mongodb+srv://abhishekkumaras007:5lcyvzMGoczs2drK@cluster0.3abx6oz.mongodb.net/?retryWrites=true&w=majority";
const connectionURI = process.env.MONGO_URL;

//connecting mongoose with the given uri,in this case it is localhost
mongoose.connect(connectionURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//tracking connection,if error we log error if connecion is successfull(open) we log its connected
const db = mongoose.connection;

db.on("error", () => console.error("error while connecting to mongoDB"));

db.once("open", () => {
  console.log("connected to mongoDB");
});

module.exports = db;








