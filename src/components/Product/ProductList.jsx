import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    image:
      "assets/imgs/products/Laboratory Equipment/Autoclave Sterilizer/Autoclave Sterilizer.jpg",
    label: "-17%",
    title: "Autoclave Sterilizer",
    category: "Laboratory Equipment",
    description:
      "Autoclave, Steam Sterilizer is an innovative replacement of conventional laboratory autoclave by providing reliable performance, up-to-dated design and safety door inter-lock system integrated with temperature and pressure for perfect user safety.",
    productLink: "shop-single-product.html",
  },
  {
    image:
      "assets/imgs/products/Laboratory Equipment/Block Heater/Block Heater.jpg",
    label: "-14%",
    title: "Block Heater",
    category: "Laboratory Equipment",
    description:
      "Dry Bath Block Heater provides precise and constant temperature control source in the laboratory by heating interchangeable modular aluminum block. Ideal for microbiology and clinical laboratories for incubation, enzyme assay, inactivation, boiling, wet washing, extraction, sample concentration and many other applications.",
    productLink: "shop-single-product.html",
  },
  // Add more products as needed
];

const ProductList = () => {
  return (
    <div className="col-lg-9 order-first order-lg-last">
      <div className="row mt-20 display-list">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            label={product.label}
            title={product.title}
            category={product.category}
            description={product.description}
            productLink={product.productLink}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
