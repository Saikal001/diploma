import Contacts from "../../pages/Contacts";
import CartLink from "../CartLink/CartLink";
import CategoryList from "../CategoryList/CategoryList";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import "./Layout.css";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <Logo />
        <Nav/>
        <CartLink/>
      </header>
      <aside>
        <CategoryList />
      </aside>
      <main>
        {props.children}
        </main>
        <footer>
          <Contacts/>
        </footer>
      </div>
      );
      }