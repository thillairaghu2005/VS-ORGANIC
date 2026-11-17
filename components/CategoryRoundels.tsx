"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface CategoryRoundelsProps {
  onSelectCategory?: (categoryId: string) => void;
}

export default function CategoryRoundels({ onSelectCategory }: CategoryRoundelsProps) {
  const { language } = useLanguage();

  const categories = [
    {
      id: "groundnut-oil",
      nameEn: "Groundnut Oil",
      nameTa: "கடலை எண்ணெய்",
      descEn: "Wood-Pressed • 4 Sizes",
      descTa: "வாகை மரச்செக்கு",
      iconColor: "#D99B26",
      badge: "Cold-Pressed",
      svg: (
        <svg width="42" height="42" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" fill="#FAF4E8" />
          <ellipse cx="24" cy="28" rx="8" ry="12" fill="#D99B26" fillOpacity="0.85" />
          <path d="M24 16 L24 8" stroke="#141612" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="20" y="6" width="8" height="4" rx="2" fill="#141612" />
          <circle cx="20" cy="26" r="3" fill="#C48A27" />
          <circle cx="28" cy="30" r="3" fill="#A66E1E" />
        </svg>
      ),
    },
    {
      id: "sesame-oil",
      nameEn: "Sesame Oil",
      nameTa: "நல்லெண்ணெய்",
      descEn: "Pure Gingelly • Black Til",
      descTa: "பனைவெல்லம் கலந்தது",
      iconColor: "#A66E1E",
      badge: "Traditional",
      svg: (
        <svg width="42" height="42" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" fill="#F5F0E6" />
          <path d="M24 10 C18 18 15 25 15 30 A9 9 0 0 0 33 30 C33 25 30 18 24 10 Z" fill="#A66E1E" />
          <path d="M22 20 Q24 16 26 20 Q27 24 25 28" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
        </svg>
      ),
    },
    {
      id: "coconut-oil",
      nameEn: "Coconut Oil",
      nameTa: "தேங்காய் எண்ணெய்",
      descEn: "Sulphur-Free Copra",
      descTa: "கந்தகம் இல்லாத கொப்பரை",
      iconColor: "#7A826B",
      badge: "Unrefined",
      svg: (
        <svg width="42" height="42" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" fill="#F1F4EE" />
          <ellipse cx="24" cy="26" rx="12" ry="12" fill="#EAE5D9" stroke="#7A826B" strokeWidth="2" />
          <ellipse cx="24" cy="26" rx="8" ry="8" fill="#FFFFFF" />
          <circle cx="21" cy="23" r="1.5" fill="#5F6652" />
          <circle cx="27" cy="23" r="1.5" fill="#5F6652" />
          <circle cx="24" cy="28" r="1.5" fill="#5F6652" />
        </svg>
      ),
    },
    {
      id: "pure-ghee",
      nameEn: "Pure Cow Ghee",
      nameTa: "சுத்தமான பசு நெய்",
      descEn: "Granular Danedar",
      descTa: "மணல் மணலான நெய்",
      iconColor: "#E0A838",
      badge: "Aromatic",
      svg: (
        <svg width="42" height="42" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" fill="#FEF8E7" />
          {/* Ghee Clay Pot / Matka */}
          <ellipse cx="24" cy="16" rx="10" ry="3" fill="#D49A24" />
          <path d="M14 16 Q10 24 15 32 Q18 36 24 36 Q30 36 33 32 Q38 24 34 16 Z" fill="#E8B036" />
          <ellipse cx="24" cy="18" rx="8" ry="2" fill="#FFF3D1" />
        </svg>
      ),
    },
    {
      id: "jaggery-powder",
      nameEn: "Jaggery Powder",
      nameTa: "நாட்டு சர்க்கரை",
      descEn: "Nattu Sakkarai • Free Flow",
      descTa: "ரசாயனம் அற்றது",
      iconColor: "#A05A2C",
      badge: "Iron-Rich",
      svg: (
        <svg width="42" height="42" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" fill="#F7EEE6" />
          <path d="M14 34 Q24 20 34 34 Z" fill="#A05A2C" />
          <circle cx="24" cy="24" r="2" fill="#FFFFFF" fillOpacity="0.7" />
          <circle cx="20" cy="29" r="1.5" fill="#FFFFFF" fillOpacity="0.7" />
          <circle cx="28" cy="29" r="1.5" fill="#FFFFFF" fillOpacity="0.7" />
        </svg>
      ),
    },
    {
      id: "traditional-jaggery",
      nameEn: "Country Jaggery",
      nameTa: "அச்சு வெல்லம்",
      descEn: "Achu Vellam & Blocks",
      descTa: "கரும்பு அச்சு வெல்லம்",
      iconColor: "#82461D",
      badge: "Traditional",
      svg: (
        <svg width="42" height="42" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" fill="#F3EBE4" />
          <rect x="15" y="18" width="18" height="15" rx="3" fill="#82461D" />
          <path d="M15 23 L33 23" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.3" />
          <path d="M24 18 L24 33" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.3" />
        </svg>
      ),
    },
  ];

  return (
    <section
      style={{
        paddingTop: "40px",
        paddingBottom: "36px",
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid #F0EEE9",
      }}
    >
      <div className="site-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "20px",
            alignItems: "flex-start",
          }}
          className="category-roundels-grid"
        >
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              onClick={(e) => {
                if (onSelectCategory) {
                  e.preventDefault();
                  onSelectCategory(cat.id);
                  const el = document.getElementById("products");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="category-item"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              {/* Circular Avatar (Luxora Roundel copy) */}
              <div
                className="category-circle-wrapper"
                style={{
                  width: "84px",
                  height: "84px",
                  borderRadius: "50%",
                  backgroundColor: "#FAF7F2",
                  border: "1px solid #ECE7DD",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "12px",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.03)",
                  position: "relative",
                }}
              >
                {cat.svg}
              </div>

              {/* Title */}
              <span
                style={{
                  fontSize: "13.5px",
                  fontWeight: 600,
                  color: "#141612",
                  lineHeight: 1.25,
                  marginBottom: "3px",
                }}
              >
                {language === "ta" ? cat.nameTa : cat.nameEn}
              </span>

              {/* Sub-label / Count */}
              <span
                style={{
                  fontSize: "11px",
                  color: "#84877E",
                  lineHeight: 1.3,
                }}
              >
                {language === "ta" ? cat.descTa : cat.descEn}
              </span>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .category-roundels-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            row-gap: 24px !important;
          }
        }
        @media (max-width: 540px) {
          .category-roundels-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            row-gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
