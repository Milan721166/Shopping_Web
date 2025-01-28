import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Offer() {
  const offers = [
    "Free delivery on orders above ₹100!",
    "Buy 2 get 1 free on select items.",
    "Flat 20% off on your first order.",
    "Refer a friend and earn ₹50 cashback.",
    "Get ₹100 off on orders above ₹500.",
    "Weekend special: Extra 10% off sitewide!"
  ];

  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % offers.length);
    }, 3000); // Change offer every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [offers.length]);

  return (
    <div
      style={{
        position: "relative",
        height: "100px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f8f8f8",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"
      }}
    >
      <AnimatePresence>
        <motion.div
          key={currentOfferIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          style={{
            position: "absolute",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#333",
            textAlign: "center",
            padding: "10px 20px"
          }}
        >
          {offers[currentOfferIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Offer;
