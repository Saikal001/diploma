import { useState } from "react";
import Contacts from "../../pages/Contacts";
import Auth from "../Auth/Auth";
import CartLink from "../CartLink/CartLink";
import CategoryList from "../CategoryList/CategoryList";
import Drawer from "../Drawer/Drawer";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import NavToggle from "../NavToggle/NavToggle";
import "./Layout.css";

export default function Layout(props) {
  const [drawerOpen, setDrawerOpen] = useState (false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }
  return (
    <div className="Layout">
      <aside>
        <CategoryList />
      </aside>
      <div className="main">
        <header>
          <Logo />
          <Nav />
          <NavToggle callback={toggleDrawer} />
          <Drawer open={drawerOpen} toggle={toggleDrawer} />
          <CartLink />
          <Auth />
        </header>
        
        <main>
          {props.children}
        </main>
      </div>
      
      <footer>
        <Contacts />
      </footer>

    </div>
  );
}