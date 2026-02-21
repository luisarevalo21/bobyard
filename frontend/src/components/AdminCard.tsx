import { type AdminCardProps } from "../types/comments";

//displays the admin card and receives title, value and change functions for creating new comment and submitting a new comment
const AdminCard = ({ title, value, handleChange, handleCreateNewComment }: AdminCardProps) => {
  return (
    <div className="p-8 rounded-2xl border-2 mb-4 shadow-sm shadow-white cursor-pointer">
      <div className="flex">
        <h2>{title}</h2>
        {/* <div className="ml-auto"></div> */}
      </div>

      <p className="text-[12px] text-left">post as an admin</p>
      <div className="mt-4">
        <form onSubmit={handleCreateNewComment} className="flex items-end gap-4">
          <div className="flex flex-col flex-1 text-left">
            <label htmlFor="comment">Comment</label>
            <input placeholder="type your comment" id="comment" onChange={handleChange} className="border rounded p-2" value={value} />
          </div>
          <button type="submit" className="bg-blue-500 text-white rounded-sm p-2">
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminCard;
