import React, { useState } from "react";
import CommentCard from "../components/CommentCard";
import AdminCard from "../components/AdminCard";
import useComments from "../hooks/useComments";
import { api } from "../api";
const Comments = () => {
  const [comments, setComments] = useComments();
  const [commentValue, setCommentValue] = useState("");

  let commentList = null;

  //handles deleting a comment passing in the id if succesful updates the list and updates the state
  const handleDelete = async (id: number) => {
    const response = await api.delete(`/api/comments/${id}`);
    if (response.status === 204) {
      console.log("succesfully deleted!!");
      setComments(prevComments => prevComments.filter(comment => comment.id !== id));
      return;
    }

    return;
  };

  //handles the updates receives the id and the updated value, sends it to the backend api
  //if succesful iterates through the list finds it and updates the list witht he updated comment
  //sets the state with the new mapped list
  const handleSaveChanges = async (id: number, updatedValue: string) => {
    const response = await api.put(`/api/comments/${id}`, {
      text: updatedValue,
    });

    if (response.status === 201 || response.status === 200) {
      setComments(prev => prev.map(comment => (comment.id === id ? response.data.updatedComment : comment)));
    }
  };

  //creates a new comment checks first if its empty and returns
  //sends the request and if succesful adds the comment to the state
  const handleCreateNewComment = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (commentValue === "") {
      return;
    }
    try {
      const response = await api.post("/api/comments", {
        text: commentValue.trim(),
      });
      if (response.status === 201) {
        setComments(prev => [...prev, response.data.newComment]);
      }
    } catch (error) {
      console.log("error ", error);
      return;
    } finally {
      setCommentValue("");
    }
  };

  if (comments.length > 0) {
    commentList = comments.map(comment => {
      return <CommentCard key={comment.id} {...comment} handleDelete={handleDelete} handleSaveChanges={handleSaveChanges} />;
    });
  }
  return (
    <div className="flex flex-col container mx-lg px-4">
      <AdminCard
        title={"Tech Forum Discussion"}
        value={commentValue}
        handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setCommentValue(e.target.value)}
        handleCreateNewComment={handleCreateNewComment}
      />
      {commentList}
    </div>
  );
};

export default Comments;
