import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faShoppingBag,
  faCartArrowDown,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import "./productDetail.css";
import { Link, useParams } from "react-router-dom";
import { api } from "../config/axios";
const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(`products/${id}`);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    })();
  }, [id]);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(Math.max(quantity - 1, 1));

  if (!product) return <div>Loading...</div>;
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
          <li className="nav-item l1">
            <a href="topfe.html#e1">Eckige Töpfe</a>
          </li>
          <li className="nav-item l1">
            <a href="#">Bewässerung</a>
          </li>
          <li className="nav-item l1">
            <a href="#">Pflanzen</a>
          </li>
        </ul>
      </nav>

      <section className="sec3">
        <main className="product-detail">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
            <div className="product-thumbnails">
              <img src={product.image} alt="Thumbnail 1" />
              <img src={product.image} alt="Thumbnail 2" />
              <img src={product.image} alt="Thumbnail 3" />
            </div>
          </div>
          <div className="product-info">
            <h2 className="font-semibold">{product.category}</h2>
            <h1 className="font-bold text-black">{product.name}</h1>
            <p className="product-description">{product.description}</p>
            <p className="price">
              ${product.price}
              {product.discount && (
                <span className="discount">{product.discount}%</span>
              )}
              <br />
              {product.oldPrice && (
                <span className="old-price">${product.oldPrice}</span>
              )}
            </p>
            <div className="product-actions">
              <div className="quantity">
                <button className="quantity-btn" onClick={decreaseQuantity}>
                  -
                </button>
                <input
                  type="number"
                  id="quantity-input"
                  value={quantity}
                  readOnly
                />
                <button className="quantity-btn" onClick={increaseQuantity}>
                  +
                </button>
              </div>
              <button className="add-to-cart">
                <FontAwesomeIcon
                  icon={faCartArrowDown}
                  style={{ color: "#edeff3" }}
                />
                Add to cart
              </button>
            </div>
          </div>
        </main>
        <section className="product-details">
          <div className="description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
          <div className="about">
            <h3>About</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it.
            </p>
          </div>
        </section>
      </section>
      <section className="reviews">
        <div className="rating-summary">
          <div className="rating-overview">
            <img src={product.image} alt="Product image" />
            <div className="rating">
              <div className="stars">★★★★★</div>
              <p>
                5.0 <span>(388)</span>
              </p>
            </div>
          </div>
          <button className="write-review">Write reviews</button>
        </div>
        <div className="rating-distribution">
          <div className="rating-bar">
            <span>1★</span>
            <div className="bar">
              <div className="fill" style={{ width: "100%" }}></div>
            </div>
            <span>(388)</span>
          </div>
          <div className="rating-bar">
            <span>2★</span>
            <div className="bar">
              <div className="fill" style={{ width: "10%" }}></div>
            </div>
          </div>
          <div className="rating-bar">
            <span>3★</span>
            <div className="bar">
              <div className="fill" style={{ width: "5%" }}></div>
            </div>
          </div>
          <div className="rating-bar">
            <span>4★</span>
            <div className="bar">
              <div className="fill" style={{ width: "2%" }}></div>
            </div>
          </div>
          <div className="rating-bar">
            <span>5★</span>
            <div className="bar">
              <div className="fill" style={{ width: "1%" }}></div>
            </div>
          </div>
        </div>
        <div className="review-list">
          <div className="review">
            <p>
              <strong>Aman Gupta</strong> ★★★★★
            </p>
            <p>
              I've been using this cleanser for about five or six months now and
              my acne is almost completely gone. I really struggled for years
              with my skin and tried everything possible but this is the only
              thing that managed to clear up my skin. 100% recommend and will
              continue to use it for sure.
            </p>
          </div>
          <div className="review">
            <p>
              <strong>Aman Gupta</strong> ★★★★★
            </p>
            <p>
              I've been using this cleanser for about five or six months now and
              my acne is almost completely gone. I really struggled for years
              with my skin and tried everything possible but this is the only
              thing that managed to clear up my skin. 100% recommend and will
              continue to use it for sure.
            </p>
          </div>
          <div className="review">
            <p>
              <strong>Aman Gupta</strong> ★★★★★
            </p>
            <p>
              I've been using this cleanser for about five or six months now and
              my acne is almost completely gone. I really struggled for years
              with my skin and tried everything possible but this is the only
              thing that managed to clear up my skin. 100% recommend and will
              continue to use it for sure.
            </p>
          </div>
          <button className="see-all">See all</button>
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

export default ProductDetail;
