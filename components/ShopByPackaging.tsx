"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface ShopByPackagingProps {
  onOpenEnquiry: (defaultProduct?: string) => void;
}

export default function ShopByPackaging({ onOpenEnquiry }: ShopByPackagingProps) {
  const { language } = useLanguage();

  const collections = [
    {
      id: "half-litre",
      titleEn: "Half Litre (500ml)",
      titleTa: "அரை லிட்டர் (500ml)",
      subEn: "Bottle Available",
      subTa: "பாட்டில் வடிவம்",
      tagEn: "Household Trial",
      tagTa: "தினசரி சமையல்",
      bgColor: "#FBF7F0",
      accentColor: "#9E6F1B",
    },
    {
      id: "one-litre",
      titleEn: "1 Litre Bottle",
      titleTa: "1 லிட்டர் பாட்டில்",
      subEn: "Family Kitchen Essential",
      subTa: "குடும்ப பயன்பாடு",
      tagEn: "Bestseller Size",
      tagTa: "அதிக விற்பனை",
      bgColor: "#F8F5EE",
      accentColor: "#C48A27",
    },
    {
      id: "five-litre",
      titleEn: "5 Litre Can",
      titleTa: "5 லிட்டர் கேன்",
      subEn: "Monthly Pantry Saver",
      subTa: "மாதாந்திர சேமிப்பு",
      tagEn: "Economic Pack",
      tagTa: "சிக்கன பேக்",
      bgColor: "#F5F1E8",
      accentColor: "#7A5310",
    },
    {
      id: "sixteen-litre",
      titleEn: "15kg / 16L Tin",
      titleTa: "15கிலோ / 16லி டின்",
      subEn: "Commercial Wholesale Tin",
      subTa: "வணிக மொத்த டின்",
      tagEn: "Supermarkets & Caterers",
      tagTa: "மொத்த விநியோகம்",
      bgColor: "#EDE8DD",
      accentColor: "#141612",
    },
    {
      id: "pure-ghee-pack",
      titleEn: "Cow Ghee Glass Jar",
      titleTa: "பசு நெய் கண்ணாடி ஜாடி",
      subEn: "Granular Danedar Ghee",
      subTa: "மணல் மணலான பதம்",
      tagEn: "Traditional Aroma",
      tagTa: "அசல் நறுமணம்",
      bgColor: "#FEF7E6",
      accentColor: "#D19C3C",
    },
    {
      id: "jaggery-packs",
      titleEn: "Organic Jaggery Packs",
      titleTa: "நாட்டு சர்க்கரை & வெல்லம்",
      subEn: "0.5kg to 25kg Sacks",
      subTa: "இயற்கை இனிப்பு",
      tagEn: "Chemical-Free",
      tagTa: "ரசாயனம் அற்றது",
      bgColor: "#F6ECE2",
      accentColor: "#8A491D",
    },
  ];

  return (
    <section
      id="packaging"
      style={{
        paddingTop: "32px",
        paddingBottom: "72px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div className="site-container">
        {/* Section Header (Luxora "SHOP BY COLLECTION" copy) */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              color: "#9E6F1B",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "6px",
            }}
          >
            {language === "ta" ? "பேக்கேஜிங் வகைகள்" : "AVAILABLE PACKAGING FORMATS"}
          </span>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(24px, 3.4vw, 32px)",
              fontWeight: 600,
              color: "#141612",
              letterSpacing: "0.02em",
              margin: 0,
            }}
          >
            {language === "ta" ? "அளவுகள் மற்றும் பேக்கேஜிங்" : "SHOP BY PACKAGING & SIZES"}
          </h2>
          <p
            style={{
              fontSize: "13px",
              color: "#84877E",
              marginTop: "8px",
            }}
          >
            {language === "ta"
              ? "1 லிட்டர், அரை லிட்டர், 5 லிட்டர், 16 லிட்டர் • பாட்டில் & டின் இருப்பு"
              : "1 litre, half litre, 5 litre, 16 litre • bottle and commercial tin available"}
          </p>
        </div>

        {/* 6 Horizontal Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "16px",
          }}
          className="shop-packaging-grid"
        >
          {collections.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenEnquiry(item.titleEn)}
              className="packaging-item-card"
              style={{
                backgroundColor: item.bgColor,
                borderRadius: "12px",
                padding: "24px 16px 20px 16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                cursor: "pointer",
                border: "1px solid #ECE7DD",
                transition: "all 0.3s ease",
                minHeight: "160px",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.06)";
                e.currentTarget.style.borderColor = item.accentColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "#ECE7DD";
              }}
            >
              {/* Top Tag */}
              <span
                style={{
                  fontSize: "9px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: item.accentColor,
                  backgroundColor: "rgba(255, 255, 255, 0.75)",
                  padding: "2px 7px",
                  borderRadius: "10px",
                  marginBottom: "12px",
                }}
              >
                {language === "ta" ? item.tagTa : item.tagEn}
              </span>

              {/* Title */}
              <div>
                <h4
                  className="font-inter"
                  style={{
                    fontSize: "13.5px",
                    fontWeight: 700,
                    color: "#141612",
                    marginBottom: "4px",
                    lineHeight: 1.3,
                  }}
                >
                  {language === "ta" ? item.titleTa : item.titleEn}
                </h4>

                <p
                  style={{
                    fontSize: "11px",
                    color: "#6B6E66",
                    lineHeight: 1.3,
                    margin: 0,
                  }}
                >
                  {language === "ta" ? item.subTa : item.subEn}
                </p>
              </div>

              {/* Arrow Indicator */}
              <div
                style={{
                  marginTop: "12px",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#141612",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span>{language === "ta" ? "விபரம்" : "Select"}</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .shop-packaging-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            row-gap: 16px !important;
          }
        }
        @media (max-width: 580px) {
          .shop-packaging-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px 10px !important;
          }
          :global(.packaging-item-card) {
            padding: 16px 12px 14px 12px !important;
            min-height: 140px !important;
          }
        }
      `}</style>
    </section>
  );
}
