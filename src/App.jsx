import { Route, Routes } from "react-router-dom";
import Index from "./components/home/Index";
import About from "./components/about/About";

import Navbar from "./components/nav/Navbar";
import Blog from "./components/blog/Blog";
import Portfolio from "./components/portfolio/Portfolio";
import BlogDetails from "./components/blog/BlogDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogOne" element={<BlogDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
