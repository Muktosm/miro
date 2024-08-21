import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Index from "./Components/Index";
import Pages from "./Components/Pages";
import Product from "./Components/Product";
import Solutions from "./Components/Solutions";
import Resources from "./Components/Resources";
import Enterprise from "./Components/Enterprise";
import Pricing from "./Components/Pricing";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/product" element={<Product />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </>
  );
}

export default App;
