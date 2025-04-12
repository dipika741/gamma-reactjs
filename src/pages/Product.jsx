import React from "react";
import MetaTags from "../components/MetaTags.js";
import Sidebar from "../components/Product/Sidebar.jsx";
import ProductList from "../components/Product/ProductList.jsx";

export default function Product() {
  return (
    <div>
      <MetaTags
        title="Gamma Scientific Ltd"
        description="amazing products."
        keywords="products, best deals"
      />
      <main className="main">
        <section className="section-box shop-template mt-30">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="sidebar-ads">
                  <div className="bg-electronic">
                    <span className="big-deal mb-5">Big deal</span>
                    <h4 className="font-25">Laboratory Equipment</h4>
                    <p className="font-16 color-brand-3">
                      Hot devices, Latest trending
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="banner-top-gray-100">
                  <div className="banner-ads-top mb-30">
                    <a href="#">
                      <img
                        src="assets/imgs/page/shop/grid-2/banner.png"
                        alt="Ecom"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <Sidebar />
              <ProductList />
              {/* <div className="col-lg-3 order-last order-lg-first">
                <div className="sidebar-border mb-0">
                  <div className="sidebar-head">
                    <h6 className="color-gray-900">Product Categories</h6>
                  </div>
                  <div className="sidebar-content">
                    <ul className="list-nav-arrow">
                      <li>
                        <a href="#">
                          Autoclave Sterilizer<span className="number">03</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Block Heater<span className="number">05</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Centrifuge<span className="number">08</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Chamber<span className="number">02</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Circulation Bath<span className="number">05</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Climatic Chamber<span className="number">04</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Cold Trap Bath<span className="number">02</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Growth Chamber<span className="number">05</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Homogenizer<span className="number">03</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Hotplate Stirrer<span className="number">07</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Incubator<span className="number">14</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Laboratory Refrigerator
                          <span className="number">02</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Muffle Furnace<span className="number">04</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Orbital Reciprocal Shaker
                          <span className="number">05</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Oven<span className="number">10</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Overhead Stirrer<span className="number">03</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Rocker<span className="number">02</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Safety Cabinet<span className="number">04</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Shaking Incubator<span className="number">09</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Vortex Mixer<span className="number">01</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="box-slider-item mb-30">
                  <div className="head pb-15 border-brand-2">
                    <h5 className="color-gray-900">Best seller</h5>
                  </div>
                  <div className="content-slider">
                    <div className="box-swiper slide-shop">
                      <div className="swiper-container swiper-best-seller">
                        <div className="swiper-wrapper pt-5">
                          <div className="swiper-slide">
                            <div className="card-grid-style-2 card-grid-none-border border-bottom mb-10">
                              <div className="image-box">
                                <span className="label bg-brand-2">-17%</span>
                                <a href="#">
                                  <img
                                    src="assets/imgs/page/homepage2/Autoclave-Vertical.png"
                                    alt="Autoclave-Vertical"
                                  />
                                </a>
                              </div>
                              <div className="info-right">
                                <a
                                  className="color-brand-3 font-xs-bold"
                                  href="#"
                                >
                                  Autoclave Vertical (Double and Triple Walled
                                  Fully Wing Nut Type)
                                </a>
                              </div>
                            </div>
                            <div className="card-grid-style-2 card-grid-none-border border-bottom mb-10">
                              <div className="image-box">
                                <a href="#">
                                  <img
                                    src="assets/imgs/page/homepage2/Refractometer.png"
                                    alt="Refractometer"
                                  />
                                </a>
                              </div>
                              <div className="info-right">
                                <a
                                  className="color-brand-3 font-xs-bold"
                                  href="#"
                                >
                                  Refractometer, Refractometers are used in a
                                  wide range of applications
                                </a>
                              </div>
                            </div>
                            <div className="card-grid-style-2 card-grid-none-border border-bottom mb-10">
                              <div className="image-box">
                                <a href="#">
                                  <img
                                    src="assets/imgs/page/homepage2/Refractometers.png"
                                    alt="Refractometers"
                                  />
                                </a>
                              </div>
                              <div className="info-right">
                                <a
                                  className="color-brand-3 font-xs-bold"
                                  href="#"
                                >
                                  Refractometers (refractometer instruments
                                  offer a sapphire prism)
                                </a>
                              </div>
                            </div>
                            <div className="card-grid-style-2 card-grid-none-border border-bottom mb-10">
                              <div className="image-box">
                                <a href="#">
                                  <img
                                    src="assets/imgs/page/homepage2/photometers.png"
                                    alt="photometers"
                                  />
                                </a>
                              </div>
                              <div className="info-right">
                                <a
                                  className="color-brand-3 font-xs-bold"
                                  href="#"
                                >
                                  Photometers, Flame photometers are used to
                                  analyze an inorganic chemical
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="card-grid-style-2 card-grid-none-border border-bottom mb-10">
                              <div className="image-box">
                                <a href="#">
                                  <img
                                    src="assets/imgs/page/homepage2/Density.png"
                                    alt="Density"
                                  />
                                </a>
                              </div>
                              <div className="info-right">
                                <a
                                  className="color-brand-3 font-xs-bold"
                                  href="#"
                                >
                                  Density, Density is the measurement of how
                                  tightly
                                </a>
                              </div>
                            </div>
                            <div className="card-grid-style-2 card-grid-none-border border-bottom mb-10">
                              <div className="image-box">
                                <span className="label bg-brand-2">-17%</span>
                                <a href="#">
                                  <img
                                    src="assets/imgs/page/homepage2/HPLC-systems.png"
                                    alt="HPLC-systems"
                                  />
                                </a>
                              </div>
                              <div className="info-right">
                                <a
                                  className="color-brand-3 font-xs-bold"
                                  href="#"
                                >
                                  HPLC systems, A high-performance liquid
                                  chromatography (HPLC) system
                                </a>
                              </div>
                            </div>
                            <div className="card-grid-style-2 card-grid-none-border border-bottom mb-10">
                              <div className="image-box">
                                <a href="#">
                                  <img
                                    src="assets/imgs/page/homepage2/Laboratory-pH-Sensor.png"
                                    alt="Laboratory-pH-Sensor"
                                  />
                                </a>
                              </div>
                              <div className="info-right">
                                <a
                                  className="color-brand-3 font-xs-bold"
                                  href="#"
                                >
                                  Laboratory pH Sensor, A laboratory pH sensor
                                  is used to determine the alkalinity or acidity
                                </a>
                              </div>
                            </div>
                            <div className="card-grid-style-2 card-grid-none-border border-bottom mb-10">
                              <div className="image-box">
                                <a href="#">
                                  <img
                                    src="assets/imgs/page/homepage2/Gas-Chromatography.png"
                                    alt="Gas-Chromatography"
                                  />
                                </a>
                              </div>
                              <div className="info-right">
                                <a
                                  className="color-brand-3 font-xs-bold"
                                  href="#"
                                >
                                  Gas Chromatography, Gas chromatography (GC) is
                                  a common type of chromatography
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-button-next swiper-button-next-style-2 swiper-button-next-bestseller" />
                      <div className="swiper-button-prev swiper-button-prev-style-2 swiper-button-prev-bestseller" />
                    </div>
                  </div>
                </div>
                <div className="box-slider-item">
                  <div className="head pb-15 border-brand-2">
                    <h5 className="color-gray-900">Product Tags</h5>
                  </div>
                  <div>
                    <a className="btn btn-border mr-5" href="#">
                      Block Heater
                    </a>
                    <a className="btn btn-border mr-5" href="#">
                      Centrifuge
                    </a>
                    <a className="btn btn-border mr-5" href="#">
                      Chamber
                    </a>
                    <a className="btn btn-border mr-5" href="#">
                      Growth Chamber
                    </a>
                    <a className="btn btn-border mr-5" href="#">
                      Homogenizer
                    </a>
                    <a className="btn btn-border mr-5" href="#">
                      Hotplate Stirrer
                    </a>
                    <a className="btn btn-border mr-5" href="#">
                      Incubator
                    </a>
                    <a className="btn btn-border mr-5" href="#">
                      Laboratory Refrigerator
                    </a>
                    <a className="btn btn-border mr-5" href="#">
                      Muffle Furnace
                    </a>
                    <a className="btn btn-border mr-5" href="#">
                      Orbital Reciprocal Shaker
                    </a>
                    <a className="btn btn-border mr-5" href="#">
                      Oven
                    </a>
                    <a className="btn btn-border mr-5" href="#">
                      Rocker
                    </a>
                    <a className="btn btn-border mr-5" href="#">
                      Vortex Mixer
                    </a>
                  </div>
                </div>
                <div className="banner-right h-500 text-center mb-30"></div>
              </div> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
