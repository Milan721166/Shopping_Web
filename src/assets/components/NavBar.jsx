import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./NavBar.css";

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navbarRef = useRef(null); 
  const navbarTogglerRef = useRef(null); 

  
  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

 
  const handleClickOutside = (event) => {
    if (
      navbarRef.current && 
      !navbarRef.current.contains(event.target) &&
      !navbarTogglerRef.current.contains(event.target)
    ) {
      setIsNavOpen(false); 
    }
  };

  
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" ref={navbarRef}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Milan Store
          </a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 "
              type="search"
              placeholder="Search Item"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search 
            </button>
          </form>
          
          <a className="login dropdown-toggle" href="https://to-let-globe-xi.vercel.app/">
            Login <i className="bi bi-person-plus"></i>
          </a>
          <a className="login" href="#">
            Cart <i className="bi bi-cart-plus"></i>
          </a>
          <a className="login" href="#">
            Wishlist <i className="bi bi-heart"></i>
          </a>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarSupportedContent"
            aria-expanded={isNavOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            ref={navbarTogglerRef}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active bi bi-person-circle" href="#"> MEN</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active bi bi-person-standing-dress" href="#"> WOMEN</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active bi bi-person-hearts" href="#"> KIDS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active bi bi-heart-pulse-fill" href="#"> BEAUTY</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active bi bi-smartwatch" href="#"> WATCHES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active bi bi-gift" href="#"> GIFTS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active bi bi-amazon" href="#"> BRANDS</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
