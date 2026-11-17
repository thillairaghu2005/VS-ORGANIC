"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Calculator,
  Phone,
  Package,
  Truck,
  ShieldCheck,
  TrendingDown,
  Building2,
  MapPin,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Sliders,
  Check,
} from "lucide-react";

export default function WholesaleCalculator() {
  const { language } = useLanguage();
  const isTa = language === "ta";

  const productOptions = [
    {
      id: "groundnut",
      nameEn: "Wood Pressed Groundnut Oil",
      nameTa: "மரச்செக்கு கடலை எண்ணெய்",
      shortEn: "Groundnut Oil",
      shortTa: "கடலை எண்ணெய்",
      tinBasePrice: 2950,
      bottleBasePrice: 220,
      color: "#D49C36",
    },
    {
      id: "sesame",
      nameEn: "Traditional Chekku Sesame Oil",
      nameTa: "மரச்செக்கு நல்லெண்ணெய்",
      shortEn: "Sesame Gingelly Oil",
      shortTa: "நல்லெண்ணெய்",
      tinBasePrice: 5400,
      bottleBasePrice: 380,
      color: "#8C5C20",
    },
    {
      id: "coconut",
      nameEn: "Pure Chekku Coconut Oil",
      nameTa: "மரச்செக்கு தேங்காய் எண்ணெய்",
      shortEn: "Copra Coconut Oil",
      shortTa: "தேங்காய் எண்ணெய்",
      tinBasePrice: 3600,
      bottleBasePrice: 260,
      color: "#9E6F1B",
    },
    {
      id: "ghee",
      nameEn: "Pure Desi Cow Ghee (Danedar)",
      nameTa: "சுத்தமான பசு நெய்",
      shortEn: "Granular Cow Ghee",
      shortTa: "தூய பசு நெய்",
      tinBasePrice: 9200,
      bottleBasePrice: 680,
      color: "#C48A27",
    },
    {
      id: "jaggery-pow",
      nameEn: "Organic Jaggery Powder",
      nameTa: "நாட்டு சர்க்கரை / வெல்ல தூள்",
      shortEn: "Jaggery Powder",
      shortTa: "நாட்டு சர்க்கரை",
      tinBasePrice: 2050,
      bottleBasePrice: 85,
      color: "#965F2F",
    },
    {
      id: "jaggery-solid",
      nameEn: "Traditional Achu Jaggery",
      nameTa: "பாரம்பரிய அச்சு வெல்லம்",
      shortEn: "Solid Achu Jaggery",
      shortTa: "அச்சு வெல்லம்",
      tinBasePrice: 2450,
      bottleBasePrice: 90,
      color: "#7A4C22",
    },
  ];

  const packOptions = [
    {
      id: "15kg_tin",
      labelEn: "15 kg / 16L Commercial Tin",
      labelTa: "15 கிலோ / 16 லிட்டர் வணிக டின்",
      shortEn: "15kg / 16L Tin",
      shortTa: "16லி வணிக டின்",
      badgeEn: "Wholesale Bestseller",
      badgeTa: "அதிக விற்பனை",
      multiplier: 1,
    },
    {
      id: "5L_can",
      labelEn: "5 Litres Family Jerrycan",
      labelTa: "5 லிட்டர் கேன்",
      shortEn: "5L Jerrycan",
      shortTa: "5 லிட்டர் கேன்",
      badgeEn: "Pantry Bulk",
      badgeTa: "குடும்ப பயன்பாடு",
      multiplier: 0.38,
    },
    {
      id: "1L_bottle",
      labelEn: "1L Bottle (Case of 12)",
      labelTa: "1L பாட்டில் (12 பாட்டில்கள் பெட்டி)",
      shortEn: "1L Case (12 pcs)",
      shortTa: "1L பெட்டி (12)",
      badgeEn: "Retail Ready",
      badgeTa: "சில்லறை பெட்டி",
      multiplier: 0.85,
    },
    {
      id: "0.5L_bottle",
      labelEn: "0.5L Bottle (Case of 24)",
      labelTa: "அரை லிட்டர் (24 பாட்டில்கள்)",
      shortEn: "0.5L Case (24 pcs)",
      shortTa: "0.5L பெட்டி (24)",
      badgeEn: "Trial Pack",
      badgeTa: "சோதனை பேக்",
      multiplier: 0.9,
    },
    {
      id: "bulk_sack",
      labelEn: "Bulk Commercial Sacks (25kg - 50kg)",
      labelTa: "மொத்த மூட்டைகள் (25kg - 50kg)",
      shortEn: "Bulk Sacks",
      shortTa: "மொத்த மூட்டை",
      badgeEn: "Bulk Grain/Sweet",
      badgeTa: "வணிக மூட்டை",
      multiplier: 1.1,
    },
  ];

  const buyerTypes = [
    { labelEn: "Supermarkets & Retail Chains", labelTa: "சூப்பர் மார்க்கெட் & சில்லறை வணிகம்" },
    { labelEn: "Organic Grocery Stores", labelTa: "ஆர்கானிக் மளிகை அங்காடிகள்" },
    { labelEn: "Restaurant / Commercial Kitchen", labelTa: "உணவகம் & வணிக சமையலறை" },
    { labelEn: "Sweet & Bakery Manufacturer", labelTa: "இனிப்பகம் & பேக்கரி உற்பத்தி" },
    { labelEn: "Regional Wholesale Distributor", labelTa: "பிராந்திய மொத்த விநியோகஸ்தர்" },
  ];

  const [selectedProductId, setSelectedProductId] = useState(productOptions[0].id);
  const [selectedPackId, setSelectedPackId] = useState(packOptions[0].id);
  const [quantity, setQuantity] = useState<number>(20);
  const [buyerTypeIndex, setBuyerTypeIndex] = useState(0);
  const [destinationCity, setDestinationCity] = useState("Bengaluru");
  const [contactNumber, setContactNumber] = useState("");

  const currentProduct =
    productOptions.find((p) => p.id === selectedProductId) || productOptions[0];
  const currentProductName = isTa ? currentProduct.nameTa : currentProduct.nameEn;
  const currentPack =
    packOptions.find((p) => p.id === selectedPackId) || packOptions[0];
  const currentPackLabel = isTa ? currentPack.labelTa : currentPack.labelEn;
  const currentBuyerType = isTa
    ? buyerTypes[buyerTypeIndex].labelTa
    : buyerTypes[buyerTypeIndex].labelEn;

  // Tiered Volume Discount Calculation
  let discountPercent = 5;
  if (quantity >= 50) discountPercent = 18;
  else if (quantity >= 25) discountPercent = 12;
  else if (quantity >= 10) discountPercent = 8;

  const unitBasePrice = Math.round(currentProduct.tinBasePrice * currentPack.multiplier);
  const unitDiscountedPrice = Math.round(unitBasePrice * (1 - discountPercent / 100));
  const estimatedSubtotal = unitDiscountedPrice * quantity;
  const totalSavings = (unitBasePrice - unitDiscountedPrice) * quantity;

  const handleWhatsAppInquiry = () => {
    const text = isTa
      ? `*வி.எஸ் ஆர்கானிக் - B2B மொத்த கொள்முதல் விவரம்*\n--------------------------------\n• பொருள்: ${currentProductName}\n• பேக்கிங்: ${currentPackLabel}\n• எண்ணிக்கை: ${quantity} யூனிட்கள்\n• வணிக வகை: ${currentBuyerType}\n• டெலிவரி ஊர்: ${destinationCity}\n${contactNumber ? `• வாடிக்கையாளர் எண்: ${contactNumber}\n` : ""}--------------------------------\n• தோராய மில் விலை: ₹${estimatedSubtotal.toLocaleString("en-IN")} (தள்ளுபடி ${discountPercent}%)\n\nதயவுசெய்து நேரடி மில் ஆலை விலைப்பட்டியல் மற்றும் விநியோக காலத்தை தெரிவிக்கவும்.`
      : `*VS ORGANIC - B2B Wholesale Quotation Enquiry*\n--------------------------------\n• Product: ${currentProductName}\n• Packaging: ${currentPackLabel}\n• Quantity: ${quantity} Units\n• Business Type: ${currentBuyerType}\n• Delivery City: ${destinationCity}\n${contactNumber ? `• Contact: ${contactNumber}\n` : ""}--------------------------------\n• Estimated Quote: ₹${estimatedSubtotal.toLocaleString("en-IN")} (${discountPercent}% Tier Discount Applied)\n\nPlease share official mill quotation, freight schedule, and dispatch timeline.`;

    window.open(`https://wa.me/919150766377?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section
      id="wholesale"
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
            margin: "0 auto 44px auto",
          }}
        >
          <span className="eyebrow-text" style={{ display: "block", marginBottom: "8px" }}>
            {isTa ? "மொத்த வணிக கொள்முதல் & B2B விநியோகம்" : "B2B COMMERCIAL & WHOLESALE DISPATCH"}
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
            {isTa ? "B2B மொத்த விலை கணிப்பான்" : "Real-Time Wholesale Quotation Calculator"}
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
              ? "சூப்பர் மார்க்கெட்டுகள், மளிகை கடைகள், உணவகங்கள் மற்றும் பேக்கரிகளுக்கு நேரடி ஆலை மில் விலையில் 15 கிலோ டின் சப்ளை."
              : "Direct mill-gate quotations for retail chains, supermarkets, caterers, and grocers across South India with tiered volume pricing."}
          </p>
        </div>

        {/* 2-Column Split: Interactive Form Left & Live Estimate Card Right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.25fr 1fr",
            gap: "32px",
            alignItems: "stretch",
          }}
          className="calc-split-grid"
        >
          {/* Left Form Card (Atelier Style) */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "20px",
              padding: "34px",
              border: "1px solid #ECE7DD",
              boxShadow: "0 6px 24px rgba(0,0,0,0.03)",
              display: "flex",
              flexDirection: "column",
              gap: "22px",
            }}
          >
            {/* Form Top Title */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #F0EEE9",
                paddingBottom: "16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    backgroundColor: "#FAF4E8",
                    border: "1px solid #ECE7DD",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#9E6F1B",
                  }}
                >
                  <Calculator size={18} strokeWidth={2} />
                </span>
                <h3 style={{ fontSize: "16.5px", fontWeight: 700, color: "#141612", margin: 0 }}>
                  {isTa ? "கொள்முதல் அளவுருக்களை தேர்வு செய்யவும்" : "Configure Your Order Parameters"}
                </h3>
              </div>

              <span
                style={{
                  fontSize: "10.5px",
                  fontWeight: 800,
                  color: "#9E6F1B",
                  backgroundColor: "#FAF7F2",
                  padding: "4px 10px",
                  borderRadius: "14px",
                  border: "1px solid #ECE7DD",
                  letterSpacing: "0.06em",
                }}
              >
                MILL DIRECT
              </span>
            </div>

            {/* 1. Select Product with Visual Select Pills */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <label
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#9E6F1B",
                  }}
                >
                  {isTa ? "1. தயாரிப்பு தேர்வு" : "1. Select Chekku Product"}
                </label>
                <span style={{ fontSize: "11px", color: "#84877E", fontWeight: 600 }}>
                  {currentProduct.shortEn}
                </span>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "8px",
                }}
                className="product-pills-grid"
              >
                {productOptions.map((p) => {
                  const isSelected = selectedProductId === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedProductId(p.id)}
                      style={{
                        padding: "10px 12px",
                        borderRadius: "12px",
                        border: isSelected ? "1.5px solid #141612" : "1px solid #ECE7DD",
                        backgroundColor: isSelected ? "#FAF7F2" : "#FFFFFF",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        textAlign: "left",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: 700,
                          color: isSelected ? "#141612" : "#555750",
                          lineHeight: 1.25,
                          marginBottom: "4px",
                        }}
                      >
                        {isTa ? p.shortTa : p.shortEn}
                      </span>
                      <span
                        style={{
                          fontSize: "10.5px",
                          color: isSelected ? "#9E6F1B" : "#84877E",
                          fontWeight: 600,
                        }}
                      >
                        ₹{p.tinBasePrice} / 16L
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Packaging Format Options */}
            <div>
              <label
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#9E6F1B",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                {isTa ? "2. பேக்கிங் வடிவம் & அளவு" : "2. Packaging Format"}
              </label>

              <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                {packOptions.map((pack) => {
                  const isSelected = selectedPackId === pack.id;
                  return (
                    <div
                      key={pack.id}
                      onClick={() => setSelectedPackId(pack.id)}
                      style={{
                        padding: "10px 14px",
                        borderRadius: "12px",
                        border: isSelected ? "1.5px solid #141612" : "1px solid #ECE7DD",
                        backgroundColor: isSelected ? "#FAF7F2" : "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span
                          style={{
                            width: "16px",
                            height: "16px",
                            borderRadius: "50%",
                            border: isSelected ? "5px solid #141612" : "1.5px solid #D5D3CC",
                            backgroundColor: "#FFFFFF",
                            boxSizing: "border-box",
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            fontSize: "12.5px",
                            fontWeight: isSelected ? 700 : 500,
                            color: "#141612",
                          }}
                        >
                          {isTa ? pack.labelTa : pack.labelEn}
                        </span>
                      </div>

                      <span
                        style={{
                          fontSize: "10px",
                          fontWeight: 700,
                          color: isSelected ? "#9E6F1B" : "#84877E",
                          backgroundColor: isSelected ? "#FAF4E8" : "#FAF8F5",
                          padding: "3px 8px",
                          borderRadius: "10px",
                        }}
                      >
                        {isTa ? pack.badgeTa : pack.badgeEn}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Quantity with Slider & Chips */}
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <label
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#9E6F1B",
                  }}
                >
                  {isTa ? "3. கொள்முதல் எண்ணிக்கை (யூனிட்கள்)" : "3. Order Volume (Units)"}
                </label>

                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#166534",
                    backgroundColor: "#E6F8EB",
                    padding: "3px 8px",
                    borderRadius: "10px",
                  }}
                >
                  {discountPercent}% Tier Discount
                </span>
              </div>

              {/* Slider + Unit Number */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px" }}>
                <input
                  type="range"
                  min="5"
                  max="150"
                  step="5"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 5)}
                  style={{
                    flex: 1,
                    accentColor: "#141612",
                    height: "6px",
                    cursor: "pointer",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#FAF8F5",
                    border: "1px solid #ECE7DD",
                    borderRadius: "10px",
                    padding: "6px 12px",
                    minWidth: "90px",
                    justifyContent: "center",
                  }}
                >
                  <input
                    type="number"
                    min={5}
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    style={{
                      border: "none",
                      backgroundColor: "transparent",
                      fontWeight: 800,
                      fontSize: "16px",
                      color: "#141612",
                      width: "50px",
                      textAlign: "center",
                      outline: "none",
                    }}
                  />
                  <span style={{ fontSize: "11px", color: "#84877E", fontWeight: 700 }}>PCS</span>
                </div>
              </div>

              {/* Quick Volume Chips */}
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {[10, 25, 50, 100].map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => setQuantity(q)}
                    style={{
                      padding: "6px 14px",
                      fontSize: "11.5px",
                      fontWeight: 700,
                      borderRadius: "16px",
                      border: quantity === q ? "1.5px solid #141612" : "1px solid #ECE7DD",
                      backgroundColor: quantity === q ? "#141612" : "#FFFFFF",
                      color: quantity === q ? "#FFFFFF" : "#141612",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {q} Units {q >= 50 ? "(18% Off)" : q >= 25 ? "(12% Off)" : q >= 10 ? "(8% Off)" : ""}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Buyer Type & Delivery Destination */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
              <div>
                <label
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#9E6F1B",
                    display: "block",
                    marginBottom: "6px",
                  }}
                >
                  {isTa ? "4. வணிக வகை" : "4. Business Profile"}
                </label>
                <select
                  className="clean-select"
                  value={buyerTypeIndex}
                  onChange={(e) => setBuyerTypeIndex(parseInt(e.target.value))}
                  style={{
                    border: "1px solid #ECE7DD",
                    backgroundColor: "#FAF8F5",
                    fontSize: "12px",
                    fontWeight: 600,
                    padding: "11px",
                    borderRadius: "10px",
                  }}
                >
                  {buyerTypes.map((b, idx) => (
                    <option key={b.labelEn} value={idx}>
                      {isTa ? b.labelTa : b.labelEn}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#9E6F1B",
                    display: "block",
                    marginBottom: "6px",
                  }}
                >
                  {isTa ? "விநியோக ஊர்" : "Destination Hub"}
                </label>
                <input
                  type="text"
                  className="clean-input"
                  value={destinationCity}
                  onChange={(e) => setDestinationCity(e.target.value)}
                  placeholder="e.g. Bengaluru, Salem"
                  style={{
                    border: "1px solid #ECE7DD",
                    backgroundColor: "#FAF8F5",
                    fontSize: "13px",
                    fontWeight: 600,
                    padding: "11px 14px",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>

            {/* 5. Contact Input */}
            <div>
              <label
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#9E6F1B",
                  display: "block",
                  marginBottom: "6px",
                }}
              >
                {isTa ? "தொடர்பு தொலைபேசி / வாட்ஸ்அப் (விரும்பினால்)" : "Contact Phone / WhatsApp (Optional)"}
              </label>
              <input
                type="tel"
                className="clean-input"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                placeholder="+91 9150766377"
                style={{
                  border: "1px solid #ECE7DD",
                  backgroundColor: "#FAF8F5",
                  fontSize: "13px",
                  padding: "11px 14px",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>

          {/* Right Live Quotation Estimate Card (Luxury Mill Document Style) */}
          <div
            style={{
              backgroundColor: "#FAF7F2",
              borderRadius: "20px",
              padding: "34px",
              border: "1px solid #E0D7C6",
              boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <div>
              {/* Header Badges */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#9E6F1B",
                    backgroundColor: "#FAF4E8",
                    padding: "5px 12px",
                    borderRadius: "14px",
                    border: "1px solid #ECE7DD",
                  }}
                >
                  ESTIMATED B2B QUOTATION
                </span>

                <span
                  style={{
                    fontSize: "11.5px",
                    fontWeight: 800,
                    color: "#166534",
                    backgroundColor: "#E6F8EB",
                    padding: "5px 12px",
                    borderRadius: "14px",
                  }}
                >
                  Save ₹{totalSavings.toLocaleString("en-IN")} Total
                </span>
              </div>

              {/* Product Visual & Name Strip */}
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "14px",
                  padding: "16px",
                  border: "1px solid #ECE7DD",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  marginBottom: "20px",
                }}
              >
                {/* Mini Tin Illustration */}
                <div
                  style={{
                    width: "48px",
                    height: "56px",
                    backgroundColor: "#FAF4E8",
                    borderRadius: "8px",
                    border: "1px solid #EDE4D4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="34" height="42" viewBox="0 0 34 42" fill="none">
                    <rect x="5" y="10" width="24" height="30" rx="3" fill="#D5CFBE" stroke="#9E9685" strokeWidth="1" />
                    <path d="M12 10 C12 5 22 5 22 10" stroke="#7A7465" strokeWidth="1.5" fill="none" />
                    <rect x="20" y="7" width="6" height="4" rx="1" fill="#DF9F28" />
                    <rect x="9" y="20" width="16" height="12" rx="1.5" fill="#FFFFFF" />
                    <text x="17" y="27" textAnchor="middle" fill="#141612" fontSize="3.5" fontWeight="800">VS</text>
                    <text x="17" y="31" textAnchor="middle" fill="#9E6F1B" fontSize="3" fontWeight="700">16L</text>
                  </svg>
                </div>

                <div>
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#141612",
                      margin: 0,
                      lineHeight: 1.25,
                    }}
                  >
                    {currentProductName}
                  </h3>
                  <p style={{ fontSize: "12px", color: "#6B6E66", margin: "4px 0 0 0" }}>
                    {currentPackLabel} • <strong>{quantity} {isTa ? "யூனிட்கள்" : "Units"}</strong>
                  </p>
                </div>
              </div>

              {/* Price Breakdown Details */}
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "14px",
                  padding: "20px",
                  border: "1px solid #ECE7DD",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", color: "#6B6E66" }}>
                  <span>Base Factory Rate (Per Unit)</span>
                  <span style={{ textDecoration: "line-through", color: "#84877E" }}>
                    ₹{unitBasePrice.toLocaleString("en-IN")}
                  </span>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", color: "#166534", fontWeight: 700 }}>
                  <span>Volume Tier Discount ({discountPercent}%)</span>
                  <span>- ₹{(unitBasePrice - unitDiscountedPrice).toLocaleString("en-IN")} / unit</span>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#141612", fontWeight: 700 }}>
                  <span>Discounted Factory Rate</span>
                  <span style={{ color: "#9E6F1B" }}>₹{unitDiscountedPrice.toLocaleString("en-IN")}</span>
                </div>

                <div
                  style={{
                    paddingTop: "12px",
                    borderTop: "1px solid #F0EEE9",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <span style={{ fontSize: "13.5px", fontWeight: 700, color: "#141612" }}>
                    {isTa ? "மொத்த தோராய விலை" : "Estimated Mill Subtotal"}
                  </span>
                  <span
                    className="font-serif"
                    style={{ fontSize: "26px", fontWeight: 800, color: "#141612" }}
                  >
                    ₹{estimatedSubtotal.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              {/* Commercial Perks List */}
              <div style={{ display: "flex", flexDirection: "column", gap: "9px", marginBottom: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "9px", fontSize: "12px", color: "#4A4C46" }}>
                  <Truck size={15} color="#9E6F1B" strokeWidth={2} style={{ flexShrink: 0 }} />
                  <span>
                    Direct Freight Dispatch to <strong>{destinationCity}</strong> within 24-48 Hours
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "9px", fontSize: "12px", color: "#4A4C46" }}>
                  <ShieldCheck size={15} color="#166534" strokeWidth={2} style={{ flexShrink: 0 }} />
                  <span>FSSAI Certified Fresh Batch Lab Testing Report Included</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "9px", fontSize: "12px", color: "#4A4C46" }}>
                  <Building2 size={15} color="#9E6F1B" strokeWidth={2} style={{ flexShrink: 0 }} />
                  <span>GST Tax Invoice & E-Way Bill Generated for All Commercial Shipments</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <button
                onClick={handleWhatsAppInquiry}
                className="btn-cta btn-cta-whatsapp"
                style={{
                  width: "100%",
                  padding: "14px",
                  fontSize: "13.5px",
                  fontWeight: 700,
                  gap: "8px",
                  cursor: "pointer",
                }}
              >
                <Phone size={16} strokeWidth={2} />
                <span>{isTa ? "வாட்ஸ்அப் மூலம் உடனடி விலை பெற" : "Request Official Quote via WhatsApp"}</span>
              </button>

              <a
                href="tel:9150766377"
                className="btn-cta btn-cta-secondary"
                style={{
                  width: "100%",
                  padding: "12px",
                  fontSize: "12.5px",
                  backgroundColor: "#FFFFFF",
                  gap: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                }}
              >
                <span>📞 Call Mill Dispatch Desk: +91 9150766377</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .calc-split-grid {
            grid-template-columns: 1fr !important;
          }
          .product-pills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
