import { useEffect, useContext } from "react";
import axios from "axios";

import "./PostList.css";

import { PostContext } from "../../contexts/post/store";

import Post from "./Post";

const PostList = () => {
  const { posts, setPosts } = useContext(PostContext);

  const getPosts = async () => {
    const res = await axios.get("http://localhost:4003/posts");
    const _posts = res.data;
    setPosts(_posts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="post-list">
      {posts.length
        ? posts.map((post, idx) => <Post key={post._id || idx} post={post} />)
        : null}
    </div>
  );
};

export default PostList;
