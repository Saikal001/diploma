import "./Logo.css";
import logo from "../../assets/logo.svg"
import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <div className="Logo">
    
      <NavLink to="/">
      <img src="https://i.pinimg.com/564x/23/f7/b1/23f7b19c633b5aa44183beaec39abf37.jpg" alt ="website logo" />
      </NavLink>
      </div>
      );
      }