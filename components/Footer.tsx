"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import PolicyModal, { PolicyType } from "./PolicyModal";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  Truck,
  RefreshCw,
  FileText,
  HelpCircle,
  ArrowUp,
  Sparkles,
  Leaf,
  CheckCircle2,
} from "lucide-react";

interface FooterProps {
  onOpenEnquiry: (defaultProduct?: string) => void;
}

export default function Footer({ onOpenEnquiry }: FooterProps) {
  const { language } = useLanguage();
  const isTa = language === "ta";

  const [activePolicy, setActivePolicy] = useState<PolicyType | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer
        id="contact"
        style={{
          backgroundColor: "#FAF7F2",
          borderTop: "1px solid #ECE7DD",
          paddingTop: "60px",
          paddingBottom: "36px",
        }}
      >
        <div className="site-container">
          {/* Top Brand Assurance Strip (Matching First Half Trust Strip) */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "16px",
              padding: "24px 30px",
              border: "1px solid #ECE7DD",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
              marginBottom: "52px",
              boxShadow: "0 4px 18px rgba(0, 0, 0, 0.02)",
            }}
            className="footer-trust-strip"
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span
                style={{
                  width: "40px",
                  height: "40px",
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
              </span>
              <div>
                <span style={{ fontSize: "13px", fontWeight: 700, color: "#141612", display: "block" }}>
                  100% Vagai Chekku
                </span>
                <span style={{ fontSize: "11px", color: "#6B6E66" }}>
                  Cold-pressed below 45°C
                </span>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span
                style={{
                  width: "40px",
                  height: "40px",
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
                <Leaf size={18} strokeWidth={2} />
              </span>
              <div>
                <span style={{ fontSize: "13px", fontWeight: 700, color: "#141612", display: "block" }}>
                  Zero Chemicals
                </span>
                <span style={{ fontSize: "11px", color: "#6B6E66" }}>
                  Unbleached & unrefined
                </span>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span
                style={{
                  width: "40px",
                  height: "40px",
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
                <Truck size={18} strokeWidth={2} />
              </span>
              <div>
                <span style={{ fontSize: "13px", fontWeight: 700, color: "#141612", display: "block" }}>
                  10 Regional Hubs
                </span>
                <span style={{ fontSize: "11px", color: "#6B6E66" }}>
                  Express South India transit
                </span>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#E6F8EB",
                  border: "1px solid #C8EEDB",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#166534",
                  flexShrink: 0,
                }}
              >
                <ShieldCheck size={18} strokeWidth={2} />
              </span>
              <div>
                <span style={{ fontSize: "13px", fontWeight: 700, color: "#166534", display: "block" }}>
                  FSSAI Registered
                </span>
                <span style={{ fontSize: "11px", color: "#6B6E66" }}>
                  Direct honest mill rates
                </span>
              </div>
            </div>
          </div>

          {/* Main 5-Column Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1.1fr 1.1fr 1.1fr 1.3fr",
              gap: "36px",
              marginBottom: "52px",
            }}
            className="lux-footer-grid"
          >
            {/* Column 1: Brand & Bio & Direct Contacts */}
            <div>
              <a
                href="#"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textDecoration: "none",
                  marginBottom: "14px",
                }}
              >
                <span
                  className="font-serif"
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    color: "#141612",
                    lineHeight: 1.1,
                  }}
                >
                  VS ORGANIC
                </span>
                <span
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.18em",
                    color: "#9E6F1B",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    marginTop: "3px",
                  }}
                >
                  CHEKKU OILS • EST. 2018
                </span>
              </a>

              <p
                style={{
                  fontSize: "12.5px",
                  lineHeight: 1.6,
                  color: "#6B6E66",
                  marginBottom: "18px",
                  maxWidth: "290px",
                }}
              >
                {isTa
                  ? "வி.எஸ். ஆர்கானிக்ஸ்: நீங்கள் நம்பும் தரம். நீங்கள் எதிர்பார்க்கும் நியாயமான விலை. 10 கிளைகளுடன் நேரடி ஆலை விநியோகம்."
                  : "VS Organic brings traditional cold-pressed purity directly from our chekku mills to households, supermarkets & wholesale buyers across 10 branches in Bengaluru & South India."}
              </p>

              {/* Contact Details List */}
              <div style={{ display: "flex", flexDirection: "column", gap: "9px", marginBottom: "18px" }}>
                <a
                  href="tel:9150766377"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#141612",
                    fontSize: "13px",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  <Phone size={14} color="#9E6F1B" strokeWidth={2} />
                  <span>+91 9150766377 / 9655336376</span>
                </a>

                <a
                  href="mailto:orders@vsorganic.com"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#555750",
                    fontSize: "12.5px",
                    textDecoration: "none",
                  }}
                >
                  <Mail size={14} color="#9E6F1B" strokeWidth={2} />
                  <span>orders@vsorganic.com</span>
                </a>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px",
                    color: "#555750",
                    fontSize: "12px",
                    lineHeight: 1.45,
                  }}
                >
                  <MapPin size={15} color="#9E6F1B" strokeWidth={2} style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span>
                    Bengaluru Central Hub & 10 Regional Mills in Bengaluru, Coimbatore, Salem & South India
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#555750",
                    fontSize: "12px",
                  }}
                >
                  <Clock size={14} color="#9E6F1B" strokeWidth={2} />
                  <span>Mon – Sat: 8:00 AM – 8:30 PM (Sun: 9 AM - 2 PM)</span>
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <span
                  style={{
                    fontSize: "10.5px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#9E6F1B",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  {isTa ? "சமூக வலைத்தளங்கள்" : "CONNECT WITH US"}
                </span>

                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/919150766377"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #ECE7DD",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#141612",
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                    title="WhatsApp"
                    aria-label="WhatsApp"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #ECE7DD",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#141612",
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                    title="Instagram"
                    aria-label="Instagram"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #ECE7DD",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#141612",
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                    title="Facebook"
                    aria-label="Facebook"
                  >
                    <span style={{ fontSize: "14px", fontWeight: 700 }}>f</span>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #ECE7DD",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#141612",
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                    title="YouTube"
                    aria-label="YouTube"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Products Lineup */}
            <div>
              <h4
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#141612",
                  marginBottom: "16px",
                }}
              >
                {isTa ? "எங்கள் தயாரிப்புகள்" : "OUR PRODUCTS"}
              </h4>

              <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <li>
                  <a href="#products" style={{ fontSize: "12.5px", color: "#555750", textDecoration: "none" }}>
                    {isTa ? "மரச்செக்கு கடலை எண்ணெய்" : "Groundnut Oil (Kadalai)"}
                  </a>
                </li>
                <li>
                  <a href="#products" style={{ fontSize: "12.5px", color: "#555750", textDecoration: "none" }}>
                    {isTa ? "மரச்செக்கு நல்லெண்ணெய்" : "Sesame Oil (Gingelly)"}
                  </a>
                </li>
                <li>
                  <a href="#products" style={{ fontSize: "12.5px", color: "#555750", textDecoration: "none" }}>
                    {isTa ? "மரச்செக்கு தேங்காய் எண்ணெய்" : "Pure Coconut Oil (Copra)"}
                  </a>
                </li>
                <li>
                  <a href="#products" style={{ fontSize: "12.5px", color: "#555750", textDecoration: "none" }}>
                    {isTa ? "சுத்தமான பசு நெய்" : "Pure Cow Ghee (Danedar)"}
                  </a>
                </li>
                <li>
                  <a href="#products" style={{ fontSize: "12.5px", color: "#555750", textDecoration: "none" }}>
                    {isTa ? "நாட்டு சர்க்கரை" : "Organic Jaggery Powder"}
                  </a>
                </li>
                <li>
                  <a href="#products" style={{ fontSize: "12.5px", color: "#555750", textDecoration: "none" }}>
                    {isTa ? "பாரம்பரிய அச்சு வெல்லம்" : "Traditional Achu Jaggery"}
                  </a>
                </li>
                <li>
                  <a href="#packaging" style={{ fontSize: "12.5px", color: "#9E6F1B", fontWeight: 700, textDecoration: "none" }}>
                    {isTa ? "15kg வணிக டின் மொத்த சப்ளை →" : "15kg / 16L Bulk Tins →"}
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Customer Support & Help */}
            <div>
              <h4
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#141612",
                  marginBottom: "16px",
                }}
              >
                {isTa ? "வாடிக்கையாளர் ஆதரவு" : "SUPPORT & HELP"}
              </h4>

              <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <li>
                  <a href="#branches" style={{ fontSize: "12.5px", color: "#555750", textDecoration: "none" }}>
                    {isTa ? "10 கிளைகளின் முகவரிகள்" : "10 Regional Branches Locator"}
                  </a>
                </li>
                <li>
                  <a href="#wholesale" style={{ fontSize: "12.5px", color: "#555750", textDecoration: "none" }}>
                    {isTa ? "B2B மொத்த விலை கணிப்பான்" : "Wholesale B2B Rate Estimator"}
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setActivePolicy("shipping")}
                    style={{ background: "none", border: "none", padding: 0, textAlign: "left", fontSize: "12.5px", color: "#555750", cursor: "pointer" }}
                  >
                    {isTa ? "டெலிவரி & கண்காணிப்பு" : "Track Order & Delivery"}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onOpenEnquiry()}
                    style={{ background: "none", border: "none", padding: 0, textAlign: "left", fontSize: "12.5px", color: "#555750", cursor: "pointer" }}
                  >
                    {isTa ? "ஆலை நேரடி விசாரணை" : "Direct Mill Consultation"}
                  </button>
                </li>
                <li>
                  <a href="#about" style={{ fontSize: "12.5px", color: "#555750", textDecoration: "none" }}>
                    {isTa ? "மரச்செக்கு பாரம்பரியம் & ஆலை" : "Heritage & Extraction Process"}
                  </a>
                </li>
                <li>
                  <a href="tel:9150766377" style={{ fontSize: "12.5px", color: "#9E6F1B", fontWeight: 700, textDecoration: "none" }}>
                    {isTa ? "உடனடி உதவி எண்: 9150766377" : "Helpline: +91 9150766377"}
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Policies & Safety Compliance */}
            <div>
              <h4
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#141612",
                  marginBottom: "16px",
                }}
              >
                {isTa ? "கொள்கைகள் & பாதுகாப்பு" : "POLICIES & SAFETY"}
              </h4>

              <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <li>
                  <button
                    onClick={() => setActivePolicy("shipping")}
                    style={{ background: "none", border: "none", padding: 0, textAlign: "left", fontSize: "12.5px", color: "#555750", cursor: "pointer" }}
                  >
                    {isTa ? "விநியோகம் & டெலிவரி கொள்கை" : "Shipping & Delivery Policy"}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActivePolicy("returns")}
                    style={{ background: "none", border: "none", padding: 0, textAlign: "left", fontSize: "12.5px", color: "#555750", cursor: "pointer" }}
                  >
                    {isTa ? "பொருளை மாற்றுதல் & ரீபண்ட்" : "Return & Refund Policy"}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActivePolicy("privacy")}
                    style={{ background: "none", border: "none", padding: 0, textAlign: "left", fontSize: "12.5px", color: "#555750", cursor: "pointer" }}
                  >
                    {isTa ? "தனியுரிமை கொள்கை" : "Privacy & Cookie Policy"}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActivePolicy("terms")}
                    style={{ background: "none", border: "none", padding: 0, textAlign: "left", fontSize: "12.5px", color: "#555750", cursor: "pointer" }}
                  >
                    {isTa ? "விதிமுறைகள் & நிபந்தனைகள்" : "Terms & Conditions"}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActivePolicy("fssai")}
                    style={{ background: "none", border: "none", padding: 0, textAlign: "left", fontSize: "12.5px", color: "#166534", fontWeight: 700, cursor: "pointer" }}
                  >
                    {isTa ? "FSSAI உணவு பாதுகாப்பு தரச்சான்று" : "FSSAI License & Lab Tests ✓"}
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 5: Payments & Trust Badges */}
            <div>
              <h4
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#141612",
                  marginBottom: "16px",
                }}
              >
                {isTa ? "பணம் செலுத்தும் முறைகள்" : "WE ACCEPT"}
              </h4>

              {/* Payment Method Badges */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                  marginBottom: "18px",
                }}
              >
                {["UPI", "GPay", "PhonePe", "Paytm", "NEFT / RTGS", "Cash on Delivery"].map((pay) => (
                  <span
                    key={pay}
                    style={{
                      padding: "4px 9px",
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #ECE7DD",
                      borderRadius: "4px",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "#141612",
                    }}
                  >
                    {pay}
                  </span>
                ))}
              </div>

              {/* Quality & Safety Assurance Box */}
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E8DECC",
                  borderRadius: "12px",
                  padding: "16px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
                  <Award size={16} color="#9E6F1B" strokeWidth={2} />
                  <span style={{ fontSize: "11px", fontWeight: 800, color: "#9E6F1B", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    100% WOOD-PRESSED
                  </span>
                </div>
                <p style={{ fontSize: "11.5px", color: "#6B6E66", margin: 0, lineHeight: 1.5 }}>
                  {isTa
                    ? "பாரம்பரிய வாகை மரச்செக்கு • ஜீரோ ரசாயனங்கள் • அரசு FSSAI பதிவு செய்யப்பட்டது"
                    : "Traditional Vagai wood chekkus • <45°C cold pressing • Zero chemicals or palm oil blends"}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright, Tagline & Back to Top */}
          <div
            style={{
              paddingTop: "24px",
              borderTop: "1px solid #ECE7DD",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "14px",
              fontSize: "12px",
              color: "#84877E",
            }}
          >
            <div>
              <span>© 2026 VS Organic Chekku Oil. All Rights Reserved.</span>
              <span style={{ margin: "0 8px" }}>•</span>
              <span>Founded 2018</span>
            </div>

            <div style={{ color: "#9E6F1B", fontWeight: 700 }}>
              {isTa
                ? "V.S. Organic – தரத்தை நம்புங்கள். நியாயமான விலையைப் பெறுங்கள்."
                : "V.S. Organic – Quality You Trust. Prices You Deserve."}
            </div>

            <button
              onClick={scrollToTop}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: "#FFFFFF",
                border: "1px solid #ECE7DD",
                borderRadius: "20px",
                padding: "6px 14px",
                color: "#141612",
                fontWeight: 600,
                fontSize: "11.5px",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={13} strokeWidth={2} />
            </button>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 1100px) {
            .lux-footer-grid {
              grid-template-columns: 1fr 1fr 1fr !important;
              gap: 28px !important;
            }
            .footer-trust-strip {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 680px) {
            .lux-footer-grid {
              grid-template-columns: 1fr !important;
              gap: 28px !important;
            }
            .footer-trust-strip {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </footer>

      {/* Policy Modal Viewer */}
      {activePolicy && (
        <PolicyModal
          isOpen={true}
          onClose={() => setActivePolicy(null)}
          policyType={activePolicy}
        />
      )}
    </>
  );
}
