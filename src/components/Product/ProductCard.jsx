import React from "react";

const ProductCard = ({
  image,
  label,
  title,
  category,
  description,
  productLink,
}) => {
  return (
    <div className="col-lg-12">
      <div className="card-grid-style-3">
        <div className="card-grid-inner">
          <div className="tools">
            <a
              className="btn btn-trend btn-tooltip mb-10"
              href="#"
              aria-label="Trend"
            ></a>
            <a
              className="btn btn-compare btn-tooltip mb-10"
              href="#"
              aria-label="Compare"
            ></a>
            <a
              className="btn btn-quickview btn-tooltip"
              aria-label="Quick view"
              href="#"
              data-bs-toggle="modal"
            ></a>
          </div>
          <div className="image-box">
            <span className="label bg-brand-2">{label}</span>
            <a href={productLink}>
              <img src={image} alt={title} />
            </a>
          </div>
          <div className="info-right">
            <span className="font-xs color-gray-500">{category}</span>
            <br />
            <a href={productLink}>
              <h4 className="color-brand-3">{title}</h4>
            </a>
            <ul className="list-disc mt-10">
              <li className="font-11">{description}</li>
            </ul>
            <div className="mt-20">
              <a className="btn btn-cart" href="#">
                more..
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
