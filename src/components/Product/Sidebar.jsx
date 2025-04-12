// src/components/Sidebar.jsx
import React from "react";

const Sidebar = () => {
  const productCategories = [
    { name: "Autoclave Sterilizer", count: 3 },
    { name: "Block Heater", count: 5 },
    { name: "Centrifuge", count: 8 },
    { name: "Chamber", count: 2 },
    { name: "Circulation Bath", count: 5 },
    { name: "Climatic Chamber", count: 4 },
    { name: "Cold Trap Bath", count: 2 },
    { name: "Growth Chamber", count: 5 },
    { name: "Homogenizer", count: 3 },
    { name: "Hotplate Stirrer", count: 7 },
    { name: "Incubator", count: 14 },
    { name: "Laboratory Refrigerator", count: 2 },
    { name: "Muffle Furnace", count: 4 },
    { name: "Orbital Reciprocal Shaker", count: 5 },
    { name: "Oven", count: 10 },
    { name: "Overhead Stirrer", count: 3 },
    { name: "Rocker", count: 2 },
    { name: "Safety Cabinet", count: 4 },
    { name: "Shaking Incubator", count: 9 },
    { name: "Vortex Mixer", count: 1 },
  ];

  const productTags = [
    "Block Heater",
    "Centrifuge",
    "Chamber",
    "Growth Chamber",
    "Homogenizer",
    "Hotplate Stirrer",
    "Incubator",
    "Laboratory Refrigerator",
    "Muffle Furnace",
    "Orbital Reciprocal Shaker",
    "Oven",
    "Rocker",
    "Vortex Mixer",
  ];

  return (
    <div className="col-lg-3 order-last order-lg-first">
      {/* Categories */}
      <div className="sidebar-border mb-0">
        <div className="sidebar-head">
          <h6 className="color-gray-900">Product Categories</h6>
        </div>
        <div className="sidebar-content">
          <ul className="list-nav-arrow">
            {productCategories.map((item, index) => (
              <li key={index}>
                <a href="#">
                  {item.name}
                  <span className="number">
                    {item.count.toString().padStart(2, "0")}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Best Sellers */}
      <div className="box-slider-item mb-30">
        <div className="head pb-15 border-brand-2">
          <h5 className="color-gray-900">Best seller</h5>
        </div>
        <div className="content-slider">
          <div className="box-swiper slide-shop">
            <div className="swiper-container swiper-best-seller">
              <div className="swiper-wrapper pt-5">
                {/* Slide 1 */}
                <div className="swiper-slide">
                  <div className="card-grid-style-2 card-grid-none-border border-bottom mb-10">
                    <div className="image-box">
                      <span className="label bg-brand-2">-17%</span>
                      <a href="#">
                        <img
                          src="assets/imgs/page/homepage2/Autoclave-Vertical.png"
                          alt="Autoclave Vertical"
                        />
                      </a>
                    </div>
                    <div className="info-right">
                      <a className="color-brand-3 font-xs-bold" href="#">
                        Autoclave Vertical (Double and Triple Walled Fully Wing
                        Nut Type)
                      </a>
                    </div>
                  </div>

                  <div className="card-grid-style-2 card-grid-none-border border-bottom mb-10">
                    <div className="image-box">
                      <span className="label bg-brand-2">-25%</span>
                      <a href="#">
                        <img
                          src="assets/imgs/page/homepage2/Centrifuge.png"
                          alt="Centrifuge"
                        />
                      </a>
                    </div>
                    <div className="info-right">
                      <a className="color-brand-3 font-xs-bold" href="#">
                        Centrifuge (Laboratory / Clinical / Research Purpose)
                      </a>
                    </div>
                  </div>
                </div>

                {/* Slide 2 */}
                <div className="swiper-slide">
                  <div className="card-grid-style-2 card-grid-none-border border-bottom mb-10">
                    <div className="image-box">
                      <span className="label bg-brand-2">-10%</span>
                      <a href="#">
                        <img
                          src="assets/imgs/page/homepage2/Incubator.png"
                          alt="Incubator"
                        />
                      </a>
                    </div>
                    <div className="info-right">
                      <a className="color-brand-3 font-xs-bold" href="#">
                        Incubator (With Temperature Control & Digital Display)
                      </a>
                    </div>
                  </div>

                  <div className="card-grid-style-2 card-grid-none-border border-bottom mb-10">
                    <div className="image-box">
                      <span className="label bg-brand-2">-20%</span>
                      <a href="#">
                        <img
                          src="assets/imgs/page/homepage2/Oven.png"
                          alt="Oven"
                        />
                      </a>
                    </div>
                    <div className="info-right">
                      <a className="color-brand-3 font-xs-bold" href="#">
                        Oven (Hot Air / Vacuum / Digital Type)
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-button-next swiper-button-next-style-2 swiper-button-next-bestseller"></div>
            <div className="swiper-button-prev swiper-button-prev-style-2 swiper-button-prev-bestseller"></div>
          </div>
        </div>
      </div>

      {/* Product Tags */}
      <div className="box-slider-item">
        <div className="head pb-15 border-brand-2">
          <h5 className="color-gray-900">Product Tags</h5>
        </div>
        <div>
          {productTags.map((tag, index) => (
            <a className="btn btn-border mr-5 mb-5" href="#" key={index}>
              {tag}
            </a>
          ))}
        </div>
      </div>

      <div className="banner-right h-500 text-center mb-30"></div>
    </div>
  );
};

export default Sidebar;
