import "./App.css";

import PostCreate from "./components/PostCreate/PostCreate";
import PostList from "./components/Post/PostList";

import PostStore from "./contexts/post/store";

function App() {
  return (
    <PostStore>
      <div className="App">
        <PostCreate />
        <PostList />
      </div>
    </PostStore>
  );
}

export default App;
