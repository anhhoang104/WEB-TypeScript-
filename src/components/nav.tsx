import React, { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { api } from "../config/axios";
import { ICategory } from "../interface/category";
const Navbar: React.FC = () => {
  const [categorys, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get("categorys");
        setCategories(data);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    })();
  }, []);
  return (
    <nav className="navbar">
      <ul className="nav-list u1">
        <li className="nav-item l1">
          <Link to={`/`}>Home</Link>
        </li>
        <li className="nav-item l1">
          <Link to={`/listcategory`}>Danh mục</Link>
          <ul className="dropdown-menu">
            {categorys.map((category) => (
              <li key={category.id}>
                <Link
                  to={`/category/${category.id}`}
                  style={{ color: "black" }}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="nav-item l1">
          <Link to={`/dashboard`}>Dashboard</Link>
        </li>
        <li className="nav-item l1">
          <Link to={`/listpro`}>Danh sách</Link>
        </li>
        {/* <li className="nav-item l1">
          <a href="topfe.html#e1">Eckige Töpfe</a>
        </li>
        <li className="nav-item l1">
          <a href="#">Bewässerung</a>
        </li>
        <li className="nav-item l1">
          <a href="#">Pflanzen</a>
        </li> */}
        {/* <li className="nav-item l1">
          <a href="#">Lüftung</a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
