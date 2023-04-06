import { preprocessCSS } from "vite";
import Nav from "../Nav/Nav";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="Layout">
      <header>
        <Nav/>
      </header>
      <main>
        {props.children}
        </main>
      </div>
      );
      }