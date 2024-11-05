import React, { useEffect, useState } from "react";
import "./listpro.css";
import { Link } from "react-router-dom";
import { IProduct } from "../interface/product";
import { api } from "../config/axios";

const ListPro: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get("products");
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    })();
  }, []);

  return (
    <div className="container-lg">
      <header>
        <form action="">
          <div className="search-container">
            <input
              type="text"
              placeholder="Suchen Sie nach Produkten, Marken und mehr"
            />
            <i className="fas fa-search"></i>
          </div>
        </form>
        <div className="navbar1">
          <div className="language-selector">
            <span>En</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="menu">
            <div className="menu-item">
              <i className="fas fa-user"></i>
              <span>Account</span>
            </div>
            <div className="menu-item cart-icon">
              <i className="fas fa-shopping-bag"></i>
              <span>Cart</span>
              <span className="notification-badge">1</span>
            </div>
          </div>
        </div>
      </header>
      <hr />
      <nav className="navbar">
        <ul className="nav-list u1">
          <li className="nav-item l1">
            <Link to={`/`}>Home</Link>
          </li>
          <li className="nav-item l1">
            <Link to={`/listcategory`}>Danh mục</Link>
            <ul className="dropdown-menu">
              <li>
                <a href="#" style={{ color: "black" }}>
                  Chậu
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "black" }}>
                  Hoa
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "black" }}>
                  Dụng cụ
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "black" }}>
                  Cây
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item l1">
            <Link to={`/dashboard`}>Dashboard</Link>
          </li>
          <li className="nav-item l1">
            <Link to={`/listpro`}>Danh sách</Link>
          </li>

          {/* <li className="nav-item l1">
            <a href="#">Lüftung </a>
          </li> */}
        </ul>
      </nav>

      <section className="sec1">
        <div className="d1">
          <h1>Töpfe & Behälter</h1>
        </div>
      </section>
      <section className="sec4">
        <div className="category-container">
          <div className="category" id="e1">
            <img src="img/anh21.png" alt="Eckige Töpfe" />
            <p>Eckige Töpfe</p>
          </div>
          <div className="category" id="e2">
            <img src="img/anh22.png" alt="Runde Töpfe" />
            <p>Runde Töpfe</p>
          </div>
          <div className="category" id="e3">
            <img src="img/anh23.png" alt="Untersetzer" />
            <p>Untersetzer</p>
          </div>
          <div className="category" id="e4">
            <img src="img/anh24.png" alt="Pflanzschalen" />
            <p>Pflanzschalen</p>
          </div>
        </div>
      </section>

      <section className="sec5">
        <div className="d2">
          <div className="sort-filter">
            <label htmlFor="sort">Sort By :</label>
            <select id="sort">
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <label htmlFor="show">Show :</label>
            <select id="show">
              <option>Default</option>
              <option>20 per page</option>
              <option>40 per page</option>
            </select>
          </div>
        </div>
        <div className="d3">
          <section className="product-grid">
            <div className="products ">
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={`/productDetail/${product.id}`}
                  className="product-link"
                >
                  <div className="product">
                    <img src={product.image} alt={product.name} />
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p className="price">${product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
          <aside>
            <div className="categories">
              <h1>Kategorien</h1>
              <br />
              <div className="dm">
                <label className="mr-0">Eckige Töpfe</label>
                <input type="checkbox" className="ml-8 check" />
              </div>
              <br />
              <div className="dm">
                <label className="mr-0">Eckige Töpfe</label>
                <input type="checkbox" className="ml-8 check" />
              </div>
              <br />
              <div className="dm">
                <label className="mr-0">Eckige Töpfe</label>
                <input type="checkbox" className="ml-8 check" />
              </div>
              <br />
              <div className="dm">
                <label className="mr-0">Eckige Töpfe</label>
                <input type="checkbox" className="ml-8 check" />
              </div>
              <br />
            </div>
            <div className="shop-now">
              <img src="" alt="" />
              <h3>Grow your own favourite plant</h3>
              <button className="btn2">Shop Now</button>
            </div>
            <div className="filters">
              <h2>Filter By Price</h2>
              <input type="range" min="0" max="8000" className="ml-0" />
              <h2>Filter By Size</h2>
              <input type="range" min="2" max="50" className="ml-0" />
            </div>
          </aside>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <p>
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
              Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua
            </p>
            <br />
            <br />

            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h4>Um</h4>
            <ul>
              <li>
                <a href="#">Kontaktiere Uns</a>
              </li>
              <li>
                <a href="#">Über Uns</a>
              </li>
              <li>
                <a href="#">Karriere</a>
              </li>
              <li>
                <a href="#">Unternehmensinformationen</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Hilfe</h4>
            <ul>
              <li>
                <a href="#">Unsere Produzenten</a>
              </li>
              <li>
                <a href="#">Zahlung</a>
              </li>
              <li>
                <a href="#">Versand</a>
              </li>
              <li>
                <a href="#">Stornierung & Rückgabe</a>
              </li>
              <li>
                <a href="#">Verstoß Melden</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Politik</h4>
            <ul>
              <li>
                <a href="#">Rücknahmegarantie</a>
              </li>
              <li>
                <a href="#">Nutzungsbedingungen</a>
              </li>
              <li>
                <a href="#">Sicherheit</a>
              </li>
              <li>
                <a href="#">Privatsphäre</a>
              </li>
              <li>
                <a href="#">Seitenverzeichnis</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ListPro;
