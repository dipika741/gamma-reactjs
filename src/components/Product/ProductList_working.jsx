import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    image:
      "assets/imgs/products/Laboratory Equipment/Autoclave Sterilizer/Autoclave Sterilizer.jpg",
    label: "-17%",
    title: "Autoclave Sterilizer",
    description:
      "Autoclave, Steam Sterilizer is an innovative replacement of conventional laboratory autoclave by providing reliable performance...",
    price: "N/A",
    productLink: "shop-single-product.html",
    category: "Laboratory Equipment",
  },
  {
    image:
      "assets/imgs/products/Laboratory Equipment/Block Heater/Block Heater.jpg",
    label: "-14%",
    title: "Block Heater",
    description:
      "Dry Bath Block Heater provides precise and constant temperature control source in the laboratory by heating interchangeable modular aluminum block...",
    price: "N/A",
    productLink: "shop-single-product.html",
    category: "Laboratory Equipment",
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
            description={product.description}
            price={product.price}
            productLink={product.productLink}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
