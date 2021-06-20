import { useState } from "react";
import axios from "axios";

import "./AddComment.css";

import Input from "../Input/Input";
import Button from "../Button/Button";

const AddComment = ({ postId, addComment }) => {
  const [comment, setComment] = useState("");

  const handleInputTextChange = (e) => {
    const { value } = e.target;

    setComment(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!comment) {
      console.log("You can input comment!");
      return;
    }

    try {
      const res = await axios.post(
        `http://localhost:4002/posts/${postId}/comments`,
        {
          content: comment,
        }
      );
      const _comment = res.data;
      addComment(postId, _comment);
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add-comment">
      <form className="form-comment" onSubmit={handleSubmit}>
        <Input
          value={comment}
          className="add-comment__input"
          onChange={handleInputTextChange}
          placeholder="Add Comment"
        />
        <Button submit label="Comment" className="add-comment__button" />
      </form>
    </div>
  );
};

export default AddComment;
