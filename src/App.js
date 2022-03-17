import Countries from "./Pages/Components/Countries/Countries";
import './App.css';
import Navbar from "./Pages/Navbar/Navbar/Navbar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Products from "./Pages/Products/Products/Products";
import Produces from "./Pages/Components/Produce/Produce/Produces";
import Count from "./Component/usereducer/Count";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/countries" element={<Countries />} />
          <Route path="/products" element={<Products />} />
          <Route path="/produces" element={<Produces />} />
          <Route path="/count" element={<Count />} />

        </Routes>
      </BrowserRouter>

    </div>


  );
};

export default App;
