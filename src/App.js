import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollTop from './components/ScrollTop';
import AllContext from './context/AllContext';
import AboutUs from './pages/AboutUs/AboutUs';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import Blogs from './pages/Blogs/Blogs';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home/Home';
import ServicesDetails from './pages/Services/ServicesDetails/ServicesDetails';
import ServicesOne from './pages/Services/ServicesOne/ServicesOne';
import ServicesTwo from './pages/Services/ServicesTwo/ServicesTwo';
import './App.css';
import NotFound from './pages/NotFound/NotFound';


function App() {
  return (
    <>
      <AllContext>
        <BrowserRouter>
          <ScrollTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<ServicesOne />} />
            <Route path="/servicesTwo" element={<ServicesTwo />} />
            <Route path="/servicesDetails" element={<ServicesDetails />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogDetails" element={<BlogDetails />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/notMatch" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AllContext>
    </>
  );
}

export default App;
