"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function FeatureStrip() {
  const { language } = useLanguage();

  const features = [
    {
      titleEn: "DIRECT MILL SUPPLY",
      titleTa: "நேரடி ஆலை விநியோகம்",
      descEn: "Zero intermediaries, direct factory rates",
      descTa: "இடைத்தரகர் இன்றி குறைந்த விலை",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
    },
    {
      titleEn: "TRADITIONAL VAAGAI CHEKKU",
      titleTa: "பாரம்பரிய வாகை மரச்செக்கு",
      descEn: "100% Cold-Pressed below 38°C",
      descTa: "இயற்கை சத்துக்கள் மாறாமல் பிழிந்தது",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
    },
    {
      titleEn: "10 BRANCHES NETWORK",
      titleTa: "10 கிளைகள் நெட்வொர்க்",
      descEn: "Bengaluru & multi-state presence",
      descTa: "பெங்களூரு மற்றும் பிற மாநிலங்களில்",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 21h18M5 21V7l7-4 7 4v14M9 10h1M14 10h1M9 14h1M14 14h1M9 18h1M14 18h1" />
        </svg>
      ),
    },
    {
      titleEn: "DIRECT ORDER DESK",
      titleTa: "நேரடி உதவி & ஆர்டர்",
      descEn: "Call 9150766377 / 9655336376",
      descTa: "உடனடி வாட்ஸ்அப் / போன் ஆர்டர்",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      style={{
        paddingTop: "28px",
        paddingBottom: "28px",
        backgroundColor: "#FAF8F5",
        borderTop: "1px solid #ECE7DD",
        borderBottom: "1px solid #ECE7DD",
      }}
    >
      <div className="site-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
            alignItems: "center",
          }}
          className="feature-strip-grid"
        >
          {features.map((feat, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E6E1D5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#9E6F1B",
                  flexShrink: 0,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                }}
              >
                {feat.icon}
              </div>

              <div>
                <h4
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    color: "#141612",
                    marginBottom: "2px",
                  }}
                >
                  {language === "ta" ? feat.titleTa : feat.titleEn}
                </h4>
                <p
                  style={{
                    fontSize: "11.5px",
                    color: "#6B6E66",
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {language === "ta" ? feat.descTa : feat.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 990px) {
          .feature-strip-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            row-gap: 20px !important;
          }
        }
        @media (max-width: 580px) {
          .feature-strip-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 14px 10px !important;
          }
        }
      `}</style>
    </section>
  );
}
