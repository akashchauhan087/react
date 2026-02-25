import Gallery from "./Gallery"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Route, Routes, Link } from "react-router-dom";
import  Home from "./pages/Home";
import  About from "./pages/About";
import  Contact from "./pages/Contact";

function App(){
  return(
    <div className="h-screen">
      <div className="h-[6%] bg-gray-500">
        <Navbar />
      </div>

      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/about' element={<About /> } />
        <Route path='/contact' element={<Contact /> } />
      </Routes>

      
      {/* <div className="h-[6%] bg-gray-500 align-bottom"> */}
      <div className="absolute bottom-0 h-[6%] bg-gray-500">
        <Footer />
      </div>
    </div>
  )
}

export default App
