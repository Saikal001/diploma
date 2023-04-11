import Delivery from "../../pages/Delivery";
import "./Delivery.css";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <Delivery/>
      
      </header>
      <main>
        {props.children}
        </main>
        <footer>
          Footer
        </footer>
      </div>
      );
      }