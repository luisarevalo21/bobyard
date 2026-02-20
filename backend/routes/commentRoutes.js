const express = require("express");
const router = express.Router();

const {
  getAllComments,
  getOneComment,
  deleteAllComments,
  deleteOneComment,
  postComment,
  updateComment,
} = require("../controllers/commentController.js");

router.get("/comments", getAllComments);
router.get("/comments/:id", getOneComment);

router.post("/comments", postComment);

router.put("/comments/:id", updateComment);

router.delete("/comments", deleteAllComments);
router.delete("/comments/:id", deleteOneComment);
module.exports = router;
