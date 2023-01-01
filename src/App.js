import { Route, Routes } from "react-router";
import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails";
import Bookatable from "./components/Bookatable";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Odyssey from "./components/Odyssey";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<Odyssey />} />
      <Route path="/menu" exact element={<Menu />} />
      <Route path="/bookatable" exact element={<Bookatable />} />
      <Route path="/contact" exact element={<Contact />} />
      <Route path="/blog" exact element={<Blog />} />
      <Route path="/about" exact element={<About />} />
      <Route path="/title" exact element={<Odyssey />} />
      <Route path="/blogDetails/:data" exact element={<BlogDetails />} />
    </Routes>
  );
}

export default App;
