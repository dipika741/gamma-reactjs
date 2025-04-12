import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    bgClass: "box-slide-bg-1",
    title: "Laboratory Equipment Supplier in UK",
    features: [
      "Best Lab Equipments",
      "Contact us 24hrs a day",
      "Support gift service",
    ],
  },
  {
    id: 2,
    bgClass: "box-slide-bg-F2",
    title: "Laboratory Glasswares Supplier in Australia",
    features: [
      "Free Shipping. Secure Payment",
      "Contact us 24hrs a day",
      "Support gift service",
    ],
  },
  {
    id: 3,
    bgClass: "box-slide-bg-F3",
    title: "Chromatography Products Supplier in Australia",
    features: [
      "Free Shipping. Secure Payment",
      "Contact us 24hrs a day",
      "Support gift service",
    ],
  },
];

const Slider = () => {
  return (
    <section className="section-box">
      <div className="banner-hero banner-homepage3">
        <div className="container-banner">
          <div className="box-swiper">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
              className="swiper-group-1 swiper-home-3"
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className={slide.bgClass}>
                    <span className="label-green text-uppercase">
                      New Arrival
                    </span>
                    <h1 className="font-68 mt-20">{slide.title}</h1>
                    <div className="mt-10">
                      <ul className="list-disc">
                        {slide.features.map((feature, index) => (
                          <li key={index} className="font-lg">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-30 mb-120">
                      <a className="btn btn-brand-2 btn-gray-1000" href="#">
                        More..
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
