import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center">Welcome to Our Store</h1>
      <p className="mt-4 text-lg text-center text-gray-600">
        Explore our wide range of products, from the latest electronics to
        stylish clothing and premium furniture. We offer the best deals and
        top-rated products to meet all your needs.
      </p>
      <div className="mt-8">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          Featured Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="data:image/jpeg;base64,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"
              alt="Electronics"
              className="w-48 h-48 mx-auto rounded-lg shadow-lg"
            />
            <h3 className="mt-2 text-xl font-medium">Electronics</h3>
            <p className="text-gray-600">
              Smartphones, laptops, headphones, and more.
            </p>
            <Link
              to="/products?category=electronics"
              className="mt-2 text-blue-500 hover:underline"
            >
              Shop Electronics
            </Link>
          </div>
          <div className="text-center">
            <img
              src="https://th.bing.com/th/id/OIP.nAj9Yojl2-1wq5_0cf7m_gHaE8?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Clothing"
              className="w-48 h-48 mx-auto rounded-lg shadow-lg"
            />
            <h3 className="mt-2 text-xl font-medium">Clothing</h3>
            <p className="text-gray-600">
              Trendy apparel for every season and occasion.
            </p>
            <Link
              to="/products?category=clothing"
              className="mt-2 text-blue-500 hover:underline"
            >
              Shop Clothing
            </Link>
          </div>
          <div className="text-center">
            <img
              src="https://th.bing.com/th/id/OIP.N_r5Y5RAgld9Hf_qaqtxxgHaHa?w=187&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Furniture"
              className="w-48 h-48 mx-auto rounded-lg shadow-lg"
            />
            <h3 className="mt-2 text-xl font-medium">Furniture</h3>
            <p className="text-gray-600">
              Quality furniture for your home and office.
            </p>
            <Link
              to="/products?category=furniture"
              className="mt-2 text-blue-500 hover:underline"
            >
              Shop Furniture
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Why Shop With Us?</h2>
        <p className="text-lg text-gray-600">
          We pride ourselves on providing high-quality products, fast shipping,
          and exceptional customer service. Shop with confidence and discover
          what makes us the best choice for all your shopping needs.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Fast Shipping</h3>
            <p className="text-gray-600">
              Get your products delivered quickly and safely to your door.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Customer Support</h3>
            <p className="text-gray-600">
              Our dedicated support team is here to assist you 24/7.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Best Deals</h3>
            <p className="text-gray-600">
              We offer the best prices on top-quality products.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          What Our Customers Are Saying
        </h2>
        <div className="flex justify-center gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <p className="text-lg text-gray-600">
              "Great experience! The product quality is amazing, and the
              shipping was super fast!"
            </p>
            <p className="mt-2 text-sm text-gray-500">- Sarah J.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <p className="text-lg text-gray-600">
              "I love my new furniture. It arrived on time and looks perfect in
              my home!"
            </p>
            <p className="mt-2 text-sm text-gray-500">- Mark T.</p>
          </div>
        </div>
      </div>
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Shop?</h2>
        <Link
          to="/products"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded text-lg hover:bg-blue-600"
        >
          Browse All Products
        </Link>
      </div>
    </div>
  );
}

export default Home;
