import { BrowserRouter, Routes, Route } from "react-router-dom"
import Faq from "./pages/Faq"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Products from "./pages/Products"
import Blog from "./pages/Blog"
import AboutUs from "./pages/AboutUs"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import BlogPostPage from "./components/BlogPostPage"
import ProductsPage from "./components/ProductsPage"

const App = () => {

  return (

    <div>
      <BrowserRouter >
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/pages/faq" element={<Faq />} />
          <Route path="/pages/products" element={<Products />} />
          <Route path="/pages/blog" element={<Blog />} />
          <Route path="/pages/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Signin />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/blog/:id" element={<BlogPostPage />}/>
          <Route path="/product/:id" element={<ProductsPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
