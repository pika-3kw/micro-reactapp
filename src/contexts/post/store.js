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

  const addComment = (postId, comment) => {
    const postIdx = postStore.posts.findIndex((post) => post._id === postId);
    let _posts = postStore.posts;

    if (postIdx >= 0) {
      let postComments = _posts[postIdx].comments || [];

      postComments.push(comment);

      _posts[postIdx].comments = postComments;
      setPostStore((current) => ({ ...current, posts: _posts }));
    }
  };

  const setComments = (postId, comments) => {
    const postIdx = postStore.posts.findIndex((post) => post._id === postId);
    let _posts = postStore.posts;

    if (postIdx >= 0) {
      _posts[postIdx].comments = comments;
      setPostStore((current) => ({ ...current, posts: _posts }));
    }
  };

  const postProvider = {
    ...postStore,
    addPost,
    setPosts,
    addComment,
    setComments,
  };

  return (
    <PostContext.Provider value={postProvider}>{children}</PostContext.Provider>
  );
};

export { PostContext };
export default PostStore;
