require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const { connectDB } = require("./db/database.js");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

//connects the db
connectDB();
//sets the routes for comments
const commentRoutes = require("./routes/commentRoutes.js");
app.use("/api", commentRoutes);

app.get("/", async (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
