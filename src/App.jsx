import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Holiday from "./pages/Holiday";
import About from "./components/About/About";
import Category from "./pages/Category";
import { createContext, useEffect, useState } from "react";

import { onAuthChange, onCategoriesLoad, onOrdersLoad, onProductsLoad } from "./firebase";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import ThankYou from "./pages/ThankYou";
import Orders from "./pages/Orders";
import Blog from "./pages/Blog";
import Popular from "./components/Popular/Popular";





export const AppContext = createContext({
  categories: [],
  products: [],
  orders: [],

  // корзина
  cart: {},
  setCart: () => { },

  user: null, // здесь будет храниться информация про пользователя
});

export default function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || {};
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    onCategoriesLoad(setCategories);
    onProductsLoad(setProducts);
    onOrdersLoad(setOrders);

    onAuthChange((user) => {
      if (user) {
        user.isAdmin = user.email === "zanybaevasajkal@gmail.com";
      }
      setUser(user);
    });
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{ categories, products, cart, setCart, user, orders }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/holiday" element={<Holiday />} />
             <Route path="/popular" element={<Popular />} />
            <Route path="/category/:path" element={<Category />} />
            <Route path="/product/:path" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/orders" element={<Orders />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}
