import React from "react";
import "./Categories.css";

const categories = [
  { name: "Grocery", icon: "🛒" },
  { name: "Mobiles", icon: "📱" },
  { name: "Fashion", icon: "👗" },
  { name: "Electronics", icon: "💻" },
  { name: "Home & Furniture", icon: "🛋️" },
  { name: "Appliances", icon: "🔌" },
  { name: "Flight Bookings", icon: "✈️" },
  { name: "Beauty, Toys & More", icon: "🎁" },
  { name: "Two Wheelers", icon: "🏍️" },
];

const Categories = () => (
  <div className="categories">
    {categories.map((category) => (
      <div key={category.name} className="category">
        <span className="icon">{category.icon}</span>
        <p>{category.name}</p>
      </div>
    ))}
  </div>
);

export default Categories;
