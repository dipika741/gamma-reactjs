import React from "react";
import MetaTags from "../components/MetaTags.js";

export default function AboutUs() {
  return (
    <div>
      <MetaTags
        title="Gamma Scientific Ltd"
        description="Welcome to our homepage with amazing products."
        keywords="home, products, best deals"
      />
      <main className="main">
        <section className="section-box shop-template mt-30">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <h5 className="color-gray-500 mb-10">About us</h5>
                <h2>Who We Are?</h2>
                <div className="row mt-20">
                  <div className="col-lg-6">
                    <p className="font-sm font-medium color-gray-700 mb-15">
                      With offices in diverse locations such as Australia, USA,
                      Sri Lanka and India, we are a global firm with long
                      decades of experience in supplying reputed clients spread
                      across a range of different industries such as ceramics,
                      paint products, iron and steel, and even construction.
                    </p>
                    <p className="font-sm font-medium color-gray-700 mb-15">
                      Gamma Scientific is committed to serving its clients with
                      the utmost levels of competence and efficiency. With a
                      long experience of working in the chemical products
                      industry, our dedicated teams of engineers are always
                      ready to help you solve all your sourcing problems, be
                      they related to chemicals or laboratory equipment.
                    </p>
                    <ul className="list-services mt-20">
                      <li className="hover-up">
                        Laboratory Chemicals and Consumables
                      </li>
                      <li className="hover-up">
                        Laboratory Equipment And Furnishing
                      </li>
                      <li className="hover-up">
                        Industrial Chemicals, Warehousing And Logistics
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <img
                      src="assets/imgs/page/about/img.jpg"
                      alt="about-Gammalab"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
