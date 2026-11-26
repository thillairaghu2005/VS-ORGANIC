"use client";

import React, { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Sparkles,
  ShieldCheck,
  Award,
  Leaf,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Droplets,
  Pause,
  Play,
} from "lucide-react";

interface BrandStoryProps {
  onOpenEnquiry?: (defaultProduct?: string) => void;
}

export default function BrandStory({ onOpenEnquiry }: BrandStoryProps) {
  const { language } = useLanguage();
  const isTa = language === "ta";
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const NATURE_PRODUCTS = [
    {
      id: "groundnut-oil",
      nameEn: "Wood Pressed Groundnut Oil",
      nameTa: "மரச்செக்கு கடலை எண்ணெய்",
      subEn: "Unrefined Vagai Chekku • Kadalai Ennai",
      subTa: "வாகை மரச்செக்கு • அசல் நாட்டு கடலை",
      image: "/images/products/groundnut-oil.jpg",
      natureBadgeEn: "Native Peanuts • <45°C",
      natureBadgeTa: "நாட்டு நிலக்கடலை • <45°C",
      badgeType: "gold",
      price: "₹220",
      sizes: "0.5L • 1L • 5L • 15kg Tin",
      highlightEn: "Rich nutty aroma, natural golden color, zero solvent extraction.",
      highlightTa: "அசல் மணமும் நிறமும் கொண்ட பாரம்பரிய மரச்செக்கு எண்ணெய்.",
    },
    {
      id: "sesame-oil",
      nameEn: "Traditional Chekku Sesame Oil",
      nameTa: "மரச்செக்கு நல்லெண்ணெய்",
      subEn: "Pure Gingelly Oil • Nallennai",
      subTa: "பாரம்பரிய நல்லெண்ணெய் • பனைவெல்லம்",
      image: "/images/products/sesame-oil.jpg",
      natureBadgeEn: "Black Sesame • Palm Jaggery",
      natureBadgeTa: "நாட்டு எள் • பனைவெல்லம்",
      badgeType: "dark",
      price: "₹380",
      sizes: "1L Bottle • 15kg Commercial Tin",
      highlightEn: "Native black sesame crushed with unrefined palm karupatti.",
      highlightTa: "நாட்டு கருப்பு எள்ளுடன் பனைவெல்லம் சேர்த்து பிழியப்பட்டது.",
    },
    {
      id: "coconut-oil",
      nameEn: "Pure Copra Coconut Oil",
      nameTa: "மரச்செக்கு தேங்காய் எண்ணெய்",
      subEn: "Sun-Dried Copra • Thengai Ennai",
      subTa: "கந்தகம் அற்ற கொப்பரை • தேங்காய் எண்ணெய்",
      image: "/images/products/coconut-oil.jpg",
      natureBadgeEn: "Sulphur-Free Copra",
      natureBadgeTa: "கந்தகம் அற்ற கொப்பரை",
      badgeType: "green",
      price: "₹260",
      sizes: "0.5L • 1L • 16L Bulk Tin",
      highlightEn: "100% sulphur-free copra pressed at low temperatures without chemicals.",
      highlightTa: "வெயிலில் உலர்த்தப்பட்ட தூய கொப்பரையில் இருந்து எடுக்கப்பட்டது.",
    },
    {
      id: "pure-ghee",
      nameEn: "Pure Desi Cow Ghee (Danedar)",
      nameTa: "சுத்தமான பசும் நெய்",
      subEn: "Aromatic Granular Ghee • Pasu Nei",
      subTa: "மணல் மணலான தூய பசும் நெய்",
      image: "/images/products/pure-ghee.jpg",
      natureBadgeEn: "Grass-Fed Cow Butter",
      natureBadgeTa: "புல் மேயும் பசு வெண்ணெய்",
      badgeType: "gold",
      price: "₹650",
      sizes: "250ml • 500ml • 1L Glass Jar",
      highlightEn: "Slowly boiled fresh butter with golden granular danedar texture.",
      highlightTa: "பாரம்பரிய முறையில் காய்ச்சப்பட்ட அசல் மணல் மணலான நெய்.",
    },
    {
      id: "jaggery-powder",
      nameEn: "Organic Jaggery Powder",
      nameTa: "இயற்கை நாட்டு சர்க்கரை",
      subEn: "Nattu Sakkarai • Pure Sweetener",
      subTa: "ரசாயனமில்லா நாட்டு சர்க்கரை",
      image: "/images/products/jaggery-powder.jpg",
      natureBadgeEn: "Chemical-Free Sweetener",
      natureBadgeTa: "ஜீரோ ரசாயனங்கள்",
      badgeType: "green",
      price: "₹85",
      sizes: "0.5kg • 1kg • 5kg • 25kg Sack",
      highlightEn: "Evaporated sugarcane juice rich in iron, calcium & minerals.",
      highlightTa: "கரும்பு சாற்றை இயற்கை முறையில் காய்ச்சி தயாரிக்கப்பட்ட சர்க்கரை.",
    },
    {
      id: "traditional-jaggery",
      nameEn: "Traditional Achu Jaggery",
      nameTa: "பாரம்பரிய அச்சு வெல்லம்",
      subEn: "Handcrafted Cane Blocks • Achu Vellam",
      subTa: "பாரம்பரிய கரும்பு அச்சு வெல்லம்",
      image: "/images/products/traditional-jaggery.jpg",
      natureBadgeEn: "100% Pure Cane Sugar",
      natureBadgeTa: "100% இயற்கை கரும்பு",
      badgeType: "dark",
      price: "₹90",
      sizes: "1kg • 5kg Box • 30kg Master",
      highlightEn: "Solid unrefined jaggery blocks free from chemical bleaches.",
      highlightTa: "எவ்வித ரசாயன நிறமூட்டிகள் இல்லாத பாரம்பரிய அச்சு வெல்லம்.",
    },
  ];

  // Scroll manually left or right
  const handleScroll = (direction: "left" | "right") => {
    if (trackRef.current) {
      const scrollAmount = 340;
      trackRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="about"
      style={{
        paddingTop: "72px",
        paddingBottom: "80px",
        backgroundColor: "#FAF7F2",
        borderTop: "1px solid #ECE7DD",
        borderBottom: "1px solid #ECE7DD",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div className="site-container">
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "38px",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div>
            <span
              className="eyebrow-text"
              style={{ display: "block", marginBottom: "8px" }}
            >
              {isTa
                ? "100% இயற்கை தயாரிப்புகள் • பாரம்பரிய மரச்செக்கு"
                : "100% NATURE-CRAFTED • WOOD-PRESSED ESSENTIALS"}
            </span>

            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(26px, 3.8vw, 38px)",
                fontWeight: 700,
                color: "#141612",
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              {isTa
                ? "அசல் தயாரிப்பு பாட்டில்கள் & இயற்கை அணிவகுப்பு"
                : "VS Organic Pure Bottles & Farm Harvest Showcase"}
            </h2>

            <p
              style={{
                fontSize: "13.5px",
                color: "#6B6E66",
                marginTop: "8px",
                marginBottom: 0,
                maxWidth: "600px",
                lineHeight: 1.55,
              }}
            >
              {isTa
                ? "மரச்செக்கு எண்ணெய்கள், மணல் மணலான பசும் நெய் மற்றும் நாட்டு சர்க்கரை. எவ்வித ரசாயனமும் கலக்காத அசல் தூய்மை."
                : "Real bottle pictures of our cold-pressed oils, golden cow ghee, and unrefined sweeteners captured in their natural elements."}
            </p>
          </div>

          {/* Slide Navigation Controls & Auto-play Toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="btn-cta btn-cta-secondary btn-cta-sm"
              style={{ gap: "6px" }}
              title={isPaused ? "Play slide animation" : "Pause slide animation"}
            >
              {isPaused ? <Play size={13} fill="currentColor" /> : <Pause size={13} fill="currentColor" />}
              <span>{isPaused ? (isTa ? "இயக்கு" : "Play Slide") : (isTa ? "நிறுத்து" : "Pause Slide")}</span>
            </button>

            <button
              onClick={() => handleScroll("left")}
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                backgroundColor: "#FFFFFF",
                border: "1px solid #D8D2C4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#141612",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                transition: "all 0.2s",
              }}
              title="Previous products"
              aria-label="Previous products"
            >
              <ChevronLeft size={18} strokeWidth={2.2} />
            </button>

            <button
              onClick={() => handleScroll("right")}
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                backgroundColor: "#FFFFFF",
                border: "1px solid #D8D2C4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#141612",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                transition: "all 0.2s",
              }}
              title="Next products"
              aria-label="Next products"
            >
              <ChevronRight size={18} strokeWidth={2.2} />
            </button>
          </div>
        </div>
      </div>

      {/* Full-bleed Moving Slide Track */}
      <div
        className="nature-slide-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          width: "100%",
          overflowX: "auto",
          paddingBottom: "16px",
          paddingTop: "4px",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
        }}
        ref={trackRef}
      >
        <div
          className={`nature-slide-track ${isPaused ? "slide-paused" : ""}`}
          style={{
            display: "flex",
            gap: "24px",
            width: "max-content",
            paddingLeft: "calc((100vw - min(1360px, 92vw)) / 2)",
            paddingRight: "calc((100vw - min(1360px, 92vw)) / 2)",
          }}
        >
          {/* Loop twice for infinite moving slide effect */}
          {[...NATURE_PRODUCTS, ...NATURE_PRODUCTS].map((product, idx) => (
            <div
              key={`${product.id}-${idx}`}
              className="nature-product-card"
              style={{
                width: "310px",
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                border: "1px solid #EBE5D8",
                boxShadow: "0 8px 24px rgba(20, 22, 18, 0.05)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                flexShrink: 0,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              {/* Image Frame with Nature Badge */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "240px",
                  backgroundColor: "#FAF7F2",
                  overflow: "hidden",
                }}
              >
                <img
                  src={product.image}
                  alt={product.nameEn}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  className="card-product-img"
                />

                {/* Nature Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    backgroundColor: "rgba(255, 255, 255, 0.94)",
                    backdropFilter: "blur(6px)",
                    borderRadius: "16px",
                    padding: "4px 10px",
                    fontSize: "10.5px",
                    fontWeight: 700,
                    color: "#166534",
                    border: "1px solid #ECE7DD",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  }}
                >
                  <Leaf size={11} color="#166534" strokeWidth={2.5} />
                  <span>{isTa ? product.natureBadgeTa : product.natureBadgeEn}</span>
                </div>

                {/* Price Tag */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    right: "12px",
                    backgroundColor: "rgba(20, 22, 18, 0.88)",
                    backdropFilter: "blur(6px)",
                    borderRadius: "12px",
                    padding: "4px 10px",
                    fontSize: "12px",
                    fontWeight: 800,
                    color: "#FFFFFF",
                  }}
                >
                  {product.price}
                </div>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: "18px 20px 20px 20px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "10.5px",
                      fontWeight: 700,
                      color: "#9E6F1B",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    {isTa ? product.subTa : product.subEn}
                  </span>

                  <h3
                    className="font-serif"
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#141612",
                      lineHeight: 1.25,
                      marginBottom: "8px",
                    }}
                  >
                    {isTa ? product.nameTa : product.nameEn}
                  </h3>

                  <p
                    style={{
                      fontSize: "12px",
                      color: "#6B6E66",
                      lineHeight: 1.5,
                      margin: 0,
                      marginBottom: "12px",
                    }}
                  >
                    {isTa ? product.highlightTa : product.highlightEn}
                  </p>

                  <div
                    style={{
                      fontSize: "11px",
                      color: "#7A7C75",
                      backgroundColor: "#FAF7F2",
                      padding: "6px 10px",
                      borderRadius: "8px",
                      border: "1px solid #ECE7DD",
                      marginBottom: "16px",
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>{isTa ? "கிடைக்கும் அளவுகள்:" : "Available In:"}</span>{" "}
                    {product.sizes}
                  </div>
                </div>

                {/* Card Actions */}
                <div style={{ display: "flex", gap: "8px" }}>
                  <a
                    href="#products"
                    className="btn-cta btn-cta-primary btn-cta-sm"
                    style={{ flex: 1, justifyContent: "center", textDecoration: "none" }}
                  >
                    <ShoppingBag size={13} strokeWidth={2} />
                    <span>{isTa ? "வாங்க" : "View Catalog"}</span>
                  </a>

                  {onOpenEnquiry && (
                    <button
                      onClick={() => onOpenEnquiry(product.nameEn)}
                      className="btn-cta btn-cta-secondary btn-cta-sm"
                      style={{ padding: "8px 12px" }}
                      title="Request wholesale rate"
                    >
                      <span>{isTa ? "விலை" : "Quote"}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Purity & Trust Ribbon */}
      <div className="site-container" style={{ marginTop: "24px" }}>
        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "16px",
            padding: "18px 24px",
            border: "1px solid #ECE7DD",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.02)",
          }}
          className="nature-ribbon-grid"
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Award size={20} color="#9E6F1B" strokeWidth={2} />
            <div>
              <span style={{ fontSize: "12.5px", fontWeight: 700, color: "#141612", display: "block" }}>
                100% Vagai Chekku
              </span>
              <span style={{ fontSize: "10.5px", color: "#6B6E66" }}>
                {isTa ? "பாரம்பரிய மரச்செக்கு" : "Cold-pressed below 45°C"}
              </span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Leaf size={20} color="#166534" strokeWidth={2} />
            <div>
              <span style={{ fontSize: "12.5px", fontWeight: 700, color: "#166534", display: "block" }}>
                Zero Chemicals
              </span>
              <span style={{ fontSize: "10.5px", color: "#6B6E66" }}>
                {isTa ? "ரசாயன பிளீச்சிங் இல்லை" : "Unrefined & unbleached"}
              </span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <ShieldCheck size={20} color="#166534" strokeWidth={2} />
            <div>
              <span style={{ fontSize: "12.5px", fontWeight: 700, color: "#141612", display: "block" }}>
                FSSAI Registered
              </span>
              <span style={{ fontSize: "10.5px", color: "#6B6E66" }}>
                {isTa ? "அரசு உணவு பாதுகாப்பு" : "Lab verified purity"}
              </span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <HeartHandshake size={20} color="#9E6F1B" strokeWidth={2} />
            <div>
              <span style={{ fontSize: "12.5px", fontWeight: 700, color: "#141612", display: "block" }}>
                Direct Mill Rates
              </span>
              <span style={{ fontSize: "10.5px", color: "#6B6E66" }}>
                {isTa ? "நேரடி நியாய விலை" : "Zero broker commission"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Infinite moving slide animation */
        @keyframes natureMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .nature-slide-track {
          animation: natureMarquee 38s linear infinite;
        }

        .nature-slide-track:hover,
        .slide-paused {
          animation-play-state: paused !important;
        }

        .nature-product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(20, 22, 18, 0.1) !important;
        }

        .nature-product-card:hover .card-product-img {
          transform: scale(1.06);
        }

        .nature-slide-wrapper::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 900px) {
          .nature-ribbon-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 14px !important;
          }
        }

        @media (max-width: 540px) {
          .nature-ribbon-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
            padding: 14px 16px !important;
          }
          .nature-product-card {
            width: 270px !important;
          }
          .nature-product-card :global(img) {
            height: 200px !important;
          }
        }
      `}</style>
    </section>
  );
}