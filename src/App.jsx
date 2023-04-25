import { getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import { categoryCollection, productCollection, onAuthChange, orderCollection } from "./firebase";
import About from "./pages/About";
import Category from "./pages/Category";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import ThankYou from "./pages/ThankYou";
import Orders from "./pages/Orders";

export const AppContext = createContext({
  categories: [],
  products: [],
  orders : [],

//корзина
  cart: {},
  setCart: () => {},

  user: null, // здесь будет храниться информация про пользователя
});

export default function App() {
const [categories, setCategories] = useState([]);
const [products, setProducts] = useState([]);
const [orders, serOrders] = useState([]);


const [user, setUser] = useState(null);
//корзина
const [cart, setCart] = useState(() => {
  return JSON. parse (localStorage.getItem("cart")) || {};
});
useEffect (() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);
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

    getDocs(productCollection)
    .then(snapshot => {
    const newProducts = [];

    snapshot.docs.forEach(doc => {
      const product = doc.data();
      product.id = doc.id;

      newProducts.push(product);
      });

      setProducts(newProducts);
      

      onAuthChange(user => {
        setUser(user);
      }); 
    })


    getDocs(orderCollection)
    .then(snapshot => {
    const newOrders = [];

    snapshot.docs.forEach(doc => {
      const order = doc.data();
      order.id = doc.id;

      newOrders.push(order);
      });

      setOrders(newOrders);
      

      onAuthChange(user => {
        setUser(user);
      }); 
    })
}, []);
//



    
  return (
    <div className="App">
<AppContext.Provider value={{ categories, products, cart, setCart, user, orders }}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/category/:path" element={<Category />} />
          <Route path="/product/:path" element={<Product />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Layout>

      </AppContext.Provider>

    </div>
  );
}
