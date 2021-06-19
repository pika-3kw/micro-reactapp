import { useState, useContext } from "react";
import axios from "axios";

import "./PostCreate.css";

import Input from "../Input/Input";
import Button from "../Button/Button";
import TextArea from "../TextArea/TextArea";
import { PostContext } from "../../contexts/post/store";

const PostCreate = () => {
  const initForm = {
    title: "",
    content: "",
  };

  const [form, setForm] = useState(initForm);

  const { addPost } = useContext(PostContext);

  const handleInputTextChange = (e) => {
    const { name, value } = e.target;

    setForm((current) => ({ ...current, [name]: value }));
  };

  const validate = (form) => {
    const errors = [];

    if (!form.title.length) {
      errors.push("You can input post title!");
    }

    if (!form.content.length) {
      errors.push("You can input post content !");
    }

    if (!errors.length) {
      return null;
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate(form);
    if (errors) {
      errors.forEach((error) => {
        console.log(error);
      });
      return;
    }

    try {
      const res = await axios.post("http://localhost:4001/posts", form);
      const _post = res.data;
      addPost(_post);
      setForm(initForm);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="post-create">
      <h2>New Post</h2>

      <form className="post-form" onSubmit={handleSubmit}>
        <Input
          name="title"
          label="Title"
          value={form.title}
          onChange={handleInputTextChange}
        />
        <TextArea
          name="content"
          label="Content"
          value={form.content}
          onChange={handleInputTextChange}
        />
        <Button submit label="Create" />
      </form>
    </div>
  );
};

export default PostCreate;
