import React from "react";

function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-lg font-bold text-green-600">
          ${product.price}
        </span>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
