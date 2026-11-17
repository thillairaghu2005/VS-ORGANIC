"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface DualPromoBannersProps {
  onOpenEnquiry: (defaultProduct?: string) => void;
}

export default function DualPromoBanners({ onOpenEnquiry }: DualPromoBannersProps) {
  const { language } = useLanguage();

  return (
    <section
      style={{
        paddingTop: "20px",
        paddingBottom: "64px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div className="site-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
          }}
          className="dual-banners-grid"
        >
          {/* LEFT BANNER (Warm Sand / Cream Editorial Banner - Luxora Layout) */}
          <div
            style={{
              backgroundColor: "#F5EFE6",
              borderRadius: "16px",
              padding: "42px 36px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              overflow: "hidden",
              position: "relative",
              minHeight: "260px",
            }}
          >
            <div style={{ maxWidth: "62%", zIndex: 2 }}>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  color: "#9E6F1B",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                {language === "ta" ? "மொத்த விநியோகம் 2026" : "WHOLESALE & BULK ORDERS"}
              </span>

              <h3
                className="font-serif"
                style={{
                  fontSize: "clamp(22px, 2.6vw, 30px)",
                  fontWeight: 600,
                  color: "#141612",
                  lineHeight: 1.15,
                  marginBottom: "8px",
                }}
              >
                {language === "ta" ? "சூப்பர் மார்க்கெட் & வணிகர்கள்" : "Retailers & Supermarkets"}
              </h3>

              <p
                style={{
                  fontSize: "12.5px",
                  color: "#6B6E66",
                  lineHeight: 1.5,
                  marginBottom: "20px",
                }}
              >
                {language === "ta"
                  ? "15 கிலோ மற்றும் 16 லிட்டர் டின் ஆர்டர்களுக்கு நேரடி ஆலை மொத்த விலை. இடைத்தரகர் இல்லை."
                  : "Special mill-gate rates on 15 kg & 16L tins. Zero intermediary margin, reliable dispatch."}
              </p>

              <button
                onClick={() => onOpenEnquiry("15kg Commercial Tin Wholesale")}
                style={{
                  padding: "10px 22px",
                  backgroundColor: "#FFFFFF",
                  color: "#141612",
                  border: "1px solid #D5CEBF",
                  borderRadius: "30px",
                  fontSize: "11.5px",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#141612";
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#FFFFFF";
                  e.currentTarget.style.color = "#141612";
                }}
              >
                {language === "ta" ? "விலை விபரம் பெற" : "REQUEST RATES"}
              </button>
            </div>

            {/* Right illustration of 15kg Wholesale Tin */}
            <div
              style={{
                width: "120px",
                height: "170px",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1,
              }}
            >
              <svg width="110" height="150" viewBox="0 0 110 150" fill="none">
                <ellipse cx="55" cy="142" rx="42" ry="6" fill="#201C17" fillOpacity="0.1" />
                <rect x="18" y="30" width="74" height="110" rx="8" fill="#E8E5DD" stroke="#B8B4AA" strokeWidth="1.2" />
                <line x1="18" y1="60" x2="92" y2="60" stroke="#FFFFFF" strokeWidth="1" />
                <line x1="18" y1="105" x2="92" y2="105" stroke="#FFFFFF" strokeWidth="1" />
                <path d="M36 30 C36 14, 74 14, 74 30" stroke="#8A877E" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                <rect x="66" y="22" width="18" height="9" rx="2" fill="#DF9F28" />
                <rect x="28" y="68" width="54" height="34" rx="4" fill="#FFFFFF" />
                <text x="55" y="80" textAnchor="middle" fill="#141612" fontSize="5.5" fontWeight="800">VS ORGANIC</text>
                <text x="55" y="92" textAnchor="middle" fill="#9E6F1B" fontSize="8" fontWeight="900">16L TIN</text>
              </svg>
            </div>
          </div>

          {/* RIGHT BANNER (Deep Charcoal / Black Editorial Banner - Luxora Layout) */}
          <div
            style={{
              backgroundColor: "#181915",
              borderRadius: "16px",
              padding: "42px 36px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              overflow: "hidden",
              position: "relative",
              minHeight: "260px",
            }}
          >
            <div style={{ maxWidth: "62%", zIndex: 2 }}>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  color: "#D49C36",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                {language === "ta" ? "பாரம்பரிய மரச்செக்கு முறை" : "TRADITIONAL VAAGAI CHEKKU"}
              </span>

              <h3
                className="font-serif"
                style={{
                  fontSize: "clamp(22px, 2.6vw, 30px)",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  lineHeight: 1.15,
                  marginBottom: "8px",
                }}
              >
                {language === "ta" ? "அசல் தூய எண்ணெய்" : "Cold-Pressed Purity"}
              </h3>

              <p
                style={{
                  fontSize: "12.5px",
                  color: "#A8A59C",
                  lineHeight: 1.5,
                  marginBottom: "20px",
                }}
              >
                {language === "ta"
                  ? "குறைந்த வேகத்தில் 38°C கீழே பிழியப்படுகிறது. இயற்கை வாசனை மற்றும் ஆன்டி-ஆக்சிடன்ட்ஸ் முழுமையாக பாதுகாக்கப்படுகிறது."
                  : "Slow-extracted below 38°C in dense wooden mortars. Zero chemicals, retaining natural vitamins & authentic aroma."}
              </p>

              <a
                href="#process"
                style={{
                  display: "inline-block",
                  padding: "10px 22px",
                  backgroundColor: "#2B2C27",
                  color: "#FFFFFF",
                  border: "1px solid #454740",
                  borderRadius: "30px",
                  fontSize: "11.5px",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#D49C36";
                  e.currentTarget.style.color = "#141612";
                  e.currentTarget.style.borderColor = "#D49C36";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#2B2C27";
                  e.currentTarget.style.color = "#FFFFFF";
                  e.currentTarget.style.borderColor = "#454740";
                }}
              >
                {language === "ta" ? "தயாரிப்பு முறை" : "EXPLORE PROCESS"}
              </a>
            </div>

            {/* Right illustration of Vaagai Wooden Chekku & Amber Droplets */}
            <div
              style={{
                width: "120px",
                height: "170px",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1,
              }}
            >
              <svg width="110" height="150" viewBox="0 0 110 150" fill="none">
                <ellipse cx="55" cy="140" rx="44" ry="6" fill="#000000" fillOpacity="0.4" />
                {/* Chekku Mortar */}
                <path d="M25 80 C20 120, 30 135, 55 135 C80 135, 90 120, 85 80 Z" fill="#3D2916" stroke="#5E4024" strokeWidth="1.5" />
                <ellipse cx="55" cy="80" rx="30" ry="10" fill="#24170B" />
                <ellipse cx="55" cy="80" rx="22" ry="7" fill="#DF9F28" fillOpacity="0.8" />
                {/* Pestle */}
                <path d="M48 20 L52 82 L58 82 L62 20 Z" fill="#5E4024" stroke="#7A5330" strokeWidth="1" />
                <ellipse cx="55" cy="20" rx="7" ry="2.5" fill="#7A5330" />
                {/* Golden Splash */}
                <circle cx="55" cy="65" r="3" fill="#F4CF68" />
                <circle cx="68" cy="72" r="2" fill="#F4CF68" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 860px) {
          .dual-banners-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
