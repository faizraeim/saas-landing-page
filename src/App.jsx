import Faq from "./pages/Faq"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Products from "./pages/Products"
import Blog from "./pages/Blog"
import AboutUs from "./pages/AboutUs"

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
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
