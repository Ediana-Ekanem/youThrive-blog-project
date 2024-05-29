import { Route, Routes } from "react-router-dom";
import Index from "./components/home/Index";
import About from "./components/about/About";
import Navbar from "./components/nav/Navbar";
import Blog from "./components/blog/Blog";
import Portfolio from "./components/portfolio/Portfolio";
import BlogDetails from "./components/blog/BlogDetails";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
