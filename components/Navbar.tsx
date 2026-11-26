"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import SearchModal from "./SearchModal";
import {
  Search,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
  Phone,
  Droplets,
  Package,
  Store,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

interface NavbarProps {
  onOpenEnquiry: (defaultProduct?: string) => void;
}

export default function Navbar({ onOpenEnquiry }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [categoriesDropdown, setCategoriesDropdown] = useState(false);
  const [sizesDropdown, setSizesDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { language, setLanguage } = useLanguage();
  const { totalItems, setIsCartOpen } = useCart();
  const isTa = language === "ta";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top Dispatch & Notification Strip */}
      <div
        style={{
          backgroundColor: "#181915",
          color: "#EAE7DF",
          padding: "7px 24px",
          fontSize: "11px",
          fontFamily: "var(--font-inter)",
          letterSpacing: "0.04em",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Desktop Notification Content */}
        <div className="top-strip-desktop" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#25D366",
                display: "inline-block",
              }}
            />
            {isTa
              ? "10 கிளைகளில் நேரடி மரச்செக்கு எண்ணெய் விநியோகம் • பெங்களூரு & தென் இந்தியா"
              : "Direct Wood-Pressed Chekku Supply Across 10 Regional Branches • Bengaluru & South India"}
          </span>
          <span style={{ color: "#7A7870", display: "inline-block" }}>|</span>
          <span style={{ color: "#D49C36", fontWeight: 700 }}>
            {isTa
              ? "தரத்தை நம்புங்கள். நியாயமான விலையைப் பெறுங்கள்."
              : "Quality You Trust. Prices You Deserve."}
          </span>
        </div>

        <div className="top-strip-desktop" style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <a
            href="tel:9150766377"
            style={{
              color: "#EAE7DF",
              textDecoration: "none",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Phone size={12} strokeWidth={2} color="#D49C36" />
            <span>9150766377</span>
          </a>
          <span style={{ color: "#4A4944" }}>•</span>
          <a
            href="tel:9655336376"
            style={{ color: "#EAE7DF", textDecoration: "none", fontWeight: 600 }}
          >
            9655336376
          </a>
        </div>

        {/* Mobile Single-Line Clean Strip */}
        <div
          className="top-strip-mobile"
          style={{
            display: "none",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "11px",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "#EAE7DF", fontWeight: 600 }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#25D366" }} />
            {isTa ? "10 கிளைகள் நேரடி சப்ளை" : "10 Hubs Direct Supply"}
          </span>
          <a
            href="tel:9150766377"
            style={{
              color: "#D49C36",
              fontWeight: 700,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <Phone size={11} strokeWidth={2.2} />
            <span>9150766377</span>
          </a>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 60,
          backgroundColor: "#FFFFFF",
          borderBottom: scrolled ? "1px solid #ECE7DD" : "1px solid #F0EEE9",
          boxShadow: scrolled ? "0 4px 20px rgba(0, 0, 0, 0.04)" : "none",
          transition: "all 0.25s ease",
          paddingTop: "12px",
          paddingBottom: "12px",
          width: "100%",
        }}
      >
        <div
          className="navbar-container"
          style={{
            maxWidth: "1360px",
            width: "100%",
            margin: "0 auto",
            paddingLeft: "24px",
            paddingRight: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "18px",
            boxSizing: "border-box",
          }}
        >
          {/* Logo / Brand Name */}
          <a
            href="#"
            style={{
              display: "flex",
              flexDirection: "column",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <span
              className="font-serif"
              style={{
                fontSize: "clamp(20px, 3.5vw, 24px)",
                letterSpacing: "0.04em",
                color: "#141612",
                fontWeight: 700,
                lineHeight: 1.05,
                whiteSpace: "nowrap",
              }}
            >
              VS ORGANIC
            </span>
            <span
              className="font-inter"
              style={{
                fontSize: "8.5px",
                letterSpacing: "0.18em",
                color: "#9E6F1B",
                textTransform: "uppercase",
                fontWeight: 700,
                marginTop: "2px",
                whiteSpace: "nowrap",
              }}
            >
              CHEKKU OILS • EST. 2018
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "clamp(12px, 1.4vw, 22px)",
              flexWrap: "nowrap",
            }}
            className="desktop-nav-container"
          >
            {/* 1. HOME */}
            <a
              href="#"
              className="nav-link"
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#141612",
                textDecoration: "none",
                position: "relative",
                padding: "8px 0",
                borderBottom: "2px solid #9E6F1B",
                whiteSpace: "nowrap",
              }}
            >
              {isTa ? "முகப்பு" : "HOME"}
            </a>

            {/* 2. CATEGORIES ORGANIZED MEGA DROPDOWN */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setCategoriesDropdown(true)}
              onMouseLeave={() => setCategoriesDropdown(false)}
            >
              <a
                href="#products"
                className="nav-link"
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: categoriesDropdown ? "#9E6F1B" : "#3D4039",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "8px 0",
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
              >
                <span>{isTa ? "பிரிவுகள்" : "CATEGORIES"}</span>
                <ChevronDown
                  size={13}
                  strokeWidth={2.2}
                  style={{
                    transform: categoriesDropdown ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                />
              </a>

              {/* ORGANIZED CATEGORIES MEGA MENU */}
              {categoriesDropdown && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "-120px",
                    paddingTop: "8px",
                    zIndex: 80,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderRadius: "18px",
                      boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
                      border: "1px solid #EBE7DF",
                      padding: "24px 28px",
                      minWidth: "700px",
                      display: "grid",
                      gridTemplateColumns: "1.25fr 1.25fr 1fr",
                      gap: "28px",
                    }}
                  >
                    {/* Category Column 1: Chekku Oils */}
                    <div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          marginBottom: "12px",
                          paddingBottom: "8px",
                          borderBottom: "1px solid #F0EEE9",
                        }}
                      >
                        <span
                          style={{
                            width: "28px",
                            height: "28px",
                            borderRadius: "50%",
                            backgroundColor: "#FAF4E8",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#9E6F1B",
                          }}
                        >
                          <Droplets size={15} strokeWidth={2} />
                        </span>
                        <div>
                          <h4
                            style={{
                              fontSize: "12px",
                              fontWeight: 700,
                              letterSpacing: "0.08em",
                              textTransform: "uppercase",
                              color: "#141612",
                              margin: 0,
                            }}
                          >
                            {isTa ? "மரச்செக்கு எண்ணெய்கள்" : "CHEKKU OILS"}
                          </h4>
                          <span style={{ fontSize: "10px", color: "#9E6F1B", fontWeight: 600 }}>
                            100% Cold Wood-Pressed
                          </span>
                        </div>
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <a
                          href="#groundnut-oil"
                          onClick={() => setCategoriesDropdown(false)}
                          className="mega-item"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            textDecoration: "none",
                            padding: "6px 8px",
                            borderRadius: "8px",
                            transition: "background 0.2s",
                          }}
                        >
                          <span style={{ fontSize: "13px", fontWeight: 600, color: "#141612" }}>
                            {isTa ? "மரச்செக்கு கடலை எண்ணெய்" : "Groundnut Oil"}
                          </span>
                          <span style={{ fontSize: "11px", color: "#84877E" }}>
                            Peanut • 0.5L, 1L, 5L, 16L Tin
                          </span>
                        </a>

                        <a
                          href="#sesame-oil"
                          onClick={() => setCategoriesDropdown(false)}
                          className="mega-item"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            textDecoration: "none",
                            padding: "6px 8px",
                            borderRadius: "8px",
                            transition: "background 0.2s",
                          }}
                        >
                          <span style={{ fontSize: "13px", fontWeight: 600, color: "#141612" }}>
                            {isTa ? "மரச்செக்கு நல்லெண்ணெய்" : "Sesame / Gingelly Oil"}
                          </span>
                          <span style={{ fontSize: "11px", color: "#84877E" }}>
                            Black Til with Palm Jaggery
                          </span>
                        </a>

                        <a
                          href="#coconut-oil"
                          onClick={() => setCategoriesDropdown(false)}
                          className="mega-item"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            textDecoration: "none",
                            padding: "6px 8px",
                            borderRadius: "8px",
                            transition: "background 0.2s",
                          }}
                        >
                          <span style={{ fontSize: "13px", fontWeight: 600, color: "#141612" }}>
                            {isTa ? "மரச்செக்கு தேங்காய் எண்ணெய்" : "Pure Coconut Oil"}
                          </span>
                          <span style={{ fontSize: "11px", color: "#84877E" }}>
                            Sulphur-Free Sun Dried Copra
                          </span>
                        </a>
                      </div>
                    </div>

                    {/* Category Column 2: Essentials & Sweeteners */}
                    <div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          marginBottom: "12px",
                          paddingBottom: "8px",
                          borderBottom: "1px solid #F0EEE9",
                        }}
                      >
                        <span
                          style={{
                            width: "28px",
                            height: "28px",
                            borderRadius: "50%",
                            backgroundColor: "#FAF4E8",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#9E6F1B",
                          }}
                        >
                          <Sparkles size={15} strokeWidth={2} />
                        </span>
                        <div>
                          <h4
                            style={{
                              fontSize: "12px",
                              fontWeight: 700,
                              letterSpacing: "0.08em",
                              textTransform: "uppercase",
                              color: "#141612",
                              margin: 0,
                            }}
                          >
                            {isTa ? "நெய் & இயற்கை வெல்லம்" : "GHEE & SWEETENERS"}
                          </h4>
                          <span style={{ fontSize: "10px", color: "#9E6F1B", fontWeight: 600 }}>
                            Traditional & Unrefined
                          </span>
                        </div>
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <a
                          href="#pure-ghee"
                          onClick={() => setCategoriesDropdown(false)}
                          className="mega-item"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            textDecoration: "none",
                            padding: "6px 8px",
                            borderRadius: "8px",
                            transition: "background 0.2s",
                          }}
                        >
                          <span style={{ fontSize: "13px", fontWeight: 600, color: "#141612" }}>
                            {isTa ? "சுத்தமான பசு நெய்" : "Pure Desi Cow Ghee"}
                          </span>
                          <span style={{ fontSize: "11px", color: "#84877E" }}>
                            Granular Danedar • Glass Jars & Cans
                          </span>
                        </a>

                        <a
                          href="#jaggery-powder"
                          onClick={() => setCategoriesDropdown(false)}
                          className="mega-item"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            textDecoration: "none",
                            padding: "6px 8px",
                            borderRadius: "8px",
                            transition: "background 0.2s",
                          }}
                        >
                          <span style={{ fontSize: "13px", fontWeight: 600, color: "#141612" }}>
                            {isTa ? "நாட்டு சர்க்கரை / வெல்ல தூள்" : "Organic Jaggery Powder"}
                          </span>
                          <span style={{ fontSize: "11px", color: "#84877E" }}>
                            Nattu Sakkarai • Chemical-Free
                          </span>
                        </a>

                        <a
                          href="#traditional-jaggery"
                          onClick={() => setCategoriesDropdown(false)}
                          className="mega-item"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            textDecoration: "none",
                            padding: "6px 8px",
                            borderRadius: "8px",
                            transition: "background 0.2s",
                          }}
                        >
                          <span style={{ fontSize: "13px", fontWeight: 600, color: "#141612" }}>
                            {isTa ? "பாரம்பரிய அச்சு வெல்லம்" : "Traditional Achu Jaggery"}
                          </span>
                          <span style={{ fontSize: "11px", color: "#84877E" }}>
                            Solid Cane Blocks & Mandi
                          </span>
                        </a>
                      </div>
                    </div>

                    {/* Category Column 3: Packaging & Wholesale Info */}
                    <div
                      style={{
                        backgroundColor: "#FAF7F2",
                        borderRadius: "14px",
                        padding: "16px",
                        border: "1px solid #ECE7DD",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                          <Package size={14} color="#9E6F1B" strokeWidth={2} />
                          <span
                            style={{
                              fontSize: "10px",
                              fontWeight: 700,
                              letterSpacing: "0.1em",
                              color: "#9E6F1B",
                              textTransform: "uppercase",
                            }}
                          >
                            PACKAGING TYPES
                          </span>
                        </div>
                        <h4
                          style={{
                            fontSize: "13px",
                            fontWeight: 700,
                            color: "#141612",
                            marginBottom: "8px",
                          }}
                        >
                          Bottle & Tin Available
                        </h4>
                        <p style={{ fontSize: "11.5px", color: "#6B6E66", lineHeight: 1.45, margin: 0 }}>
                          • 0.5 Litre & 1 Litre Bottles<br />
                          • 5 Litre Family Jerrycans<br />
                          • 15kg / 16L Commercial Tins
                        </p>
                      </div>

                      <div style={{ marginTop: "14px" }}>
                        <button
                          onClick={() => {
                            setCategoriesDropdown(false);
                            onOpenEnquiry("15kg Commercial Tin Wholesale");
                          }}
                          className="btn-cta btn-cta-primary btn-cta-sm"
                          style={{ width: "100%", justifyContent: "center" }}
                        >
                          {isTa ? "மொத்த விலை விபரம்" : "Wholesale Rates →"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 3. CHEKKU OILS DIRECT LINK */}
            <a
              href="#products"
              className="nav-link"
              style={{
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#3D4039",
                textDecoration: "none",
                padding: "8px 0",
                whiteSpace: "nowrap",
                transition: "color 0.2s",
              }}
            >
              {isTa ? "மரச்செக்கு எண்ணெய்கள்" : "CHEKKU OILS"}
            </a>

            {/* 4. PACKAGING & SIZES DROPDOWN */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setSizesDropdown(true)}
              onMouseLeave={() => setSizesDropdown(false)}
            >
              <a
                href="#packaging"
                className="nav-link"
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: sizesDropdown ? "#9E6F1B" : "#3D4039",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "8px 0",
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
              >
                <span>{isTa ? "அளவுகள் & டின்" : "PACKAGING & SIZES"}</span>
                <ChevronDown
                  size={12}
                  strokeWidth={2}
                  style={{
                    transform: sizesDropdown ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                />
              </a>

              {sizesDropdown && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    paddingTop: "8px",
                    zIndex: 80,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderRadius: "14px",
                      boxShadow: "0 14px 40px rgba(0,0,0,0.1)",
                      border: "1px solid #EBE7DF",
                      padding: "8px",
                      minWidth: "220px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    <a
                      href="#packaging"
                      onClick={() => setSizesDropdown(false)}
                      className="mega-item"
                      style={{
                        fontSize: "12px",
                        color: "#141612",
                        textDecoration: "none",
                        padding: "8px 10px",
                        borderRadius: "6px",
                        fontWeight: 600,
                      }}
                    >
                      🧴 0.5 Litre (500ml) Bottle
                    </a>
                    <a
                      href="#packaging"
                      onClick={() => setSizesDropdown(false)}
                      className="mega-item"
                      style={{
                        fontSize: "12px",
                        color: "#141612",
                        textDecoration: "none",
                        padding: "8px 10px",
                        borderRadius: "6px",
                        fontWeight: 600,
                      }}
                    >
                      🧴 1 Litre Kitchen Bottle
                    </a>
                    <a
                      href="#packaging"
                      onClick={() => setSizesDropdown(false)}
                      className="mega-item"
                      style={{
                        fontSize: "12px",
                        color: "#141612",
                        textDecoration: "none",
                        padding: "8px 10px",
                        borderRadius: "6px",
                        fontWeight: 600,
                      }}
                    >
                      🪣 5 Litre Family Jerrycan
                    </a>
                    <a
                      href="#packaging"
                      onClick={() => setSizesDropdown(false)}
                      className="mega-item"
                      style={{
                        fontSize: "12px",
                        color: "#141612",
                        textDecoration: "none",
                        padding: "8px 10px",
                        borderRadius: "6px",
                        fontWeight: 600,
                      }}
                    >
                      📦 15 kg / 16 Litre Commercial Tin
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* 5. WHOLESALE */}
            <a
              href="#wholesale"
              className="nav-link"
              style={{
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#3D4039",
                textDecoration: "none",
                padding: "8px 0",
                whiteSpace: "nowrap",
                transition: "color 0.2s",
              }}
            >
              {isTa ? "மொத்த விநியோகம்" : "WHOLESALE"}
            </a>

            {/* 6. 10 BRANCHES */}
            <a
              href="#branches"
              className="nav-link"
              style={{
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#3D4039",
                textDecoration: "none",
                padding: "8px 0",
                whiteSpace: "nowrap",
                transition: "color 0.2s",
              }}
            >
              {isTa ? "10 கிளைகள்" : "10 BRANCHES"}
            </a>

            {/* 7. NATURE GALLERY */}
            <a
              href="#about"
              className="nav-link"
              style={{
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#3D4039",
                textDecoration: "none",
                padding: "8px 0",
                whiteSpace: "nowrap",
                transition: "color 0.2s",
              }}
            >
              {isTa ? "தயாரிப்பு கேலரி" : "GALLERY"}
            </a>

            {/* 8. CONTACT */}
            <a
              href="#contact"
              className="nav-link"
              style={{
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#3D4039",
                textDecoration: "none",
                padding: "8px 0",
                whiteSpace: "nowrap",
                transition: "color 0.2s",
              }}
            >
              {isTa ? "தொடர்பு" : "CONTACT"}
            </a>
          </nav>

          {/* Right Utility Icons (Search, Language, Cart, Mobile Menu) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flexShrink: 0,
            }}
          >
            {/* Search Trigger Button */}
            <button
              onClick={() => setSearchOpen(true)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#141612",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                transition: "background 0.2s",
              }}
              title="Search products (Ctrl+K)"
              aria-label="Search products"
            >
              <Search size={19} strokeWidth={1.8} />
            </button>

            {/* Language Switcher Pill */}
            <button
              onClick={() => setLanguage(isTa ? "en" : "ta")}
              className="lang-toggle-btn"
              title="Toggle Language / மொழி மாற்றம்"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "5px 12px",
                borderRadius: "20px",
                backgroundColor: "#FAF7F2",
                border: "1px solid #ECE7DD",
                color: "#141612",
                fontSize: "11px",
                fontWeight: 700,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {isTa ? "English" : "தமிழ்"}
            </button>

            {/* Shopping Cart Bag with Badge */}
            <button
              onClick={() => setIsCartOpen(true)}
              style={{
                position: "relative",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#141612",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                transition: "background 0.2s",
              }}
              title="View Cart"
              aria-label="View Cart"
            >
              <ShoppingBag size={20} strokeWidth={1.8} />
              {totalItems > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "1px",
                    right: "1px",
                    backgroundColor: "#141612",
                    color: "#FFFFFF",
                    fontSize: "9.5px",
                    fontWeight: 700,
                    width: "17px",
                    height: "17px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "6px",
                color: "#141612",
              }}
              className="mobile-hamburger"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X size={22} strokeWidth={2} />
              ) : (
                <Menu size={22} strokeWidth={2} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Organized Categories */}
        {mobileMenuOpen && (
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderTop: "1px solid #ECE7DD",
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              maxHeight: "80vh",
              overflowY: "auto",
            }}
          >
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#141612",
                textDecoration: "none",
              }}
            >
              {isTa ? "முகப்பு" : "HOME"}
            </a>

            {/* Mobile Category Block: Chekku Oils */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "#9E6F1B",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <Droplets size={14} strokeWidth={2} />
                <span>{isTa ? "மரச்செக்கு எண்ணெய்கள்" : "CHEKKU OILS"}</span>
              </span>
              <div style={{ paddingLeft: "10px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <a
                  href="#groundnut-oil"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ fontSize: "13px", color: "#3D4039", textDecoration: "none" }}
                >
                  {isTa ? "கடலை எண்ணெய் (0.5L, 1L, 5L, 16L)" : "Groundnut Oil (0.5L, 1L, 5L, 16L)"}
                </a>
                <a
                  href="#sesame-oil"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ fontSize: "13px", color: "#3D4039", textDecoration: "none" }}
                >
                  {isTa ? "நல்லெண்ணெய் (பனைவெல்லம்)" : "Sesame Oil (Gingelly)"}
                </a>
                <a
                  href="#coconut-oil"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ fontSize: "13px", color: "#3D4039", textDecoration: "none" }}
                >
                  {isTa ? "தேங்காய் எண்ணெய் (கொப்பரை)" : "Coconut Oil (Sulphur-Free)"}
                </a>
              </div>
            </div>

            {/* Mobile Category Block: Essentials & Sweeteners */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "#9E6F1B",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <Sparkles size={14} strokeWidth={2} />
                <span>{isTa ? "நெய் & இயற்கை வெல்லம்" : "GHEE & SWEETENERS"}</span>
              </span>
              <div style={{ paddingLeft: "10px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <a
                  href="#pure-ghee"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ fontSize: "13px", color: "#3D4039", textDecoration: "none" }}
                >
                  {isTa ? "தூய பசு நெய் (மணல் பதம்)" : "Pure Cow Ghee (Danedar)"}
                </a>
                <a
                  href="#jaggery-powder"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ fontSize: "13px", color: "#3D4039", textDecoration: "none" }}
                >
                  {isTa ? "நாட்டு சர்க்கரை / வெல்ல தூள்" : "Organic Jaggery Powder"}
                </a>
                <a
                  href="#traditional-jaggery"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ fontSize: "13px", color: "#3D4039", textDecoration: "none" }}
                >
                  {isTa ? "பாரம்பரிய அச்சு வெல்லம்" : "Traditional Achu Jaggery"}
                </a>
              </div>
            </div>

            {/* Packaging, Wholesale & Branches */}
            <a
              href="#packaging"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "13.5px",
                fontWeight: 600,
                color: "#141612",
                textDecoration: "none",
              }}
            >
              {isTa ? "அளவுகள் & டின் (0.5L - 16L)" : "PACKAGING & SIZES (0.5L - 16L)"}
            </a>

            <a
              href="#wholesale"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "13.5px",
                fontWeight: 600,
                color: "#141612",
                textDecoration: "none",
              }}
            >
              {isTa ? "மொத்த கொள்முதல் & B2B" : "WHOLESALE & BULK ORDERS"}
            </a>

            <a
              href="#branches"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "13.5px",
                fontWeight: 600,
                color: "#141612",
                textDecoration: "none",
              }}
            >
              {isTa ? "10 கிளைகள் (பெங்களூரு & தென் மாநிலங்கள்)" : "10 BRANCHES (BENGALURU & SOUTH INDIA)"}
            </a>

            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "13.5px",
                fontWeight: 600,
                color: "#141612",
                textDecoration: "none",
              }}
            >
              {isTa ? "இயற்கை தயாரிப்பு கேலரி" : "NATURE PRODUCTS & BOTTLES"}
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "13.5px",
                fontWeight: 600,
                color: "#141612",
                textDecoration: "none",
              }}
            >
              {isTa ? "தொடர்பு கொள்ள" : "CONTACT US"}
            </a>

            {/* Quick Actions */}
            <div style={{ paddingTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="btn-cta btn-cta-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                {isTa ? "மொத்த விலை விபரம் பெற" : "Request Wholesale Quote"}
              </button>

              <a
                href="tel:9150766377"
                className="btn-cta btn-cta-secondary"
                style={{ width: "100%", justifyContent: "center", gap: "6px" }}
              >
                <Phone size={14} strokeWidth={2} />
                <span>9150766377</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Global CSS helper for responsive navigation */}
      <style jsx global>{`
        @media (max-width: 480px) {
          .navbar-container {
            padding-left: 14px !important;
            padding-right: 14px !important;
          }
        }
        @media (max-width: 640px) {
          .top-strip-desktop {
            display: none !important;
          }
          .top-strip-mobile {
            display: flex !important;
          }
        }
        @media (min-width: 1040px) {
          .desktop-nav-container {
            display: flex !important;
          }
          .mobile-hamburger {
            display: none !important;
          }
        }
        .nav-link:hover {
          color: #9E6F1B !important;
        }
        .mega-item:hover {
          background-color: #FAF7F2 !important;
        }
      `}</style>

      {/* Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onOpenEnquiry={onOpenEnquiry}
      />
    </>
  );
}
