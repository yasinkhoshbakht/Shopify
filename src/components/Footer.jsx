import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 ShopSite. All rights reserved.</p>
        <p>
          Designed by{" "}
          <a
            href="github.com/yasinkhoshbakht"
            className="text-blue-400 hover:underline"
          >
            yasin_wolf
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
