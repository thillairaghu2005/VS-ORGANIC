"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, ArrowRight, CheckCircle2, FileSpreadsheet, ShieldCheck } from "lucide-react";

export default function NewsletterWholesaleBar() {
  const { language } = useLanguage();
  const isTa = language === "ta";
  const [contactInput, setContactInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactInput.trim()) return;
    setSubmitted(true);
    const message = isTa
      ? `*வி.எஸ் ஆர்கானிக் - வாராந்திர மொத்த விலைப்பட்டியல் கோரிக்கை*\nவாடிக்கையாளர் தொடர்பு: ${contactInput}\nதயவுசெய்து உங்கள் 15kg டின் மற்றும் சில்லறை பாட்டில் மொத்த விலை பட்டியலை பகிரவும்.`
      : `*VS ORGANIC - WHOLESALE RATE SHEET REQUEST*\nContact: ${contactInput}\nPlease share your weekly commercial 15kg tin and bottled rate sheet.`;
    window.open(`https://wa.me/919150766377?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section
      style={{
        paddingTop: "24px",
        paddingBottom: "56px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div className="site-container">
        <div
          style={{
            backgroundColor: "#F5EFE6",
            border: "1px solid #D8CFBF",
            borderRadius: "20px",
            padding: "38px 44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "28px",
            flexWrap: "wrap",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 6px 24px rgba(0, 0, 0, 0.03)",
          }}
          className="newsletter-bar-box"
        >
          {/* Left Title & Description */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px", maxWidth: "600px" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                backgroundColor: "#FFFFFF",
                border: "1px solid #ECE7DD",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#9E6F1B",
                flexShrink: 0,
                boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
              }}
            >
              <FileSpreadsheet size={26} strokeWidth={1.8} />
            </div>

            <div>
              <span
                style={{
                  fontSize: "10.5px",
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  color: "#9E6F1B",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                {isTa ? "வாராந்திர ஆலை விலைப்பட்டியல் • B2B & சில்லறை" : "WEEKLY MILL RATE SHEET • B2B & RETAIL"}
              </span>

              <h3
                className="font-serif"
                style={{
                  fontSize: "clamp(20px, 2.4vw, 24px)",
                  fontWeight: 700,
                  color: "#141612",
                  marginBottom: "6px",
                  lineHeight: 1.25,
                }}
              >
                {isTa ? "நேரடி ஆலை மில் விலைப் பட்டியல் பெறவும்" : "Get Real-Time Mill Rates & Harvest Updates"}
              </h3>

              <p
                style={{
                  fontSize: "13px",
                  color: "#6B6E66",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {isTa
                  ? "சூப்பர் மார்க்கெட்டுகள், மளிகை கடைகள் மற்றும் உணவகங்களுக்கான வாராந்திர 15kg வணிக டின் தள்ளுபடி விலைப் பட்டியல்."
                  : "Direct updates on peanut harvest batches, sesame crush runs, and tiered multi-tin commercial discounts."}
              </p>
            </div>
          </div>

          {/* Right Form & Perks */}
          <div style={{ flex: 1, maxWidth: "460px", minWidth: "260px", width: "100%" }}>
            <form
              onSubmit={handleSubmit}
              className="newsletter-form"
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: "40px",
                padding: "5px 5px 5px 20px",
                border: "1px solid #D5CEBF",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                marginBottom: "10px",
              }}
            >
              <input
                type="text"
                placeholder={
                  isTa
                    ? "மொபைல் எண் அல்லது மின்னஞ்சல்..."
                    : "WhatsApp number or email address..."
                }
                value={contactInput}
                onChange={(e) => setContactInput(e.target.value)}
                required
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  fontSize: "13px",
                  fontFamily: "var(--font-inter)",
                  backgroundColor: "transparent",
                  color: "#141612",
                }}
              />

              <button
                type="submit"
                className="btn-cta btn-cta-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "11px 22px",
                  fontSize: "12px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  border: "none",
                }}
              >
                {submitted ? (
                  <>
                    <CheckCircle2 size={14} color="#22C55E" />
                    <span>{isTa ? "அனுப்பப்பட்டது" : "Sent!"}</span>
                  </>
                ) : (
                  <>
                    <span>{isTa ? "விலை பெற" : "Request Rates"}</span>
                    <ArrowRight size={14} strokeWidth={2.2} />
                  </>
                )}
              </button>
            </form>

            <div style={{ display: "flex", gap: "12px", alignItems: "center", fontSize: "11px", color: "#7A7C75", flexWrap: "wrap" }}>
              <span>✓ Updated Every Monday</span>
              <span>•</span>
              <span>✓ 15kg Mill Rates</span>
              <span>•</span>
              <span>✓ Zero Spam</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .newsletter-bar-box {
            padding: 30px 24px !important;
          }
        }
        @media (max-width: 540px) {
          .newsletter-bar-box {
            padding: 22px 16px !important;
            border-radius: 16px !important;
            gap: 18px !important;
          }
          .newsletter-form {
            flex-direction: column !important;
            border-radius: 14px !important;
            padding: 8px !important;
            gap: 8px !important;
            align-items: stretch !important;
          }
          .newsletter-form input {
            width: 100% !important;
            padding: 10px 12px !important;
            font-size: 14px !important;
          }
          .newsletter-form button {
            width: 100% !important;
            justify-content: center !important;
            padding: 12px 18px !important;
          }
        }
      `}</style>
    </section>
  );
}
