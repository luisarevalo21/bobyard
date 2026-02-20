import React, { useEffect, useState } from "react";
import CardComponent from "../components/Card";
import useComments from "../hooks/useComments";
const Comments = () => {
  // const [comments, setComments ]= useState([])
  const [comments] = useComments();

  let commentList = null;
  //   if (!comments) {
  //     console.log("comments", comments);
  //     commentList = (
  //       <div>
  //         <p>no comments try adding some! </p>
  //       </div>
  //     );
  //   }

  console.log("comments", comments);
  if (comments) {
    commentList = comments.map(comment => {
      return <CardComponent key={comment.id} {...comment} />;
    });
  }
  return (
    <div className="flex flex-col justify-center ">
      <CardComponent admin={true} title={"Tech Forum Discussion"} />

      {commentList}
      {/* <CardComponent title={"Tech Forum Discussion"} author={"Tim"} text="hello from test card componetn" /> */}
    </div>
  );
};

export default Comments;
