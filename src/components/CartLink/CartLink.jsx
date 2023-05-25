
// import { AppContext } from "../../App";
// import { Link } from "react-router-dom";
// import kor from "../assets/kor.jpg";

// export default function CartLink() {
//   const { cart } = useContext(AppContext);

//   const total = Object.values(cart).reduce((acc, num) => acc + num, 0);

//   return (
//     <div className="CartLink">
//       <Link to="/cart">
//         <img src={kor} alt="" />
//          ({total})
//       </Link>
//     </div>
//   );
// }


import "./CartLink.css";
import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export default function CartLink() {
  const { cart } = useContext(AppContext);

  const total = Object.values(cart).reduce((acc, num) => acc + num, 0);

  return (
    <div className="CartLink">
      <Link to="/cart">
        Cart ({total})
      </Link>
    </div>
  );
    
}