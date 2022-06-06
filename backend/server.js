const http = require("http");
const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const init = require("./init");
dotenv.config();

const { MONGO_USERNAME, MONGO_PASSWORD, DB_NAME } = process.env;

const server = http.createServer(app);

const url = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.sekfz.mongodb.net/?retryWrites=true&w=majority`;

const hostname = "localhost";
const PORT = process.env.PORT || 5000;

const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: DB_NAME,
    });
    console.log("mongoose is connected...");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

connectDB();
const db = mongoose.connection;

init(db).then(() => {
  server.listen(PORT, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
  });
});
