
import Contacts from "../../pages/Contacts";
import "./Contacts.css";

export default function Layout(props) {
  return (
    <div className="Contacts">
      <header>
      <Contacts/>
      
      </header>
      <main>
        {props.children}
        </main>
      
      </div>
      );
      }