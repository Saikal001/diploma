import { useContext } from "react";
import { useMatch } from "react-router-dom"
import { AppContext } from "../App";


export default function Category() {
  //деструктизация {...}
  const { params } = useMatch("/category/:path");
  const { categories } = useContext(AppContext);


  const category = categories.find(
    category => params.path === category.path
     );   
     // полная версия
     



  return (
    <div className="Category">
      <h1>{ category.name } </h1>
    </div>
  )
}