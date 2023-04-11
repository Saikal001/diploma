import Contacts from "../../pages/Contacts";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import "./Layout.css";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <Logo />
        <Nav/>
      </header>
      <aside>
        Aside
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