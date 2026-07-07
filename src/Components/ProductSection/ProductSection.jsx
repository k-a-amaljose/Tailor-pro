import React from "react";
import "./ProductSection.css";
import { productsData } from "../../data/products";

function ProductSection() {
  return (
    <section className="products-feed-section">
      <div className="products-header">
        <h2 className="products-title">Trending</h2>
        <p className="products-subtitle">Meticulously tailored garments crafted to fit your lifestyle</p>
      </div>
      <div className="products-grid">
        {productsData.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-badge">{product.category}</div>
              <button className="product-quick-add">Customize Fit</button>
            </div>

            <div className="product-info">
              <div className="product-meta">
                <span className="product-rating">★ {product.rating.toFixed(1)}</span>
              </div>
              <h3 className="product-name">{product.name}</h3>
              <div className="product-footer">
                <span className="product-price">${product.price}</span>
                <span className="product-custom-tag">Made to Measure</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductSection;