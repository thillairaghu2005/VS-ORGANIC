"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, ShoppingBag, FileText } from "lucide-react";

interface FloatingCTAProps {
  onOpenEnquiry: () => void;
}

export default function FloatingCTA({ onOpenEnquiry }: FloatingCTAProps) {
  const { totalItems, setIsCartOpen } = useCart();
  const { language } = useLanguage();
  const isTa = language === "ta";

  const whatsappMessage = encodeURIComponent(
    isTa
      ? "வணக்கம், வி.எஸ் ஆர்கானிக்ஸ் மரச்செக்கு எண்ணெய் விலை மற்றும் விநியோக விவரங்கள் அறிய விரும்புகிறேன்."
      : "Hello VS Organic, I would like to enquire about your cold-pressed oils and commercial mill rates."
  );

  return (
    <>
      {/* ========================================================= */}
      {/* DESKTOP FLOATING PILL (> 768px)                          */}
      {/* ========================================================= */}
      <div className="desktop-floating-cta">
        {/* WhatsApp Fast Trigger */}
        <a
          href={`https://wa.me/919150766377?text=${whatsappMessage}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            backgroundColor: "#25D366",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 6px 20px rgba(37, 211, 102, 0.38)",
            transition: "all 0.25s ease",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.08) translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1) translateY(0)";
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>

        {/* Wholesale Enquiry Pill */}
        <button
          onClick={onOpenEnquiry}
          aria-label="Open Wholesale Enquiry"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "9px",
            backgroundColor: "#9E6F1B",
            color: "#FFFFFF",
            fontFamily: "var(--font-inter)",
            fontSize: "13px",
            fontWeight: 600,
            padding: "13px 22px",
            borderRadius: "9999px",
            cursor: "pointer",
            border: "none",
            boxShadow: "0 8px 26px rgba(158, 111, 27, 0.36)",
            transition: "all 0.25s ease",
            letterSpacing: "0.01em",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#B88528";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#9E6F1B";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <FileText size={16} strokeWidth={2} />
          <span>{isTa ? "மொத்த விலை கோரிக்கை" : "Wholesale Enquiry"}</span>
        </button>
      </div>

      {/* ========================================================= */}
      {/* MOBILE DOCKED BOTTOM ACTION BAR (<= 768px)               */}
      {/* ========================================================= */}
      <nav aria-label="Mobile Quick Actions" className="mobile-bottom-bar">
        {/* 1. Direct Tap-to-Call */}
        <a
          href="tel:9150766377"
          className="mobile-bar-action"
          aria-label="Call Mill"
        >
          <div className="mobile-bar-icon-wrap">
            <Phone size={18} strokeWidth={2.2} />
          </div>
          <span className="mobile-bar-label">{isTa ? "அழைக்க" : "Call"}</span>
        </a>

        {/* 2. Direct WhatsApp Chat */}
        <a
          href={`https://wa.me/919150766377?text=${whatsappMessage}`}
          target="_blank"
          rel="noreferrer"
          className="mobile-bar-action"
          aria-label="WhatsApp Mill"
        >
          <div className="mobile-bar-icon-wrap whatsapp-icon-wrap">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </div>
          <span className="mobile-bar-label">WhatsApp</span>
        </a>

        {/* 3. Wholesale Enquiry Modal Trigger (Highlighted Primary Pill) */}
        <button
          onClick={onOpenEnquiry}
          className="mobile-bar-action mobile-bar-primary"
          aria-label="Wholesale Rates"
        >
          <div className="mobile-bar-primary-inner">
            <FileText size={17} strokeWidth={2.2} />
            <span className="mobile-primary-label">
              {isTa ? "மொத்த விலை" : "Wholesale"}
            </span>
          </div>
        </button>

        {/* 4. Cart / Shopping Bag Drawer Trigger */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="mobile-bar-action"
          aria-label="Open Shopping Bag"
        >
          <div className="mobile-bar-icon-wrap" style={{ position: "relative" }}>
            <ShoppingBag size={18} strokeWidth={2.2} />
            {totalItems > 0 && (
              <span className="mobile-bar-badge">{totalItems}</span>
            )}
          </div>
          <span className="mobile-bar-label">{isTa ? "கார்ட்" : "Bag"}</span>
        </button>
      </nav>

      <style jsx>{`
        /* Desktop Floating Position */
        .desktop-floating-cta {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 90;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        /* Mobile Docked Bottom Bar */
        .mobile-bottom-bar {
          display: none;
        }

        @media (max-width: 768px) {
          .desktop-floating-cta {
            display: none !important;
          }

          .mobile-bottom-bar {
            display: grid !important;
            grid-template-columns: 1fr 1fr 1.6fr 1fr;
            align-items: center;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 95;
            background-color: rgba(255, 255, 255, 0.96);
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
            border-top: 1px solid #E8E2D5;
            padding: 7px 10px calc(7px + env(safe-area-inset-bottom, 0px)) 10px;
            box-shadow: 0 -4px 22px rgba(20, 22, 18, 0.08);
          }

          .mobile-bar-action {
            display: flex;
            flex-direction: column;
            align-items: center;
            justifyContent: center;
            background: none;
            border: none;
            padding: 5px 4px;
            color: #555750;
            text-decoration: none;
            cursor: pointer;
            transition: transform 0.15s ease, color 0.15s ease;
            -webkit-tap-highlight-color: transparent;
            user-select: none;
          }

          .mobile-bar-action:active {
            transform: scale(0.93);
            color: #9E6F1B;
          }

          .mobile-bar-icon-wrap {
            width: 32px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #141612;
          }

          .whatsapp-icon-wrap {
            color: #16A34A;
          }

          .mobile-bar-label {
            font-size: 10.5px;
            font-weight: 600;
            letter-spacing: 0.01em;
            margin-top: 2px;
            color: #6B6E66;
            white-space: nowrap;
          }

          .mobile-bar-primary {
            padding: 0 4px;
          }

          .mobile-bar-primary-inner {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            background: linear-gradient(135deg, #B88528 0%, #9E6F1B 100%);
            color: #FFFFFF;
            padding: 10px 14px;
            border-radius: 9999px;
            box-shadow: 0 3px 12px rgba(158, 111, 27, 0.35);
            width: 100%;
          }

          .mobile-primary-label {
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.02em;
            white-space: nowrap;
          }

          .mobile-bar-badge {
            position: absolute;
            top: -2px;
            right: -6px;
            background-color: #9E6F1B;
            color: #FFFFFF;
            font-size: 10px;
            font-weight: 800;
            width: 17px;
            height: 17px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid #FFFFFF;
          }
        }
      `}</style>
    </>
  );
}