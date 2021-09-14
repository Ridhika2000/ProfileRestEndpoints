require("dotenv").config();
const express = require("express");
const db = require("./config/db");
const bodyParser = require("body-parser");
const app = express();
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected!");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const databaseRoutes = require("./routes/database_routes");
const tableRoutes = require("./routes/table_routes");
const profileRoutes = require("./routes/profile_routes");

app.use("/database", databaseRoutes);
app.use("/table", tableRoutes);
app.use("/profile", profileRoutes);

app.listen("3000", () => {
  console.log("server started on port 3000");
});
