import { useEffect, useState, type SetStateAction, type Dispatch } from "react";
import { type Comments } from "../types/comments";
import { api } from "../api";

//custom hook to save and store the comments
const useComments = (): [Comments[], Dispatch<SetStateAction<Comments[]>>] => {
  const [comments, setComments] = useState<Comments[]>([]);

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await api.get("/api/comments");
        setComments(response.data);
      } catch (err) {
        console.log("err", err);
      }
    };
    getComments();
  }, []);

  return [comments, setComments];
};

export default useComments;
