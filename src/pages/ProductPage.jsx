import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductFilters from "../components/ProductFilters";

let products = [
  {
    id: 1,
    name: "Samsung Galaxy S23",
    description:
      "The latest Samsung flagship smartphone with a powerful camera, sleek design, and long-lasting battery.",
    price: 799,
    isPopular: true,
    isFree: false,
    category: "Electronics",
    image:
      "https://th.bing.com/th/id/OIP.JQ5e7J2Qg3xlXODBKa_SqgHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 2,
    name: "Apple iPhone 14 Pro",
    description:
      "Apple's newest iPhone with advanced camera features, faster chip, and premium design.",
    price: 999,
    isPopular: false,
    isFree: false,
    category: "Electronics",
    image:
      "https://th.bing.com/th/id/OIP.Jv1H2M0UgIFZfrQHDsYIHwHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 3,
    name: "Nike Air Max 270",
    description:
      "Stylish and comfortable sneakers from Nike, designed for everyday wear with a sleek, modern look.",
    price: 120,
    isPopular: true,
    isFree: false,
    category: "Clothing",
    image:
      "https://th.bing.com/th/id/OIP.c6cSTibHX9pMlOWDCxSj0wHaFP?w=276&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 4,
    name: "Sony WH-1000XM5 Headphones",
    description:
      "Industry-leading noise-cancelling headphones from Sony, delivering crystal-clear sound and comfort for long listening sessions.",
    price: 349,
    isPopular: true,
    isFree: false,
    category: "Electronics",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: 5,
    name: "IKEA EKTORP Sofa",
    description:
      "Comfortable and stylish sofa from IKEA, perfect for living rooms with a modern design and soft cushions.",
    price: 499,
    isPopular: false,
    isFree: false,
    category: "Furniture",
    image:
      "https://th.bing.com/th/id/OIP.M2C7Gm4lVa1qy0HWRfJ70AHaHa?w=193&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 6,
    name: "Fitbit Charge 5",
    description:
      "Advanced fitness tracker from Fitbit with heart rate monitoring, GPS tracking, and sleep analysis features.",
    price: 179,
    isPopular: false,
    isFree: false,
    category: "Electronics",
    image:
      "https://th.bing.com/th/id/OIP.4n6wF4LXSC9L7Br_PCMXHAHaHa?w=183&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 7,
    name: "Apple MacBook Air M2",
    description:
      "Thin and powerful laptop from Apple with the M2 chip, ideal for students and professionals who need portability and speed.",
    price: 1199,
    isPopular: true,
    isFree: false,
    category: "Electronics",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: 8,
    name: "Herman Miller Aeron Chair",
    description:
      "Premium ergonomic office chair from Herman Miller, designed for maximum comfort and support during long working hours.",
    price: 1299,
    isPopular: false,
    isFree: false,
    category: "Furniture",
    image:
      "https://th.bing.com/th/id/OIP.lrEFK-lx6U5vR9U6jTqttwAAAA?w=190&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 9,
    name: "Levi's 511 Slim Fit Jeans",
    description:
      "Classic slim-fit jeans from Levi's, made with high-quality denim and perfect for everyday casual wear.",
    price: 60,
    isPopular: true,
    isFree: false,
    category: "Clothing",
    image:
      "https://th.bing.com/th/id/OIP.0azaqyTTupcvTZ916fXFnwHaIa?w=186&h=212&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 10,
    name: "Kindle Paperwhite",
    description:
      "Amazon's Kindle Paperwhite, a waterproof e-reader with adjustable light, perfect for reading anywhere at any time.",
    price: 129,
    isPopular: true,
    isFree: false,
    category: "Electronics",
    image:
      "https://th.bing.com/th/id/OIP.lWHJJYMGK9YWCTKF8k8dTAHaHa?w=197&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
];
function ProductPage() {
  let [searchParams, setSearchParams] = useSearchParams();
  let [filters, setFilters] = useState({
    isFree: searchParams.get("isFree") === "true",
    popular: searchParams.get("popular") === "true",
    expensive: searchParams.get("expensive") === "true",
    category: searchParams.get("category") || "",
  });

  useEffect(() => {
    setSearchParams(filters);
  }, [filters]);
  let handleFilterChange = (e) => {
    let { name, value, checked } = e.target;
    if (name === "category") {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value,
      }));
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: checked,
      }));
    }
  };
  let filteredProducts = products.filter((product) => {
    if (filters.isFree && product.price > 0) return false;
    if (filters.popular && !product.isPopular) return false;
    if (filters.expensive && product.price < 100) return false;
    if (filters.category && product.category !== filters.category) return false;
    return true;
  });
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Product Page</h1>
      <ProductFilters filters={filters} onFilterChange={handleFilterChange} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
