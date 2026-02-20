//main goal is to implment add edit and delete comments
//current commetns data is mock data
//start by manipulating the dat locally using a an array here
//then integrate the database portion of crud operations to the database using postgresql

//once the routes are correct implment the frontend using the mock dat to fetch the data and make changes ie delete and update
//returning the updated data back to the frontend implment the database poriton as well
//no auth needed. cors will need to be setup for the frontend and backend allowing it to be called

//look into postgresql and deploying it to production as well
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
//exports it and destructures out the comments
// const mockData = require("./mockdata.json");
// let { comments } = mockData;
connectDB();
const commentRoutes = require("./routes/commentRoutes.js");
app.use("/api", commentRoutes);

//array of comments
// console.log("comments", comments);
app.get("/", async (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
