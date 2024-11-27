import React from "react";

function ProductFilters({ filters, onFilterChange }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Filters</h2>
      <div>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="isFree"
            checked={filters.isFree}
            onChange={onFilterChange}
            className="form-checkbox"
          />
          <span>Free Products</span>
        </label>
      </div>
      <div>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="popular"
            checked={filters.popular}
            onChange={onFilterChange}
            className="form-checkbox"
          />
          <span>Popular Products</span>
        </label>
      </div>
      <div>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="expensive"
            checked={filters.expensive}
            onChange={onFilterChange}
            className="form-checkbox"
          />
          <span>Expensive Products</span>
        </label>
      </div>
      <div>
        <label className="flex items-center space-x-2">
          <select
            name="category"
            value={filters.category}
            onChange={onFilterChange}
            className="form-select"
          >
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Clothing">Clothing</option>
          </select>
          <span>Category</span>
        </label>
      </div>
    </div>
  );
}

export default ProductFilters;
