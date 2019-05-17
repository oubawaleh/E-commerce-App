import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

export default class NavigationBar extends Component {
  render() {
    const { isLoggedIn, itemsInCart } = this.props;

    return (
      <div className="NavigationBar">
        <Link to="/">Home</Link>
        <Link to="/category/sporty">#Sporty</Link>
        <Link to="/category/tshirts">#Tshirts</Link>
        <Link to="/category/jackets">#Jackets</Link>
        <Link to="/category/sweaters">#Sweaters</Link>
        <Link to="/category/pants">#Pants</Link>
        <Link to="/category/sneakers">#Sneakers</Link>
        <Link to="/category/boots">#Boots</Link>
        {isLoggedIn ? (
          <Fragment>
            <Link to="/cart">my cart ({itemsInCart})</Link>
            <Link to="/orders">orders</Link>
            <Link to="/">logout</Link>
          </Fragment>
        ) : (
          <Link to="/account">account</Link>
        )}
      </div>
    );
  }
}
