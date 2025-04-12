import React from "react";
import { Link } from "react-router-dom";

const Menubar = () => {
  return (
    <>
      {/* Desktop Header */}
      <header className="h-menubar header sticky-bar">
        <div className="container">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <Link className="d-flex" to="/">
                  <img src="/assets/imgs/template/logo.png" alt="Logo" />
                </Link>
              </div>
              <div className="header-nav">
                <nav className="nav-main-menu d-none d-xl-block">
                  <ul className="main-menu">
                    <li>
                      <Link to="/">Homes</Link>
                    </li>
                    <li>
                      <Link to="/about_us">About Us</Link>
                    </li>
                    <li>
                      <Link to="/product">product page demo</Link>
                    </li>
                    <li className="has-children">
                      <Link to="#">Products</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/laboratory-equipment">
                            Laboratory Equipment
                          </Link>
                        </li>
                        <li>
                          <Link to="/analytical-instruments">
                            Analytical Instruments
                          </Link>
                        </li>
                        <li>
                          <Link to="/material-testing-equipments">
                            Material Testing Equipment
                          </Link>
                        </li>
                        <li>
                          <Link to="/chromotography-consumables">
                            HPLC Consumables
                          </Link>
                        </li>
                        <li>
                          <Link to="/laboratory-glassware">
                            Laboratory Glasswares
                          </Link>
                        </li>
                        <li>
                          <Link to="/laboratory-plasticware">
                            Laboratory Plasticwares
                          </Link>
                        </li>
                        <li>
                          <Link to="/laboratory-furniture">
                            Laboratory Furnitures
                          </Link>
                        </li>
                        <li>
                          <Link to="#">Food Testing Equipment</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/downloads">Downloads</Link>
                    </li>
                    <li>
                      <Link to="/contact_us">Contact Us</Link>
                    </li>
                  </ul>
                </nav>
                <div className="burger-icon burger-icon-white">
                  <span className="burger-icon-top"></span>
                  <span className="burger-icon-mid"></span>
                  <span className="burger-icon-bottom"></span>
                </div>
              </div>
              <div className="header-shop">
                <div className="d-inline-block box-dropdown-cart">
                  <span className="font-lg icon-list icon-account">
                    <span>Brands</span>
                  </span>
                </div>
                <Link className="font-lg icon-list icon-wishlist" to="#">
                  <span>Promotions</span>
                </Link>
              </div>
              <Link className="font-lg icon-list icon-compare" to="#">
                <span>News</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar">
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-content-area">
            <div className="mobile-logo">
              <Link className="d-flex" to="/">
                <img src="/assets/imgs/template/logo.svg" alt="Mobile Logo" />
              </Link>
            </div>
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav className="mt-15">
                  <ul className="mobile-menu font-heading">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about_us">About Us</Link>
                    </li>

                    <li className="has-children">
                      <Link to="#">Products</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/laboratory-equipment">
                            Laboratory Equipment
                          </Link>
                        </li>
                        <li>
                          <Link to="/analytical-instruments">
                            Analytical Instruments
                          </Link>
                        </li>
                        <li>
                          <Link to="/material-testing-equipments">
                            Material Testing Equipment
                          </Link>
                        </li>
                        <li>
                          <Link to="/chromotography-consumables">
                            HPLC Consumables
                          </Link>
                        </li>
                        <li>
                          <Link to="/laboratory-glassware">
                            Laboratory Glasswares
                          </Link>
                        </li>
                        <li>
                          <Link to="/laboratory-plasticware">
                            Laboratory Plasticwares
                          </Link>
                        </li>
                        <li>
                          <Link to="/laboratory-furniture">
                            Laboratory Furnitures
                          </Link>
                        </li>
                        <li>
                          <Link to="#">Food Testing Equipment</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/downloads">Downloads</Link>
                    </li>
                    <li>
                      <Link to="/contact_us">Contact Us</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="mobile-banner">
                <div className="bg-5 block-iphone">
                  <span className="color-brand-3 font-sm-lh32">
                    Starting from $500
                  </span>
                  <h3 className="font-xl mb-10">LABORATORY GENERATORS</h3>
                  <p className="font-base color-brand-3 mb-10">
                    Special offers
                  </p>
                  <Link className="btn btn-arrow" to="#">
                    more..
                  </Link>
                </div>
              </div>
              <div className="site-copyright color-gray-400 mt-30">
                Copyright 2024 &copy; Delta Scientific.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menubar;
