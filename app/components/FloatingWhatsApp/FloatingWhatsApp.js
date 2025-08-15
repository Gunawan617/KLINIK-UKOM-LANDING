"use client";

import { useState } from "react";

export default function FloatingWhatsApp() {
  const phoneNumber = "628123456789";
  const message = "Halo, saya ingin bertanya...";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#60A5FA", // biru agak keputihan
    color: "white",
    padding: "12px 20px",
    borderRadius: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
    cursor: "pointer",
    zIndex: 9999,
    transform: isHovered ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.2s, box-shadow 0.2s",
  };

  const imgStyle = {
    width: "28px",
    height: "28px",
    marginRight: "10px",
  };

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src="/cs-icon.png" alt="Hubungi Kami" style={imgStyle} />
      <span style={{ fontWeight: "500", fontSize: "14px" }}>Hubungi Kami</span>
    </a>
  );
}
