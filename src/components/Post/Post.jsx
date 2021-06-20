import axios from "axios";
import { useEffect, useContext } from "react";

import "./Post.css";

import CommentList from "../Comment/CommentList";
import AddComment from "../Comment/AddComment";
import { PostContext } from "../../contexts/post/store";

const Post = ({ post }) => {
  const { title, content, _id, comments } = post;

  const { setComments, addComment } = useContext(PostContext);

  useEffect(() => {
    const getComments = async () => {
      const res = await axios.get(
        `http://localhost:4002/posts/${_id}/comments`
      );
      const _comments = res.data.comments;
      setComments(_id, _comments);
    };

    getComments();
  }, [post]);

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
