"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { PRODUCTS_DATA, ProductItem } from "@/components/ProductCatalog";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import {
  Search,
  X,
  TrendingUp,
  ShoppingBag,
  HelpCircle,
  Sparkles,
  ArrowRight,
  Star,
  Package,
} from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiry: (productName?: string) => void;
}

export default function SearchModal({ isOpen, onClose, onOpenEnquiry }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { language } = useLanguage();
  const { addItem } = useCart();
  const isTa = language === "ta";

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    } else {
      setQuery("");
    }
  }, [isOpen]);

  // Suggested keywords / Popular searches
  const POPULAR_SEARCHES = [
    { labelEn: "Groundnut Oil", labelTa: "கடலை எண்ணெய்", query: "groundnut" },
    { labelEn: "Chekku Sesame Oil", labelTa: "நல்லெண்ணெய்", query: "sesame" },
    { labelEn: "Pure Cow Ghee", labelTa: "பசு நெய்", query: "ghee" },
    { labelEn: "Coconut Oil", labelTa: "தேங்காய் எண்ணெய்", query: "coconut" },
    { labelEn: "Castor & Mustard Oil", labelTa: "விளக்கெண்ணெய் & கடுகு", query: "oil" },
    { labelEn: "Palm Jaggery / Karupatti", labelTa: "பனை கருப்பட்டி", query: "jaggery" },
    { labelEn: "Thuvaram & Kadalai Paruppu", labelTa: "துவரம் & கடலை பருப்பு", query: "paruppu" },
    { labelEn: "15kg Commercial Tin", labelTa: "15 கிலோ டின்", query: "tin" },
  ];

  // Autocomplete matching dictionary
  const AUTOCOMPLETE_ITEMS = [
    "Wood Pressed Groundnut Oil",
    "Traditional Chekku Sesame Oil",
    "Pure Chekku Coconut Oil",
    "Pure Cold Pressed Castor Oil",
    "Wood Pressed Mustard Oil",
    "Pure Cold Pressed Neem Oil",
    "Pancha Deepam Pooja Oil",
    "Pure Desi Cow Ghee (Danedar)",
    "Organic Jaggery Powder (Nattu Sakkarai)",
    "Traditional Palm Jaggery (Karupatti)",
    "Traditional Cane Jaggery (Achu Vellam)",
    "Organic Kadalai Paruppu (Chana Dal)",
    "Unpolished Thuvaram Paruppu (Toor Dal)",
    "Native Ulutham Paruppu (Urad Dal)",
    "Farm Fresh Paasi Paruppu (Moong Dal)",
    "15kg Commercial Tin Wholesale",
    "5 Litre Jerrycan Chekku Oil",
  ];

  // Find autocomplete suggestions based on current query
  const autocompleteSuggestions = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q || q.length < 1) return [];
    return AUTOCOMPLETE_ITEMS.filter((item) =>
      item.toLowerCase().includes(q)
    ).slice(0, 4);
  }, [query]);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return PRODUCTS_DATA;

    return PRODUCTS_DATA.filter((p) => {
      return (
        p.nameEn.toLowerCase().includes(q) ||
        p.nameTa.toLowerCase().includes(q) ||
        p.subEn.toLowerCase().includes(q) ||
        p.descEn.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.taglineEn.toLowerCase().includes(q) ||
        p.sizes.some((s) => s.label.toLowerCase().includes(q) || s.packaging.toLowerCase().includes(q))
      );
    });
  }, [query]);

  if (!isOpen) return null;

  return (
    <div
      className="search-modal-overlay"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 120,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(5px)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "50px 16px 20px 16px",
      }}
      onClick={onClose}
    >
      <div
        className="search-modal-card"
        style={{
          width: "100%",
          maxWidth: "680px",
          backgroundColor: "#FFFFFF",
          borderRadius: "20px",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.2)",
          overflow: "hidden",
          maxHeight: "85vh",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "18px 22px",
            borderBottom: "1px solid #EFECE6",
            gap: "14px",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Search size={20} strokeWidth={2} color="#9E6F1B" />
          <input
            ref={inputRef}
            type="text"
            placeholder={
              isTa
                ? "கடலை எண்ணெய், நல்லெண்ணெய், தேங்காய் எண்ணெய், நெய், வெல்லம் தேடவும்..."
                : "Search cold-pressed oils, pure cow ghee, organic jaggery..."
            }
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              fontSize: "15px",
              fontFamily: "var(--font-inter)",
              color: "#141612",
              fontWeight: 500,
            }}
          />

          {query && (
            <button
              onClick={() => setQuery("")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#84877E",
                padding: "4px",
                display: "flex",
                alignItems: "center",
              }}
              title="Clear search"
            >
              <X size={16} strokeWidth={2} />
            </button>
          )}

          <button
            onClick={onClose}
            style={{
              padding: "4px 10px",
              fontSize: "11px",
              fontWeight: 700,
              color: "#84877E",
              backgroundColor: "#FAF8F5",
              border: "1px solid #ECE7DD",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            ESC
          </button>
        </div>

        {/* Autocomplete Quick Matches (As you type) */}
        {autocompleteSuggestions.length > 0 && query.trim().length > 0 && (
          <div
            style={{
              backgroundColor: "#FAF8F5",
              padding: "10px 22px",
              borderBottom: "1px solid #ECE7DD",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            <span style={{ fontSize: "11px", color: "#84877E", fontWeight: 600 }}>Suggestions:</span>
            {autocompleteSuggestions.map((item) => (
              <button
                key={item}
                onClick={() => setQuery(item.split(" ")[0])}
                style={{
                  padding: "3px 10px",
                  borderRadius: "14px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #DCD8CF",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#141612",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span>{item}</span>
                <ArrowRight size={10} color="#9E6F1B" />
              </button>
            ))}
          </div>
        )}

        {/* Popular / Trending Searches Strip */}
        {!query && (
          <div
            style={{
              padding: "14px 22px",
              backgroundColor: "#FAF8F5",
              borderBottom: "1px solid #ECE7DD",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px", color: "#9E6F1B", fontSize: "11px", fontWeight: 700, textTransform: "uppercase" }}>
              <TrendingUp size={14} strokeWidth={2.2} />
              <span>{isTa ? "பிரபலமான தேடல்கள்" : "POPULAR SEARCHES"}</span>
            </div>

            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {POPULAR_SEARCHES.map((item) => (
                <button
                  key={item.query}
                  onClick={() => setQuery(item.query)}
                  style={{
                    padding: "5px 12px",
                    borderRadius: "20px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #ECE7DD",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#141612",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#FAF4E8";
                    e.currentTarget.style.borderColor = "#9E6F1B";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#FFFFFF";
                    e.currentTarget.style.borderColor = "#ECE7DD";
                  }}
                >
                  <span>{isTa ? item.labelTa : item.labelEn}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results List */}
        <div style={{ padding: "16px 22px", overflowY: "auto", flex: 1 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "12px",
            }}
          >
            <span
              style={{
                fontSize: "11.5px",
                textTransform: "uppercase",
                color: "#9E6F1B",
                fontWeight: 700,
                letterSpacing: "0.06em",
              }}
            >
              {filteredProducts.length} {isTa ? "தயாரிப்புகள் கிடைத்துள்ளன" : "Available Products"}
            </span>
          </div>

          {filteredProducts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px 10px" }}>
              <Package size={36} color="#84877E" style={{ margin: "0 auto 8px auto" }} />
              <p style={{ fontSize: "14px", fontWeight: 600, color: "#141612", marginBottom: "4px" }}>
                {isTa ? "பொருட்கள் எதுவும் கிடைக்கவில்லை" : "No matching products found"}
              </p>
              <p style={{ fontSize: "12px", color: "#84877E" }}>
                {isTa
                  ? "வேறு வார்த்தைகளை பயன்படுத்தி தேடவும் அல்லது கீழே உள்ள பரிந்துரைகளை தேர்ந்தெடுக்கவும்."
                  : "Try searching for peanut oil, sesame, coconut, ghee, or jaggery."}
              </p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {filteredProducts.map((item) => {
                const defaultSize = item.sizes[1] || item.sizes[0];
                return (
                  <div
                    key={item.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px 14px",
                      borderRadius: "12px",
                      backgroundColor: "#FAF8F5",
                      border: "1px solid #ECE7DD",
                      gap: "12px",
                      transition: "all 0.2s",
                    }}
                  >
                    {/* Thumbnail Image */}
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "8px",
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
                        src={item.image}
                        alt={item.nameEn}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>

                    {/* Info */}
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "2px" }}>
                        <span
                          style={{
                            fontSize: "9px",
                            fontWeight: 700,
                            color: "#9E6F1B",
                            textTransform: "uppercase",
                          }}
                        >
                          {item.brand}
                        </span>
                        <span style={{ color: "#D49C36", fontSize: "11px" }}>★ {item.rating}</span>
                      </div>

                      <h4
                        style={{
                          fontSize: "14px",
                          fontWeight: 700,
                          color: "#141612",
                          margin: 0,
                          lineHeight: 1.3,
                        }}
                      >
                        {isTa ? item.nameTa : item.nameEn}
                      </h4>

                      <p style={{ fontSize: "11.5px", color: "#84877E", margin: "2px 0 0 0" }}>
                        From ₹{defaultSize.price} ({defaultSize.label}, {defaultSize.packaging})
                      </p>
                    </div>

                    {/* Quick CTA Actions */}
                    <div style={{ display: "flex", gap: "6px", flexShrink: 0 }}>
                      <button
                        onClick={() => {
                          addItem({
                            productId: item.id,
                            name: item.nameEn,
                            nameTa: item.nameTa,
                            size: defaultSize.label,
                            packaging: defaultSize.packaging,
                            price: defaultSize.price,
                            quantity: 1,
                            image: item.image,
                          });
                          onClose();
                        }}
                        className="btn-cta btn-cta-primary btn-cta-sm"
                        style={{ gap: "4px" }}
                      >
                        <ShoppingBag size={13} strokeWidth={2} />
                        <span>+ {defaultSize.label}</span>
                      </button>

                      <button
                        onClick={() => {
                          onOpenEnquiry(item.nameEn);
                          onClose();
                        }}
                        className="btn-cta btn-cta-secondary btn-cta-sm"
                        style={{ gap: "4px" }}
                      >
                        <HelpCircle size={13} strokeWidth={1.8} />
                        <span>{isTa ? "விசாரணை" : "Enquire"}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 480px) {
          .search-modal-overlay {
            padding: 12px 10px !important;
          }
          .search-modal-card {
            border-radius: 16px !important;
            max-height: 94vh !important;
          }
        }
      `}</style>
    </div>
  );
}
