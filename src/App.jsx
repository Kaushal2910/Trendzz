// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ProductDetails from "./pages/ProductDetails";
// import Home from "./pages/Home";


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/product/:id" element={<ProductDetails />} />
//         <Route path="/Home/:id" element={<Home />} />
//       </Routes>
//     </Router>
    
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/Mens";
import Contact from "./pages/Newarrival";
import Cart from "./pages/Womens";
// import Navbar from "./components/Navbar";
import Couple from "./pages/Couples";
import Aboutus from "./pages/Aboutus";
import Mens from "./pages/Mens";
import Newarrival from "./pages/Newarrival";
import Sale from "./pages/Sale";
import Womens from "./pages/Womens";


function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Couple" element={<Couple/>} />
        <Route path="/Aboutus" element={<Aboutus/>} />
        <Route path="/Mens" element={<Mens/>} />
        <Route path="/Newarrival" element={<Newarrival/>} />
        <Route path="/Sale" element={<Sale/>} />
        <Route path="/Womens" element={<Womens/>} />
        

      </Routes>
    </Router>
  );
}

export default App;

