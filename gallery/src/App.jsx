import Gallery from "./Gallery"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App(){
  return(
    <div className="h-screen">
      <div className="h-[6%] bg-gray-500">
        <Navbar />
      </div>
      <div className="h-[88%] bg-gray-100">
        <Gallery />
      </div>
      <div className="h-[6%] bg-gray-500">
        <Footer />
      </div>
    </div>
  )
}

export default App
