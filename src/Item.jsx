import React from "react";
import "./styles.css";

function Item() {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="product-grid5">
        <div className="product-image5">
          <a href="#">
            <img
              className="pic-1"
              src="http://bestjquery.com/tutorial/product-grid/demo11/images/img-1.jpg"
            />
            <img
              className="pic-2"
              src="http://bestjquery.com/tutorial/product-grid/demo11/images/img-2.jpg"
            />
          </a>
          <ul className="social">
            <li>
              <a href="" data-tip="Quick View">
                <i className="fa fa-search" />
              </a>
            </li>
            <li>
              <a href="" data-tip="Add to Wishlist">
                <i className="fa fa-shopping-bag" />
              </a>
            </li>
            <li>
              <a href="" data-tip="Add to Cart">
                <i className="fa fa-shopping-cart" />
              </a>
            </li>
          </ul>
          <a href="#" className="select-options">
            <i className="fa fa-arrow-right" /> Select Options
          </a>
        </div>
        <div className="product-content">
          <h3 className="title">
            <a href="#">Men's Sweat Shirt</a>
          </h3>
          <div className="price">$11.00 - $15.00</div>
        </div>
      </div>
    </div>
  );
}
export default Item;
