"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Phone,
  ShoppingBag,
  ShieldCheck,
  Building2,
  PackageCheck,
  Check,
} from "lucide-react";

interface HeroProps {
  onOpenEnquiry: (defaultProduct?: string) => void;
}

export default function Hero({ onOpenEnquiry }: HeroProps) {
  const { language } = useLanguage();
  const isTa = language === "ta";

  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const heroSlides = [
    {
      id: "groundnut-oil",
      tagEn: "100% PURE & UNREFINED • DIRECT MILL SUPPLY",
      tagTa: "100% தூய மரச்செக்கு • நேரடி ஆலை விநியோகம்",
      titleEn: "Pure & Natural Chekku Groundnut Oil",
      titleTa: "பாரம்பரிய மரச்செக்கு கடலை எண்ணெய்",
      subtitleEn: "Cold-Pressed in Vaagai Wooden Chekkus Below 45°C",
      subtitleTa: "அசல் வாகை மரச்செக்கில் மிதமான வேகத்தில் பிழியப்பட்டது",
      descEn:
        "Cold-pressed from hand-picked farm groundnuts in traditional wooden chekkus. Unrefined, unbleached, and naturally sun-settled. Retains rich nutty aroma, vital antioxidants, natural golden amber glow & heart-healthy nutrients.",
      descTa:
        "தேர்ந்தெடுக்கப்பட்ட நாட்டு நிலக்கடலையில் இருந்து பாரம்பரிய வாகை மரச்செக்கில் பிழியப்பட்ட தூய மரச்செக்கு கடலை எண்ணெய். ரசாயனங்கள் அற்ற அசல் இயற்கை சத்துக்கள் & மணல் நிற இயற்கை பளபளப்பு.",
      productNameEn: "Wood Pressed Groundnut Oil",
      productNameTa: "மரச்செக்கு கடலை எண்ணெய்",
      shortLabelEn: "Groundnut Oil",
      shortLabelTa: "கடலை எண்ணெய்",
      price: "₹220 / L",
      packagingEn: "Available in 0.5L, 1L, 5L Bottles & 15kg / 16L Wholesale Tins",
      packagingTa: "0.5லி, 1லி, 5லி பாட்டில்கள் & 15கிலோ / 16லி மொத்த டின் இருப்பு",
      natureBadgeEn: "Native Groundnuts • Vagai Chekku",
      natureBadgeTa: "நாட்டு நிலக்கடலை • வாகை மரச்செக்கு",
      colorAccent: "#C48A27",
      bgTint: "#FAF5EA",
      image: "/images/products/groundnut-oil.jpg",
    },
    {
      id: "sesame-oil",
      tagEn: "AUTHENTIC GINGELLY • SLOW WOOD-PRESSED",
      tagTa: "பாரம்பரிய நல்லெண்ணெய் • பனைவெல்லம் சேர்த்து பிழிந்தது",
      titleEn: "Traditional Sesame Chekku Oil",
      titleTa: "சுத்தமான மரச்செக்கு நல்லெண்ணெய்",
      subtitleEn: "Slow-Crushed with Traditional Palm Karupatti",
      subtitleTa: "அசல் பனைவெல்லம் சேர்த்து வாகை மரச்செக்கில் பிழிந்தது",
      descEn:
        "Native black sesame seeds slowly crushed with unrefined palm karupatti. Retains traditional South Indian culinary aroma, natural sesamol antioxidants, vital zinc & wholesome immunity-boosting minerals.",
      descTa:
        "நாட்டு கருப்பு எள்ளுடன் தூய பனைவெல்லம் சேர்த்து மிதமான வேகத்தில் பிழியப்பட்ட பாரம்பரிய மரச்செக்கு நல்லெண்ணெய். ரசாயனங்கள் அற்ற இயற்கை நறுமணம் & உடல் வலிமை தரும் தாதுக்கள்.",
      productNameEn: "Pure Chekku Sesame Oil",
      productNameTa: "மரச்செக்கு நல்லெண்ணெய்",
      shortLabelEn: "Sesame Oil",
      shortLabelTa: "நல்லெண்ணெய்",
      price: "₹380 / L",
      packagingEn: "Available in 0.5L, 1L Bottles & 15kg Commercial Tins",
      packagingTa: "0.5லி, 1லி பாட்டில்கள் & 15கிலோ வணிக டின் வடிவில் கிடைக்கும்",
      natureBadgeEn: "Black Sesame • Palm Karupatti",
      natureBadgeTa: "நாட்டு கருப்பு எள் • பனைவெல்லம்",
      colorAccent: "#A66E1E",
      bgTint: "#FAF3E8",
      image: "/images/products/sesame-oil.jpg",
    },
    {
      id: "coconut-oil",
      tagEn: "SULPHUR-FREE COPRA • 100% PURE & RAW",
      tagTa: "கந்தகம் அற்ற கொப்பரை • தூய தேங்காய் எண்ணெய்",
      titleEn: "Pure Copra Coconut Chekku Oil",
      titleTa: "மரச்செக்கு தேங்காய் எண்ணெய்",
      subtitleEn: "Sun-Dried Natural Copra with Zero Bleach or Chemicals",
      subtitleTa: "இயற்கை வெயிலில் உலர்த்திய கந்தகமில்லா கொப்பரை",
      descEn:
        "Prepared exclusively from sun-dried sulphur-free coconut copra pressed below 45°C. Rich in natural lauric acid and pure medium-chain fatty acids. Perfect for healthy cooking, hair nourishment & glowing skin.",
      descTa:
        "இயற்கையாக வெயிலில் உலர்த்தப்பட்ட கந்தகமில்லா கொப்பரையில் இருந்து எடுக்கப்படும் தேங்காய் எண்ணெய். இயற்கை லாரிக் அமிலம் மற்றும் அசல் புதிய தேங்காய் நறுமணம் நிறைந்தது.",
      productNameEn: "Pure Copra Coconut Oil",
      productNameTa: "தேங்காய் எண்ணெய்",
      shortLabelEn: "Coconut Oil",
      shortLabelTa: "தேங்காய் எண்ணெய்",
      price: "₹260 / L",
      packagingEn: "Available in 0.5L, 1L Bottles & 16L Bulk Tins",
      packagingTa: "0.5லி, 1லி பாட்டில்கள் & 16லி மொத்த டின் இருப்பு",
      natureBadgeEn: "Sun-Dried Copra • Chemical-Free",
      natureBadgeTa: "கந்தகம் அற்ற கொப்பரை • இயற்கை",
      colorAccent: "#8A6518",
      bgTint: "#F7F8F4",
      image: "/images/products/coconut-oil.jpg",
    },
    {
      id: "pure-ghee",
      tagEn: "TRADITIONAL BILONA • GOLDEN GRANULAR AROMA",
      tagTa: "பாரம்பரிய பிலோனா • மணல் மணலான நெய்",
      titleEn: "Pure Desi Cow Ghee (Danedar)",
      titleTa: "சுத்தமான மணல் மணலான பசும் நெய்",
      subtitleEn: "Slow-Boiled Fresh Grass-Fed Cow Butter",
      subtitleTa: "இயற்கையான புல் மேயும் பசு வெண்ணெய் காய்ச்சியது",
      descEn:
        "Clarified in small artisanal batches using traditional slow-heating methods. Golden granular danedar texture, rich authentic village aroma, zero synthetic preservatives and zero artificial food coloring.",
      descTa:
        "பாரம்பரிய முறையில் சிறு பாத்திரங்களில் காய்ச்சப்பட்ட மணல் மணலான தூய பசு நெய். எவ்வித ரசாயன நிறமூட்டிகள் இல்லாத அசல் மணமும் அலாதி சுவையும்.",
      productNameEn: "Pure Desi Cow Ghee",
      productNameTa: "தூய பசும் நெய்",
      shortLabelEn: "Desi Cow Ghee",
      shortLabelTa: "பசும் நெய்",
      price: "₹650 / L",
      packagingEn: "Available in 250ml, 500ml, 1L Glass Jars & Bulk Tins",
      packagingTa: "250மி.லி, 500மி.லி, 1லி கண்ணாடி பாட்டில் & மொத்த டின்",
      natureBadgeEn: "Grass-Fed Cow Butter • Danedar",
      natureBadgeTa: "புல் மேயும் பசு வெண்ணெய் • மணல் பதம்",
      colorAccent: "#B88528",
      bgTint: "#FBF7EB",
      image: "/images/products/pure-ghee.jpg",
    },
    {
      id: "jaggery-powder",
      tagEn: "100% ORGANIC CANE • CHEMICAL-FREE SWEETENER",
      tagTa: "100% இயற்கை கரும்பு • ரசாயனமில்லா இனிப்பு",
      titleEn: "Organic Naattu Sakkarai Jaggery",
      titleTa: "இயற்கை நாட்டு சர்க்கரை",
      subtitleEn: "Natural Mineral-Rich Unrefined Cane Sugar",
      subtitleTa: "ரசாயனம் கலக்காத இயற்கை நாட்டு சர்க்கரை",
      descEn:
        "Traditional organic country sugar naturally evaporated from fresh unbleached sugarcane juice. Rich in organic iron, calcium, magnesium, and vital minerals for your family's daily tea, coffee, and cooking.",
      descTa:
        "தூய கரும்பு சாற்றை இயற்கை முறையில் காய்ச்சி தயாரிக்கப்பட்ட நாட்டு சர்க்கரை. அசல் இரும்புச்சத்து மற்றும் தாதுக்கள் நிறைந்தது. வெள்ளை சர்க்கரைக்கு சிறந்த மாற்று.",
      productNameEn: "Organic Jaggery Powder",
      productNameTa: "இயற்கை நாட்டு சர்க்கரை",
      shortLabelEn: "Jaggery Powder",
      shortLabelTa: "நாட்டு சர்க்கரை",
      price: "₹85 / kg",
      packagingEn: "Available in 0.5kg, 1kg, 5kg Packs & 25kg Wholesale Sacks",
      packagingTa: "0.5கிலோ, 1கிலோ, 5கிலோ பாக்கெட்டுகள் & 25கிலோ மூட்டை",
      natureBadgeEn: "100% Organic Cane • Natural",
      natureBadgeTa: "100% இயற்கை கரும்பு • அசல்",
      colorAccent: "#A06820",
      bgTint: "#FAF4E8",
      image: "/images/products/jaggery-powder.jpg",
    },
    {
      id: "traditional-jaggery",
      tagEn: "HANDCRAFTED CANE BLOCKS • TRADITIONAL SWEET",
      tagTa: "பாரம்பரிய கைவண்ணம் • அசல் அச்சு வெல்லம்",
      titleEn: "Traditional Achu Jaggery Blocks",
      titleTa: "பாரம்பரிய கரும்பு அச்சு வெல்லம்",
      subtitleEn: "Unrefined Golden-Brown Cane Blocks with Zero Chemicals",
      subtitleTa: "பாரம்பரிய முறையில் தயாரித்த தூய அச்சு வெல்லம்",
      descEn:
        "Solid unrefined traditional sugarcane jaggery blocks prepared by rural artisanal farmers without synthetic clarifying agents. Authentic natural sweetness for South Indian festive sweets and daily health.",
      descTa:
        "எவ்வித ரசாயன நிறமூட்டிகள் இல்லாத பாரம்பரிய அச்சு வெல்லம். பொங்கல், இனிப்புகள் மற்றும் பாரம்பரிய உணவுகளுக்கு ஏற்ற அசல் கிராமத்து சுவை.",
      productNameEn: "Traditional Achu Jaggery",
      productNameTa: "பாரம்பரிய அச்சு வெல்லம்",
      shortLabelEn: "Achu Jaggery",
      shortLabelTa: "அச்சு வெல்லம்",
      price: "₹90 / kg",
      packagingEn: "Available in 1kg, 5kg Boxes & 30kg Master Cartons",
      packagingTa: "1கிலோ, 5கிலோ பெட்டிகள் & 30கிலோ மொத்த பெட்டி",
      natureBadgeEn: "Solid Cane Blocks • Pure",
      natureBadgeTa: "தூய கரும்பு வெல்லம்",
      colorAccent: "#925619",
      bgTint: "#F8F3EA",
      image: "/images/products/traditional-jaggery.jpg",
    },
  ];

  const current = heroSlides[activeSlide];

  // Automatic slide advancement timer (every 3.6 seconds)
  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3600);
    return () => clearInterval(timer);
  }, [isAutoPlay, heroSlides.length]);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  // Touch swipe support for smartphone users
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

  const renderFormattedText = (text: string) => {
    if (!text.includes("&")) return text;
    const parts = text.split("&");
    return (
      <>
        {parts.map((part, idx) => (
          <React.Fragment key={idx}>
            {part}
            {idx < parts.length - 1 && <span className="standard-ampersand">&</span>}
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <section
      className="hero-slider-section-root"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
      style={{
        position: "relative",
        backgroundColor: current.bgTint || "#FAF7F2",
        transition: "background-color 0.6s ease",
        width: "100%",
        overflowX: "hidden",
        borderBottom: "1px solid #ECE7DD",
      }}
    >
      {/* Top Animated Progress Countdown Line */}
      <div
        style={{
          width: "100%",
          height: "3px",
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          key={activeSlide}
          style={{
            height: "100%",
            backgroundColor: current.colorAccent || "#9E6F1B",
            animation: isAutoPlay ? "heroSlideTimer 3.6s linear forwards" : "none",
            width: isAutoPlay ? "100%" : `${((activeSlide + 1) / heroSlides.length) * 100}%`,
            transition: isAutoPlay ? "none" : "width 0.3s ease",
          }}
        />
      </div>

      {/* FULL-VIEW SLIDE CONTAINER */}
      <div className="site-container" style={{ position: "relative", paddingBottom: "24px", paddingTop: "20px" }}>
        {/* VIEWPORT CROP FOR SMOOTH HORIZONTAL SLIDING */}
        <div
          style={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
            borderRadius: "28px",
          }}
        >
          {/* TRACK THAT TRANSLATES HORIZONTALLY */}
          <div
            className="hero-slide-track"
            style={{
              display: "flex",
              width: "100%",
              transform: `translateX(-${activeSlide * 100}%)`,
              transition: "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {heroSlides.map((slide, idx) => {
              const isCurrent = idx === activeSlide;
              return (
                <div
                  key={slide.id}
                  className="hero-single-full-slide"
                  style={{
                    minWidth: "100%",
                    width: "100%",
                    flexShrink: 0,
                    boxSizing: "border-box",
                  }}
                >
                  {/* FULL VIEW 2-COLUMN STAGE: Generous Text on Left, Massive Product Showcase on Right */}
                  <div
                    className="hero-stage-grid"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1.05fr 1.15fr",
                      gap: "36px",
                      alignItems: "center",
                      minHeight: "530px",
                      padding: "24px 8px 16px 8px",
                    }}
                  >
                    {/* LEFT COLUMN: Editorial Typography, Details, Pricing & Call-To-Action */}
                    <div
                      className="hero-left-editorial"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        zIndex: 3,
                        paddingRight: "12px",
                      }}
                    >
                      {/* Live Nature Kicker Badge */}
                      <div style={{ marginBottom: "12px" }}>
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "7px",
                            backgroundColor: "#FFFFFF",
                            padding: "5px 13px",
                            borderRadius: "20px",
                            border: "1px solid #E5DFD3",
                            fontSize: "11px",
                            fontWeight: 700,
                            letterSpacing: "0.1em",
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
                          {isTa ? slide.tagTa : slide.tagEn}
                        </span>
                      </div>

                      {/* Headline */}
                      <h1
                        className="font-serif hero-slide-title"
                        style={{
                          fontSize: "clamp(32px, 4.2vw, 52px)",
                          lineHeight: 1.1,
                          letterSpacing: "-0.025em",
                          color: "#141612",
                          fontWeight: 700,
                          marginBottom: "12px",
                        }}
                      >
                        {isTa ? slide.titleTa : renderFormattedText(slide.titleEn)}
                      </h1>

                      {/* Italic Subtitle */}
                      <p
                        className="hero-slide-subtitle"
                        style={{
                          fontSize: "clamp(15px, 1.8vw, 19px)",
                          fontWeight: 500,
                          color: "#7A5310",
                          lineHeight: 1.35,
                          marginBottom: "12px",
                          fontStyle: "italic",
                        }}
                      >
                        {isTa ? slide.subtitleTa : slide.subtitleEn}
                      </p>

                      {/* Nature & Purity Narrative */}
                      <p
                        className="hero-slide-desc"
                        style={{
                          fontSize: "14px",
                          lineHeight: 1.65,
                          color: "#555750",
                          marginBottom: "20px",
                          maxWidth: "520px",
                        }}
                      >
                        {isTa ? slide.descTa : slide.descEn}
                      </p>

                      {/* Price & Packaging Sizes Pill */}
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "12px",
                          backgroundColor: "#FFFFFF",
                          padding: "8px 16px",
                          borderRadius: "14px",
                          border: "1px solid #ECE6D8",
                          marginBottom: "24px",
                          flexWrap: "wrap",
                          boxShadow: "0 4px 14px rgba(20, 22, 18, 0.04)",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                          <span style={{ fontSize: "11px", color: "#84877E", textTransform: "uppercase", fontWeight: 700 }}>
                            {isTa ? "விலை:" : "Direct Price:"}
                          </span>
                          <span
                            className="font-serif"
                            style={{
                              fontSize: "22px",
                              fontWeight: 700,
                              color: "#141612",
                              lineHeight: 1,
                            }}
                          >
                            {slide.price}
                          </span>
                        </div>
                        <span style={{ color: "#D1CBBF" }}>|</span>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#555750", fontWeight: 600 }}>
                          <PackageCheck size={14} color="#166534" />
                          <span>{isTa ? slide.packagingTa : slide.packagingEn}</span>
                        </div>
                      </div>

                      {/* Action CTA Buttons */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          flexWrap: "wrap",
                          marginBottom: "20px",
                        }}
                      >
                        <a
                          href="#products"
                          className="btn-primary"
                          style={{
                            padding: "13px 28px",
                            fontSize: "12.5px",
                            letterSpacing: "0.08em",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            borderRadius: "10px",
                            boxShadow: "0 6px 18px rgba(20, 22, 18, 0.15)",
                          }}
                        >
                          <ShoppingBag size={15} />
                          <span>{isTa ? "பொருட்கள் வாங்க" : "SHOP NOW"}</span>
                        </a>

                        <button
                          onClick={() => onOpenEnquiry(slide.productNameEn)}
                          className="btn-secondary"
                          style={{
                            padding: "12px 24px",
                            fontSize: "12.5px",
                            letterSpacing: "0.08em",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "10px",
                            border: "1px solid #D5CEBE",
                            cursor: "pointer",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            transition: "all 0.2s",
                          }}
                        >
                          <span>{isTa ? "மொத்த விநியோகம் / விசாரணை" : "ENQUIRE WHOLESALE"}</span>
                          <span>→</span>
                        </button>

                        <a
                          href="tel:9150766377"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            padding: "12px 18px",
                            borderRadius: "10px",
                            backgroundColor: "rgba(158, 111, 27, 0.1)",
                            color: "#855812",
                            textDecoration: "none",
                            fontSize: "12.5px",
                            fontWeight: 700,
                            letterSpacing: "0.04em",
                          }}
                        >
                          <Phone size={14} />
                          <span>9150766377</span>
                        </a>
                      </div>

                      {/* Regional Network Trust Line */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          fontSize: "12px",
                          color: "#6B6E66",
                        }}
                      >
                        <Building2 size={14} color="#855812" />
                        <span style={{ fontWeight: 600 }}>
                          {isTa
                            ? "பெங்களூரு மற்றும் பிற பகுதிகளில் 10 கிளைகள் நெட்வொர்க் • நேரடி ஆலை சப்ளை"
                            : "10 Regional Branches Across Bengaluru & South India • Zero Intermediaries"}
                        </span>
                      </div>
                    </div>

                    {/* RIGHT COLUMN: MASSIVE FULL-VIEW BOTTLE / NATURE PRODUCT SHOWCASE */}
                    <div
                      className="hero-right-visual-stage"
                      style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: "480px",
                        width: "100%",
                      }}
                    >
                      {/* Ambient Golden Radial Glow behind bottle */}
                      <div
                        style={{
                          position: "absolute",
                          width: "90%",
                          height: "90%",
                          borderRadius: "50%",
                          background: `radial-gradient(circle, ${slide.colorAccent}35 0%, rgba(250, 247, 242, 0) 70%)`,
                          filter: "blur(40px)",
                          zIndex: 0,
                          pointerEvents: "none",
                        }}
                      />

                      {/* Big Hero Visual Frame */}
                      <div
                        className="hero-big-bottle-frame"
                        style={{
                          position: "relative",
                          zIndex: 1,
                          width: "100%",
                          height: "480px",
                          backgroundColor: "#FFFFFF",
                          borderRadius: "28px",
                          overflow: "hidden",
                          boxShadow: "0 20px 50px rgba(20, 22, 18, 0.1)",
                          border: "1.5px solid #EFEAE0",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        {/* Top Floating Badge on Image */}
                        <div
                          style={{
                            position: "absolute",
                            top: "16px",
                            left: "16px",
                            zIndex: 3,
                            backgroundColor: "rgba(255, 255, 255, 0.95)",
                            backdropFilter: "blur(8px)",
                            borderRadius: "20px",
                            padding: "6px 14px",
                            border: "1px solid #ECE7DD",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                          }}
                        >
                          <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#166534" }} />
                          <span
                            style={{
                              fontSize: "11px",
                              fontWeight: 700,
                              color: "#166534",
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                            }}
                          >
                            {isTa ? slide.natureBadgeTa : slide.natureBadgeEn}
                          </span>
                        </div>

                        {/* Top Right Packaging Pill */}
                        <div
                          style={{
                            position: "absolute",
                            top: "16px",
                            right: "16px",
                            zIndex: 3,
                            backgroundColor: "rgba(20, 22, 18, 0.88)",
                            backdropFilter: "blur(8px)",
                            borderRadius: "20px",
                            padding: "6px 14px",
                            color: "#FFFFFF",
                            fontSize: "11px",
                            fontWeight: 700,
                            letterSpacing: "0.05em",
                          }}
                        >
                          {slide.price}
                        </div>

                        {/* High-Resolution Full-View Bottle & Ingredients Image */}
                        <div
                          style={{
                            flex: 1,
                            position: "relative",
                            overflow: "hidden",
                            backgroundColor: "#FAF7F2",
                          }}
                        >
                          <img
                            src={slide.image}
                            alt={slide.productNameEn}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              transform: isCurrent ? "scale(1.03)" : "scale(1)",
                              transition: "transform 1.2s ease-out",
                            }}
                          />

                          {/* Gradient Vignette at Bottom of Image */}
                          <div
                            style={{
                              position: "absolute",
                              inset: 0,
                              background:
                                "linear-gradient(to top, rgba(20, 22, 18, 0.75) 0%, rgba(20, 22, 18, 0) 55%)",
                              pointerEvents: "none",
                            }}
                          />

                          {/* Title & Authentic Tag Overlaid on Image Bottom */}
                          <div
                            style={{
                              position: "absolute",
                              bottom: "16px",
                              left: "20px",
                              right: "20px",
                              color: "#FFFFFF",
                              zIndex: 2,
                            }}
                          >
                            <div
                              style={{
                                fontSize: "11px",
                                fontWeight: 700,
                                letterSpacing: "0.14em",
                                color: "#E8C170",
                                textTransform: "uppercase",
                                marginBottom: "4px",
                              }}
                            >
                              {isTa ? "அசல் தயாரிப்பு பாட்டில் & இயற்கை சத்து" : "AUTHENTIC BOTTLE & NATURE HARVEST"}
                            </div>
                            <div
                              className="font-serif"
                              style={{
                                fontSize: "22px",
                                fontWeight: 700,
                                lineHeight: 1.2,
                                textShadow: "0 2px 8px rgba(0,0,0,0.6)",
                              }}
                            >
                              {isTa ? slide.productNameTa : slide.productNameEn}
                            </div>
                          </div>
                        </div>

                        {/* Bottom Quality Ribbon on Bottle Frame */}
                        <div
                          style={{
                            backgroundColor: "#FFFFFF",
                            padding: "12px 20px",
                            borderTop: "1px solid #ECE7DD",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <Check size={15} color="#166534" strokeWidth={2.5} />
                            <span style={{ fontSize: "12px", color: "#555750", fontWeight: 600 }}>
                              {isTa ? "100% மரச்செக்கு • ரசாயனம் இல்லை" : "100% Wood-Pressed • Zero Chemicals"}
                            </span>
                          </div>

                          <button
                            onClick={() => onOpenEnquiry(slide.productNameEn)}
                            style={{
                              border: "none",
                              backgroundColor: "#FAF4E8",
                              color: "#855812",
                              fontSize: "11.5px",
                              fontWeight: 700,
                              cursor: "pointer",
                              padding: "6px 14px",
                              borderRadius: "16px",
                              display: "flex",
                              alignItems: "center",
                              gap: "4px",
                              transition: "all 0.2s",
                            }}
                          >
                            <span>{isTa ? "விசாரிக்க" : "Quick Quote"}</span>
                            <span>→</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* FLOATING LEFT & RIGHT SLIDE NAVIGATION ARROWS */}
          <button
            onClick={handlePrev}
            style={{
              position: "absolute",
              top: "50%",
              left: "14px",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.92)",
              backdropFilter: "blur(10px)",
              border: "1px solid #DCD6C8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#141612",
              boxShadow: "0 6px 18px rgba(0, 0, 0, 0.08)",
              transition: "all 0.2s ease",
            }}
            title="Previous Product Slide"
            aria-label="Previous Product Slide"
          >
            <ChevronLeft size={22} strokeWidth={2.4} />
          </button>

          <button
            onClick={handleNext}
            style={{
              position: "absolute",
              top: "50%",
              right: "14px",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.92)",
              backdropFilter: "blur(10px)",
              border: "1px solid #DCD6C8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#141612",
              boxShadow: "0 6px 18px rgba(0, 0, 0, 0.08)",
              transition: "all 0.2s ease",
            }}
            title="Next Product Slide"
            aria-label="Next Product Slide"
          >
            <ChevronRight size={22} strokeWidth={2.4} />
          </button>
        </div>

        {/* BOTTOM CONTROLS & 6 PRODUCT THUMBNAIL SELECTOR BAR */}
        <div
          className="hero-bottom-controls-bar"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "18px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          {/* Play/Pause & Counter Badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 12px",
                borderRadius: "20px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #DCD6C8",
                fontSize: "11.5px",
                fontWeight: 600,
                color: "#555750",
                cursor: "pointer",
              }}
              title={isAutoPlay ? "Pause Auto-Slide" : "Resume Auto-Slide"}
            >
              {isAutoPlay ? <Pause size={12} fill="currentColor" /> : <Play size={12} fill="currentColor" />}
              <span>{isAutoPlay ? (isTa ? "நிறுத்து" : "Pause") : (isTa ? "இயக்கு" : "Auto Slide")}</span>
            </button>

            <span
              style={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "#7A5310",
                backgroundColor: "rgba(158, 111, 27, 0.08)",
                padding: "4px 10px",
                borderRadius: "14px",
              }}
            >
              0{activeSlide + 1} / 0{heroSlides.length}
            </span>
          </div>

          {/* 6 Interactive Product Mini-Bottle Selectors */}
          <div
            className="hero-thumbnail-pills-row"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
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
                    padding: "5px 12px 5px 6px",
                    borderRadius: "24px",
                    border: isActive ? `1.8px solid ${slide.colorAccent}` : "1px solid #E2DDD2",
                    backgroundColor: isActive ? "#FFFFFF" : "rgba(255, 255, 255, 0.75)",
                    cursor: "pointer",
                    boxShadow: isActive ? "0 4px 14px rgba(158, 111, 27, 0.22)" : "none",
                    transform: isActive ? "scale(1.04)" : "scale(1)",
                    transition: "all 0.2s ease",
                  }}
                  title={slide.productNameEn}
                >
                  <img
                    src={slide.image}
                    alt=""
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "11.5px",
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "#141612" : "#6B6E66",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {isTa ? slide.shortLabelTa : slide.shortLabelEn}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4-POINT MILL PURITY & SUPPLY TRUST STRIP */}
        <div
          className="hero-trust-strip"
          style={{
            marginTop: "20px",
            padding: "16px 20px",
            backgroundColor: "#FFFFFF",
            borderRadius: "18px",
            border: "1px solid #ECE7DD",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.03)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "18px" }}>🌿</span>
            <div>
              <div style={{ fontSize: "11px", fontWeight: 700, color: "#141612", textTransform: "uppercase" }}>
                {isTa ? "அசல் மரச்செக்கு" : "Traditional Chekku"}
              </div>
              <div style={{ fontSize: "11px", color: "#6B6E66" }}>
                {isTa ? "<45°C மிதமான பிழிதல்" : "Wood-pressed <45°C"}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "18px" }}>🏛️</span>
            <div>
              <div style={{ fontSize: "11px", fontWeight: 700, color: "#141612", textTransform: "uppercase" }}>
                {isTa ? "10 கிளைகள்" : "10 Regional Branches"}
              </div>
              <div style={{ fontSize: "11px", color: "#6B6E66" }}>
                {isTa ? "பெங்களூரு & தென்னிந்தியா" : "Bengaluru & South India"}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "18px" }}>📦</span>
            <div>
              <div style={{ fontSize: "11px", fontWeight: 700, color: "#141612", textTransform: "uppercase" }}>
                {isTa ? "பாட்டில் & டின் இருப்பு" : "Bottles & 15kg Tins"}
              </div>
              <div style={{ fontSize: "11px", color: "#6B6E66" }}>
                {isTa ? "0.5L, 1L, 5L & டின்" : "Retail & Commercial Tins"}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "18px" }}>📞</span>
            <div>
              <div style={{ fontSize: "11px", fontWeight: 700, color: "#141612", textTransform: "uppercase" }}>
                {isTa ? "நேரடி முன்பதிவு" : "Direct Mill Order"}
              </div>
              <a
                href="tel:9150766377"
                style={{ fontSize: "11px", color: "#855812", fontWeight: 700, textDecoration: "none" }}
              >
                9150766377
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes heroSlideTimer {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        @media (max-width: 1024px) {
          .hero-stage-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 24px !important;
            min-height: 460px !important;
          }
          .hero-big-bottle-frame {
            height: 420px !important;
          }
          .hero-trust-strip {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          .hero-stage-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            min-height: auto !important;
            padding: 16px 4px !important;
          }
          .hero-right-visual-stage {
            order: -1;
            min-height: 320px !important;
          }
          .hero-big-bottle-frame {
            height: 340px !important;
            border-radius: 20px !important;
          }
          .hero-left-editorial {
            padding-right: 0 !important;
          }
          .hero-thumbnail-pills-row {
            overflow-x: auto;
            width: 100%;
            padding-bottom: 6px;
          }
          .hero-trust-strip {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }

        @media (max-width: 480px) {
          .hero-big-bottle-frame {
            height: 290px !important;
          }
        }
      `}</style>
    </section>
  );
}
