import { useState } from "react";
import PostContext from "./context";

const PostStore = ({ children }) => {
  const initPostStore = {
    posts: [],
  };

  const [postStore, setPostStore] = useState(initPostStore);

  const addPost = (post) => {
    const _posts = postStore.posts;
    _posts.push(post);
    setPostStore((current) => ({ ...current, posts: _posts }));
  };

  const setPosts = (posts) => {
    setPostStore((current) => ({ ...current, posts }));
  };

  const postProvider = {
    ...postStore,
    addPost,
    setPosts,
  };

  return (
    <PostContext.Provider value={postProvider}>{children}</PostContext.Provider>
  );
};

export { PostContext };
export default PostStore;
