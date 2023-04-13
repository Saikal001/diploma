import { getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { categoryCollection } from "./firebase";
import About from "./pages/About";
import Category from "./pages/Category";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import Home from "./pages/Home";

export const AppContext = createContext({
  categories: []
});

export default function App() {
const [categories, setCategories] = useState([]);
//
useEffect(() => {
  getDocs(categoryCollection)
    .then(snapshot => {
    const newCategories = [];

    snapshot.docs.forEach(doc => {
      const category = doc.data();
      category.id = doc.id;

      newCategories.push(category);
      });

      setCategories(newCategories);

    })
}, []);
//
  return (
    <div className="App">
<AppContext.Provider value={{ categories }}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contacts/>} />
          <Route path="/delivery" element={<Delivery/>} />
          <Route path="/category/:path" element={<Category/>} />
        </Routes>
      </Layout>

      </AppContext.Provider>

    </div>
  );
}
