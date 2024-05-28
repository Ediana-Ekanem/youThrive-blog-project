import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Index from "./components/home/Index";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Portfolio from "./components/portfolio/Portfolio";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <App />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blog /> },
      { path: "/portfolio", element: <Portfolio /> },
    ],
  },
]);

export default router;
