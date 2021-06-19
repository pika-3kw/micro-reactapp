import Comment from "./Comment";

const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return null;
  }

  return (
    <ul className="comment-list">
      {comments.map((comment, idx) => (
        <Comment key={comment._id || idx} comment={comment.content} />
      ))}
    </ul>
  );
};

export default CommentList;
