import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./header";
import Navbar from "./nav";
import Footer from "./footer";
import { IProduct } from "../interface/product";

type ProductListProps = {
  categoryID: number | string;
};

const CategoryProduct: React.FC<ProductListProps> = ({ categoryID }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/products/")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        const filteredProducts = categoryID
          ? data.filter(
              (product: IProduct) => product.category === categoryID.toString()
            )
          : data;
        setProducts(filteredProducts);
      })
      .catch((err) => {
        setLoading(false);
        setError("Failed to fetch products.");
        console.error("Error fetching products:", err);
      });
  }, [categoryID]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Header />
      <Navbar />
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
          <aside>
            <div className="categories">
              <h1>Kategorien</h1>
              {/* Các phần tử khác */}
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
      <Footer />
    </div>
  );
};

export default CategoryProduct;
