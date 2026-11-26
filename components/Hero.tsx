"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";

interface HeroProps {
  onOpenEnquiry: (defaultProduct?: string) => void;
}

export default function Hero({ onOpenEnquiry }: HeroProps) {
  const { language } = useLanguage();
  const { addItem } = useCart();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 45) {
      handleNext();
    } else if (distance < -45) {
      handlePrev();
    }
  };

  const heroSlides = [
    {
      id: "groundnut-oil",
      tag: "NEW HARVEST 2026 • DIRECT MILL SUPPLY",
      tagTa: "புதிய அறுவடை 2026 • நேரடி ஆலை விநியோகம்",
      title: "Pure & Natural Chekku Oils",
      titleTa: "பாரம்பரிய மரச்செக்கு எண்ணெய்",
      subtitle: "Bringing Traditional Goodness to Every Home!",
      subtitleTa: "பாரம்பரிய நன்மையை ஒவ்வொரு இல்லத்திற்கும் கொண்டு சேர்க்கிறோம்!",
      desc: "Cold-pressed from hand-picked farm groundnuts in traditional Vaagai wooden chekkus below 45°C. Unrefined, unbleached, and naturally settled to retain natural golden amber glow, rich nutty aroma & vital nutrients.",
      descTa: "தேர்ந்தெடுக்கப்பட்ட நாட்டு நிலக்கடலையில் இருந்து பாரம்பரிய வாகை மரச்செக்கில் மிதமான வேகத்தில் பிழியப்பட்ட தூய மரச்செக்கு கடலை எண்ணெய். எவ்வித ரசாயனமும் அற்ற அசல் இயற்கை சத்துக்கள் நிறைந்தது.",
      highlightProduct: "Wood Pressed Groundnut Oil",
      highlightProductTa: "மரச்செக்கு கடலை எண்ணெய்",
      packagingText: "Available in 0.5L, 1L, 5L Bottles & 15kg / 16L Tins",
      packagingTextTa: "0.5லி, 1லி, 5லி பாட்டில்கள் மற்றும் 15கிலோ / 16லி டின் வடிவில் கிடைக்கும்",
      colorAccent: "#C48A27",
      image: "/images/products/groundnut-oil.jpg",
      natureBadge: "Native Groundnuts • Vagai Chekku",
      natureBadgeTa: "நாட்டு நிலக்கடலை • வாகை மரச்செக்கு",
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
      image: "/images/products/sesame-oil.jpg",
      natureBadge: "Black Sesame • Palm Jaggery",
      natureBadgeTa: "நாட்டு கருப்பு எள் • பனைவெல்லம்",
    },
    {
      id: "coconut-oil",
      tag: "SULPHUR-FREE COPRA • PURE & COLD-PRESSED",
      tagTa: "கந்தகம் அற்ற இயற்கை கொப்பரை • தூய தேங்காய் எண்ணெய்",
      title: "Pure Copra Coconut Oil",
      titleTa: "மரச்செக்கு தேங்காய் எண்ணெய்",
      subtitle: "Unadulterated Nutrition For Your Family",
      subtitleTa: "உங்கள் குடும்பத்தின் ஆரோக்கியத்திற்கான அசல் உணவுப் பொருட்கள்",
      desc: "Sun-dried sulphur-free copra pressed at low temperatures without synthetic bleaches. Naturally aromatic, rich in natural lauric acid and skin-loving medium chain fatty acids.",
      descTa: "இயற்கையாக வெயிலில் உலர்த்தப்பட்ட கந்தகமில்லா கொப்பரையில் இருந்து எடுக்கப்படும் தேங்காய் எண்ணெய். இயற்கை லாரிக் அமிலம் மற்றும் அசல் நறுமணம் நிறைந்தது.",
      highlightProduct: "Pure Copra Coconut Oil",
      highlightProductTa: "தேங்காய் எண்ணெய்",
      packagingText: "Half Litre to 16 Litre Wholesale Tins",
      packagingTextTa: "அரை லிட்டர் முதல் 16 லிட்டர் டின் வரை",
      colorAccent: "#8A6518",
      image: "/images/products/coconut-oil.jpg",
      natureBadge: "Sun-Dried Copra • Chemical-Free",
      natureBadgeTa: "கந்தகம் அற்ற கொப்பரை • இயற்கை",
    },
    {
      id: "pure-ghee",
      tag: "TRADITIONAL BOILED BUTTER • AROMATIC DANEDAR",
      tagTa: "பாரம்பரிய காய்ச்சிய வெண்ணெய் • மணல் மணலான நெய்",
      title: "Pure Desi Cow Ghee",
      titleTa: "சுத்தமான பசு நெய்",
      subtitle: "Golden Granular Aroma from Grass-Fed Cows",
      subtitleTa: "இயற்கையான புல் மேயும் பசுக்களின் பாலில் இருந்து எடுக்கப்பட்ட தூய நெய்",
      desc: "Clarified in small batches using traditional slow-heating methods. Golden granular texture, rich butter aroma, zero artificial coloring or synthetic essence.",
      descTa: "பாரம்பரிய முறையில் சிறு பாத்திரங்களில் காய்ச்சப்பட்ட மணல் மணலான தூய பசு நெய். எவ்வித ரசாயன நிறமூட்டிகள் இல்லாத அசல் சுவை.",
      highlightProduct: "Pure Desi Cow Ghee",
      highlightProductTa: "தூய பசும் நெய்",
      packagingText: "250ml, 500ml, 1L Glass Jars & Bulk Tins",
      packagingTextTa: "250மி.லி, 500மி.லி, 1லி கண்ணாடி பாட்டில் மற்றும் டின்",
      colorAccent: "#B88528",
      image: "/images/products/pure-ghee.jpg",
      natureBadge: "Grass-Fed Cow Butter • Danedar",
      natureBadgeTa: "தூய பசுவின் வெண்ணெய் • மணல் பதம்",
    },
  ];

  const current = heroSlides[activeSlide];

  // Auto-play timer for moving product slide - moves automatically every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const renderFormattedText = (text: string) => {
    if (!text.includes("&")) return text;
    const parts = text.split("&");
    return (
      <>
        {parts.map((part, idx) => (
          <React.Fragment key={idx}>
            {part}
            {idx < parts.length - 1 && (
              <span className="standard-ampersand">
                &
              </span>
            )}
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <section
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        position: "relative",
        backgroundColor: "#FAF7F2",
        paddingTop: "48px",
        paddingBottom: "64px",
        overflowX: "hidden",
        width: "100%",
        borderBottom: "1px solid #EFECE6",
      }}
      className="hero-section-root"
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
            {/* LEFT COLUMN: Editorial Typography & Actions */}
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
                {language === "ta" ? current.titleTa : renderFormattedText(current.title)}
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

              {/* Description narrative (Zero history, 100% product focus) */}
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

              {/* Dual Action Buttons */}
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

              {/* Carousel Pagination Indicator: ← → 01 / 04 */}
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
                    fontWeight: 600,
                    padding: "3px 8px",
                    backgroundColor: "rgba(158, 111, 27, 0.08)",
                    borderRadius: "4px",
                  }}
                >
                  {language === "ta" ? current.highlightProductTa : current.highlightProduct}
                </span>
              </div>
            </div>

            {/* CENTER COLUMN: Moving Slide of Real VS Organic Bottle & Nature Products */}
            <div
              className="hero-center-col"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "440px",
                width: "100%",
              }}
            >
              {/* Soft Radial Ambient Glow */}
              <div
                className="hero-ambient-glow"
                style={{
                  position: "absolute",
                  width: "380px",
                  height: "380px",
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${current.colorAccent}35 0%, rgba(250, 247, 242, 0) 70%)`,
                  filter: "blur(30px)",
                  zIndex: 0,
                  transition: "background 0.5s ease",
                }}
              />

              {/* Main Moving Product Bottle Card */}
              <div
                className="hero-bottle-card"
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  maxWidth: "410px",
                  height: "390px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "24px",
                  border: "1px solid #ECE7DD",
                  boxShadow: "0 18px 45px rgba(20, 22, 18, 0.07)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.4s ease",
                }}
              >
                {/* Top Floating Purity Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    zIndex: 3,
                    backgroundColor: "rgba(255, 255, 255, 0.94)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "20px",
                    padding: "4px 12px",
                    border: "1px solid #ECE7DD",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  }}
                >
                  <span style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#166534" }} />
                  <span style={{ fontSize: "10.5px", fontWeight: 700, color: "#166534", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    {language === "ta" ? current.natureBadgeTa : current.natureBadge}
                  </span>
                </div>

                {/* Packaging Pill Tag */}
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    right: "14px",
                    zIndex: 3,
                    backgroundColor: "rgba(20, 22, 18, 0.85)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "20px",
                    padding: "4px 11px",
                    color: "#FFFFFF",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                  }}
                >
                  {current.packagingText.split("&")[0].trim()}
                </div>

                {/* Real Product Bottle & Nature Ingredients Image Slider */}
                <div
                  style={{
                    flex: 1,
                    position: "relative",
                    overflow: "hidden",
                    backgroundColor: "#FAF7F2",
                  }}
                >
                  {/* Horizontal Sliding Track that moves automatically */}
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      height: "100%",
                      transform: `translateX(-${activeSlide * 100}%)`,
                      transition: "transform 0.65s cubic-bezier(0.25, 1, 0.5, 1)",
                    }}
                  >
                    {heroSlides.map((slide) => (
                      <div
                        key={slide.id}
                        style={{
                          minWidth: "100%",
                          width: "100%",
                          height: "100%",
                          position: "relative",
                          flexShrink: 0,
                        }}
                      >
                        <img
                          src={slide.image}
                          alt={slide.highlightProduct}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />

                        {/* Gradient Scrim for Legibility */}
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(to top, rgba(20, 22, 18, 0.7) 0%, rgba(20, 22, 18, 0) 50%)",
                            pointerEvents: "none",
                          }}
                        />

                        {/* Overlaid Title on Image */}
                        <div
                          style={{
                            position: "absolute",
                            bottom: "16px",
                            left: "18px",
                            right: "18px",
                            color: "#FFFFFF",
                            zIndex: 2,
                          }}
                        >
                          <div
                            style={{
                              fontSize: "10px",
                              fontWeight: 700,
                              letterSpacing: "0.14em",
                              color: "#E8C170",
                              textTransform: "uppercase",
                              marginBottom: "4px",
                            }}
                          >
                            {language === "ta" ? "அசல் மரச்செக்கு பாட்டில்" : "AUTHENTIC WOOD-PRESSED BOTTLE"}
                          </div>
                          <div
                            className="font-serif"
                            style={{
                              fontSize: "20px",
                              fontWeight: 700,
                              lineHeight: 1.2,
                              textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                            }}
                          >
                            {language === "ta" ? slide.highlightProductTa : slide.highlightProduct}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action & Quality Bar */}
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    padding: "12px 18px",
                    borderTop: "1px solid #F0ECE4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "8px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ color: "#166534", fontSize: "12px" }}>✓</span>
                    <span style={{ fontSize: "11.5px", color: "#555750", fontWeight: 600 }}>
                      {language === "ta" ? "ஜீரோ ரசாயனங்கள் • நேரடி ஆலை" : "Unrefined & Zero Chemicals"}
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenEnquiry(current.highlightProduct)}
                    style={{
                      border: "none",
                      backgroundColor: "#FAF4E8",
                      color: "#9E6F1B",
                      fontSize: "11px",
                      fontWeight: 700,
                      cursor: "pointer",
                      padding: "5px 12px",
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      transition: "all 0.2s",
                    }}
                  >
                    <span>{language === "ta" ? "விசாரணை" : "Enquire"}</span>
                    <span>→</span>
                  </button>
                </div>
              </div>

              {/* Thumbnail Moving Slide Selectors (Mini Bottle Pics) */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  marginTop: "16px",
                  zIndex: 2,
                  flexWrap: "wrap",
                }}
              >
                {heroSlides.map((slide, idx) => {
                  const isActive = idx === activeSlide;
                  return (
                    <button
                      key={slide.id}
                      onClick={() => setActiveSlide(idx)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "4px 9px 4px 5px",
                        borderRadius: "20px",
                        border: isActive ? "1.5px solid #9E6F1B" : "1px solid #E5E0D5",
                        backgroundColor: isActive ? "#FFFFFF" : "rgba(255, 255, 255, 0.75)",
                        cursor: "pointer",
                        boxShadow: isActive ? "0 4px 12px rgba(158, 111, 27, 0.2)" : "none",
                        transform: isActive ? "scale(1.05)" : "scale(1)",
                        transition: "all 0.2s ease",
                      }}
                      title={slide.highlightProduct}
                    >
                      <img
                        src={slide.image}
                        alt=""
                        style={{
                          width: "22px",
                          height: "22px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: isActive ? 700 : 500,
                          color: isActive ? "#141612" : "#7A7870",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {slide.id === "groundnut-oil"
                          ? language === "ta" ? "கடலை" : "Groundnut"
                          : slide.id === "sesame-oil"
                          ? language === "ta" ? "நல்லெண்ணெய்" : "Sesame"
                          : slide.id === "coconut-oil"
                          ? language === "ta" ? "தேங்காய்" : "Coconut"
                          : language === "ta" ? "பசு நெய்" : "Desi Ghee"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* RIGHT COLUMN: 10 Regional Branches & Direct Supply Card */}
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
                  <span style={{ fontSize: "16px" }}>🌿</span>
                  <span
                    style={{
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "#166534",
                      fontWeight: 700,
                    }}
                  >
                    {language === "ta" ? "100% அசல் மரச்செக்கு" : "100% PURE & NATURAL"}
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
                    : "Direct mill supply from regional processing hubs across Bengaluru & South India."}
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
          .hero-section-root {
            padding-top: 32px !important;
            padding-bottom: 40px !important;
          }
          .hero-inner-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .hero-center-col {
            min-height: 280px !important;
          }
          .hero-bottle-card {
            height: 320px !important;
            max-width: 320px !important;
          }
          .hero-ambient-glow {
            width: 260px !important;
            height: 260px !important;
          }
          .hero-right-card-col {
            grid-column: span 1;
            flex-direction: column !important;
          }
        }
        @media (max-width: 480px) {
          .hero-section-root {
            padding-top: 24px !important;
            padding-bottom: 32px !important;
          }
          .hero-center-col {
            min-height: 260px !important;
          }
          .hero-bottle-card {
            height: 280px !important;
            max-width: 280px !important;
            border-radius: 18px !important;
          }
          .hero-ambient-glow {
            width: 220px !important;
            height: 220px !important;
          }
        }
      `}</style>
    </section>
  );
}