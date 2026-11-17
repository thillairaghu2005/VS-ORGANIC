"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Sparkles,
  ShieldCheck,
  TrendingDown,
  Award,
  Phone,
  Building2,
  CheckCircle2,
  Users,
  Leaf,
  HeartHandshake,
  Check,
} from "lucide-react";

export default function BrandStory() {
  const { language } = useLanguage();
  const isTa = language === "ta";

  return (
    <section
      id="about"
      style={{
        paddingTop: "76px",
        paddingBottom: "84px",
        backgroundColor: "#FFFFFF",
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
            {isTa ? "எங்கள் பின்னணி & பாரம்பரியம் • 2018 முதல்" : "OUR HERITAGE & ORIGINS • EST. 2018"}
          </span>

          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(26px, 3.8vw, 38px)",
              fontWeight: 700,
              color: "#141612",
              lineHeight: 1.2,
              marginBottom: "12px",
            }}
          >
            {isTa ? "வி.எஸ். ஆர்கானிக்ஸ் மரச்செக்கு பாரம்பரியம்" : "The VS Organic Heritage & Mission"}
          </h2>

          <p
            style={{
              fontSize: "15px",
              fontWeight: 600,
              color: "#9E6F1B",
              margin: 0,
            }}
          >
            {isTa
              ? "நீங்கள் நம்பும் தரம். நீங்கள் எதிர்பார்க்கும் நியாயமான விலை."
              : "Quality You Trust. Prices You Deserve."}
          </p>
        </div>

        {/* 2-Column Split: Left Heritage Narrative & Right 3 Pillars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "32px",
            alignItems: "stretch",
            marginBottom: "36px",
          }}
          className="brand-story-grid"
        >
          {/* Left Column: Heritage Spotlight Narrative Card */}
          <div
            className="brand-story-narrative-card"
            style={{
              backgroundColor: "#FAF7F2",
              borderRadius: "20px",
              padding: "36px",
              border: "1px solid #ECE7DD",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 6px 24px rgba(0, 0, 0, 0.02)",
            }}
          >
            <div>
              {/* Badge & Founding Details */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  backgroundColor: "#FAF4E8",
                  padding: "5px 14px",
                  borderRadius: "20px",
                  fontSize: "11px",
                  fontWeight: 800,
                  color: "#9E6F1B",
                  marginBottom: "20px",
                  letterSpacing: "0.08em",
                  border: "1px solid #ECE7DD",
                }}
              >
                <Sparkles size={12} strokeWidth={2.5} />
                <span>ESTABLISHED 2018 • TAMIL NADU & BENGALURU</span>
              </div>

              {/* Narrative Content */}
              <div
                style={{
                  fontSize: "14px",
                  lineHeight: 1.8,
                  color: "#4A4C46",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <p style={{ margin: 0 }}>
                  <strong style={{ color: "#141612" }}>
                    {isTa
                      ? "2018 ஆம் ஆண்டு திரு. விஜயன் மற்றும் திருமதி. சண்முகப்பிரியா"
                      : "Founded in 2018 by Mr. Vijayan and Mrs. Shanmugapriya"}
                  </strong>
                  {isTa
                    ? " அவர்களால் தொடங்கப்பட்ட வி.எஸ். ஆர்கானிக்ஸ் மரச்செக்கு எண்ணெய், நுகர்வோருக்கு சுத்தமான மற்றும் ஆரோக்கியமான மரச்செக்கு எண்ணெய்களை நியாயமான விலையில் வழங்குவதையே முதன்மை நோக்கமாகக் கொண்டுள்ளது."
                    : ", V.S. Organics Chekku Oil was born out of a deep dedication to resurrect authentic cold-pressing traditions and deliver unadulterated oils at accessible mill prices."}
                </p>

                {/* Editorial Pull Quote Box */}
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "12px",
                    padding: "16px 20px",
                    borderLeft: "4px solid #9E6F1B",
                    border: "1px solid #ECE7DD",
                    borderLeftWidth: "4px",
                    margin: "4px 0",
                  }}
                >
                  <p
                    className="font-serif"
                    style={{
                      fontStyle: "italic",
                      fontSize: "14.5px",
                      color: "#141612",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {isTa
                      ? "“தேவையற்ற இடைத்தரகர்கள் இன்றி, நேரடி ஆலை நிலையிலிருந்தே நுகர்வோர் மற்றும் சில்லறை வணிகர்களுக்கு விநியோகம் செய்வதே எங்கள் இலக்கு.”"
                      : "“By eliminating multi-tiered middlemen and inflated retail distribution markups, we connect our extraction mills directly with households, supermarkets, and wholesale buyers.”"}
                  </p>
                </div>

                <p style={{ margin: 0 }}>
                  <strong style={{ color: "#141612" }}>
                    {isTa
                      ? "இன்று நிர்வாக இயக்குநர் திரு. கிஷோர் குமார் வி.எஸ்"
                      : "Today, under the leadership of Mr. Kishore Kumar VS., Managing Director"}
                  </strong>
                  {isTa
                    ? " அவர்களின் தொலைநோக்குப் பார்வையில் வணிகம் பெங்களூரு மற்றும் பிற முக்கிய தென்னிந்திய நகரங்களில் 10 நேரடி கிளைகளாக விரிவடைந்துள்ளது."
                    : ", the enterprise has expanded into a robust network of 10 branches and regional supply hubs across Bengaluru and South India."}
                </p>
              </div>

              {/* 4 Heritage Quick Metric Tags */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "10px",
                  marginTop: "24px",
                }}
                className="heritage-pills-grid"
              >
                <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #ECE7DD", borderRadius: "10px", padding: "10px", textAlign: "center" }}>
                  <span style={{ fontSize: "16px", fontWeight: 800, color: "#141612", display: "block" }}>2018</span>
                  <span style={{ fontSize: "10px", color: "#84877E", fontWeight: 700, textTransform: "uppercase" }}>Founded</span>
                </div>
                <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #ECE7DD", borderRadius: "10px", padding: "10px", textAlign: "center" }}>
                  <span style={{ fontSize: "16px", fontWeight: 800, color: "#141612", display: "block" }}>10</span>
                  <span style={{ fontSize: "10px", color: "#84877E", fontWeight: 700, textTransform: "uppercase" }}>Branches</span>
                </div>
                <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #ECE7DD", borderRadius: "10px", padding: "10px", textAlign: "center" }}>
                  <span style={{ fontSize: "16px", fontWeight: 800, color: "#141612", display: "block" }}>100%</span>
                  <span style={{ fontSize: "10px", color: "#84877E", fontWeight: 700, textTransform: "uppercase" }}>Wood Chekku</span>
                </div>
                <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #ECE7DD", borderRadius: "10px", padding: "10px", textAlign: "center" }}>
                  <span style={{ fontSize: "16px", fontWeight: 800, color: "#166534", display: "block" }}>0%</span>
                  <span style={{ fontSize: "10px", color: "#84877E", fontWeight: 700, textTransform: "uppercase" }}>Chemicals</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Bar */}
            <div
              style={{
                marginTop: "28px",
                paddingTop: "20px",
                borderTop: "1px solid #EBE5D8",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "14px",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "10.5px",
                    color: "#84877E",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    display: "block",
                    marginBottom: "4px",
                  }}
                >
                  {isTa ? "நேரடி நிர்வாக & மொத்த விற்பனை எண்கள்" : "Management & Direct Mill Lines"}
                </span>

                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <a
                    href="tel:9150766377"
                    style={{
                      fontSize: "13.5px",
                      fontWeight: 700,
                      color: "#141612",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <Phone size={13} color="#9E6F1B" strokeWidth={2} />
                    <span>9150766377</span>
                  </a>

                  <span style={{ color: "#D1CCC0" }}>•</span>

                  <a
                    href="tel:9655336376"
                    style={{
                      fontSize: "13.5px",
                      fontWeight: 700,
                      color: "#141612",
                      textDecoration: "none",
                    }}
                  >
                    9655336376
                  </a>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "#FAF4E8",
                  border: "1px solid #ECE7DD",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  fontSize: "11.5px",
                  fontWeight: 700,
                  color: "#9E6F1B",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <Building2 size={13} strokeWidth={2} />
                <span>10 BRANCHES STRONG</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Luxury Atelier Pillars */}
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {/* Pillar 1: Pure Vagai Chekku Quality */}
            <div
              className="lux-product-card"
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                padding: "24px",
                border: "1px solid #ECE7DD",
                transition: "all 0.25s",
                boxShadow: "0 4px 18px rgba(0, 0, 0, 0.03)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    backgroundColor: "#FAF4E8",
                    border: "1px solid #ECE7DD",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#9E6F1B",
                    flexShrink: 0,
                  }}
                >
                  <Sparkles size={18} strokeWidth={2} />
                </div>

                <div>
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: 800,
                      color: "#9E6F1B",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      display: "block",
                    }}
                  >
                    PILLAR 01
                  </span>
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#141612",
                      margin: 0,
                    }}
                  >
                    {isTa ? "அசல் தரம் (Uncompromising Quality)" : "Pure Vagai Chekku Craft"}
                  </h3>
                </div>
              </div>

              <p style={{ fontSize: "12.5px", color: "#6B6E66", lineHeight: 1.6, margin: "0 0 12px 0" }}>
                {isTa
                  ? "பாரம்பரிய வாகை மர உரலில் குறைந்த வெப்பநிலையில் (<45°C) பிழியப்பட்டு இயற்கை வைட்டமின் மற்றும் நறுமணம் முழுமையாக காக்கப்படுகிறது. ஜீரோ ரசாயனம்."
                  : "Authentic slow-pressed extraction in Vagai wood mortars at room temperature. Retains all natural nutrients, tocopherols, and deep nutty aroma without chemical deodorization."}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", fontWeight: 700, color: "#166534" }}>
                <CheckCircle2 size={13} strokeWidth={2.2} />
                <span>Natural Tocopherols & Vitamin E Intact</span>
              </div>
            </div>

            {/* Pillar 2: Honest Mill-Gate Fair Pricing */}
            <div
              className="lux-product-card"
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                padding: "24px",
                border: "1px solid #ECE7DD",
                transition: "all 0.25s",
                boxShadow: "0 4px 18px rgba(0, 0, 0, 0.03)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    backgroundColor: "#FAF4E8",
                    border: "1px solid #ECE7DD",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#9E6F1B",
                    flexShrink: 0,
                  }}
                >
                  <TrendingDown size={18} strokeWidth={2} />
                </div>

                <div>
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: 800,
                      color: "#9E6F1B",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      display: "block",
                    }}
                  >
                    PILLAR 02
                  </span>
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#141612",
                      margin: 0,
                    }}
                  >
                    {isTa ? "நேர்மையான ஆலை விலை (Fair Pricing)" : "Honest Mill-Gate Value"}
                  </h3>
                </div>
              </div>

              <p style={{ fontSize: "12.5px", color: "#6B6E66", lineHeight: 1.6, margin: "0 0 12px 0" }}>
                {isTa
                  ? "விவசாயிகளிடமிருந்து நேரடி விதை கொள்முதல் மற்றும் ஆலை நிலையிலிருந்தே நேரடி விநியோகம். தேவையற்ற இடைத்தரகர் கமிஷன்கள் இல்லாத நியாயமான விலை."
                  : "Direct farmer seed intake and mill-direct supply lines bypass predatory retail markups. We pass true manufacturing economics directly to households and wholesale partners."}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", fontWeight: 700, color: "#166534" }}>
                <CheckCircle2 size={13} strokeWidth={2.2} />
                <span>Up to 25% Savings vs Retail Chain Markup</span>
              </div>
            </div>

            {/* Pillar 3: Enduring Customer Trust */}
            <div
              className="lux-product-card"
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                padding: "24px",
                border: "1px solid #ECE7DD",
                transition: "all 0.25s",
                boxShadow: "0 4px 18px rgba(0, 0, 0, 0.03)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    backgroundColor: "#FAF4E8",
                    border: "1px solid #ECE7DD",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#9E6F1B",
                    flexShrink: 0,
                  }}
                >
                  <Award size={18} strokeWidth={2} />
                </div>

                <div>
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: 800,
                      color: "#9E6F1B",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      display: "block",
                    }}
                  >
                    PILLAR 03
                  </span>
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#141612",
                      margin: 0,
                    }}
                  >
                    {isTa ? "வாடிக்கையாளர் நம்பிக்கை (Customer Trust)" : "10 Hubs of Trust"}
                  </h3>
                </div>
              </div>

              <p style={{ fontSize: "12.5px", color: "#6B6E66", lineHeight: 1.6, margin: "0 0 12px 0" }}>
                {isTa
                  ? "2018 முதல் ஆயிரக்கணக்கான குடும்பங்கள், உணவகங்கள் மற்றும் சூப்பர் மார்க்கெட் சங்கிலிகளின் நம்பிக்கையான சப்ளையராக உயர்ந்துள்ளோம்."
                  : "Trusted by thousands of conscious households, leading supermarkets, and commercial kitchens since 2018. Transparent lab testing and FSSAI certified standards."}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", fontWeight: 700, color: "#166534" }}>
                <CheckCircle2 size={13} strokeWidth={2.2} />
                <span>10,000+ Happy Families Across South India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certified Standards & Trust Ribbon */}
        <div
          style={{
            backgroundColor: "#FAF7F2",
            borderRadius: "16px",
            padding: "20px 28px",
            border: "1px solid #ECE7DD",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
          }}
          className="certified-ribbon-grid"
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <ShieldCheck size={20} color="#166534" />
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#141612" }}>
              FSSAI Registered
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Award size={20} color="#9E6F1B" />
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#141612" }}>
              100% Vagai Chekku
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Leaf size={20} color="#166534" />
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#141612" }}>
              Direct Farmer Intake
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <HeartHandshake size={20} color="#9E6F1B" />
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#141612" }}>
              Honest Mill Pricing
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .brand-story-grid {
            grid-template-columns: 1fr !important;
          }
          .certified-ribbon-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 520px) {
          .brand-story-narrative-card {
            padding: 22px 16px !important;
          }
          :global(.brand-story-grid .lux-product-card) {
            padding: 18px 16px !important;
          }
          .heritage-pills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .certified-ribbon-grid {
            grid-template-columns: 1fr !important;
            padding: 16px 14px !important;
          }
        }
      `}</style>
    </section>
  );
}
