import React from "react";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import "./Header.css";
import Logo from './logo.png'

function Header() {
  return (
    <div className="header__wrapper">
      <div className="header__logo">
        <img src={Logo} width={100}/>
      </div>
      <div className="header__search">
        <div className="header__searchContainer">
          <SearchOutlined />
          <input placeholder="Created undersupervision of Dr.Soubhagya Sankar Barpanda" type="text" />
        </div>
      </div>
      <div className="header__menuItems">
        <a href="/">Free Stocks</a>
        <a href="/">PortFolio</a>
        <a href="/">Cash</a>
        <a href="/">Messages</a>
        <a href="/">Account</a>
      </div>
    </div>
  );
}

export default Header;
