import "./Post.css";

import { useEffect, useState } from "react";

import CommentList from "../Comment/CommentList";
import AddComment from "../Comment/AddComment";
import axios from "axios";

const Post = ({ post }) => {
  const { title, content, _id } = post;

  const [comments, setComment] = useState([]);

  const addComment = (newComment) => {
    setComment((current) => [...current, newComment]);
  };

  useEffect(() => {
    const getComments = async () => {
      const res = await axios.get(
        `http://localhost:4002/posts/${_id}/comments`
      );
      const _comments = res.data.comments;
      setComment(_comments);
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
