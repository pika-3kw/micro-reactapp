import "./Post.css";

import CommentList from "../Comment/CommentList";

const Post = ({ post }) => {
  const { title, content, comments } = post;

  return (
    <div className="post">
      <h4>{title}</h4>
      <p>{content}</p>
      <CommentList comments={comments} />
    </div>
  );
};

export default Post;
