"use client";

import React from "react";
import { X, ShieldCheck, Truck, RefreshCw, FileText, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export type PolicyType = "shipping" | "returns" | "privacy" | "terms" | "fssai";

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  policyType: PolicyType;
}

export default function PolicyModal({ isOpen, onClose, policyType }: PolicyModalProps) {
  const { language } = useLanguage();
  const isTa = language === "ta";

  if (!isOpen) return null;

  const POLICY_DATA: Record<
    PolicyType,
    { titleEn: string; titleTa: string; icon: React.ReactNode; contentEn: React.ReactNode; contentTa: React.ReactNode }
  > = {
    shipping: {
      titleEn: "Shipping & Delivery Policy",
      titleTa: "விநியோகம் & டெலிவரி கொள்கை",
      icon: <Truck size={22} strokeWidth={1.8} color="#9E6F1B" />,
      contentEn: (
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "13px", lineHeight: 1.6, color: "#3D4039" }}>
          <p>
            <strong>Direct Chekku Mill Dispatch:</strong> All orders are freshly pressed, naturally settled, and packed in food-grade bottles or sturdy commercial tins directly from our processing facilities.
          </p>
          <p>
            <strong>Local Delivery (Bengaluru & Urban Hubs):</strong> Dispatched within 24 hours. Estimated doorstep arrival in 24–48 hours. Orders above ₹499 enjoy 100% Free Express Delivery.
          </p>
          <p>
            <strong>Regional & Inter-State Shipping:</strong> Express logistics partners cover Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala within 2 to 4 working days.
          </p>
          <p>
            <strong>Commercial 15kg / 16L Tins Wholesale Transport:</strong> Shipped via dedicated freight cargo or direct mill vehicle dispatch. Real-time lorry receipt (LR) and tracking details are shared on WhatsApp.
          </p>
          <p>
            <strong>Free Branch Pickup:</strong> Pick up directly from any of our 10 regional hubs (Bengaluru, Coimbatore, Salem, Madurai, Tirupur, Trichy) with zero shipping fees.
          </p>
        </div>
      ),
      contentTa: (
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "13px", lineHeight: 1.6, color: "#3D4039" }}>
          <p>
            <strong>நேரடி ஆலை விநியோகம்:</strong> அனைத்து எண்ணெய்களும் பாரம்பரிய மரச்செக்கில் பிழியப்பட்டு, இயற்கை முறையில் தெளிய வைக்கப்பட்டு உடனுக்குடன் பாதுகாப்பாக பேக் செய்யப்படுகின்றன.
          </p>
          <p>
            <strong>பெங்களூரு & நகரப்புற டெலிவரி:</strong> 24 மணி நேரத்திற்குள் அனுப்பி வைக்கப்படும். 24–48 மணி நேரத்தில் உங்கள் இல்லம் வந்து சேரும். ₹499-க்கு மேற்பட்ட ஆர்டர்களுக்கு இலவச டெலிவரி.
          </p>
          <p>
            <strong>தென் மாநில விநியோகம்:</strong> தமிழ்நாடு, கர்நாடகா, ஆந்திரா மற்றும் கேரளா முழுவதும் 2 முதல் 4 வேலை நாட்களுக்குள் விரைவு கூரியர் மூலம் டெலிவரி செய்யப்படும்.
          </p>
          <p>
            <strong>15 கிலோ / 16 லிட்டர் வணிக டின் மொத்த விநியோகம்:</strong> லாரி டிரான்ஸ்போர்ட் மற்றும் ஆலை வாகனங்கள் மூலம் நேரடியாக கடைகள் மற்றும் உணவகங்களுக்கு அனுப்பப்படும்.
          </p>
        </div>
      ),
    },
    returns: {
      titleEn: "Return, Replacement & Refund Policy",
      titleTa: "திருப்பி அனுப்புதல் & பணத்தைத் திரும்பப் பெறுதல்",
      icon: <RefreshCw size={22} strokeWidth={1.8} color="#9E6F1B" />,
      contentEn: (
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "13px", lineHeight: 1.6, color: "#3D4039" }}>
          <p>
            <strong>Purity & Quality Commitment:</strong> If you receive a damaged container, broken seal, or find any defect during transit, we provide a 100% free immediate replacement or full refund within 7 days.
          </p>
          <p>
            <strong>Hassle-Free WhatsApp Claim:</strong> Simply take a quick photo of the package and WhatsApp our support team at <strong>+91 9150766377</strong>. We resolve requests within 4 business hours.
          </p>
          <p>
            <strong>Refund Processing:</strong> Refunds for cancelled or eligible returned orders are credited directly to your original payment method (UPI, bank account) within 2–3 business days.
          </p>
        </div>
      ),
      contentTa: (
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "13px", lineHeight: 1.6, color: "#3D4039" }}>
          <p>
            <strong>100% தர உத்தரவாதம்:</strong> டிரான்சிட்டின் போது சேதம் அடைந்திருந்தாலோ அல்லது பேக்கிங் சீல் உடைந்திருந்தாலோ 7 நாட்களுக்குள் உடனடி மாற்றுப் பொருள் அல்லது முழு பணத்தைத் திரும்பப் பெறலாம்.
          </p>
          <p>
            <strong>எளிய வாட்ஸ்அப் உதவி:</strong> பார்சலின் புகைப்படத்தை எடுத்து <strong>+91 9150766377</strong> என்ற வாட்ஸ்அப் எண்ணிற்கு அனுப்பினால் போதுமானது.
          </p>
        </div>
      ),
    },
    privacy: {
      titleEn: "Privacy & Data Protection Policy",
      titleTa: "தனியுரிமை மற்றும் தரவு பாதுகாப்பு கொள்கை",
      icon: <ShieldCheck size={22} strokeWidth={1.8} color="#9E6F1B" />,
      contentEn: (
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "13px", lineHeight: 1.6, color: "#3D4039" }}>
          <p>
            <strong>Customer Confidentiality:</strong> VS Organic values your trust. Your contact details, delivery address, and payment references are used strictly for order fulfillment, dispatch communication, and invoice generation.
          </p>
          <p>
            <strong>Zero Third-Party Sharing:</strong> We do not sell, rent, or lease your personal data to marketing brokers or third parties under any circumstances.
          </p>
          <p>
            <strong>Bank-Grade Encryption:</strong> All checkout sessions and payment communications are encrypted with 256-bit SSL protocols.
          </p>
        </div>
      ),
      contentTa: (
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "13px", lineHeight: 1.6, color: "#3D4039" }}>
          <p>
            <strong>வாடிக்கையாளர் தகவல் பாதுகாப்பு:</strong> உங்கள் பெயர், முகவரி மற்றும் தொலைபேசி எண்கள் ஆர்டரை டெலிவரி செய்ய மட்டுமே பயன்படுத்தப்படுகின்றன.
          </p>
          <p>
            எந்தவொரு சூழ்நிலையிலும் வாடிக்கையாளர் தகவல்கள் மூன்றாம் நபர்களுக்கோ அல்லது விளம்பர நிறுவனங்களுக்கோ பகிரப்பட மாட்டாது.
          </p>
        </div>
      ),
    },
    terms: {
      titleEn: "Terms of Service & Wholesale Guidelines",
      titleTa: "சேவை விதிமுறைகள் & மொத்த விற்பனை வழிகாட்டி",
      icon: <FileText size={22} strokeWidth={1.8} color="#9E6F1B" />,
      contentEn: (
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "13px", lineHeight: 1.6, color: "#3D4039" }}>
          <p>
            <strong>Traditional Natural Variations:</strong> As cold-pressed oils are 100% unbleached and unrefined, natural sediment, seed aroma, and golden amber tone variations may naturally occur across crop seasons.
          </p>
          <p>
            <strong>Commercial Bulk Wholesale Pricing:</strong> Minimum wholesale orders for 15kg / 16L commercial tins and 25kg jaggery sacks are subject to real-time mandi raw material market rates. Quotations remain valid for 48 hours.
          </p>
          <p>
            <strong>Jurisdiction:</strong> All commercial orders and digital interactions are subject to the legal jurisdiction of Bengaluru, Karnataka, India.
          </p>
        </div>
      ),
      contentTa: (
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "13px", lineHeight: 1.6, color: "#3D4039" }}>
          <p>
            <strong>பாரம்பரிய இயற்கை உற்பத்தி:</strong> மரச்செக்கு எண்ணெய்களில் எந்தவித ரசாயன சுத்திகரிப்பும் செய்யப்படாததால், பருவநிலைக்கு ஏற்ப லேசான வண்டல் மற்றும் இயற்கை வாசனை மாறுபாடுகள் இயல்பானவை.
          </p>
          <p>
            <strong>வணிக மொத்த கொள்முதல்:</strong> 15 கிலோ டின் மற்றும் மொத்த கொள்முதல்களுக்கு சந்தை நிலவரப்படி கூடுதல் தள்ளுபடி விலைகள் வாட்ஸ்அப் மூலம் உடனடியாக வழங்கப்படுகிறது.
          </p>
        </div>
      ),
    },
    fssai: {
      titleEn: "FSSAI Food Safety & Lab Certification",
      titleTa: "FSSAI உணவு பாதுகாப்பு & ஆய்வுக்கூட சான்றிதழ்",
      icon: <Award size={22} strokeWidth={1.8} color="#9E6F1B" />,
      contentEn: (
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "13px", lineHeight: 1.6, color: "#3D4039" }}>
          <p>
            <strong>100% Traditional Wood Chekku Standard:</strong> Extracted in authentic Vagai wooden mortars at low room temperatures (&lt;45°C), ensuring zero thermal degradation of vital vitamins (Vitamin E, Phytosterols) and zero chemical refining.
          </p>
          <p>
            <strong>FSSAI Registered Processing:</strong> All VS Organic processing and packing hubs strictly adhere to Food Safety and Standards Authority of India (FSSAI) hygiene and quality protocols.
          </p>
          <p>
            <strong>Zero Adulteration Guarantee:</strong> Free from mineral oils, palm oil, argemone oil, synthetic fragrance, artificial coloring agents, or chemical preservatives.
          </p>
          <p>
            <strong>Batch Testing:</strong> Every batch is tested for acid value, moisture level, refractive index, and peroxide value to ensure supreme kitchen freshness.
          </p>
        </div>
      ),
      contentTa: (
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "13px", lineHeight: 1.6, color: "#3D4039" }}>
          <p>
            <strong>வாகை மரச்செக்கு தர நிர்ணயம்:</strong> 45°C-க்கு குறைவான வெப்பநிலையில் வாகை மரச்செக்கில் பிழியப்பட்டு இயற்கையான சத்துக்கள் முழுமையாக பாதுகாக்கப்படுகின்றன.
          </p>
          <p>
            <strong>FSSAI உணவு பாதுகாப்பு தரச்சான்று:</strong> எங்கள் 10 கிளைகளிலும் இந்திய உணவு பாதுகாப்பு மற்றும் தர நிர்ணய ஆணையத்தின் (FSSAI) விதிமுறைகள் முழுமையாக பின்பற்றப்படுகின்றன.
          </p>
          <p>
            <strong>கலப்படமற்ற தூய்மை:</strong> பாமாயில், மினரல் ஆயில், பிரிசர்வேட்டிவ்ஸ் மற்றும் நிறமூட்டிகள் முற்றிலும் அற்றது.
          </p>
        </div>
      ),
    },
  };

  const current = POLICY_DATA[policyType];

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 130,
        backgroundColor: "rgba(0, 0, 0, 0.55)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "580px",
          backgroundColor: "#FFFFFF",
          borderRadius: "18px",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.18)",
          overflow: "hidden",
          maxHeight: "85vh",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: "18px 24px",
            borderBottom: "1px solid #EFECE6",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#FAF8F5",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                backgroundColor: "#FAF4E8",
                border: "1px solid #ECE7DD",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {current.icon}
            </span>
            <div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#141612", margin: 0 }}>
                {isTa ? current.titleTa : current.titleEn}
              </h3>
              <span style={{ fontSize: "11px", color: "#84877E" }}>
                VS Organic Chekku Oils • Quality & Trust
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              backgroundColor: "#FFFFFF",
              border: "1px solid #ECE7DD",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#141612",
            }}
          >
            <X size={16} strokeWidth={2} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: "24px", overflowY: "auto", flex: 1 }}>
          {isTa ? current.contentTa : current.contentEn}
        </div>

        {/* Footer */}
        <div
          style={{
            padding: "14px 24px",
            borderTop: "1px solid #EFECE6",
            backgroundColor: "#FAF8F5",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button
            onClick={onClose}
            className="btn-cta btn-cta-primary btn-cta-sm"
          >
            {isTa ? "மூடுக" : "Close"}
          </button>
        </div>
      </div>
    </div>
  );
}
