const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

// connect to the DB
connectDB();

// import the routes
const transactions = require("./routes/transactions");

const app = express();
// set middleware
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// setting transaction route
app.use("/api/v1/transactions", transactions);

if (process.env.NODE_ENV === "production") {
  console.log(`running in ${process.env.NODE_ENV} mode`);
  app.use(express.static("../expense-app/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "expense-app", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

// listen for connection
app.listen(PORT, () => {
  console.log(
    `server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  );
});
