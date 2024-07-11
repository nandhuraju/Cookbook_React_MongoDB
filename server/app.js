const express = require("express");
const { mongoose } = require("mongoose");
const app = express();
const cors = require("cors");
const routes = require("./routes/recipes");
const cookieParser = require('cookie-parser')



const authRoute =require("./routes/auth")
app.use(
  cors({ 
    origin: "http://localhost:5173",
  })
);

app.use(cookieParser())
app.use(express.json());

app.use("/", routes);
app.use("/" ,authRoute)

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
mongoose.connect("mongodb://localhost:27017/cookbook");

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});