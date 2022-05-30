const http = require("http");
const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const server = http.createServer(app);

const init = require("./init");

const hostname = "localhost";
const PORT = process.env.PORT || 5000;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: process.env.DB_NAME,
    });
    console.log("mongoose is connected...");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

connectDB();
var db = mongoose.connection;

init(db).then(() => {
  server.listen(PORT, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
  });
});
