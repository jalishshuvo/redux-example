import React from "react";
import styles from "./Products.module.css";

import Product from "./Product/Product";

import { connect } from "react-redux";

const Products = ({ products }) => (
  <div className={styles.products}>
    {products.map((product) => (
      <Product key={product.id} product={product} />
    ))}
  </div>
);

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
