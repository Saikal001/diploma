import { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { categoryCollection } from "../../firebase";

import "./CategoryList.css";
import { NavLink } from "react-router-dom";
import AddCategory from "../AddCategory/AddCategory";
import DeleteCategory from "../DeleteCategory/DeleteCategory";

export default function CategoryList() {
      
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getDocs(categoryCollection)
      .then(snapshot => {
      const newCategories = [];

      snapshot.docs.forEach(doc => {
        const category = doc.data();
        category.id = doc.id;

        newCategories.push(category);
        });

        setCategories(newCategories);

      })
  }, []);

  const output = categories.map(category => (
    <li key={category.id}>
      <NavLink to={'/category/' + category.path}>
        {category.name}
      </NavLink>
      <DeleteCategory category={category} />
    </li>
  ))
  return (
    <div className="CategoryList">
      
      {/* <button className="dropdownBtn"> Categories <i className="fa-solid fa-chevron-down fa-xs"></i></button>     <ul className="dropdownContent"> */}
        {output}
      
      <AddCategory/>
    </div>
  );


}

// export default function CategoryList() {//
//   const { categories } = useContext(AppContext);//

//   const output = categories.map((category) => (
//     <li key={category.id}>//
//       <NavLink to={"/categories/" + category.slug}>
//         {category.name}
//       </NavLink>//

//       <DeleteCategory category={category} />
//     </li>
//   ))

//   return (
//     <div className="CategoryList">
//<button className="dropdownBtn"> Categories <i className="fa-solid fa-chevron-down fa-xs"></i></button>
//       <ul className="dropdownContent">{       output}
//       <AddCategory />
//       </ul>
//     </div>
//   )
// }