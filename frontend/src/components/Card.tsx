import * as React from "react";

const CardComponent = ({ title, admin, date, text, image, author, likes }) => {
  const handleChange = () => {};
  const handleSubmit = e => {
    e.preventDefault();
  };

  if (admin) {
    return (
      <div className="shadow p-8 rounded-2xl border-2 mb-4">
        <div className="flex">
          <h2>{title}</h2>

          <div className="ml-auto">{admin && <p> i</p>}</div>
        </div>

        <p className="text-[10px] text-left">post as an admin</p>
        <div className="mt-4">
          <form onSubmit={handleSubmit} className="flex items-end gap-4">
            <div className="flex flex-col flex-1 text-left">
              <label htmlFor="comment">Comment</label>
              <input placeholder="type your comment" id="comment" onChange={handleChange} className="border rounded p-2" />
            </div>
            <button type="submit" className="bg-blue-500 text-white rounded-sm p-2">
              Post
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="shadow p-8 rounded-2xl border-2">
      <div className="flex">
        <h2 className="font-bold">{author}</h2>

        <div className="ml-auto">{date}</div>
      </div>

      <div className="flex">
        <h3 className="">{text}</h3>
        <div className="max-w-10 rounded">
          <img src={image ? image : ""} alt="icon"></img>
        </div>
      </div>

      <div className="flex">
        <p>{likes}</p> <span>like icons</span>
        <div className="ml-auto p-4">
          <button className="mr-2 border-2 p-2 rounded">edit</button>
          <button className="border-2 p-2 rounded">delete</button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
