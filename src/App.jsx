import About from "./components/About"
import Body from "./components/Body"
import Corporate from "./components/Corporate"
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Offers from "./components/Offers"
import Help from "./components/Help"
import Cart from "./components/Cart"
import Menu from "./components/Menu"

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />}/>
        <Route path="/home" element={<Body />}/>
        <Route path="/about" element={<About />} />
        <Route path="/swiggycorporate" element={<Corporate />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/help" element={<Help />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Body />} />
        <Route path="/restaurants/:resId" element={<Menu />} />
      </Routes>      
    </>
  )
}

export default App
