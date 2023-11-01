import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import PostIndex from "../views/posts/Index";
import PostCreate from "../views/posts/create";
import PostEdit from "../views/posts/edit";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostIndex />} />
        <Route path="/posts/create" element={<PostCreate />} />
        <Route path="/posts/edit/:id" element={<PostEdit />} />
      </Routes>
    </>
  );
}

export default App;
