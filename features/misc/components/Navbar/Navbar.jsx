import Logo from "assets/automaite.ai (2).png";
import "./Navbar.css";
import { Button } from "components";
import { List, X } from "@phosphor-icons/react";
import { useRef } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const menuRef = useRef(null);
  const openNavMenu = () => {
    menuRef.current.style.transform = `translateX(0%)`;
  };
  const closeNavMenu = () => {
    menuRef.current.style.transform = `translateX(-100%)`;
  };
  return (
    <>
      <nav className="hamburger">
        <button className="hamburger_icon" onClick={openNavMenu}>
          <List size={32} />
        </button>
      </nav>
      <ul className="navbar_hamburger_list" ref={menuRef}>
        <X
          size={27}
          className="hamburger_menu_close_icon"
          onClick={closeNavMenu}
        />
        <li className="navbar_hamburger_list_item">
          <a href="#header">Home</a>
        </li>
        <li className="navbar_hamburger_list_item">
          <a href="#services">Services</a>
        </li>
      </ul>
      <header className="header" id="header">
        <div className="header_logo">
          <img src={Logo} alt="Automatiks" />
        </div>
        <nav className="navbar">
          <ul className="navbar_list">
            <li className="navbar_list_item">
              <a href="#header">Home</a>
            </li>
            <li className="navbar_list_item">
              <a href="#services">Services</a>
            </li>
            <Link to="quirkfy" className="navbar_list_item">Allio</Link>
          </ul>
        </nav>
        <a href="mailto:anishde85@gmail.com" className="header_button_link">
          <Button>Contact</Button>
        </a>
      </header>
    </>
  );
};
