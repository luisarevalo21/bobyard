import { useEffect, useState } from "react";

// import

const useComments = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/comments");
        const resJson = await response.json();

        setComments(resJson);
      } catch (err) {
        console.log("err", err);
      }
    };
    getComments();
  }, []);

  return [comments];
};

export default useComments;
