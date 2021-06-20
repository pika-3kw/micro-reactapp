import { useContext } from "react";

import "./Post.css";

import CommentList from "../Comment/CommentList";
import AddComment from "../Comment/AddComment";
import { PostContext } from "../../contexts/post/store";

const Post = ({ post }) => {
  const { title, content, _id, comments } = post;

  const { addComment } = useContext(PostContext);

  return (
    <div className="post">
      <h4>{title}</h4>
      <p>{content}</p>
      <CommentList comments={comments} />
      <AddComment postId={_id} addComment={addComment} />
    </div>
  );
};

export default Post;
