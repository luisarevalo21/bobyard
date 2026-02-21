import React, { useState } from "react";
import { type CommentCardProps } from "../types/comments";

//card compeont displays the data and receives props passed in details about the data
//also has state for updating the card and if the update was triggered
const CardComponent = ({ id, date, text, image, author, likes, handleDelete, handleSaveChanges }: CommentCardProps) => {
  const [editState, setEditState] = useState<boolean>(false);
  const [textAreaValue, setTextAreaValue] = useState<string>(text);
  const handleEditChanges = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
  };

  //local method to update the comment and sends the request to the parent
  //while updates the state here saying the state changed from being editted to saved.
  const onHandleSaveChanges = async () => {
    try {
      await handleSaveChanges(id, textAreaValue);
      setEditState(false);
    } catch (error) {
      console.log("Save failed:", error);
      return;
    }
  };

  const convertedDate = new Date(date).toLocaleString();

  return (
    <div className="p-8 rounded-2xl border-2 mb-4 shadow-sm shadow-white">
      <div className="flex mb-2">
        <h2 className="font-bold">{author}</h2>
        <div className="ml-auto">{convertedDate}</div>
      </div>

      <div className="flex flex-col mb-2">
        {editState ? (
          <textarea
            value={textAreaValue}
            onChange={handleEditChanges}
            className="text-left mb-4 border-2 rounded p-2 resize-none focus:outline-none focus:border-blue-400 min-h-30"
          ></textarea>
        ) : (
          <h3 className="text-left mb-4">{text}</h3>
        )}
        <div className="w-50 rounded">
          <img src={image ? image : "https://picsum.photos/200"} alt="icon"></img>
        </div>
      </div>

      <div className="flex items-center h-10">
        <p className="mr-2">{likes}</p> <span>like icons</span>
        <div className="ml-auto p-4">
          {editState ? (
            <button className="mr-2 border-2 p-2 rounded cursor-pointer" onClick={() => onHandleSaveChanges()}>
              Save
            </button>
          ) : (
            <button className="mr-2 border-2 p-2 rounded cursor-pointer" onClick={() => setEditState(true)}>
              edit
            </button>
          )}
          <button
            className="border-2 p-2 rounded cursor-pointer disabled:cursor-not-allowed"
            onClick={() => handleDelete(id)}
            disabled={editState}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
