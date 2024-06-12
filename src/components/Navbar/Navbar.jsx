import "./Navbar.scss";
import React from "react";
import { Link } from "react-router-dom";
import { getMenuItems } from '~/models/functionRole'

export default function Navbar() {
  const role = JSON.parse(localStorage.getItem("account"))?.role;
  const menuItems = getMenuItems(role);

  return (
    <header className="navbar-default">
      <div className="navbar-default__container">
        <div className="slide-menu">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.to} className="slide-menu__item">
              <span>{item.text}</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}