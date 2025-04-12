import React from "react";
import MetaTags from "../components/MetaTags.js";
import Slider from "../components/Home/Slider.jsx";
import Services from "../components/Services.jsx";
import Card from "../components/Home/Card.jsx";
import ProductSection from "../components/Home/ProductSection.jsx";
import { laboratoryProducts, productsData } from "../data/products";

export default function Home() {
  return (
    <div className="">
      <MetaTags
        title="Gamma Scientific Ltd"
        description="Welcome to our homepage with amazing products."
        keywords="home, products, best deals"
      />
      <main className="main">
        <Slider />
        <Services />
        <Card />

        <ProductAvailableCard
          title="Laboratory Equipments"
          subtitle="The opportunity will quickly pass. Take it!"
          products={labProducts}
        />
        <ProductSection
          title="Laboratory Equipments"
          description="The opportunity will quickly pass. Take it!"
          background="#f5f5f5"
          products={laboratoryProducts}
        />

        <ProductSection
          title="Laboratory Refrigerators & Freezers"
          description="Special products in this category"
          products={productsData}
        />

        {/* <section className="section-box mt-30">
          <div className="container">
            <div className="banner-ads text-center">
              <h2 className="color-brand-2 font-46 mb-5">
                Laboratory Consumables
              </h2>
              <p className="font-bold font-17 color-white">
                Lab consumables include a range of supplies used in the
                laboratory and <br className="d-none d-lg-block" />
                laboratory testing!
              </p>
              <div className="mt-20">
                <a className="btn btn-brand-2 btn-arrow-right" href="#">
                  Get it Now
                </a>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="section-box mt-50">
          <div className="container">
            <div className="head-main bd-gray-200">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <h3 className="mb-5">
                    Laboratory Refrigerators &amp; Freezers
                  </h3>
                  <p className="font-base color-gray-500">
                    Special products in this products
                  </p>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <ul
                    className="nav nav-tabs text-uppercase pr-100"
                    role="tablist"
                  >
                    <li>
                      <a
                        className="active"
                        href="#tab-3-all"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-controls="tab-3-all"
                        aria-selected="true"
                        data-index={1}
                      >
                        All
                      </a>
                    </li>
                    <li>
                      <a
                        href="#tab-3-bestseller"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-controls="tab-3-bestseller"
                        aria-selected="false"
                        data-index={2}
                      >
                        Best seller
                      </a>
                    </li>
                  </ul>
                  <div className="box-button-slider">
                    <div className="button-slider-nav" id="tab-3-all-nav">
                      <div className="swiper-button-next swiper-button-next-tab-1" />
                      <div className="swiper-button-prev swiper-button-prev-tab-1" />
                    </div>
                    <div
                      className="button-slider-nav"
                      id="tab-3-bestseller-nav"
                      style={{ display: "none" }}
                    >
                      <div className="swiper-button-next swiper-button-next-tab-2" />
                      <div className="swiper-button-prev swiper-button-prev-tab-2" />
                    </div>
                    <div
                      className="button-slider-nav"
                      id="tab-3-mostviewed-nav"
                      style={{ display: "none" }}
                    >
                      <div className="swiper-button-next swiper-button-next-tab-3" />
                      <div className="swiper-button-prev swiper-button-prev-tab-3" />
                    </div>
                    <div
                      className="button-slider-nav"
                      id="tab-3-topbrands-nav"
                      style={{ display: "none" }}
                    >
                      <div className="swiper-button-next swiper-button-next-tab-4" />
                      <div className="swiper-button-prev swiper-button-prev-tab-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-content tab-content-slider">
              <div
                className="tab-pane fade active show"
                id="tab-3-all"
                role="tabpanel"
                aria-labelledby="tab-3-all"
              >
                <div className="box-swiper">
                  <div className="swiper-container swiper-tab-1">
                    <div className="swiper-wrapper pt-5">
                      <div className="swiper-slide">
                        <div className="list-products-5">
                          <div className="card-grid-style-3 card-ads-1">
                            <div className="card-grid-inner text-center">
                              <div className="info-right">
                                <span className="font-16 color-brand-2 text-uppercase">
                                  New Arrival
                                </span>
                                <br />
                                <h4 className="color-green font-32 mt-15 mb-15">
                                  Stock up your stuffs in all weathers
                                </h4>
                              </div>
                              <div className="mt-30">
                                <a
                                  className="btn btn-brand-2 btn-arrow-right"
                                  href="#"
                                >
                                  get it..
                                </a>
                              </div>
                              <div className="image-box">
                                <a href="#">
                                  <img
                                    src="<?php echo ASSETS_URL; ?>imgs/page/homepage3/img-fridge.png"
                                    alt="#"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="card-grid-style-3">
                            <div className="card-grid-inner">
                              <div className="tools">
                                <a
                                  className="btn btn-trend btn-tooltip mb-10"
                                  href="#"
                                  aria-label="Trend"
                                  data-bs-placement="left"
                                />
                                <a
                                  className="btn btn-wishlist btn-tooltip mb-10"
                                  href="#"
                                  aria-label="86°C Ultra Low Temperature Freezer"
                                />
                                <a
                                  className="btn btn-compare btn-tooltip mb-10"
                                  href="#"
                                  aria-label="Compare"
                                />
                                <a
                                  className="btn btn-quickview btn-tooltip"
                                  aria-label="Quick view"
                                  href="#ModalQuickview"
                                  data-bs-toggle="modal"
                                />
                              </div>
                              <div className="image-box">
                                <span className="label bg-brand-2">-19%</span>
                                <a href="#">
                                  <img
                                    src="<?php echo ASSETS_URL; ?>imgs/products/laboratory-Refrigerators/Main/86°C Ultra Low Temperature Freezer.jpg"
                                    alt="86°C Ultra Low Temperature Freezer"
                                  />
                                </a>
                              </div>
                              <div className="info-right">
                                <a className="font-xs color-gray-500" href="#">
                                  Laboratory Regrigirator
                                </a>
                                <br />
                                <a
                                  className="color-brand-3 font-sm-bold"
                                  href="#"
                                >
                                  86°C Ultra Low Temperature Freezer
                                </a>
                                <div className="mt-20 box-btn-cart">
                                  <a className="btn btn-cart" href="#">
                                    more..
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-grid-style-3">
                            <div className="card-grid-inner">
                              <div className="tools">
                                <a
                                  className="btn btn-trend btn-tooltip mb-10"
                                  href="#"
                                  aria-label="Trend"
                                  data-bs-placement="left"
                                />
                                <a
                                  className="btn btn-wishlist btn-tooltip mb-10"
                                  href="#"
                                  aria-label="86°C Ultra Low Temperature Freezer"
                                />
                                <a
                                  className="btn btn-compare btn-tooltip mb-10"
                                  href="#"
                                  aria-label="Compare"
                                />
                                <a
                                  className="btn btn-quickview btn-tooltip"
                                  aria-label="Quick view"
                                  href="#ModalQuickview"
                                  data-bs-toggle="modal"
                                />
                              </div>
                              <div className="image-box">
                                <span className="label bg-brand-2">-12%</span>
                                <a href="#">
                                  <img
                                    src="<?php echo ASSETS_URL; ?>imgs/products/laboratory-Refrigerators/Main/Blood Bank Refrigerator-500L.jpg"
                                    alt="Blood Bank Refrigerator-500L"
                                  />
                                </a>
                              </div>
                              <div className="info-right">
                                <a className="font-xs color-gray-500" href="#">
                                  Laboratory Regrigirator
                                </a>
                                <br />
                                <a
                                  className="color-brand-3 font-sm-bold"
                                  href="#"
                                >
                                  Blood Bank Refrigerator-500L
                                </a>
                                <div className="mt-20 box-btn-cart">
                                  <a className="btn btn-cart" href="#">
                                    more..
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-grid-style-3">
                            <div className="card-grid-inner">
                              <div className="tools">
                                <a
                                  className="btn btn-trend btn-tooltip mb-10"
                                  href="#"
                                  aria-label="Trend"
                                  data-bs-placement="left"
                                />
                                <a
                                  className="btn btn-wishlist btn-tooltip mb-10"
                                  href="#"
                                  aria-label="86°C Ultra Low Temperature Freezer"
                                />
                                <a
                                  className="btn btn-compare btn-tooltip mb-10"
                                  href="#"
                                  aria-label="Compare"
                                />
                                <a
                                  className="btn btn-quickview btn-tooltip"
                                  aria-label="Quick view"
                                  href="#ModalQuickview"
                                  data-bs-toggle="modal"
                                />
                              </div>
                              <div className="image-box">
                                <span className="label bg-brand-2">-11%</span>
                                <a href="#">
                                  <img
                                    src="<?php echo ASSETS_URL; ?>imgs/products/laboratory-Refrigerators/Main/Chest Freezers.jpg"
                                    alt="Chest Freezers"
                                  />
                                </a>
                              </div>
                              <div className="info-right">
                                <a className="font-xs color-gray-500" href="#">
                                  Laboratory Regrigirator
                                </a>
                                <br />
                                <a
                                  className="color-brand-3 font-sm-bold"
                                  href="#"
                                >
                                  Chest Freezers
                                </a>
                                <div className="mt-20 box-btn-cart">
                                  <a className="btn btn-cart" href="#">
                                    more..
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-grid-style-3">
                            <div className="card-grid-inner">
                              <div className="tools">
                                <a
                                  className="btn btn-trend btn-tooltip mb-10"
                                  href="#"
                                  aria-label="Trend"
                                  data-bs-placement="left"
                                />
                                <a
                                  className="btn btn-wishlist btn-tooltip mb-10"
                                  href="#"
                                  aria-label="86°C Ultra Low Temperature Freezer"
                                />
                                <a
                                  className="btn btn-compare btn-tooltip mb-10"
                                  href="#"
                                  aria-label="Compare"
                                />
                                <a
                                  className="btn btn-quickview btn-tooltip"
                                  aria-label="Quick view"
                                  href="#ModalQuickview"
                                  data-bs-toggle="modal"
                                />
                              </div>
                              <div className="image-box">
                                <span className="label bg-brand-2">-17%</span>
                                <a href="#">
                                  <img
                                    src="<?php echo ASSETS_URL; ?>imgs/products/laboratory-Refrigerators/Main/Pharmaceutical Freezers.jpg"
                                    alt="Pharmaceutical Freezers"
                                  />
                                </a>
                              </div>
                              <div className="info-right">
                                <a className="font-xs color-gray-500" href="#">
                                  Laboratory Regrigirator
                                </a>
                                <br />
                                <a
                                  className="color-brand-3 font-sm-bold"
                                  href="#"
                                >
                                  Pharmaceutical Freezers
                                </a>
                                <div className="mt-20 box-btn-cart">
                                  <a className="btn btn-cart" href="#">
                                    more..
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="tab-3-bestseller"
                role="tabpanel"
                aria-labelledby="tab-3-bestseller"
              >
                <div className="box-swiper">
                  <div className="swiper-container swiper-tab-2">
                    <div className="swiper-wrapper pt-5">
                      <div className="swiper-slide">
                        <div className="list-products-5">
                          <div className="card-grid-style-3 card-ads-1">
                            <div className="card-grid-inner text-center">
                              <div className="info-right">
                                <span className="font-16 color-brand-2 text-uppercase">
                                  New Arrival
                                </span>
                                <br />
                                <h4 className="color-green font-32 mt-15 mb-15">
                                  Stock up your stuffs in all weathers
                                </h4>
                              </div>
                              <div className="mt-30">
                                <a
                                  className="btn btn-brand-2 btn-arrow-right"
                                  href="#"
                                >
                                  Shop Now
                                </a>
                              </div>
                              <div className="image-box">
                                <a href="#">
                                  <img
                                    src="<?php echo ASSETS_URL; ?>imgs/page/homepage3/img-fridge.png"
                                    alt="#"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="card-grid-style-3">
                            <div className="card-grid-inner">
                              <div className="tools">
                                <a
                                  className="btn btn-trend btn-tooltip mb-10"
                                  href="#"
                                  aria-label="Trend"
                                  data-bs-placement="left"
                                />
                                <a
                                  className="btn btn-wishlist btn-tooltip mb-10"
                                  href="#"
                                  aria-label="Add To Wishlist"
                                />
                                <a
                                  className="btn btn-compare btn-tooltip mb-10"
                                  href="#"
                                  aria-label="Compare"
                                />
                                <a
                                  className="btn btn-quickview btn-tooltip"
                                  aria-label="Quick view"
                                  href="#ModalQuickview"
                                  data-bs-toggle="modal"
                                />
                              </div>
                              <div className="image-box">
                                <span className="label bg-brand-2">-17%</span>
                                <a href="#">
                                  <img
                                    src="<?php echo ASSETS_URL; ?>imgs/products/laboratory-Refrigerators/Main/Ultra Low Temperature Freezer-10°C To -86°C.jpg"
                                    alt="Ultra Low Temperature Freezer-10°C To -86°C"
                                  />
                                </a>
                              </div>
                              <div className="info-right">
                                <a className="font-xs color-gray-500" href="#">
                                  Laboratory Regrigirator
                                </a>
                                <br />
                                <a
                                  className="color-brand-3 font-sm-bold"
                                  href="#"
                                >
                                  Ultra Low Temperature Freezer-10°C To -86°C
                                </a>
                                <div className="mt-20 box-btn-cart">
                                  <a className="btn btn-cart" href="#">
                                    more,,
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-grid-style-3">
                            <div className="card-grid-inner">
                              <div className="tools">
                                <a
                                  className="btn btn-trend btn-tooltip mb-10"
                                  href="#"
                                  aria-label="Trend"
                                  data-bs-placement="left"
                                />
                                <a
                                  className="btn btn-wishlist btn-tooltip mb-10"
                                  href="#"
                                  aria-label="Add To Wishlist"
                                />
                                <a
                                  className="btn btn-compare btn-tooltip mb-10"
                                  href="#"
                                  aria-label="Compare"
                                />
                                <a
                                  className="btn btn-quickview btn-tooltip"
                                  aria-label="Quick view"
                                  href="#ModalQuickview"
                                  data-bs-toggle="modal"
                                />
                              </div>
                              <div className="image-box">
                                <span className="label bg-brand-2">-17%</span>
                                <a href="#">
                                  <img
                                    src="<?php echo ASSETS_URL; ?>imgs/products/laboratory-Refrigerators/Main/Laboratory Refrigerators.jpg"
                                    alt="Laboratory Refrigerators"
                                  />
                                </a>
                              </div>
                              <div className="info-right">
                                <a className="font-xs color-gray-500" href="#">
                                  Laboratory Regrigirator
                                </a>
                                <br />
                                <a
                                  className="color-brand-3 font-sm-bold"
                                  href="#"
                                >
                                  Laboratory Refrigerators
                                </a>
                                <div className="mt-20 box-btn-cart">
                                  <a className="btn btn-cart" href="#">
                                    more,,
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-grid-style-3">
                            <div className="card-grid-inner">
                              <div className="tools">
                                <a
                                  className="btn btn-trend btn-tooltip mb-10"
                                  href="#"
                                  aria-label="Trend"
                                  data-bs-placement="left"
                                />
                                <a
                                  className="btn btn-wishlist btn-tooltip mb-10"
                                  href="#"
                                  aria-label="Add To Wishlist"
                                />
                                <a
                                  className="btn btn-compare btn-tooltip mb-10"
                                  href="#"
                                  aria-label="Compare"
                                />
                                <a
                                  className="btn btn-quickview btn-tooltip"
                                  aria-label="Quick view"
                                  href="#ModalQuickview"
                                  data-bs-toggle="modal"
                                />
                              </div>
                              <div className="image-box">
                                <span className="label bg-brand-2">-17%</span>
                                <a href="#">
                                  <img
                                    src="<?php echo ASSETS_URL; ?>imgs/products/laboratory-Refrigerators/Main/Pharmaceutical Freezer-96.jpg"
                                    alt="Pharmaceutical Freezer-96"
                                  />
                                </a>
                              </div>
                              <div className="info-right">
                                <a className="font-xs color-gray-500" href="#">
                                  Laboratory Regrigirator
                                </a>
                                <br />
                                <a
                                  className="color-brand-3 font-sm-bold"
                                  href="#"
                                >
                                  Pharmaceutical Freezer-96
                                </a>
                                <div className="mt-20 box-btn-cart">
                                  <a className="btn btn-cart" href="#">
                                    more,,
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-grid-style-3">
                            <div className="card-grid-inner">
                              <div className="tools">
                                <a
                                  className="btn btn-trend btn-tooltip mb-10"
                                  href="#"
                                  aria-label="Trend"
                                  data-bs-placement="left"
                                />
                                <a
                                  className="btn btn-wishlist btn-tooltip mb-10"
                                  href="#"
                                  aria-label="Add To Wishlist"
                                />
                                <a
                                  className="btn btn-compare btn-tooltip mb-10"
                                  href="#"
                                  aria-label="Compare"
                                />
                                <a
                                  className="btn btn-quickview btn-tooltip"
                                  aria-label="Quick view"
                                  href="#ModalQuickview"
                                  data-bs-toggle="modal"
                                />
                              </div>
                              <div className="image-box">
                                <span className="label bg-brand-2">-17%</span>
                                <a href="#">
                                  <img
                                    src="<?php echo ASSETS_URL; ?>imgs/products/laboratory-Refrigerators/Main/Pharmaceutical Refrigerator.jpg"
                                    alt="Pharmaceutical Refrigerator"
                                  />
                                </a>
                              </div>
                              <div className="info-right">
                                <a className="font-xs color-gray-500" href="#">
                                  Laboratory Regrigirator
                                </a>
                                <br />
                                <a
                                  className="color-brand-3 font-sm-bold"
                                  href="#"
                                >
                                  Pharmaceutical Refrigerator
                                </a>
                                <div className="mt-20 box-btn-cart">
                                  <a className="btn btn-cart" href="#">
                                    more,,
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="section-box mt-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="block-ads-1">
                  <h4 className="color-gray-1000 mb-10">
                    Wine Testing
                    <br className="d-none d-lg-block" /> Equipments
                  </h4>
                  <p className="color-border-1">Available Here</p>
                  <div className="mt-25">
                    <a className="btn btn-brand-2 btn-arrow-right" href="#l">
                      Get it
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="block-ads-2">
                  <h4 className="color-gray-1000 mb-10">
                    Best food &amp; Beverage
                    <br className="d-none d-lg-block" />
                    Testing Equipment
                  </h4>
                  <p className="color-border-1">For your Testing Lab</p>
                  <div className="mt-25">
                    <a className="btn btn-brand-2 btn-arrow-right" href="#l">
                      Get it
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="section-box mt-50">
          <div className="container">
            <div className="head-main">
              <h3 className="mb-5">New Releases</h3>
              <h3>
                <div className="box-button-slider">
                  <div className="swiper-button-next swiper-button-next-group-4" />
                  <div className="swiper-button-prev swiper-button-prev-group-4" />
                </div>
              </h3>
            </div>
          </div>
          <div className="container mt-10">
            <div className="box-swiper">
              <div className="swiper-container swiper-group-4">
                <div className="swiper-wrapper pt-5">
                  <div className="swiper-slide">
                    <div className="card-grid-style-1">
                      <div className="image-box">
                        <a href="#" />
                        <img
                          src="<?php echo ASSETS_URL; ?>imgs/page/category/glasswasher.jpg"
                          alt="glasswasher"
                        />
                      </div>
                      <a className="tag-dot font-xs" href="#">
                        Laboratory{" "}
                      </a>
                      <a className="color-gray-1100" href="#">
                        <h4>Laboratory Glasswasher</h4>
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card-grid-style-1">
                      <div className="image-box">
                        <a href="#" />
                        <img
                          src="<?php echo ASSETS_URL; ?>imgs/page/category/HPLC column.jpg"
                          alt="#"
                        />
                      </div>
                      <a className="tag-dot font-xs" href="#">
                        HPLC Column
                      </a>
                      <a className="color-gray-1100" href="#">
                        <h4>HPLC Column and other Consumables</h4>
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card-grid-style-1">
                      <div className="image-box">
                        <a href="#" />
                        <img
                          src="<?php echo ASSETS_URL; ?>imgs/page/category/laboratory chairs.jpg"
                          alt="#"
                        />
                      </div>
                      <a className="tag-dot font-xs" href="#">
                        Lab Furnitures
                      </a>
                      <a className="color-gray-1100" href="#">
                        <h4>Laboratory Chairs</h4>
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card-grid-style-1">
                      <div className="image-box">
                        <a href="#" />
                        <img
                          src="<?php echo ASSETS_URL; ?>imgs/page/category/Hydrogen Generators.jpg"
                          alt="#"
                        />
                      </div>
                      <a className="tag-dot font-xs" href="#">
                        Lab Generators
                      </a>
                      <a className="color-gray-1100" href="#">
                        <h4>Hydrogen Generators</h4>
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card-grid-style-1">
                      <div className="image-box">
                        <a href="#" />
                        <img
                          src="<?php echo ASSETS_URL; ?>imgs/page/category/HPLC Solvent Safety Products.jpg"
                          alt="#"
                        />
                      </div>
                      <a className="tag-dot font-xs" href="#">
                        HPLC Solvent
                      </a>
                      <a className="color-gray-1100" href="#">
                        <h4>HPLC Solvent Safety Products</h4>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
