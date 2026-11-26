"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  ShieldCheck,
  Award,
  Leaf,
  HeartHandshake,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Pause,
  Play,
  Sparkles,
} from "lucide-react";

interface BrandStoryProps {
  onOpenEnquiry?: (defaultProduct?: string) => void;
}

export default function BrandStory({ onOpenEnquiry }: BrandStoryProps) {
  const { language } = useLanguage();
  const isTa = language === "ta";

  const [activeIdx, setActiveIdx] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const NATURE_PRODUCTS = [
    {
      id: "groundnut-oil",
      nameEn: "Wood Pressed Groundnut Oil",
      nameTa: "மரச்செக்கு கடலை எண்ணெய்",
      subEn: "Unrefined Vagai Chekku • Kadalai Ennai",
      subTa: "வாகை மரச்செக்கு • அசல் நாட்டு கடலை",
      image: "/images/products/groundnut-oil.jpg",
      natureBadgeEn: "Native Groundnuts • <45°C",
      natureBadgeTa: "நாட்டு நிலக்கடலை • <45°C",
      price: "₹220 / L",
      sizes: "0.5L • 1L • 5L Bottle & 15kg Tin",
      highlightEn: "Rich nutty aroma, natural golden glow, zero chemical refining or palm blends.",
      highlightTa: "அசல் மணமும் நிறமும் கொண்ட பாரம்பரிய வாகை மரச்செக்கு எண்ணெய்.",
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
      price: "₹380 / L",
      sizes: "1L Bottle & 15kg Commercial Tin",
      highlightEn: "Native black sesame seeds crushed with traditional unrefined palm karupatti.",
      highlightTa: "நாட்டு கருப்பு எள்ளுடன் தூய பனைவெல்லம் சேர்த்து பிழியப்பட்டது.",
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
      price: "₹260 / L",
      sizes: "0.5L • 1L Bottle & 16L Bulk Tin",
      highlightEn: "100% sulphur-free copra pressed at low temperatures without synthetic bleaches.",
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
      price: "₹650 / L",
      sizes: "250ml • 500ml • 1L Glass Jar",
      highlightEn: "Slowly boiled fresh butter with golden granular danedar texture & rich aroma.",
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
      price: "₹85 / kg",
      sizes: "0.5kg • 1kg • 5kg Packs & 25kg Sack",
      highlightEn: "Evaporated fresh cane juice rich in natural iron, calcium & minerals.",
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
      price: "₹90 / kg",
      sizes: "1kg • 5kg Box & 30kg Master Box",
      highlightEn: "Solid unrefined cane jaggery blocks free from artificial colorants & preservatives.",
      highlightTa: "எவ்வித ரசாயன நிறமூட்டிகள் இல்லாத பாரம்பரிய அச்சு வெல்லம்.",
    },
  ];

  // Automatic slide advancement timer (every 3.2 seconds)
  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % NATURE_PRODUCTS.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [isAutoPlay, NATURE_PRODUCTS.length]);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % NATURE_PRODUCTS.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? NATURE_PRODUCTS.length - 1 : prev - 1));
  };

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const dist = touchStart - touchEnd;
    if (dist > 45) {
      handleNext();
    } else if (dist < -45) {
      handlePrev();
    }
  };

  return (
    <section
      id="about"
      style={{
        paddingTop: "76px",
        paddingBottom: "84px",
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
            marginBottom: "32px",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div>
            {/* Live Auto-Slide Status Pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                padding: "5px 14px",
                border: "1px solid #E5E0D5",
                marginBottom: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  backgroundColor: isAutoPlay ? "#166534" : "#84877E",
                  display: "inline-block",
                  boxShadow: isAutoPlay ? "0 0 0 3px rgba(22, 101, 52, 0.2)" : "none",
                }}
              />
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: isAutoPlay ? "#166534" : "#555750",
                  textTransform: "uppercase",
                }}
              >
                {isAutoPlay
                  ? isTa
                    ? "தானியங்கி நகர்வு • தயாரிப்பு அணிவகுப்பு"
                    : "AUTO-SLIDING • BOTTLE & HARVEST SHOWCASE"
                  : isTa
                  ? "நகர்வு நிறுத்தப்பட்டது"
                  : "SLIDE PAUSED"}
              </span>
            </div>

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
                ? "அசல் பாட்டில்கள் & இயற்கை தயாரிப்புகள்"
                : "VS Organic Pure Bottles & Farm Harvest Slide"}
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
                ? "மரச்செக்கு கடலை, நல்லெண்ணெய், தேங்காய் எண்ணெய், பசும் நெய் மற்றும் நாட்டு சர்க்கரை பாட்டில்கள் தானியங்கி நகர்வில் காண்க."
                : "Automatic moving slide of our cold-pressed bottles and nature-crafted essentials in their purest unrefined state."}
            </p>
          </div>

          {/* Interactive Slide Controls: Play/Pause, Prev & Next */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="btn-cta btn-cta-secondary btn-cta-sm"
              style={{ gap: "6px" }}
              title={isAutoPlay ? "Pause automatic slide" : "Start automatic slide"}
            >
              {isAutoPlay ? <Pause size={13} fill="currentColor" /> : <Play size={13} fill="currentColor" />}
              <span>{isAutoPlay ? (isTa ? "நிறுத்து" : "Pause") : (isTa ? "இயக்கு" : "Auto Slide")}</span>
            </button>

            <button
              onClick={handlePrev}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#FFFFFF",
                border: "1px solid #D8D2C4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#141612",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                transition: "all 0.2s ease",
              }}
              title="Previous slide"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} strokeWidth={2.2} />
            </button>

            <button
              onClick={handleNext}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#FFFFFF",
                border: "1px solid #D8D2C4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#141612",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                transition: "all 0.2s ease",
              }}
              title="Next slide"
              aria-label="Next slide"
            >
              <ChevronRight size={20} strokeWidth={2.2} />
            </button>
          </div>
        </div>

        {/* Animated Progress Line */}
        <div
          style={{
            width: "100%",
            height: "3px",
            backgroundColor: "#EBE5D8",
            borderRadius: "3px",
            marginBottom: "28px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            key={activeIdx}
            style={{
              height: "100%",
              backgroundColor: "#9E6F1B",
              borderRadius: "3px",
              animation: isAutoPlay ? "slideCountdown 3.2s linear forwards" : "none",
              width: isAutoPlay ? "100%" : `${((activeIdx + 1) / NATURE_PRODUCTS.length) * 100}%`,
            }}
          />
        </div>

        {/* AUTOMATIC MOVING SLIDE VIEWPORT */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
            borderRadius: "24px",
          }}
        >
          {/* Horizontal Slide Track */}
          <div
            className="carousel-slide-track"
            style={{
              display: "flex",
              width: "100%",
              transform: `translateX(-${activeIdx * 100}%)`,
              transition: "transform 0.68s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          >
            {NATURE_PRODUCTS.map((product, idx) => {
              const isActive = idx === activeIdx;
              return (
                <div
                  key={product.id}
                  style={{
                    minWidth: "100%",
                    width: "100%",
                    flexShrink: 0,
                    boxSizing: "border-box",
                    padding: "4px",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderRadius: "24px",
                      border: "1px solid #EBE5D8",
                      boxShadow: "0 16px 40px rgba(20, 22, 18, 0.06)",
                      overflow: "hidden",
                      display: "grid",
                      gridTemplateColumns: "1.1fr 1fr",
                      gap: "0",
                      alignItems: "stretch",
                      minHeight: "420px",
                    }}
                    className="auto-slide-card-grid"
                  >
                    {/* Left/Image: Large Real Product Bottle & Nature Ingredients Image */}
                    <div
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        backgroundColor: "#FAF7F2",
                        minHeight: "340px",
                      }}
                    >
                      <img
                        src={product.image}
                        alt={product.nameEn}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.6s ease",
                        }}
                      />

                      {/* Top Purity Badge */}
                      <div
                        style={{
                          position: "absolute",
                          top: "16px",
                          left: "16px",
                          backgroundColor: "rgba(255, 255, 255, 0.94)",
                          backdropFilter: "blur(8px)",
                          borderRadius: "20px",
                          padding: "6px 14px",
                          border: "1px solid #ECE7DD",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                          zIndex: 2,
                        }}
                      >
                        <Leaf size={13} color="#166534" strokeWidth={2.5} />
                        <span
                          style={{
                            fontSize: "11px",
                            fontWeight: 700,
                            color: "#166534",
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                          }}
                        >
                          {isTa ? product.natureBadgeTa : product.natureBadgeEn}
                        </span>
                      </div>

                      {/* Price Pill Tag */}
                      <div
                        style={{
                          position: "absolute",
                          top: "16px",
                          right: "16px",
                          backgroundColor: "rgba(20, 22, 18, 0.88)",
                          backdropFilter: "blur(8px)",
                          borderRadius: "20px",
                          padding: "6px 14px",
                          color: "#FFFFFF",
                          fontSize: "13px",
                          fontWeight: 800,
                          zIndex: 2,
                        }}
                      >
                        {product.price}
                      </div>

                      {/* Bottom Gradient Scrim */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(to top, rgba(20, 22, 18, 0.5) 0%, rgba(20, 22, 18, 0) 40%)",
                          pointerEvents: "none",
                        }}
                      />
                    </div>

                    {/* Right/Content: Product Details, Available Sizes & Actions */}
                    <div
                      style={{
                        padding: "36px 38px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        backgroundColor: "#FFFFFF",
                      }}
                      className="auto-slide-content-col"
                    >
                      <div>
                        {/* Eyebrow / Category */}
                        <span
                          style={{
                            fontSize: "11px",
                            fontWeight: 800,
                            letterSpacing: "0.14em",
                            color: "#9E6F1B",
                            textTransform: "uppercase",
                            display: "block",
                            marginBottom: "8px",
                          }}
                        >
                          {isTa ? product.subTa : product.subEn}
                        </span>

                        {/* Title */}
                        <h3
                          className="font-serif"
                          style={{
                            fontSize: "clamp(24px, 2.6vw, 32px)",
                            fontWeight: 700,
                            color: "#141612",
                            lineHeight: 1.2,
                            marginBottom: "14px",
                          }}
                        >
                          {isTa ? product.nameTa : product.nameEn}
                        </h3>

                        {/* Description */}
                        <p
                          style={{
                            fontSize: "14px",
                            lineHeight: 1.65,
                            color: "#555750",
                            marginBottom: "22px",
                          }}
                        >
                          {isTa ? product.highlightTa : product.highlightEn}
                        </p>

                        {/* Packaging Sizes Box */}
                        <div
                          style={{
                            backgroundColor: "#FAF7F2",
                            border: "1px solid #ECE7DD",
                            borderRadius: "14px",
                            padding: "14px 18px",
                            marginBottom: "24px",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "10.5px",
                              fontWeight: 700,
                              letterSpacing: "0.08em",
                              textTransform: "uppercase",
                              color: "#84877E",
                              display: "block",
                              marginBottom: "4px",
                            }}
                          >
                            {isTa ? "கிடைக்கும் பேக்கிங் அளவுகள்" : "PACKAGING SIZES & BULK TINS"}
                          </span>
                          <span
                            style={{
                              fontSize: "13.5px",
                              fontWeight: 700,
                              color: "#141612",
                            }}
                          >
                            {product.sizes}
                          </span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          flexWrap: "wrap",
                        }}
                      >
                        <a
                          href="#products"
                          className="btn-cta btn-cta-primary"
                          style={{
                            padding: "12px 24px",
                            fontSize: "12.5px",
                            textDecoration: "none",
                            gap: "8px",
                          }}
                        >
                          <ShoppingBag size={15} strokeWidth={2} />
                          <span>{isTa ? "பொருட்கள் பட்டியல் காண்க" : "View in Product Catalog"}</span>
                        </a>

                        {onOpenEnquiry && (
                          <button
                            onClick={() => onOpenEnquiry(product.nameEn)}
                            className="btn-cta btn-cta-secondary"
                            style={{
                              padding: "12px 20px",
                              fontSize: "12.5px",
                              backgroundColor: "#FAF7F2",
                            }}
                          >
                            <span>{isTa ? "மொத்த விலை கோரிக்கை" : "Request Wholesale Quote"}</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Slide Indicator Dots (1 of 6) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            marginTop: "24px",
          }}
        >
          {NATURE_PRODUCTS.map((prod, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={prod.id}
                onClick={() => setActiveIdx(idx)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: isActive ? "6px 14px" : "6px 10px",
                  borderRadius: "20px",
                  border: isActive ? "1.5px solid #9E6F1B" : "1px solid #D8D2C4",
                  backgroundColor: isActive ? "#FFFFFF" : "transparent",
                  color: isActive ? "#141612" : "#84877E",
                  fontSize: "11px",
                  fontWeight: isActive ? 700 : 500,
                  cursor: "pointer",
                  boxShadow: isActive ? "0 4px 12px rgba(158, 111, 27, 0.15)" : "none",
                  transition: "all 0.25s ease",
                }}
                title={prod.nameEn}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    backgroundColor: isActive ? "#9E6F1B" : "#B8B5AC",
                  }}
                />
                <span>
                  {prod.id === "groundnut-oil"
                    ? isTa ? "கடலை" : "Groundnut"
                    : prod.id === "sesame-oil"
                    ? isTa ? "நல்லெண்ணெய்" : "Sesame"
                    : prod.id === "coconut-oil"
                    ? isTa ? "தேங்காய்" : "Coconut"
                    : prod.id === "pure-ghee"
                    ? isTa ? "நெய்" : "Desi Ghee"
                    : prod.id === "jaggery-powder"
                    ? isTa ? "நாட்டு சர்க்கரை" : "Jaggery Powder"
                    : isTa ? "அச்சு வெல்லம்" : "Achu Jaggery"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Quality & Trust Ribbon */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "16px",
            padding: "20px 28px",
            border: "1px solid #ECE7DD",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "18px",
            marginTop: "36px",
            boxShadow: "0 4px 18px rgba(0,0,0,0.02)",
          }}
          className="nature-ribbon-grid"
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Award size={22} color="#9E6F1B" strokeWidth={2} />
            <div>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#141612", display: "block" }}>
                100% Vagai Chekku
              </span>
              <span style={{ fontSize: "11px", color: "#6B6E66" }}>
                {isTa ? "45°C-க்கு குறைவான வெப்பம்" : "Cold-pressed below 45°C"}
              </span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Leaf size={22} color="#166534" strokeWidth={2} />
            <div>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#166534", display: "block" }}>
                Zero Chemicals
              </span>
              <span style={{ fontSize: "11px", color: "#6B6E66" }}>
                {isTa ? "ரசாயன பிளீச்சிங் இல்லை" : "Unrefined & unbleached"}
              </span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <ShieldCheck size={22} color="#166534" strokeWidth={2} />
            <div>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#166534", display: "block" }}>
                FSSAI Registered
              </span>
              <span style={{ fontSize: "11px", color: "#6B6E66" }}>
                {isTa ? "அரசு உணவு பாதுகாப்பு" : "Lab verified purity"}
              </span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <HeartHandshake size={22} color="#9E6F1B" strokeWidth={2} />
            <div>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#141612", display: "block" }}>
                Direct Mill Rates
              </span>
              <span style={{ fontSize: "11px", color: "#6B6E66" }}>
                {isTa ? "நேரடி நியாய விலை" : "Zero broker commission"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideCountdown {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        @media (max-width: 900px) {
          .auto-slide-card-grid {
            grid-template-columns: 1fr !important;
          }
          .auto-slide-content-col {
            padding: 24px 20px !important;
          }
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
        }
      `}</style>
    </section>
  );
}