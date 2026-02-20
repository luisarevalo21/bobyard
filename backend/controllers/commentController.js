const mockData = require("../mockdata.json");
// let { comments } = mockData;
const { db } = require("../db/database");

const getAllComments = async (req, res) => {
  //will be updated to get all the
  // comments from db
  try {
    const comments = await db.query("SELECT * FROM comments  ORDER BY id ASC");
    if (comments.rows.length === 0) {
      return res.status(404).json({ message: "no comments found" });
    }
    return res.status(200).json(comments.rows);
  } catch (err) {
    console.log("err", err);
  }
};

//get one id if no id matches return not found or an empty array
const getOneComment = async (req, res) => {
  const commentId = req.params.id;

  if (!commentId) {
    return res.status(404).json({ message: "invalid id provided" });
  }
  try {
    const foundComment = await db.query("SELECT * FROM comments WHERE id = $1", [commentId]);
    if (foundComment.rows.length === 0) {
      return res.status(404).json({ message: "comment not found" });
    }

    return res.status(200).json(foundComment.rows);
  } catch (error) {
    console.log("error", error);
  }
};

const updateComment = async (req, res) => {
  const commentId = req.params.id;
  const updatedText = req.body.text;

  try {
    //first chekcc if the value exists in the db
    // const foundComment = await db.query("SELECT * FROM comments WHERE id = $1", [commentId]);

    // if (foundComment.rows.length === 0) {
    //   return res.status(404).json({ message: "uinable to find the coment " });
    // }

    const response = await db.query("UPDATE comments SET text = $1 WHERE id = $2", [updatedText, commentId]);
    if (response.rowCount === 0) {
      return res.status(400).json({ message: "unable to update comment try again" });
    }
    console.log("repsonse", response);
    return res.status(201).json({ message: "updated comment", commentId: commentId });
  } catch (error) {
    console.log("error occured", error);
    return res.status(400).json({ message: "error occured" });
  }
};

const postComment = async (req, res) => {
  const { text, likes, image } = req.body;
  const id = Math.floor(Math.random() * (100 - 21 + 1)) + 20;
  const author = "Admin";
  const date = new Date().toISOString();

  //get a random image form splash me? or find an pi to get a rnaodm image of cats?
  const newComment = {
    id,
    author: "Admin",
    date: new Date().toISOString(),
    text: text,
    likes: likes,
    image: image,
  };

  try {
    await db.query("INSERT INTO comments (id, author, date, text, likes, image)  VALUES ($1, $2, $3, $4, $5, $6)", [
      id,
      author,
      date,
      text,
      likes,
      image,
    ]);
    return res.status(201).json({ message: "successfully created new comment", newComment: newComment });
  } catch (error) {
    console.log("error inserting ", error);
    return res.status(404).json({ message: "error occured while creating new comment" });
  }
};

// //delets all the comments BE CAREFUL!
const deleteAllComments = async (req, res) => {
  const response = await db.query("DELETE FROM comments");

  console.log("response", response);
  return res.status(200).json({ message: "deleted comments", comments: [] });
};

const deleteOneComment = async (req, res) => {
  const commentId = req.params.id;
  const response = await db.query("DELETE FROM comments WHERE id = $1", [commentId]);
  //didn't delete
  if (response.rowCount === 0) {
    return res.status(400).json({ message: "unable to delete comment not found try again" });
  }
  return res.status(200).json({ message: `deleted comment with id : ${commentId}` });
};

module.exports = { getAllComments, getOneComment, deleteAllComments, deleteOneComment, postComment, updateComment };
