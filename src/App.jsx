import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./pages/About";
import Category from "./pages/Category";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="App">

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contacts/>} />
          <Route path="/delivery" element={<Delivery/>} />
          <Route path="/category/:path" element={<Category/>} />
        </Routes>
      </Layout>



    </div>
  );
}
