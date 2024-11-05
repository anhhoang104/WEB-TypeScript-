import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faChevronDown,
  faUser,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";
const Header: React.FC = () => {
  return (
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
  );
};

export default Header;
