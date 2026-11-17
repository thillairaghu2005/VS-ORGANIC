"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Sparkles,
  ThermometerSnowflake,
  Sun,
  PackageCheck,
  CheckCircle2,
  Award,
  ShieldCheck,
  Leaf,
  Clock,
  XCircle,
} from "lucide-react";

export default function ChekkuProcess() {
  const { language } = useLanguage();
  const isTa = language === "ta";

  const processSteps = [
    {
      step: "01",
      tagEn: "HAND-SELECTED NATIVE SEEDS",
      tagTa: "உயர்ரக நாட்டு விதை தேர்வு",
      titleEn: "Native Seed Procurement",
      titleTa: "விவசாயிகளிடம் நேரடி கொள்முதல்",
      subEn: "100% Direct Farm Gate Intake",
      subTa: "நாட்டு நிலக்கடலை & கருப்பு எள்",
      descEn:
        "Direct procurement of export-grade native peanuts, sun-ripened black sesame, and 100% sulphur-free copra. Seeds are sun-dried and destoned without chemical fumigation.",
      descTa:
        "விவசாயிகளிடம் இருந்து நேரடியாக கொள்முதல் செய்யப்படும் நாட்டு நிலக்கடலை, கருப்பு எள் மற்றும் கந்தகம் சேர்க்காமல் வெயிலில் உலர்த்தப்பட்ட தூய தேங்காய் கொப்பரை.",
      highlightEn: "Sulphur-Free & Destoned",
      highlightTa: "கந்தகம் அற்ற இயற்கை தூய்மை",
      bgTint: "#FAF5ED",
      illustration: (
        <svg width="100%" height="100%" viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="65" r="50" fill="#F3ECE0" fillOpacity="0.7" />
          {/* Sun Rays */}
          <path d="M100 8 V20 M100 110 V122 M43 65 H55 M145 65 H157" stroke="#D49C36" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
          {/* Earthen Bowl */}
          <path d="M52 75 C52 102 74 108 100 108 C126 108 148 102 148 75 Z" fill="#7A4C22" stroke="#5E3816" strokeWidth="2" />
          <ellipse cx="100" cy="74" rx="48" ry="12" fill="#965F2F" />
          {/* Peanuts & Golden Seeds inside bowl */}
          <ellipse cx="85" cy="71" rx="14" ry="7" fill="#E2AC58" transform="rotate(-15 85 71)" />
          <ellipse cx="115" cy="71" rx="13" ry="7" fill="#D49A42" transform="rotate(20 115 71)" />
          <ellipse cx="100" cy="67" rx="12" ry="6.5" fill="#C58930" />
          <circle cx="78" cy="76" r="3" fill="#201C17" />
          <circle cx="92" cy="78" r="2.5" fill="#201C17" />
          <circle cx="110" cy="77" r="3" fill="#201C17" />
          <circle cx="122" cy="75" r="2.5" fill="#201C17" />
          {/* Quality Stamp */}
          <g transform="translate(132, 18)">
            <rect width="56" height="22" rx="11" fill="#141612" />
            <text x="28" y="14" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="800" letterSpacing="0.06em">
              100% PURE
            </text>
          </g>
        </svg>
      ),
    },
    {
      step: "02",
      tagEn: "AUTHENTIC VAGAI MORTAR",
      tagTa: "வாகை மர உரல் பிழிதல்",
      titleEn: "Cold Wood Chekku Press",
      titleTa: "பாரம்பரிய வாகை மரச்செக்கு",
      subEn: "Slow Crushed at < 45°C",
      subTa: "45°C-க்கு குறைவான மித வெப்பம்",
      descEn:
        "Slowly crushed in authentic Vagai (Albizia lebbeck) wood mortars at low rotations. Prevents frictional heat buildup, keeping vitamins E & K, natural sesamol, and raw nutty aroma intact.",
      descTa:
        "பாரம்பரிய வாகை மர உரலில் மிதமான வேகத்தில் பிழியப்படுவதால் வெப்பம் உருவாவது தடுக்கப்பட்டு, எண்ணெயின் இயற்கை உயிர்ச்சத்துக்கள் மற்றும் நறுமணம் முழுமையாக காக்கப்படுகிறது.",
      highlightEn: "< 45°C True Cold Extraction",
      highlightTa: "45°C குறைவான இயற்கை மித வெப்பம்",
      bgTint: "#F8F3EA",
      illustration: (
        <svg width="100%" height="100%" viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="65" r="50" fill="#EFE8D9" fillOpacity="0.7" />
          {/* Wood Chekku Mortar */}
          <path d="M60 58 C55 98 70 114 100 114 C130 114 145 98 140 58 Z" fill="#4A3018" stroke="#37220E" strokeWidth="2" />
          <ellipse cx="100" cy="58" rx="40" ry="12" fill="#37220E" />
          <ellipse cx="100" cy="58" rx="30" ry="8" fill="#D49C36" fillOpacity="0.85" />
          {/* Turning Vagai Pestle */}
          <path d="M94 14 L97 60 L103 60 L106 14 Z" fill="#6C4524" stroke="#4A3018" strokeWidth="1.5" />
          <ellipse cx="100" cy="14" rx="8" ry="3" fill="#8B5B32" />
          {/* Golden Oil Stream */}
          <path d="M100 70 Q98 86 100 102" stroke="#E5A638" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="100" cy="104" r="3" fill="#F4CF68" />
          <circle cx="94" cy="94" r="2" fill="#F4CF68" />
          <circle cx="106" cy="98" r="2" fill="#F4CF68" />
          {/* Temperature Badge */}
          <g transform="translate(124, 18)">
            <rect width="66" height="22" rx="11" fill="#9E6F1B" />
            <text x="33" y="14" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="800" letterSpacing="0.04em">
              &lt; 45°C COLD
            </text>
          </g>
        </svg>
      ),
    },
    {
      step: "03",
      tagEn: "48-HOUR SUNLIGHT CLARITY",
      tagTa: "இயற்கை சூரிய ஒளி தெளிவு",
      titleEn: "Natural Gravity Settling",
      titleTa: "இயற்கை வண்டல் படிவு முறை",
      subEn: "Zero Chemical Bleaches",
      subTa: "ரசாயன வடிகட்டுதல் அற்றது",
      descEn:
        "The freshly pressed golden oil rests naturally in food-grade stainless tanks for 48 hours. Micro-sediments settle naturally by gravity — zero chemical degumming, micro-filters, or artificial clarifying agents.",
      descTa:
        "பிழியப்பட்ட புதிய எண்ணெய் 48 மணி நேரம் இயற்கை முறையில் வண்டல் படிய வைக்கப்பட்டு தெளிய வைக்கப்படுகிறது. செயற்கை நிறமூட்டிகள், பிளீச்சிங் மற்றும் கெமிக்கல்கள் எதுவும் இல்லை.",
      highlightEn: "48h Natural Clarity",
      highlightTa: "48 மணி நேர இயற்கை தெளிவு",
      bgTint: "#F6F1E5",
      illustration: (
        <svg width="100%" height="100%" viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="65" r="50" fill="#EAE2D1" fillOpacity="0.7" />
          {/* Stainless Settling Tank */}
          <rect x="74" y="28" width="52" height="78" rx="6" fill="#DCD6C8" stroke="#9A9282" strokeWidth="1.8" />
          <line x1="74" y1="42" x2="126" y2="42" stroke="#B8B0A0" strokeWidth="1" />
          {/* Liquid Glass View Window */}
          <rect x="86" y="48" width="28" height="50" rx="4" fill="#FFFFFF" stroke="#9A9282" strokeWidth="1" />
          {/* Golden Oil Settling Gradient */}
          <rect x="88" y="50" width="24" height="28" fill="#F4CF68" fillOpacity="0.95" />
          <rect x="88" y="78" width="24" height="12" fill="#D49C36" fillOpacity="0.9" />
          <rect x="88" y="90" width="24" height="6" fill="#8C5C20" fillOpacity="0.9" rx="1" />
          {/* Natural Sun badge */}
          <g transform="translate(132, 18)">
            <rect width="58" height="22" rx="11" fill="#141612" />
            <text x="29" y="14" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="800" letterSpacing="0.04em">
              48H SETTLE
            </text>
          </g>
        </svg>
      ),
    },
    {
      step: "04",
      tagEn: "MILL-GATE SEALED DISPATCH",
      tagTa: "ஆலை நேரடி பேக்கிங் விநியோகம்",
      titleEn: "Hygienic Direct Dispatch",
      titleTa: "சுகாதாரமான நேரடி விநியோகம்",
      subEn: "Bottles, Jerrycans & 16L Tins",
      subTa: "பாட்டில் மற்றும் 16லி வணிக டின்",
      descEn:
        "Packed fresh at source into food-grade bottles, 5L cans, and heavy-gauge 15kg/16L wholesale tins. Dispatched directly across our 10 regional hubs in Bengaluru & South India with transparent batch test dates.",
      descTa:
        "உணவு பாதுகாப்பு தரம் கொண்ட பாட்டில்கள், கேன்கள் மற்றும் 15 கிலோ வணிக டின்களில் சுகாதாரமாக அடைக்கப்பட்டு பெங்களூரு உள்ளிட்ட 10 கிளைகளுக்கு உடனுக்குடன் விநியோகிக்கப்படுகிறது.",
      highlightEn: "Direct Mill-Gate Transit",
      highlightTa: "ஆலை நேரடி உடனடி விநியோகம்",
      bgTint: "#FAF4E8",
      illustration: (
        <svg width="100%" height="100%" viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="65" r="50" fill="#F3E9D5" fillOpacity="0.7" />
          {/* 16L Commercial Tin */}
          <rect x="62" y="44" width="40" height="62" rx="4" fill="#D5CFBE" stroke="#9E9685" strokeWidth="1.5" />
          <path d="M72 44 C72 35 92 35 92 44" stroke="#7A7465" strokeWidth="2" fill="none" />
          <rect x="88" y="40" width="9" height="5" rx="1" fill="#DF9F28" />
          <rect x="68" y="64" width="28" height="18" rx="2" fill="#FFFFFF" />
          <text x="82" y="74" textAnchor="middle" fill="#141612" fontSize="5" fontWeight="800">VS ORGANIC</text>
          <text x="82" y="80" textAnchor="middle" fill="#9E6F1B" fontSize="4.5" fontWeight="900">16L TIN</text>
          {/* 1L Bottle */}
          <rect x="110" y="52" width="22" height="54" rx="4" fill="#E8B548" fillOpacity="0.85" stroke="#9E6F1B" strokeWidth="1.2" />
          <rect x="116" y="44" width="10" height="9" rx="2" fill="#FFFFFF" stroke="#9E6F1B" strokeWidth="1" />
          <rect x="113" y="66" width="16" height="20" rx="1.5" fill="#FFFFFF" />
          <text x="121" y="76" textAnchor="middle" fill="#141612" fontSize="4" fontWeight="800">1L</text>
          <text x="121" y="82" textAnchor="middle" fill="#9E6F1B" fontSize="3.5" fontWeight="700">PURE</text>
          {/* Dispatch Badge */}
          <g transform="translate(132, 18)">
            <rect width="56" height="22" rx="11" fill="#166534" />
            <text x="28" y="14" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="800" letterSpacing="0.04em">
              10 HUBS
            </text>
          </g>
        </svg>
      ),
    },
  ];

  return (
    <section
      id="process"
      style={{
        paddingTop: "76px",
        paddingBottom: "84px",
        backgroundColor: "#FAF7F2",
        borderTop: "1px solid #ECE7DD",
        borderBottom: "1px solid #ECE7DD",
      }}
    >
      <div className="site-container">
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "780px",
            margin: "0 auto 48px auto",
          }}
        >
          <span className="eyebrow-text" style={{ display: "block", marginBottom: "8px" }}>
            {isTa ? "பாரம்பரிய மரச்செக்கு உற்பத்தி முறை" : "TRADITIONAL WOODEN CHEKKU EXTRACTION"}
          </span>

          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(26px, 3.8vw, 38px)",
              fontWeight: 700,
              color: "#141612",
              lineHeight: 1.2,
              marginBottom: "14px",
            }}
          >
            {isTa ? "நான்கு கட்ட பாரம்பரிய மரச்செக்கு முறை" : "The 4-Step Traditional Chekku Craft"}
          </h2>

          <p
            style={{
              fontSize: "14.5px",
              lineHeight: 1.6,
              color: "#6B6E66",
              margin: 0,
            }}
          >
            {isTa
              ? "வி.எஸ். ஆர்கானிக்ஸ்: வாகை மர உரலில் குறைந்த வெப்பநிலையில் (<45°C) பிழியப்பட்டு, இயற்கை சத்துக்கள் மாறாமல் வாடிக்கையாளர்களுக்கு நேரிடையாக வழங்கப்படுகிறது."
              : "Slow-pressed in authentic Vagai wooden mortars below 45°C. 100% unrefined, unbleached, retaining natural tocopherols, antioxidants, and rich South Indian aroma."}
          </p>
        </div>

        {/* 4-Step Process Cards Grid (Matching ProductCatalog Card Fidelity) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "22px",
            marginBottom: "44px",
          }}
          className="process-steps-grid"
        >
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="lux-product-card"
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                padding: "16px",
                border: "1px solid #ECE7DD",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <div>
                {/* Visual Illustration Header Container (Like Product Image Box in First Half) */}
                <div
                  style={{
                    width: "100%",
                    height: "140px",
                    borderRadius: "10px",
                    backgroundColor: step.bgTint,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                    marginBottom: "16px",
                    border: "1px solid #EDE8DE",
                  }}
                >
                  {/* Step Pill in Illustration Top Left */}
                  <span
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      fontSize: "11px",
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      backgroundColor: "#141612",
                      color: "#FFFFFF",
                      padding: "4px 10px",
                      borderRadius: "12px",
                      zIndex: 2,
                    }}
                  >
                    STEP {step.step}
                  </span>

                  {step.illustration}
                </div>

                {/* Eyebrow Tag */}
                <span
                  style={{
                    fontSize: "9.5px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    color: "#9E6F1B",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "4px",
                  }}
                >
                  {isTa ? step.tagTa : step.tagEn}
                </span>

                {/* Title */}
                <h3
                  className="font-inter"
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#141612",
                    lineHeight: 1.3,
                    marginBottom: "3px",
                  }}
                >
                  {isTa ? step.titleTa : step.titleEn}
                </h3>

                {/* Subtitle */}
                <span
                  style={{
                    fontSize: "11.5px",
                    color: "#84877E",
                    fontWeight: 600,
                    display: "block",
                    marginBottom: "10px",
                  }}
                >
                  {isTa ? step.subTa : step.subEn}
                </span>

                {/* Description */}
                <p
                  style={{
                    fontSize: "12.5px",
                    lineHeight: 1.6,
                    color: "#555750",
                    margin: 0,
                  }}
                >
                  {isTa ? step.descTa : step.descEn}
                </p>
              </div>

              {/* Bottom Highlight Chip */}
              <div
                style={{
                  marginTop: "18px",
                  paddingTop: "12px",
                  borderTop: "1px solid #F0EEE9",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <CheckCircle2 size={13} color="#166534" strokeWidth={2.2} />
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#166534" }}>
                  {isTa ? step.highlightTa : step.highlightEn}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Craft Comparison: VS Organic Wood Chekku vs Industrial Refined Oils */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "18px",
            padding: "32px 36px",
            border: "1px solid #ECE7DD",
            boxShadow: "0 6px 24px rgba(0, 0, 0, 0.03)",
          }}
          className="process-editorial-comparison"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid #F0EEE9",
              paddingBottom: "20px",
              marginBottom: "24px",
              flexWrap: "wrap",
              gap: "14px",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "10.5px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: "#9E6F1B",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                {isTa ? "பாரம்பரிய மரச்செக்கு vs நவீன சுத்திகரிப்பு" : "PURITY VERIFICATION • CRAFT COMPARISON"}
              </span>
              <h3
                className="font-serif"
                style={{
                  fontSize: "clamp(20px, 2.5vw, 24px)",
                  fontWeight: 700,
                  color: "#141612",
                  margin: 0,
                }}
              >
                {isTa
                  ? "மரச்செக்கு எண்ணெயின் அசல் நன்மைகள்"
                  : "Why VS Organic Traditional Chekku Oils Are Superior"}
              </h3>
            </div>

            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <span
                style={{
                  padding: "6px 14px",
                  backgroundColor: "#FAF7F2",
                  border: "1px solid #ECE7DD",
                  borderRadius: "20px",
                  fontSize: "11.5px",
                  fontWeight: 700,
                  color: "#141612",
                }}
              >
                ✓ 100% Vagai Wood Mortar
              </span>
              <span
                style={{
                  padding: "6px 14px",
                  backgroundColor: "#E6F8EB",
                  border: "1px solid #C8EEDB",
                  borderRadius: "20px",
                  fontSize: "11.5px",
                  fontWeight: 700,
                  color: "#166534",
                }}
              >
                ✓ FSSAI Registered
              </span>
            </div>
          </div>

          {/* 2-Column Side-by-Side Comparison Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
            }}
            className="comparison-two-cols"
          >
            {/* Left: The VS Organic Traditional Way */}
            <div
              style={{
                backgroundColor: "#FBF9F4",
                borderRadius: "14px",
                padding: "24px",
                border: "1px solid #EADDC9",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <span
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "#166534",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: 800,
                  }}
                >
                  ✓
                </span>
                <div>
                  <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#141612", margin: 0 }}>
                    {isTa ? "வி.எஸ். மரச்செக்கு முறை (The Pure Way)" : "The VS Organic Wood Chekku Way"}
                  </h4>
                  <span style={{ fontSize: "11px", color: "#166534", fontWeight: 700 }}>
                    {isTa ? "100% இயற்கை பாரம்பரியம்" : "Cold-Pressed • Unrefined • Natural"}
                  </span>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "12.5px", color: "#3B3D37" }}>
                  <CheckCircle2 size={15} color="#166534" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span>
                    <strong>Cold Wood Pressing (&lt;45°C):</strong> Gentle crushing protects live enzymes and natural vitamin E.
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "12.5px", color: "#3B3D37" }}>
                  <CheckCircle2 size={15} color="#166534" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span>
                    <strong>Zero Solvents & Hexane:</strong> Zero toxic chemical solvent extraction or petroleum distillates.
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "12.5px", color: "#3B3D37" }}>
                  <CheckCircle2 size={15} color="#166534" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span>
                    <strong>Natural Gravity Sedimentation:</strong> 48 hours resting under indirect light instead of acid bleaching.
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "12.5px", color: "#3B3D37" }}>
                  <CheckCircle2 size={15} color="#166534" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span>
                    <strong>Direct Mill Dispatch:</strong> Fresh batches shipped to 10 hubs within 24-48 hours.
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Commercial Industrial Refined Oils */}
            <div
              style={{
                backgroundColor: "#FAF6F3",
                borderRadius: "14px",
                padding: "24px",
                border: "1px solid #ECE2DC",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <span
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "#991B1B",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: 800,
                  }}
                >
                  ✕
                </span>
                <div>
                  <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#141612", margin: 0 }}>
                    {isTa ? "தொழிற்சாலை சுத்திகரிப்பு எண்ணெய்" : "Commercial Factory Refined Oils"}
                  </h4>
                  <span style={{ fontSize: "11px", color: "#991B1B", fontWeight: 700 }}>
                    {isTa ? "ரசாயனம் & அதிக வெப்பம்" : "High Heat • Chemical Bleaching • Stripped"}
                  </span>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "12.5px", color: "#61635D" }}>
                  <XCircle size={15} color="#991B1B" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span>
                    <strong>Extreme Thermal Heat (200°C+):</strong> Industrial expellers destroy vitamins and generate trans-fats.
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "12.5px", color: "#61635D" }}>
                  <XCircle size={15} color="#991B1B" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span>
                    <strong>Hexane Solvent Washing:</strong> Chemical solvents used to force maximum extraction from residual cakes.
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "12.5px", color: "#61635D" }}>
                  <XCircle size={15} color="#991B1B" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span>
                    <strong>Synthetic Bleaching & Deodorizing:</strong> Artificial bleaching clays strip natural color, taste, and aroma.
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "12.5px", color: "#61635D" }}>
                  <XCircle size={15} color="#991B1B" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span>
                    <strong>Extended Warehouse Aging:</strong> Preservatives added to sustain multi-month dealer distributor storage.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1040px) {
          .process-steps-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
          .comparison-two-cols {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .process-steps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
