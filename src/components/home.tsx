import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faChevronDown,
  faUser,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { IProduct } from "../interface/product";
import { api } from "../config/axios";
import "./index.css";
import { Link } from "react-router-dom";
import { ICategory } from "../interface/category";
import { height } from "@fortawesome/free-regular-svg-icons/faAddressBook";
const Home: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categorys, setCategories] = useState<ICategory[]>([]);
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
  const plusDivs = (n: number) => {
    showDivs(slideIndex + n);
  };

  const showDivs = (n: number) => {
    let i;
    const x = document.getElementsByClassName(
      "mySlides"
    ) as HTMLCollectionOf<HTMLElement>;
    if (n > x.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(x.length);
    } else {
      setSlideIndex(n);
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    if (x[slideIndex - 1]) {
      x[slideIndex - 1].style.display = "block";
    }
  };

  return (
    <div className="container-lg">
      <header>
        <form action="">
          <div className="search-container">
            <input
              type="text"
              placeholder="Suchen Sie nach Produkten, Marken und mehr"
            />
            <FontAwesomeIcon icon={faSearch} className="fa-search" />
          </div>
        </form>
        <div className="navbar1">
          <div className="language-selector">
            <span>En</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          <div className="menu">
            <div className="menu-item">
              <FontAwesomeIcon icon={faUser} />
              <span>Account</span>
            </div>
            <div className="menu-item cart-icon">
              <FontAwesomeIcon icon={faShoppingBag} />
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
      <div className="display-container">
        <img className="mySlides" src="img/corgi.jpg" alt="Banner 2" />
        <img className="mySlides" src="img/beak3.jpg" alt="Banner 1" />
        <img className="mySlides" src="img/fwfqq 1.png" alt="Banner 3" />

        <button
          className="image-button button-left"
          onClick={() => plusDivs(-1)}
        >
          &#10094;
        </button>
        <button
          className="image-button button-right"
          onClick={() => plusDivs(1)}
        >
          &#10095;
        </button>
      </div>

      <section>
        <div className="best-sellers">
          <h1>Best Sellers</h1>
        </div>

        <div className="products">
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

      <section>
        <div className="tools">
          <div className="left-column">
            <div className="tool large">
              <img src="img/anh8.png" alt="Garten Spaten" />
              <div
                className="label"
                style={{ margin: "0 0 600px", height: "70px" }}
              >
                garten spaten
              </div>
            </div>
          </div>
          <div className="right-column">
            <div className="tool">
              <img src="img/anh9.png" alt="Sand" />
              <div className="label" style={{ margin: "0 0 250px" }}>
                sand
              </div>
            </div>
            <div className="tool">
              <img src="img/anh10.png" alt="Pflanzer" />
              <div className="label" style={{ margin: "0 0 250px" }}>
                pflanzer
              </div>
            </div>
            <div className="tool">
              <img src="img/anh11.png" alt="Schlammkuchen" />
              <div className="label" style={{ margin: "0 0 250px" }}>
                schlammkuchen
              </div>
            </div>
            <div className="tool">
              <img src="img/anh12.png" alt="Klemmen" />
              <div className="label" style={{ margin: "0 0 250px" }}>
                klemmen
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Danh mục *********************************** */}

      <section>
        <div className="categories">
          <h1>Kategorien</h1>
          <hr style={{ border: "1px solid black", margin: "40px" }} />
        </div>

        <div className="category-grid">
          {categorys.map((cate) => (
            <Link to={`/category/${cate.id}`}>
              <div className="tool2">
                <img src={cate.image} alt={cate.name} />
                <div className="label">{cate.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ***************************************************** */}
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
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
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
        <div className="footer-bottom">
          <p>&copy; 2023 hood.de, Inc.</p>
          <div className="payment-methods">
            <img src="img/vi.png" alt="Mastercard" />
            <img src="img/pay.jpg" alt="Visa" />
            <img src="img/kla.jpg" alt="American Express" />
            <img src="img/vi.png" alt="PayPal" />
            <img src="img/pay.jpg" alt="JCB" />
          </div>
          <a href="#" className="scroll-to-top">
            Scroll to top
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
