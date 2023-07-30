import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";
import logo from '../../images/logo.png'

const navLinks = [
  {
    display: "Admissions",
    url: "#",
  },
  {
    display: "Academics",
    url: "#",
  },

  {
    display: "Career Development",
    url: "#",
  },
  {
    display: "Facilities",
    url: "#",
  },
  {
    display: "Campus",
    url: "#",
  },
  {
    display: "Research",
    url: "#",
  },
  {
    display: "About",
    url: "#",
  },
  {
    display: "VIT-AP Advantage",
    url: "#",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo flex ">
            <img src={logo} width={200} alt = "logo"/>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>
{/* 
            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i class="ri-phone-line"></i> +88 0123456789
              </p>
            </div> */}
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
