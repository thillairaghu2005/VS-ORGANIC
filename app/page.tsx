"use client";

import React, { useState } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import { CartProvider, useCart } from "@/context/CartContext";
import LanguageSelectModal from "@/components/LanguageSelectModal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCatalog from "@/components/ProductCatalog";
import DualPromoBanners from "@/components/DualPromoBanners";
import ShopByPackaging from "@/components/ShopByPackaging";
import ChekkuProcess from "@/components/ChekkuProcess";
import WholesaleCalculator from "@/components/WholesaleCalculator";
import BranchesSection from "@/components/BranchesSection";
import BrandStory from "@/components/BrandStory";
import NewsletterWholesaleBar from "@/components/NewsletterWholesaleBar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import EnquiryModal from "@/components/EnquiryModal";
import CheckoutModal from "@/components/CheckoutModal";
import FloatingCTA from "@/components/FloatingCTA";

function HomeContent() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState("Wood Pressed Groundnut Oil");
  const { isCheckoutOpen, setIsCheckoutOpen } = useCart();

  const handleOpenEnquiry = (productName?: string) => {
    if (productName) {
      setSelectedProductForModal(productName);
    }
    setModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setModalOpen(false);
  };

  return (
    <main
      className="main-page-wrapper"
      style={{
        minHeight: "100vh",
        position: "relative",
        backgroundColor: "#FFFFFF",
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
    >
      {/* Entry Language Prompt Modal (தமிழ் vs English) */}
      <LanguageSelectModal />

      {/* 1. Header / Navigation Bar with Organized Categories */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* 2. Hero Section */}
      <Hero onOpenEnquiry={handleOpenEnquiry} />

      {/* 3. Product Catalog with Filters (Price, Brand, Size, Rating) & High-Res Images */}
      <ProductCatalog onSelectProductForEnquiry={handleOpenEnquiry} />

      {/* 6. Dual Promo Banners */}
      <DualPromoBanners onOpenEnquiry={handleOpenEnquiry} />

      {/* 7. Shop By Packaging & Sizes */}
      <ShopByPackaging onOpenEnquiry={handleOpenEnquiry} />

      {/* 8. Traditional Wooden Chekku Process (4-step craft & quality verification) */}
      <ChekkuProcess />

      {/* 9. Interactive Wholesale B2B Volume & Quotation Estimator (WhatsApp direct) */}
      <WholesaleCalculator />

      {/* 10. 10 Branches Network (Bengaluru & South India) */}
      <BranchesSection />

      {/* 11. Nature-Crafted Products & Bottle Showcase Slide */}
      <BrandStory onOpenEnquiry={handleOpenEnquiry} />

      {/* 12. Newsletter / Wholesale Rate Sheet Callback Strip */}
      <NewsletterWholesaleBar />

      {/* 13. Comprehensive Footer (Contacts, Support, Policies, Socials, Payments) */}
      <Footer onOpenEnquiry={handleOpenEnquiry} />

      {/* 14. Interactive Slide-out Shopping Bag Drawer with Quantity & Removal Controls */}
      <CartDrawer />

      {/* 15. Simplified Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

      {/* 16. Bottom Right Floating Call & WhatsApp Action Pill / Mobile Action Bar */}
      <FloatingCTA onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* 17. Wholesale Enquiry Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={handleCloseEnquiry}
        defaultProduct={selectedProductForModal}
      />

      <style jsx global>{`
        @media (max-width: 768px) {
          .main-page-wrapper {
            padding-bottom: 64px !important;
          }
        }
      `}</style>
    </main>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <CartProvider>
        <HomeContent />
      </CartProvider>
    </LanguageProvider>
  );
}
