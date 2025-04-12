import React from "react";

const slides = [
  {
    bgClass: "box-slide-bg-1",
    title: "Laboratory Equipment",
    subtitle: "Supplier in UK",
    features: [
      "Best Lab Equipments",
      "Contact us 24hrs a day",
      "Support gift service",
    ],
    buttonText: "more..",
  },
  {
    bgClass: "box-slide-bg-F2",
    title: "Laboratory Glasswares",
    subtitle: "Supplier in Australia",
    features: [
      "Free Shipping. Secure Payment",
      "Contact us 24hrs a day",
      "Support gift service",
    ],
    buttonText: "more..",
  },
  {
    bgClass: "box-slide-bg-F3",
    title: "Chromatography Products",
    subtitle: "Supplier in Australia",
    features: [
      "Free Shipping. Secure Payment",
      "Contact us 24hrs a day",
      "Support gift service",
    ],
    buttonText: "Learn more",
  },
];

const Slider = () => {
  return (
    <section className="section-box">
      <div className="banner-hero banner-homepage3">
        <div className="container-banner">
          <div className="box-swiper">
            <div className="swiper-container swiper-group-1 swiper-home-3">
              <div className="swiper-wrapper pt-5">
                {slides.map((slide, index) => (
                  <div className="swiper-slide" key={index}>
                    <div className={slide.bgClass}>
                      <span className="label-green text-uppercase">
                        new arrival
                      </span>
                      <h1 className="font-68 mt-20">
                        {slide.title}
                        <br />
                        {slide.subtitle}
                      </h1>
                      <div className="mt-10">
                        <ul className="list-disc">
                          {slide.features.map((feature, i) => (
                            <li className="font-lg" key={i}>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-30 mb-120">
                        <a className="btn btn-brand-2 btn-gray-1000" href="#">
                          {slide.buttonText}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="swiper-pagination swiper-pagination-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
