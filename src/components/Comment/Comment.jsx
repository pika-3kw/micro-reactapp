const Comment = ({ comment }) => {
  if (comment.status === "rejected") {
    return (
      <li>
        <del>{comment.content}</del>
      </li>
    );
  }

  if (comment.status === "pending") {
    return (
      <li>
        <i>{comment.content}</i>
      </li>
    );
  }

  return <li>{comment.content}</li>;
};

export default Comment;
