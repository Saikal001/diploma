import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="Nav">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/holiday">Holiday</NavLink></li>
        <li><NavLink to="/popular">Popular</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/delivery">Delivery</NavLink></li>
        <li><NavLink to="/help-forum">Help Forum</NavLink></li>

        

      </ul>
    </nav>
  );
}