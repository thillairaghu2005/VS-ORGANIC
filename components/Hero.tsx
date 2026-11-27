"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  ShoppingBag,
  Sparkles,
  CheckCircle2,
  Package,
  Phone,
  Building2,
  Leaf,
  ShieldCheck,
  Award,
} from "lucide-react";

interface HeroProps {
  onOpenEnquiry: (defaultProduct?: string) => void;
}

export default function Hero({ onOpenEnquiry }: HeroProps) {
  const { language } = useLanguage();
  const isTa = language === "ta";

  const PRODUCTS = [
    {
      id: "groundnut-oil",
      nameEn: "Wood Pressed Groundnut Oil",
      nameTa: "மரச்செக்கு கடலை எண்ணெய்",
      subEn: "Pure Vaagai Chekku • Kadalai Ennai",
      subTa: "அசல் வாகை மரச்செக்கு • நாட்டு நிலக்கடலை",
      badgeEn: "Native Groundnuts • <45°C",
      badgeTa: "நாட்டு நிலக்கடலை • <45°C",
      price: "₹220 / L",
      sizesEn: "0.5L • 1L • 5L Bottles & 15kg Tin",
      sizesTa: "0.5லி • 1லி • 5லி பாட்டில் & 15கிலோ டின்",
      highlightEn: "Cold-pressed below 45°C in traditional Vaagai wooden chekkus. Unrefined, unbleached, retaining rich nutty aroma & vital antioxidants.",
      highlightTa: "பாரம்பரிய வாகை மரச்செக்கில் பிழியப்பட்ட தூய கடலை எண்ணெய். ரசாயனங்கள் அற்ற அசல் இயற்கை சத்துக்கள் நிறைந்தது.",
      image: "/images/products/groundnut-oil.jpg",
      accentColor: "#C48A27",
    },
    {
      id: "sesame-oil",
      nameEn: "Traditional Sesame Chekku Oil",
      nameTa: "சுத்தமான மரச்செக்கு நல்லெண்ணெய்",
      subEn: "Native Black Sesame • Nallennai",
      subTa: "கருப்பு எள் • தூய பனைவெல்லம்",
      badgeEn: "Black Sesame • Palm Karupatti",
      badgeTa: "நாட்டு கருப்பு எள் • பனைவெல்லம்",
      price: "₹380 / L",
      sizesEn: "0.5L • 1L Bottles & 15kg Commercial Tin",
      sizesTa: "0.5லி • 1லி பாட்டில் & 15கிலோ வணிக டின்",
      highlightEn: "Native black sesame seeds slowly crushed with unrefined palm karupatti. Rich in authentic South Indian aroma, minerals & sesamol.",
      highlightTa: "நாட்டு கருப்பு எள்ளுடன் தூய பனைவெல்லம் சேர்த்து பிழியப்பட்ட பாரம்பரிய மரச்செக்கு நல்லெண்ணெய். அசல் இயற்கை நறுமணம்.",
      image: "/images/products/sesame-oil.jpg",
      accentColor: "#A66E1E",
    },
    {
      id: "coconut-oil",
      nameEn: "Pure Copra Coconut Oil",
      nameTa: "மரச்செக்கு தேங்காய் எண்ணெய்",
      subEn: "Sulphur-Free Copra • Thengai Ennai",
      subTa: "கந்தகம் அற்ற கொப்பரை • தேங்காய் எண்ணெய்",
      badgeEn: "Sulphur-Free Copra • Raw",
      badgeTa: "கந்தகம் அற்ற கொப்பரை • இயற்கை",
      price: "₹260 / L",
      sizesEn: "0.5L • 1L Bottles & 16L Bulk Tin",
      sizesTa: "0.5லி • 1லி பாட்டில் & 16லி மொத்த டின்",
      highlightEn: "100% sulphur-free copra pressed at low temperatures without synthetic bleaches. Rich in natural lauric acid & nourishing goodness.",
      highlightTa: "இயற்கையாக வெயிலில் உலர்த்தப்பட்ட கந்தகமில்லா கொப்பரையில் இருந்து எடுக்கப்படும் தேங்காய் எண்ணெய். இயற்கை லாரிக் அமிலம் நிறைந்தது.",
      image: "/images/products/coconut-oil.jpg",
      accentColor: "#8A6518",
    },
    {
      id: "pure-ghee",
      nameEn: "Pure Desi Cow Ghee (Danedar)",
      nameTa: "சுத்தமான மணல் மணலான பசும் நெய்",
      subEn: "Grass-Fed Cow Butter • Pasu Nei",
      subTa: "புல் மேயும் பசு வெண்ணெய் • மணல் பதம்",
      badgeEn: "Grass-Fed Cow Butter • Bilona",
      badgeTa: "தூய பசு வெண்ணெய் • மணல் பதம்",
      price: "₹650 / L",
      sizesEn: "250ml • 500ml • 1L Glass Jars & Tins",
      sizesTa: "250மி.லி • 500மி.லி • 1லி கண்ணாடி பாட்டில் & டின்",
      highlightEn: "Clarified in small batches using traditional slow-heating methods. Golden granular texture, rich butter aroma & zero artificial coloring.",
      highlightTa: "பாரம்பரிய முறையில் சிறு பாத்திரங்களில் காய்ச்சப்பட்ட மணல் மணலான தூய பசு நெய். எவ்வித ரசாயன நிறமூட்டிகள் இல்லாத அசல் சுவை.",
      image: "/images/products/pure-ghee.jpg",
      accentColor: "#B88528",
    },
    {
      id: "jaggery-powder",
      nameEn: "Organic Naattu Sakkarai",
      nameTa: "இயற்கை நாட்டு சர்க்கரை",
      subEn: "Unrefined Cane Sugar • Pure Sweetener",
      subTa: "ரசாயனம் கலக்காத இயற்கை நாட்டு சர்க்கரை",
      badgeEn: "100% Organic Cane • Unrefined",
      badgeTa: "100% இயற்கை கரும்பு • சுத்தமானது",
      price: "₹85 / kg",
      sizesEn: "0.5kg • 1kg • 5kg Packs & 25kg Sack",
      sizesTa: "0.5கிலோ • 1கிலோ • 5கிலோ பாக்கெட்டுகள் & 25கிலோ மூட்டை",
      highlightEn: "Evaporated fresh cane juice naturally unrefined and sun-dried. Rich in organic iron, calcium, potassium & wholesome minerals.",
      highlightTa: "தூய கரும்பு சாற்றை இயற்கை முறையில் காய்ச்சி தயாரிக்கப்பட்ட சர்க்கரை. அசல் இரும்புச்சத்து மற்றும் தாதுக்கள் நிறைந்தது.",
      image: "/images/products/jaggery-powder.jpg",
      accentColor: "#A06820",
    },
    {
      id: "traditional-jaggery",
      nameEn: "Traditional Achu Jaggery Blocks",
      nameTa: "பாரம்பரிய கரும்பு அச்சு வெல்லம்",
      subEn: "Handcrafted Cane Blocks • Achu Vellam",
      subTa: "பாரம்பரிய முறையில் தயாரித்த தூய அச்சு வெல்லம்",
      badgeEn: "Handcrafted Cane Blocks • Pure",
      badgeTa: "பாரம்பரிய அச்சு வெல்லம் • அசல்",
      price: "₹90 / kg",
      sizesEn: "1kg • 5kg Boxes & 30kg Master Box",
      sizesTa: "1கிலோ • 5கிலோ பெட்டிகள் & 30கிலோ மொத்த பெட்டி",
      highlightEn: "Solid unrefined traditional sugarcane jaggery blocks prepared without chemical bleaches or synthetic preservatives. Pure natural sweetness.",
      highlightTa: "எவ்வித ரசாயன நிறமூட்டிகள் இல்லாத பாரம்பரிய அச்சு வெல்லம். பண்டிகைகள் மற்றும் அன்றாட ஆரோக்கியத்திற்கு ஏற்றது.",
      image: "/images/products/traditional-jaggery.jpg",
      accentColor: "#925619",
    },
  ];

  // Duplicated list for seamless infinite loop from left to right
  const SLIDE_ITEMS = [...PRODUCTS, ...PRODUCTS];

  return (
    <section
      className="hero-full-view-section"
      style={{
        position: "relative",
        backgroundColor: "#FAF7F2",
        width: "100%",
        overflowX: "hidden",
        paddingTop: "28px",
        paddingBottom: "36px",
        borderBottom: "1px solid #EBE5D8",
      }}
    >
      {/* 1. TOP BRAND HEADLINE & VALUE PROPOSITION */}
      <div className="site-container" style={{ marginBottom: "22px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            {/* Live Nature & Supply Badge */}
            <div style={{ marginBottom: "8px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  backgroundColor: "#FFFFFF",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  border: "1px solid #E2DDD2",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: "#855812",
                  textTransform: "uppercase",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    backgroundColor: "#166534",
                    boxShadow: "0 0 0 3px rgba(22, 101, 52, 0.2)",
                  }}
                />
                {isTa
                  ? "100% தூய மரச்செக்கு • நேரடி ஆலை விநியோகம்"
                  : "100% PURE & UNREFINED • COLD-PRESSED WOOD CHEKKU"}
              </span>
            </div>

            {/* Main Editorial Title */}
            <h1
              className="font-serif"
              style={{
                fontSize: "clamp(26px, 3.4vw, 40px)",
                fontWeight: 700,
                color: "#141612",
                lineHeight: 1.15,
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              {isTa
                ? "அசல் மரச்செக்கு பாட்டில்கள் & இயற்கை தயாரிப்புகள்"
                : "VS Organic Pure Chekku Bottles & Nature Products"}
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "clamp(13px, 1.4vw, 15px)",
                color: "#6B6E66",
                marginTop: "6px",
                marginBottom: 0,
                lineHeight: 1.5,
              }}
            >
              {isTa
                ? "பாரம்பரிய வாகை மரச்செக்கில் 45°C-க்கு கீழ் பிழியப்பட்ட அசல் எண்ணெய் • 10 கிளைகளில் நேரடி விநியோகம்"
                : "Crushed below 45°C in traditional Vaagai wooden chekkus • Direct mill supply across 10 regional branches"}
            </p>
          </div>

          {/* Quick Mill Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
            <a
              href="#products"
              className="btn-primary"
              style={{
                padding: "10px 20px",
                fontSize: "12px",
                letterSpacing: "0.06em",
                borderRadius: "8px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                textDecoration: "none",
              }}
            >
              <ShoppingBag size={14} />
              <span>{isTa ? "பொருட்கள் பட்டியல்" : "SHOP CATALOG"}</span>
            </a>

            <button
              onClick={() => onOpenEnquiry()}
              className="btn-secondary"
              style={{
                padding: "10px 18px",
                fontSize: "12px",
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                border: "1px solid #D8D2C4",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              <span>{isTa ? "மொத்த விநியோகம்" : "WHOLESALE ENQUIRY"}</span>
            </button>

            <a
              href="tel:9150766377"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "10px 14px",
                borderRadius: "8px",
                backgroundColor: "rgba(158, 111, 27, 0.1)",
                color: "#855812",
                textDecoration: "none",
                fontSize: "12px",
                fontWeight: 700,
              }}
            >
              <Phone size={13} />
              <span>9150766377</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. FULL-VIEW AUTOMATIC MOVING SLIDE (FROM LEFT TO RIGHT • NO ARROWS) */}
      <div
        className="hero-auto-slide-container"
        style={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
          paddingTop: "6px",
          paddingBottom: "12px",
        }}
      >
        {/* Soft edge fade masks for seamless horizontal flow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: "60px",
            background: "linear-gradient(to right, #FAF7F2 10%, rgba(250, 247, 242, 0) 100%)",
            zIndex: 4,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: "60px",
            background: "linear-gradient(to left, #FAF7F2 10%, rgba(250, 247, 242, 0) 100%)",
            zIndex: 4,
            pointerEvents: "none",
          }}
        />

        {/* Continuous Left-to-Right Moving Sliding Track */}
        <div
          className="hero-continuous-moving-track"
          style={{
            display: "flex",
            width: "max-content",
            animation: "slideLeftToRight 36s linear infinite",
            willChange: "transform",
          }}
        >
          {SLIDE_ITEMS.map((product, idx) => (
            <div
              key={`${product.id}-${idx}`}
              className="hero-product-slide-card"
              style={{
                width: "350px",
                flexShrink: 0,
                marginRight: "22px",
                backgroundColor: "#FFFFFF",
                borderRadius: "22px",
                border: "1.5px solid #EBE5D8",
                boxShadow: "0 10px 30px rgba(20, 22, 18, 0.06)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              {/* Product Bottle & Nature Image Stage */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "290px",
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
                  }}
                  loading="eager"
                />

                {/* Subtle bottom gradient on image */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(20, 22, 18, 0.5) 0%, rgba(20, 22, 18, 0) 30%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Bottom title overlay on image */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "14px",
                    left: "16px",
                    right: "16px",
                    color: "#FFFFFF",
                    zIndex: 2,
                  }}
                >
                  <div
                    className="font-serif"
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      lineHeight: 1.2,
                      textShadow: "0 2px 6px rgba(0,0,0,0.6)",
                    }}
                  >
                    {isTa ? product.nameTa : product.nameEn}
                  </div>
                </div>
              </div>

              {/* Card Body: Details & Nature Highlight */}
              <div
                style={{
                  padding: "16px 18px 18px 18px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  justifyContent: "space-between",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <div>
                  {/* Category / Sub-heading */}
                  <span
                    style={{
                      fontSize: "10.5px",
                      fontWeight: 700,
                      color: "#9E6F1B",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    {isTa ? product.subTa : product.subEn}
                  </span>

                  {/* Highlight text */}
                  <p
                    style={{
                      fontSize: "12.5px",
                      lineHeight: 1.55,
                      color: "#555750",
                      margin: 0,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {isTa ? product.highlightTa : product.highlightEn}
                  </p>
                </div>

                {/* Pure Quality Check */}
                <div
                  style={{
                    marginTop: "12px",
                    paddingTop: "10px",
                    borderTop: "1px solid #F0ECE4",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "11.5px",
                    color: "#166534",
                    fontWeight: 600,
                  }}
                >
                  <span style={{ fontSize: "12px" }}>✓</span>
                  <span>{isTa ? "100% அசல் மரச்செக்கு • ரசாயனம் இல்லை" : "100% Pure Chekku • Zero Chemicals"}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Smooth, continuous, hardware-accelerated movement from left to right */
        @keyframes slideLeftToRight {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0%, 0, 0);
          }
        }

        .hero-product-slide-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(20, 22, 18, 0.12) !important;
        }

        @media (max-width: 600px) {
          .hero-product-slide-card {
            width: 290px !important;
            margin-right: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
