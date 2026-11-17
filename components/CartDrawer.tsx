"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  Truck,
  Sparkles,
  Phone,
} from "lucide-react";

export default function CartDrawer() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalAmount,
    isCartOpen,
    setIsCartOpen,
    setIsCheckoutOpen,
  } = useCart();
  const { language } = useLanguage();
  const isTa = language === "ta";

  if (!isCartOpen) return null;

  const freeDeliveryThreshold = 499;
  const progressToFree = Math.min(100, Math.round((totalAmount / freeDeliveryThreshold) * 100));
  const amountNeeded = Math.max(0, freeDeliveryThreshold - totalAmount);

  const handleOpenCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleWhatsAppCheckout = () => {
    const itemList = items
      .map(
        (it) =>
          `• ${it.name} (${it.size}, ${it.packaging}) x ${it.quantity} = ₹${it.price * it.quantity}`
      )
      .join("\n");

    const message = `*VS ORGANIC - NEW ORDER / ENQUIRY*\n--------------------------------\n${itemList}\n--------------------------------\n*Total Items:* ${totalItems}\n*Estimated Total:* ₹${totalAmount}\n\nPlease confirm availability and dispatch details.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919150766377?text=${encoded}`, "_blank");
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 110,
        display: "flex",
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(4px)",
        transition: "opacity 0.3s ease",
      }}
      onClick={() => setIsCartOpen(false)}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "460px",
          height: "100%",
          backgroundColor: "#FFFFFF",
          boxShadow: "-8px 0 35px rgba(0, 0, 0, 0.15)",
          display: "flex",
          flexDirection: "column",
          padding: "24px",
          boxSizing: "border-box",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: "16px",
            borderBottom: "1px solid #EFECE6",
            marginBottom: "14px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "#FAF7F2",
                border: "1px solid #ECE7DD",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#9E6F1B",
              }}
            >
              <ShoppingBag size={18} strokeWidth={2} />
            </span>
            <div>
              <h3
                className="font-serif"
                style={{
                  fontSize: "19px",
                  fontWeight: 700,
                  color: "#141612",
                  margin: 0,
                }}
              >
                {isTa ? "உங்கள் கூடை" : "Your Shopping Bag"}
              </h3>
              <span style={{ fontSize: "11.5px", color: "#84877E" }}>
                {totalItems} {isTa ? "பொருட்கள்" : "item(s)"}
              </span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {items.length > 0 && (
              <button
                onClick={clearCart}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "11.5px",
                  color: "#84877E",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "4px 8px",
                  borderRadius: "6px",
                }}
                title={isTa ? "கூடையை காலியாக்கு" : "Clear entire bag"}
              >
                <Trash2 size={13} strokeWidth={1.8} />
                <span>{isTa ? "காலியாக்கு" : "Clear"}</span>
              </button>
            )}

            <button
              onClick={() => setIsCartOpen(false)}
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                backgroundColor: "#F5F2EB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#141612",
                border: "none",
              }}
              title="Close bag"
            >
              <X size={18} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Free Delivery Goal Progress Bar */}
        {items.length > 0 && (
          <div
            style={{
              backgroundColor: "#FAF8F5",
              borderRadius: "12px",
              padding: "12px 14px",
              border: "1px solid #EFECE6",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "6px",
                fontSize: "11.5px",
                fontWeight: 600,
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "#141612" }}>
                <Truck size={14} color="#9E6F1B" strokeWidth={2} />
                {amountNeeded === 0
                  ? isTa
                    ? "இலவச டெலிவரிக்கு தகுதி பெற்றுள்ளீர்கள்! 🎉"
                    : "You've unlocked FREE Express Delivery! 🎉"
                  : isTa
                  ? `இலவச டெலிவரிக்கு மேலும் ₹${amountNeeded} சேர்க்கவும்`
                  : `Add ₹${amountNeeded} more for FREE Delivery`}
              </span>
              <span style={{ color: "#9E6F1B", fontWeight: 700 }}>{progressToFree}%</span>
            </div>

            <div
              style={{
                width: "100%",
                height: "5px",
                backgroundColor: "#E6E2D8",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${progressToFree}%`,
                  height: "100%",
                  backgroundColor: amountNeeded === 0 ? "#25D366" : "#9E6F1B",
                  borderRadius: "10px",
                  transition: "width 0.3s ease",
                }}
              />
            </div>
          </div>
        )}

        {/* Items List */}
        {items.length === 0 ? (
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "40px 20px",
            }}
          >
            <div
              style={{
                width: "68px",
                height: "68px",
                borderRadius: "50%",
                backgroundColor: "#FAF7F2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px",
                color: "#9E6F1B",
              }}
            >
              <ShoppingBag size={32} strokeWidth={1.6} />
            </div>
            <h4
              className="font-serif"
              style={{ fontSize: "19px", color: "#141612", marginBottom: "8px", fontWeight: 700 }}
            >
              {isTa ? "உங்கள் கூடை காலியாக உள்ளது" : "Your bag is empty"}
            </h4>
            <p
              style={{ fontSize: "13px", color: "#84877E", marginBottom: "22px", maxWidth: "260px" }}
            >
              {isTa
                ? "எங்கள் மரச்செக்கு எண்ணெய் வகைகளை ஆராய்ந்து சேர்க்கவும்."
                : "Explore our cold-pressed traditional chekku oils and natural essentials."}
            </p>
            <button
              onClick={() => setIsCartOpen(false)}
              className="btn-cta btn-cta-primary"
            >
              {isTa ? "பொருட்களை பார்க்கவும்" : "Continue Shopping"}
            </button>
          </div>
        ) : (
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "12px", overflowY: "auto" }}>
            {items.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  gap: "12px",
                  padding: "12px",
                  backgroundColor: "#FAF8F5",
                  borderRadius: "14px",
                  border: "1px solid #EFECE6",
                  position: "relative",
                  transition: "all 0.2s",
                }}
              >
                {/* Product Thumbnail */}
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "10px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #ECE7DD",
                    overflow: "hidden",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={item.image || `/images/products/${item.productId}.jpg`}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                {/* Details */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                    <h4
                      style={{
                        fontSize: "13.5px",
                        fontWeight: 700,
                        color: "#141612",
                        marginBottom: "3px",
                        lineHeight: 1.3,
                      }}
                    >
                      {isTa ? item.nameTa : item.name}
                    </h4>

                    {/* Remove button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      style={{
                        color: "#84877E",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "4px",
                        borderRadius: "4px",
                        transition: "color 0.15s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#E53E3E")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#84877E")}
                      title="Remove item"
                      aria-label="Remove item"
                    >
                      <Trash2 size={15} strokeWidth={1.8} />
                    </button>
                  </div>

                  {/* Size and Packaging chips */}
                  <div
                    style={{
                      display: "flex",
                      gap: "6px",
                      marginBottom: "8px",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "10.5px",
                        backgroundColor: "#FFFFFF",
                        padding: "2px 7px",
                        borderRadius: "4px",
                        border: "1px solid #E6E2D8",
                        color: "#9E6F1B",
                        fontWeight: 700,
                      }}
                    >
                      {item.size}
                    </span>
                    <span
                      style={{
                        fontSize: "10.5px",
                        backgroundColor: "#FFFFFF",
                        padding: "2px 7px",
                        borderRadius: "4px",
                        border: "1px solid #E6E2D8",
                        color: "#6B6E66",
                        fontWeight: 500,
                      }}
                    >
                      {item.packaging}
                    </span>
                  </div>

                  {/* Quantity & Item Total Row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* Quantity Selector Controls */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        backgroundColor: "#FFFFFF",
                        borderRadius: "20px",
                        padding: "2px 6px",
                        border: "1px solid #E0DDD5",
                      }}
                    >
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          color: "#141612",
                          background: "none",
                          border: "none",
                        }}
                        title="Decrease quantity"
                      >
                        <Minus size={13} strokeWidth={2.2} />
                      </button>

                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: 700,
                          minWidth: "20px",
                          textAlign: "center",
                          color: "#141612",
                        }}
                      >
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          color: "#141612",
                          background: "none",
                          border: "none",
                        }}
                        title="Increase quantity"
                      >
                        <Plus size={13} strokeWidth={2.2} />
                      </button>
                    </div>

                    <div style={{ textAlign: "right" }}>
                      <span
                        style={{
                          fontSize: "14.5px",
                          fontWeight: 800,
                          color: "#141612",
                        }}
                      >
                        ₹{item.price * item.quantity}
                      </span>
                      {item.quantity > 1 && (
                        <span style={{ display: "block", fontSize: "10.5px", color: "#84877E" }}>
                          (₹{item.price} each)
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer Summary & Checkout CTAs */}
        {items.length > 0 && (
          <div
            style={{
              paddingTop: "18px",
              borderTop: "1px solid #EFECE6",
              marginTop: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "6px",
              }}
            >
              <span style={{ fontSize: "13px", color: "#555750" }}>
                {isTa ? "பொருட்களின் மதிப்பு" : "Subtotal"}
              </span>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: 800,
                  color: "#141612",
                }}
              >
                ₹{totalAmount}
              </span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "14px",
                fontSize: "12px",
              }}
            >
              <span style={{ color: "#84877E" }}>
                {isTa ? "மதிப்பிடப்பட்ட டெலிவரி" : "Estimated Shipping"}
              </span>
              <span style={{ color: amountNeeded === 0 ? "#166534" : "#141612", fontWeight: 700 }}>
                {amountNeeded === 0 ? "FREE" : "₹40"}
              </span>
            </div>

            {/* Primary CTA: Simplified Checkout */}
            <button
              onClick={handleOpenCheckout}
              className="btn-cta btn-cta-primary"
              style={{
                width: "100%",
                padding: "14px",
                fontSize: "13.5px",
                marginBottom: "8px",
                gap: "8px",
              }}
            >
              <span>{isTa ? "செக்அவுட் தொடரவும்" : "Proceed to Checkout"}</span>
              <ArrowRight size={16} strokeWidth={2.2} />
            </button>

            {/* Secondary CTA: WhatsApp Quick Order */}
            <button
              onClick={handleWhatsAppCheckout}
              className="btn-cta btn-cta-whatsapp"
              style={{
                width: "100%",
                padding: "12px",
                fontSize: "13px",
                marginBottom: "10px",
                gap: "8px",
              }}
            >
              <Phone size={15} strokeWidth={2} />
              <span>{isTa ? "வாட்ஸ்அப் மூலம் விரைவு ஆர்டர்" : "Quick Order via WhatsApp"}</span>
            </button>

            <button
              onClick={() => setIsCartOpen(false)}
              className="btn-cta btn-cta-secondary"
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "12px",
              }}
            >
              {isTa ? "ஷாப்பிங் தொடரவும்" : "Continue Shopping"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
