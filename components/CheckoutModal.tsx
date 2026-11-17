"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import {
  X,
  CheckCircle2,
  Truck,
  Store,
  CreditCard,
  Banknote,
  ShieldCheck,
  ArrowRight,
  ShoppingBag,
  Sparkles,
  Phone,
  Printer,
  ChevronRight,
} from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { items, totalAmount, totalItems, clearCart } = useCart();
  const { language } = useLanguage();
  const isTa = language === "ta";

  const [step, setStep] = useState<"form" | "success">("form");
  const [deliveryMethod, setDeliveryMethod] = useState<"doorstep" | "pickup">("doorstep");
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "cod" | "bank">("upi");
  const [selectedBranch, setSelectedBranch] = useState("Bengaluru Central Hub - BTM Layout");
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState("");
  const [orderId, setOrderId] = useState("");

  // Customer Form Fields
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "Bengaluru",
    pincode: "",
    notes: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  React.useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const BRANCHES = [
    "Bengaluru Central Hub - BTM Layout",
    "Bengaluru South - Jayanagar 4th Block",
    "Bengaluru East - Whitefield Main Road",
    "Bengaluru North - Yelahanka New Town",
    "Coimbatore Mill Outlet - RS Puram",
    "Salem Processing Unit - Fairlands",
    "Madurai Distribution Hub - KK Nagar",
    "Tirupur Textile Hub - Kumaran Road",
    "Erode Direct Depot - Perundurai Road",
    "Trichy Regional Branch - Thillai Nagar",
  ];

  const handleApplyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (code === "ORGANIC10") {
      const disc = Math.round(totalAmount * 0.1);
      setDiscount(disc);
      setPromoApplied(true);
      setPromoError("");
    } else if (code === "WELCOME50") {
      setDiscount(50);
      setPromoApplied(true);
      setPromoError("");
    } else {
      setPromoError(isTa ? "செல்லுபடியாகாத கூப்பன் குறியீடு" : "Invalid coupon code (try ORGANIC10)");
    }
  };

  const deliveryFee = deliveryMethod === "pickup" || totalAmount >= 499 ? 0 : 40;
  const finalAmount = Math.max(0, totalAmount - discount + deliveryFee);

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) {
      errors.name = isTa ? "பெயர் தேவை" : "Name is required";
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      errors.phone = isTa ? "சரியான 10 இலக்க தொலைபேசி எண் தேவை" : "Valid 10-digit phone required";
    }
    if (deliveryMethod === "doorstep") {
      if (!formData.address.trim()) {
        errors.address = isTa ? "முகவரி தேவை" : "Delivery address is required";
      }
      if (!formData.pincode.trim() || formData.pincode.length < 6) {
        errors.pincode = isTa ? "சரியான 6 இலக்க பின்கோடு தேவை" : "Valid 6-digit pincode required";
      }
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newOrderId = `VSO-${Date.now().toString().slice(-6)}`;
    setOrderId(newOrderId);
    setStep("success");
  };

  const handleWhatsAppConfirmation = () => {
    const itemList = items
      .map(
        (it) =>
          `• ${it.name} (${it.size}, ${it.packaging}) x ${it.quantity} = ₹${it.price * it.quantity}`
      )
      .join("\n");

    const message = `*VS ORGANIC - NEW CONFIRMED ORDER*\n--------------------------------\n*Order ID:* #${orderId}\n*Customer Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Delivery Mode:* ${
      deliveryMethod === "doorstep" ? `Doorstep (${formData.address}, ${formData.city} - ${formData.pincode})` : `Branch Pickup (${selectedBranch})`
    }\n*Payment Method:* ${paymentMethod.toUpperCase()}\n--------------------------------\n*Items Ordered:*\n${itemList}\n--------------------------------\n*Subtotal:* ₹${totalAmount}\n${discount > 0 ? `*Discount:* -₹${discount}\n` : ""}*Delivery:* ${deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}\n*Total Payable:* ₹${finalAmount}\n--------------------------------\nPlease process and dispatch this order. Thank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919150766377?text=${encoded}`, "_blank");
  };

  const handleFinish = () => {
    clearCart();
    setStep("form");
    onClose();
  };

  return (
    <div
      className="checkout-modal-overlay"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 120,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(5px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        overflowY: "auto",
      }}
      onClick={onClose}
    >
      <div
        className="checkout-modal-card"
        style={{
          width: "100%",
          maxWidth: "760px",
          backgroundColor: "#FFFFFF",
          borderRadius: "20px",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.2)",
          overflow: "hidden",
          maxHeight: "90vh",
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
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "#141612",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ShoppingBag size={18} strokeWidth={1.8} />
            </span>
            <div>
              <h3
                style={{
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "#141612",
                  margin: 0,
                }}
              >
                {step === "success"
                  ? isTa ? "ஆர்டர் உறுதி செய்யப்பட்டது" : "Order Placed Successfully"
                  : isTa ? "எளிமையான விரைவு செக்அவுட்" : "Simplified Express Checkout"}
              </h3>
              <p style={{ fontSize: "11.5px", color: "#84877E", margin: "2px 0 0 0" }}>
                {step === "success"
                  ? isTa ? "உங்கள் ஆர்டர் விவரங்கள் மற்றும் உறுதிப்படுத்தல்" : "Direct Chekku Mill Dispatch • 10 Branches Network"
                  : `${totalItems} ${isTa ? "பொருட்கள்" : "items"} • ₹${finalAmount}`}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              width: "34px",
              height: "34px",
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
            <X size={18} strokeWidth={2} />
          </button>
        </div>

        {/* Body Content */}
        <div style={{ overflowY: "auto", padding: "24px", flex: 1 }}>
          {step === "success" ? (
            /* ================= ORDER CONFIRMATION SCREEN ================= */
            <div style={{ textAlign: "center", padding: "20px 10px" }}>
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  backgroundColor: "#E6F8EB",
                  color: "#25D366",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                }}
              >
                <CheckCircle2 size={44} strokeWidth={2.2} />
              </div>

              <span
                style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  backgroundColor: "#FAF7F2",
                  borderRadius: "20px",
                  color: "#9E6F1B",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  marginBottom: "8px",
                  border: "1px solid #ECE7DD",
                }}
              >
                ORDER #{orderId}
              </span>

              <h2
                className="font-serif"
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#141612",
                  marginBottom: "8px",
                }}
              >
                {isTa ? "ஆர்டர் வெற்றிகரமாக பதிவு செய்யப்பட்டது!" : "Thank You For Your Order!"}
              </h2>

              <p
                style={{
                  fontSize: "13.5px",
                  color: "#6B6E66",
                  maxWidth: "500px",
                  margin: "0 auto 24px auto",
                  lineHeight: 1.5,
                }}
              >
                {isTa
                  ? `அன்பார்ந்த ${formData.name}, உங்கள் ஆர்டர் பதிவு செய்யப்பட்டது. மரச்செக்கு ஆலை தயாரிப்பு மற்றும் பேக்கிங் உடனடியாக துவங்கப்படும்.`
                  : `Dear ${formData.name}, your cold-pressed order has been received. Our mills will dispatch pure, fresh oils within 24-48 hours.`}
              </p>

              {/* Order Details Card */}
              <div
                style={{
                  backgroundColor: "#FAF8F5",
                  borderRadius: "14px",
                  padding: "18px 20px",
                  border: "1px solid #ECE7DD",
                  maxWidth: "540px",
                  margin: "0 auto 24px auto",
                  textAlign: "left",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", borderBottom: "1px solid #ECE7DD", paddingBottom: "10px" }}>
                  <span style={{ fontSize: "12px", color: "#84877E" }}>Estimated Delivery</span>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "#141612" }}>
                    Within 24-48 Hours (Express Mill Dispatch)
                  </span>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span style={{ fontSize: "12px", color: "#84877E" }}>Delivery Mode</span>
                  <span style={{ fontSize: "12px", fontWeight: 600, color: "#141612" }}>
                    {deliveryMethod === "doorstep" ? `Doorstep Delivery (${formData.city})` : `Branch Pickup (${selectedBranch})`}
                  </span>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span style={{ fontSize: "12px", color: "#84877E" }}>Payment Method</span>
                  <span style={{ fontSize: "12px", fontWeight: 600, color: "#141612", textTransform: "uppercase" }}>
                    {paymentMethod === "upi" ? "UPI / Google Pay" : paymentMethod === "cod" ? "Cash on Delivery" : "Bank Transfer"}
                  </span>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "8px", borderTop: "1px solid #ECE7DD" }}>
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "#141612" }}>Total Amount</span>
                  <span style={{ fontSize: "15px", fontWeight: 800, color: "#9E6F1B" }}>
                    ₹{finalAmount}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <button
                  onClick={handleWhatsAppConfirmation}
                  className="btn-cta btn-cta-whatsapp"
                  style={{ gap: "8px" }}
                >
                  <Phone size={16} strokeWidth={2} />
                  <span>{isTa ? "வாட்ஸ்அப்பில் உறுதி செய்க" : "Confirm via WhatsApp"}</span>
                </button>

                <button
                  onClick={() => window.print()}
                  className="btn-cta btn-cta-secondary"
                  style={{ gap: "8px" }}
                >
                  <Printer size={16} strokeWidth={1.8} />
                  <span>{isTa ? "ரசீது அச்சிடுக" : "Print Receipt"}</span>
                </button>

                <button
                  onClick={handleFinish}
                  className="btn-cta btn-cta-primary"
                >
                  <span>{isTa ? "ஷாப்பிங் தொடரவும்" : "Continue Shopping"}</span>
                </button>
              </div>
            </div>
          ) : (
            /* ================= CHECKOUT FORM ================= */
            <form onSubmit={handleSubmitOrder}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.3fr 1fr",
                  gap: "28px",
                }}
                className="checkout-grid"
              >
                {/* Left Column: Delivery & Customer Info */}
                <div>
                  {/* Delivery Mode Tabs */}
                  <div style={{ marginBottom: "20px" }}>
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
                      {isTa ? "1. விநியோக முறை தேர்வு" : "1. Choose Delivery Method"}
                    </label>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "10px",
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => setDeliveryMethod("doorstep")}
                        style={{
                          padding: "12px",
                          borderRadius: "12px",
                          border: deliveryMethod === "doorstep" ? "2px solid #141612" : "1px solid #ECE7DD",
                          backgroundColor: deliveryMethod === "doorstep" ? "#FAF8F5" : "#FFFFFF",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          cursor: "pointer",
                          textAlign: "left",
                        }}
                      >
                        <Truck size={18} strokeWidth={2} color={deliveryMethod === "doorstep" ? "#141612" : "#84877E"} />
                        <div>
                          <div style={{ fontSize: "12.5px", fontWeight: 700, color: "#141612" }}>
                            {isTa ? "வீட்டுக்கே டெலிவரி" : "Doorstep Delivery"}
                          </div>
                          <div style={{ fontSize: "10.5px", color: "#84877E" }}>
                            {totalAmount >= 499 ? "FREE Express Dispatch" : "₹40 (Free over ₹499)"}
                          </div>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setDeliveryMethod("pickup")}
                        style={{
                          padding: "12px",
                          borderRadius: "12px",
                          border: deliveryMethod === "pickup" ? "2px solid #141612" : "1px solid #ECE7DD",
                          backgroundColor: deliveryMethod === "pickup" ? "#FAF8F5" : "#FFFFFF",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          cursor: "pointer",
                          textAlign: "left",
                        }}
                      >
                        <Store size={18} strokeWidth={2} color={deliveryMethod === "pickup" ? "#141612" : "#84877E"} />
                        <div>
                          <div style={{ fontSize: "12.5px", fontWeight: 700, color: "#141612" }}>
                            {isTa ? "கிளையில் நேரில் பெற" : "Branch Pickup"}
                          </div>
                          <div style={{ fontSize: "10.5px", color: "#25D366", fontWeight: 600 }}>
                            FREE • 10 Branches
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Customer Information */}
                  <div style={{ marginBottom: "20px" }}>
                    <label
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "#9E6F1B",
                        display: "block",
                        marginBottom: "10px",
                      }}
                    >
                      {isTa ? "2. வாடிக்கையாளர் விபரம்" : "2. Customer Information"}
                    </label>

                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      <div>
                        <input
                          type="text"
                          placeholder={isTa ? "முழு பெயர் *" : "Full Name *"}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="clean-input"
                          style={{
                            border: formErrors.name ? "1px solid #E53E3E" : "1px solid #ECE7DD",
                          }}
                        />
                        {formErrors.name && (
                          <span style={{ fontSize: "11px", color: "#E53E3E", marginTop: "3px", display: "block" }}>
                            {formErrors.name}
                          </span>
                        )}
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                        <div>
                          <input
                            type="tel"
                            placeholder={isTa ? "தொலைபேசி / வாட்ஸ்அப் எண் *" : "Mobile / WhatsApp *"}
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="clean-input"
                            style={{
                              border: formErrors.phone ? "1px solid #E53E3E" : "1px solid #ECE7DD",
                            }}
                          />
                          {formErrors.phone && (
                            <span style={{ fontSize: "11px", color: "#E53E3E", marginTop: "3px", display: "block" }}>
                              {formErrors.phone}
                            </span>
                          )}
                        </div>

                        <div>
                          <input
                            type="email"
                            placeholder={isTa ? "மின்னஞ்சல் (விரும்பினால்)" : "Email (Optional)"}
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="clean-input"
                            style={{ border: "1px solid #ECE7DD" }}
                          />
                        </div>
                      </div>

                      {deliveryMethod === "doorstep" ? (
                        <>
                          <div>
                            <input
                              type="text"
                              placeholder={isTa ? "கதவு எண், தெரு மற்றும் பகுதி முகவரி *" : "Flat / House No., Street, Area *"}
                              value={formData.address}
                              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                              className="clean-input"
                              style={{
                                border: formErrors.address ? "1px solid #E53E3E" : "1px solid #ECE7DD",
                              }}
                            />
                            {formErrors.address && (
                              <span style={{ fontSize: "11px", color: "#E53E3E", marginTop: "3px", display: "block" }}>
                                {formErrors.address}
                              </span>
                            )}
                          </div>

                          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "10px" }}>
                            <select
                              value={formData.city}
                              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                              className="clean-select"
                              style={{ border: "1px solid #ECE7DD" }}
                            >
                              <option value="Bengaluru">Bengaluru</option>
                              <option value="Coimbatore">Coimbatore</option>
                              <option value="Salem">Salem</option>
                              <option value="Madurai">Madurai</option>
                              <option value="Chennai">Chennai</option>
                              <option value="Trichy">Trichy</option>
                              <option value="Tirupur">Tirupur</option>
                              <option value="Erode">Erode</option>
                              <option value="Mysuru">Mysuru</option>
                              <option value="Hyderabad">Hyderabad</option>
                            </select>

                            <div>
                              <input
                                type="text"
                                placeholder={isTa ? "பின்கோடு (6 இலக்கம்) *" : "Pincode (6-digit) *"}
                                value={formData.pincode}
                                onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                                maxLength={6}
                                className="clean-input"
                                style={{
                                  border: formErrors.pincode ? "1px solid #E53E3E" : "1px solid #ECE7DD",
                                }}
                              />
                              {formErrors.pincode && (
                                <span style={{ fontSize: "11px", color: "#E53E3E", marginTop: "3px", display: "block" }}>
                                  {formErrors.pincode}
                                </span>
                              )}
                            </div>
                          </div>
                        </>
                      ) : (
                        <div>
                          <label style={{ fontSize: "11.5px", color: "#6B6E66", marginBottom: "4px", display: "block" }}>
                            {isTa ? "பொருட்களை பெற வேண்டிய கிளை தேர்வு:" : "Select Pickup Branch:"}
                          </label>
                          <select
                            value={selectedBranch}
                            onChange={(e) => setSelectedBranch(e.target.value)}
                            className="clean-select"
                            style={{ border: "1px solid #ECE7DD", fontWeight: 600 }}
                          >
                            {BRANCHES.map((b) => (
                              <option key={b} value={b}>
                                📍 {b}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}

                      <input
                        type="text"
                        placeholder={isTa ? "டெலிவரி குறிப்புகள் (விரும்பினால்)" : "Delivery Instructions (e.g., Leave with security)"}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="clean-input"
                        style={{ border: "1px solid #ECE7DD" }}
                      />
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <label
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "#9E6F1B",
                        display: "block",
                        marginBottom: "10px",
                      }}
                    >
                      {isTa ? "3. பணம் செலுத்தும் முறை" : "3. Payment Method"}
                    </label>

                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <label
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          padding: "10px 14px",
                          borderRadius: "10px",
                          border: paymentMethod === "upi" ? "1.5px solid #141612" : "1px solid #ECE7DD",
                          backgroundColor: paymentMethod === "upi" ? "#FAF8F5" : "#FFFFFF",
                          cursor: "pointer",
                        }}
                      >
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethod === "upi"}
                          onChange={() => setPaymentMethod("upi")}
                        />
                        <CreditCard size={16} strokeWidth={1.8} color="#141612" />
                        <span style={{ fontSize: "13px", fontWeight: 600, color: "#141612", flex: 1 }}>
                          UPI / Google Pay / PhonePe / QR Code
                        </span>
                        <span style={{ fontSize: "10px", padding: "2px 6px", backgroundColor: "#E6F8EB", color: "#166534", borderRadius: "4px", fontWeight: 700 }}>
                          FASTEST
                        </span>
                      </label>

                      <label
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          padding: "10px 14px",
                          borderRadius: "10px",
                          border: paymentMethod === "cod" ? "1.5px solid #141612" : "1px solid #ECE7DD",
                          backgroundColor: paymentMethod === "cod" ? "#FAF8F5" : "#FFFFFF",
                          cursor: "pointer",
                        }}
                      >
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethod === "cod"}
                          onChange={() => setPaymentMethod("cod")}
                        />
                        <Banknote size={16} strokeWidth={1.8} color="#141612" />
                        <span style={{ fontSize: "13px", fontWeight: 600, color: "#141612" }}>
                          Cash on Delivery (COD) / Pay at Mill
                        </span>
                      </label>

                      <label
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          padding: "10px 14px",
                          borderRadius: "10px",
                          border: paymentMethod === "bank" ? "1.5px solid #141612" : "1px solid #ECE7DD",
                          backgroundColor: paymentMethod === "bank" ? "#FAF8F5" : "#FFFFFF",
                          cursor: "pointer",
                        }}
                      >
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethod === "bank"}
                          onChange={() => setPaymentMethod("bank")}
                        />
                        <ShieldCheck size={16} strokeWidth={1.8} color="#141612" />
                        <span style={{ fontSize: "13px", fontWeight: 600, color: "#141612" }}>
                          NEFT / RTGS Bank Transfer (For Bulk & Wholesale)
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Right Column: Order Summary & Promo */}
                <div
                  style={{
                    backgroundColor: "#FAF8F5",
                    borderRadius: "16px",
                    padding: "20px",
                    border: "1px solid #ECE7DD",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#141612",
                      marginBottom: "14px",
                      borderBottom: "1px solid #EAE5DB",
                      paddingBottom: "8px",
                    }}
                  >
                    {isTa ? "ஆர்டர் சுருக்கம்" : "Order Summary"} ({totalItems})
                  </h4>

                  {/* Items List Preview */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      maxHeight: "180px",
                      overflowY: "auto",
                      marginBottom: "16px",
                    }}
                  >
                    {items.map((it) => (
                      <div
                        key={it.id}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          fontSize: "12px",
                        }}
                      >
                        <div>
                          <span style={{ fontWeight: 600, color: "#141612" }}>
                            {isTa ? it.nameTa : it.name}
                          </span>
                          <span style={{ color: "#84877E", display: "block", fontSize: "11px" }}>
                            {it.size} • {it.packaging} x {it.quantity}
                          </span>
                        </div>
                        <span style={{ fontWeight: 700, color: "#141612" }}>
                          ₹{it.price * it.quantity}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Promo Code Input */}
                  <div style={{ marginBottom: "16px" }}>
                    <div style={{ display: "flex", gap: "6px" }}>
                      <input
                        type="text"
                        placeholder="Coupon: ORGANIC10"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        disabled={promoApplied}
                        style={{
                          flex: 1,
                          padding: "8px 12px",
                          borderRadius: "8px",
                          border: "1px solid #D5D0C5",
                          backgroundColor: "#FFFFFF",
                          fontSize: "12px",
                          textTransform: "uppercase",
                        }}
                      />
                      <button
                        type="button"
                        onClick={handleApplyPromo}
                        disabled={promoApplied}
                        style={{
                          padding: "8px 14px",
                          backgroundColor: promoApplied ? "#25D366" : "#141612",
                          color: "#FFFFFF",
                          borderRadius: "8px",
                          fontSize: "11px",
                          fontWeight: 700,
                          cursor: promoApplied ? "default" : "pointer",
                          border: "none",
                        }}
                      >
                        {promoApplied ? "Applied ✓" : "Apply"}
                      </button>
                    </div>
                    {promoError && (
                      <span style={{ fontSize: "10.5px", color: "#E53E3E", marginTop: "3px", display: "block" }}>
                        {promoError}
                      </span>
                    )}
                    {promoApplied && (
                      <span style={{ fontSize: "10.5px", color: "#166534", marginTop: "3px", display: "block", fontWeight: 600 }}>
                        Promo applied: You saved ₹{discount}!
                      </span>
                    )}
                  </div>

                  {/* Calculations Breakdown */}
                  <div
                    style={{
                      borderTop: "1px solid #EAE5DB",
                      paddingTop: "12px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                      fontSize: "12.5px",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", color: "#6B6E66" }}>
                      <span>{isTa ? "பொருட்கள் மதிப்பு" : "Subtotal"}</span>
                      <span>₹{totalAmount}</span>
                    </div>

                    {discount > 0 && (
                      <div style={{ display: "flex", justifyContent: "space-between", color: "#166534", fontWeight: 600 }}>
                        <span>{isTa ? "கூப்பன் தள்ளுபடி" : "Discount"}</span>
                        <span>-₹{discount}</span>
                      </div>
                    )}

                    <div style={{ display: "flex", justifyContent: "space-between", color: "#6B6E66" }}>
                      <span>{isTa ? "டெலிவரி கட்டணம்" : "Delivery Fee"}</span>
                      <span>{deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}</span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingTop: "10px",
                        marginTop: "4px",
                        borderTop: "1px solid #E0DDD5",
                        fontSize: "15px",
                        fontWeight: 800,
                        color: "#141612",
                      }}
                    >
                      <span>{isTa ? "மொத்த தொகை" : "Grand Total"}</span>
                      <span style={{ color: "#9E6F1B" }}>₹{finalAmount}</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn-cta btn-cta-primary"
                    style={{
                      width: "100%",
                      marginTop: "18px",
                      padding: "13px",
                      fontSize: "13px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                    }}
                  >
                    <span>{isTa ? "ஆர்டர் சமர்ப்பிக்கவும்" : "Place Order Now"}</span>
                    <ArrowRight size={16} strokeWidth={2} />
                  </button>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                      marginTop: "12px",
                      fontSize: "11px",
                      color: "#84877E",
                    }}
                  >
                    <ShieldCheck size={14} color="#166534" />
                    <span>256-Bit SSL Encrypted & 100% Purity Guarantee</span>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 720px) {
          .checkout-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .checkout-modal-overlay {
            padding: 8px !important;
          }
          .checkout-modal-card {
            border-radius: 16px !important;
            max-height: 95vh !important;
          }
        }
      `}</style>
    </div>
  );
}
