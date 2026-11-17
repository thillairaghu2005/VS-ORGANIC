"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";

interface HeroProps {
  onOpenEnquiry: (defaultProduct?: string) => void;
}

export default function Hero({ onOpenEnquiry }: HeroProps) {
  const { language, t } = useLanguage();
  const { addItem } = useCart();
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      id: "groundnut-oil",
      tag: "NEW HARVEST 2026 • DIRECT MILL SUPPLY",
      tagTa: "புதிய அறுவடை 2026 • நேரடி ஆலை விநியோகம்",
      title: "Pure & Natural Chekku Oils",
      titleTa: "பாரம்பரிய மரச்செக்கு எண்ணெய்",
      subtitle: "Bringing Traditional Goodness to Every Home!",
      subtitleTa: "பாரம்பரிய நன்மையை ஒவ்வொரு இல்லத்திற்கும் கொண்டு சேர்க்கிறோம்!",
      desc: "Founded in 2018 by Mr. Vijayan & Mrs. Shanmugapriya. Under the leadership of Mr. Kishore Kumar VS., Managing Director, we supply 100% cold-pressed wood chekku oils directly to households, supermarkets, and wholesale businesses across 10 branches in Bengaluru & South India.",
      descTa: "2018 ஆம் ஆண்டு திரு. விஜயன் மற்றும் திருமதி. சண்முகப்பிரியா அவர்களால் தொடங்கப்பட்டு, நிர்வாக இயக்குநர் திரு. கிஷோர் குமார் வி.எஸ். அவர்களின் தலைமையில் பெங்களூரு உள்ளிட்ட 10 கிளைகளுடன் வாடிக்கையாளர்களுக்கு தரமான மரச்செக்கு எண்ணெய்களை நியாயமான விலையில் வழங்கி வருகிறோம்.",
      highlightProduct: "Wood Pressed Groundnut Oil",
      highlightProductTa: "மரச்செக்கு கடலை எண்ணெய்",
      packagingText: "Available in 0.5L, 1L, 5L Bottles & 15kg / 16L Tins",
      packagingTextTa: "0.5லி, 1லி, 5லி பாட்டில்கள் மற்றும் 15கிலோ / 16லி டின் வடிவில் கிடைக்கும்",
      colorAccent: "#C48A27",
    },
    {
      id: "sesame-oil",
      tag: "AUTHENTIC GINGELLY • SLOW WOOD-PRESSED",
      tagTa: "பாரம்பரிய நல்லெண்ணெய் • பனைவெல்லம் சேர்த்து பிழிந்தது",
      title: "Traditional Sesame Chekku Oil",
      titleTa: "சுத்தமான மரச்செக்கு நல்லெண்ணெய்",
      subtitle: "Crushed with Pure Palm Jaggery",
      subtitleTa: "அசல் பனைவெல்லம் சேர்த்து வாகை மரச்செக்கில் பிழிந்தது",
      desc: "Slow-pressed native black sesame seeds blended with unrefined palm jaggery. Unbleached, chemical-free, retaining authentic South Indian aroma, minerals, and natural sesamol antioxidants.",
      descTa: "நாட்டு கருப்பு எள்ளுடன் தூய பனைவெல்லம் சேர்த்து மிதமான வேகத்தில் பிழியப்பட்ட பாரம்பரிய மரச்செக்கு நல்லெண்ணெய். ரசாயனங்கள் அற்ற இயற்கை நறுமணம்.",
      highlightProduct: "Pure Chekku Sesame Oil",
      highlightProductTa: "மரச்செக்கு நல்லெண்ணெய்",
      packagingText: "1L Bottles & 15kg Wholesale Tins",
      packagingTextTa: "1 லிட்டர் பாட்டில் மற்றும் 15 கிலோ மொத்த டின்",
      colorAccent: "#A66E1E",
    },
    {
      id: "coconut-oil",
      tag: "SULPHUR-FREE COPRA • PURE & COLD-PRESSED",
      tagTa: "கந்தகம் அற்ற இயற்கை கொப்பரை • தூய தேங்காய் எண்ணெய்",
      title: "Pure Copra Coconut Oil & Cow Ghee",
      titleTa: "மரச்செக்கு தேங்காய் எண்ணெய் & தூய பசு நெய்",
      subtitle: "Unadulterated Nutrition For Your Family",
      subtitleTa: "உங்கள் குடும்பத்தின் ஆரோக்கியத்திற்கான அசல் உணவுப் பொருட்கள்",
      desc: "Sun-dried copra pressed at low temperatures without synthetic bleaches, alongside slow-clarified granular cow ghee and chemical-free jaggery powder.",
      descTa: "இயற்கையாக வெயிலில் உலர்த்தப்பட்ட கொப்பரையில் இருந்து எடுக்கப்படும் தேங்காய் எண்ணெய், மணல் மணலான தூய பசு நெய் மற்றும் இயற்கை நாட்டு சர்க்கரை.",
      highlightProduct: "Chekku Coconut Oil & Cow Ghee",
      highlightProductTa: "தேங்காய் எண்ணெய் & பசு நெய்",
      packagingText: "Half Litre to 16 Litre Wholesale Tins",
      packagingTextTa: "அரை லிட்டர் முதல் 16 லிட்டர் டின் வரை",
      colorAccent: "#8A6518",
    },
  ];

  const current = heroSlides[activeSlide];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      style={{
        position: "relative",
        backgroundColor: "#FAF7F2",
        paddingTop: "48px",
        paddingBottom: "64px",
        overflowX: "hidden",
        width: "100%",
        borderBottom: "1px solid #EFECE6",
      }}
    >
      <div className="site-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "36px",
            alignItems: "center",
          }}
          className="hero-grid-layout"
        >
          {/* Main Hero Container: Left Content, Center Visual, Right Card */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.15fr 1.35fr 0.7fr",
              gap: "32px",
              alignItems: "center",
            }}
            className="hero-inner-grid"
          >
            {/* LEFT COLUMN: Editorial Typography & Actions (Luxora layout) */}
            <div style={{ display: "flex", flexDirection: "column", zIndex: 2 }}>
              {/* Kicker tag */}
              <div style={{ marginBottom: "14px" }}>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    color: "#9E6F1B",
                    textTransform: "uppercase",
                    display: "inline-block",
                  }}
                >
                  {language === "ta" ? current.tagTa : current.tag}
                </span>
              </div>

              {/* Big Serif Heading */}
              <h1
                className="font-serif"
                style={{
                  fontSize: "clamp(34px, 4.4vw, 54px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "#141612",
                  fontWeight: 600,
                  marginBottom: "14px",
                }}
              >
                {language === "ta" ? current.titleTa : current.title}
              </h1>

              {/* Subheading */}
              <p
                style={{
                  fontSize: "clamp(15px, 1.8vw, 19px)",
                  fontWeight: 500,
                  color: "#7A5310",
                  lineHeight: 1.35,
                  marginBottom: "14px",
                  fontStyle: "italic",
                }}
              >
                {language === "ta" ? current.subtitleTa : current.subtitle}
              </p>

              {/* Description narrative */}
              <p
                style={{
                  fontSize: "13.5px",
                  lineHeight: 1.65,
                  color: "#555750",
                  marginBottom: "26px",
                  maxWidth: "480px",
                }}
              >
                {language === "ta" ? current.descTa : current.desc}
              </p>

              {/* Dual Action Buttons (Luxora Style) */}
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  flexWrap: "wrap",
                  marginBottom: "36px",
                }}
              >
                <a
                  href="#products"
                  className="btn-primary"
                  style={{
                    padding: "13px 26px",
                    fontSize: "12px",
                    letterSpacing: "0.08em",
                  }}
                >
                  {language === "ta" ? "பொருட்கள் வாங்க" : "SHOP NOW"}
                </a>

                <button
                  onClick={() => onOpenEnquiry(current.highlightProduct)}
                  className="btn-secondary"
                  style={{
                    padding: "12px 24px",
                    fontSize: "12px",
                    letterSpacing: "0.08em",
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  {language === "ta" ? "மொத்த விநியோகம்" : "EXPLORE WHOLESALE"}
                </button>
              </div>

              {/* Carousel Pagination Indicator: ← → 01 / 03 (Luxora Style) */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ display: "flex", gap: "6px" }}>
                  <button
                    onClick={handlePrev}
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #E2DED5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      color: "#141612",
                      transition: "all 0.2s",
                    }}
                    title="Previous Slide"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    onClick={handleNext}
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #E2DED5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      color: "#141612",
                      transition: "all 0.2s",
                    }}
                    title="Next Slide"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                <span
                  style={{
                    fontSize: "12.5px",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    color: "#555750",
                  }}
                >
                  0{activeSlide + 1} <span style={{ color: "#B8B5AC" }}>/</span> 0{heroSlides.length}
                </span>

                <span
                  style={{
                    fontSize: "11px",
                    color: "#9E6F1B",
                    fontWeight: 500,
                    padding: "3px 8px",
                    backgroundColor: "rgba(158, 111, 27, 0.08)",
                    borderRadius: "4px",
                  }}
                >
                  {current.highlightProduct}
                </span>
              </div>
            </div>

            {/* CENTER COLUMN: Luxury Editorial Product Showcase */}
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "440px",
              }}
            >
              {/* Soft Radial Ambient Glow */}
              <div
                style={{
                  position: "absolute",
                  width: "380px",
                  height: "380px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(232, 201, 142, 0.35) 0%, rgba(250, 247, 242, 0) 70%)",
                  filter: "blur(20px)",
                  zIndex: 0,
                }}
              />

              {/* Artistic SVG Composition of Oil Bottle, 16L Tin, Seeds & Wooden Chekku */}
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  maxWidth: "460px",
                  height: "420px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  viewBox="0 0 460 420"
                  width="100%"
                  height="100%"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ overflow: "visible" }}
                >
                  <defs>
                    <linearGradient id="bottleAmber" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#DF9F28" />
                      <stop offset="50%" stopColor="#C48214" />
                      <stop offset="100%" stopColor="#825308" />
                    </linearGradient>
                    <linearGradient id="tinSilver" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F5F5F3" />
                      <stop offset="35%" stopColor="#D9D7D2" />
                      <stop offset="70%" stopColor="#BAB7AF" />
                      <stop offset="100%" stopColor="#969288" />
                    </linearGradient>
                    <linearGradient id="woodChekku" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#5E4024" />
                      <stop offset="100%" stopColor="#2B1A0C" />
                    </linearGradient>
                    <filter id="softDropShadow" x="-10%" y="-10%" width="130%" height="130%">
                      <feDropShadow dx="0" dy="18" stdDeviation="16" floodColor="#2A1B0B" floodOpacity="0.16" />
                    </filter>
                  </defs>

                  {/* Surface Shadow Ellipse */}
                  <ellipse cx="230" cy="385" rx="190" ry="22" fill="#201C17" fillOpacity="0.08" />
                  <ellipse cx="230" cy="385" rx="130" ry="14" fill="#201C17" fillOpacity="0.12" />

                  {/* 15kg / 16 Litre Commercial Tin (Left side of composition) */}
                  <g filter="url(#softDropShadow)">
                    {/* Main Tin Body */}
                    <rect x="75" y="160" width="130" height="210" rx="14" fill="url(#tinSilver)" stroke="#A8A59C" strokeWidth="1.5" />
                    {/* Tin Ribs */}
                    <line x1="75" y1="210" x2="205" y2="210" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.8" />
                    <line x1="75" y1="211" x2="205" y2="211" stroke="#8A877E" strokeWidth="1.2" strokeOpacity="0.6" />
                    <line x1="75" y1="310" x2="205" y2="310" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.8" />
                    <line x1="75" y1="311" x2="205" y2="311" stroke="#8A877E" strokeWidth="1.2" strokeOpacity="0.6" />
                    {/* Tin Handle */}
                    <path d="M110 160 C110 135, 170 135, 170 160" stroke="#7A7870" strokeWidth="6" strokeLinecap="round" fill="none" />
                    {/* Tin Cap */}
                    <rect x="160" y="148" width="30" height="14" rx="4" fill="#DF9F28" stroke="#A66E1E" strokeWidth="1" />
                    {/* Tin Brand Badge */}
                    <rect x="90" y="230" width="100" height="65" rx="6" fill="#FFFFFF" />
                    <rect x="92" y="232" width="96" height="61" rx="4" fill="none" stroke="#C48214" strokeWidth="1" />
                    <text x="140" y="249" textAnchor="middle" fill="#141612" fontSize="9" fontWeight="800" fontFamily="serif" letterSpacing="1">VS ORGANIC</text>
                    <text x="140" y="260" textAnchor="middle" fill="#9E6F1B" fontSize="6.5" fontWeight="700" letterSpacing="0.5">COMMERCIAL TIN</text>
                    <text x="140" y="274" textAnchor="middle" fill="#141612" fontSize="13" fontWeight="900">15 kg / 16 L</text>
                    <text x="140" y="284" textAnchor="middle" fill="#757268" fontSize="6" fontWeight="600">WHOLESALE DIRECT</text>
                  </g>

                  {/* 1 Litre Premium Glass / Food Grade Bottle (Center & Right) */}
                  <g filter="url(#softDropShadow)">
                    {/* Bottle Neck & Cap */}
                    <rect x="252" y="65" width="36" height="30" rx="4" fill="#181915" />
                    <line x1="252" y1="75" x2="288" y2="75" stroke="#9E6F1B" strokeWidth="1" />
                    <rect x="257" y="95" width="26" height="35" rx="2" fill="url(#bottleAmber)" />
                    {/* Bottle Shoulder */}
                    <path d="M257 130 C240 150, 225 170, 225 195 L225 365 C225 374, 232 380, 242 380 L298 380 C308 380, 315 374, 315 365 L315 195 C315 170, 300 150, 283 130 Z" fill="url(#bottleAmber)" stroke="#9E6F1B" strokeWidth="1" />
                    {/* Glass Specular Highlights */}
                    <path d="M233 195 L233 365" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeOpacity="0.45" />
                    <path d="M241 195 L241 365" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
                    {/* Bottle Label */}
                    <rect x="235" y="215" width="70" height="110" rx="4" fill="#FAF8F5" stroke="#E6E0D2" strokeWidth="1" />
                    <text x="270" y="235" textAnchor="middle" fill="#141612" fontSize="7.5" fontWeight="800" fontFamily="serif" letterSpacing="0.8">VS ORGANIC</text>
                    <line x1="245" y1="240" x2="295" y2="240" stroke="#9E6F1B" strokeWidth="0.8" />
                    <text x="270" y="252" textAnchor="middle" fill="#9E6F1B" fontSize="7" fontWeight="700">MARACHEKKU</text>
                    <text x="270" y="268" textAnchor="middle" fill="#141612" fontSize="10.5" fontWeight="800" fontFamily="serif">COLD</text>
                    <text x="270" y="280" textAnchor="middle" fill="#141612" fontSize="10.5" fontWeight="800" fontFamily="serif">PRESSED</text>
                    <rect x="245" y="292" width="50" height="16" rx="8" fill="#141612" />
                    <text x="270" y="303" textAnchor="middle" fill="#FFFFFF" fontSize="7.5" fontWeight="700">1 LITRE</text>
                    <text x="270" y="318" textAnchor="middle" fill="#757268" fontSize="5.5" fontWeight="600">ESTD 2018</text>
                  </g>

                  {/* Traditional Ceramic Tasting Bowl with Golden Oil (Front Right) */}
                  <g filter="url(#softDropShadow)">
                    <ellipse cx="340" cy="360" rx="42" ry="18" fill="#ECE8DF" stroke="#D1CCC0" strokeWidth="1.5" />
                    <ellipse cx="340" cy="358" rx="35" ry="13" fill="#DF9F28" stroke="#B88528" strokeWidth="1" />
                    <ellipse cx="345" cy="356" rx="10" ry="3.5" fill="#FFFFFF" fillOpacity="0.6" />
                  </g>

                  {/* Scattered Organic Pods / Seeds (Peanuts, Sesame) */}
                  <g>
                    {/* Groundnut Pod 1 */}
                    <path d="M310 380 Q320 372 328 376 Q336 380 340 376" stroke="#C49B66" strokeWidth="6" strokeLinecap="round" />
                    {/* Groundnut Pod 2 */}
                    <path d="M190 385 Q200 378 208 382" stroke="#C49B66" strokeWidth="5.5" strokeLinecap="round" />
                    {/* Golden droplets */}
                    <circle cx="288" cy="180" r="3" fill="#DF9F28" />
                    <circle cx="295" cy="190" r="2" fill="#DF9F28" />
                  </g>
                </svg>
              </div>
            </div>

            {/* RIGHT COLUMN: Floating Est. 2018 / 10 Branches Badge Card (Luxora layout copy) */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                justifyContent: "center",
              }}
              className="hero-right-card-col"
            >
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "16px",
                  padding: "24px 20px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                  border: "1px solid #ECE7DD",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <span style={{ fontSize: "16px" }}>🏛️</span>
                  <span
                    style={{
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "#9E6F1B",
                      fontWeight: 700,
                    }}
                  >
                    ESTD. 2018
                  </span>
                </div>

                <div
                  className="font-serif"
                  style={{
                    fontSize: "36px",
                    fontWeight: 700,
                    color: "#141612",
                    lineHeight: 1.05,
                    marginBottom: "8px",
                  }}
                >
                  10
                </div>

                <div
                  style={{
                    fontSize: "13.5px",
                    fontWeight: 600,
                    color: "#141612",
                    marginBottom: "6px",
                  }}
                >
                  {language === "ta" ? "கிளைகள் நெட்வொர்க்" : "Branches Network"}
                </div>

                <p
                  style={{
                    fontSize: "12px",
                    color: "#6B6E66",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {language === "ta"
                    ? "பெங்களூரு மற்றும் பிற மாநிலங்களில் நேரடி மில் விநியோகம். இடைத்தரகர் கமிஷன் இல்லை."
                    : "Expanding across Bengaluru and South India. Direct mill supply with transparent pricing."}
                </p>

                <div
                  style={{
                    marginTop: "16px",
                    paddingTop: "14px",
                    borderTop: "1px solid #F0ECE4",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11.5px", color: "#141612" }}>
                    <span style={{ color: "#25D366" }}>✓</span>
                    <span>{language === "ta" ? "தரமான மரச்செக்கு" : "100% Wood-Pressed"}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11.5px", color: "#141612" }}>
                    <span style={{ color: "#25D366" }}>✓</span>
                    <span>{language === "ta" ? "பாட்டில் & டின் இருப்பு" : "Bottle & Tin Available"}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11.5px", color: "#141612" }}>
                    <span style={{ color: "#25D366" }}>✓</span>
                    <span>{language === "ta" ? "நேரடி நியாய விலை" : "Zero Intermediaries"}</span>
                  </div>
                </div>
              </div>

              {/* Direct Call / Contact Quick Card */}
              <div
                style={{
                  backgroundColor: "#FAF4E8",
                  borderRadius: "14px",
                  padding: "16px 18px",
                  border: "1px solid #E8DECC",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    backgroundColor: "#9E6F1B",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: "10.5px", textTransform: "uppercase", color: "#7A5310", fontWeight: 700 }}>
                    {language === "ta" ? "நேரடி முன்பதிவு" : "Direct Mill Order"}
                  </div>
                  <a
                    href="tel:9150766377"
                    style={{ fontSize: "13.5px", fontWeight: 700, color: "#141612", textDecoration: "none" }}
                  >
                    9150766377
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .hero-inner-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .hero-right-card-col {
            grid-column: span 2;
            flex-direction: row !important;
          }
        }
        @media (max-width: 768px) {
          .hero-inner-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-right-card-col {
            grid-column: span 1;
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  );
}
