"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  MapPin,
  Phone,
  Clock,
  Building2,
  Truck,
  Store,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Navigation,
} from "lucide-react";

interface Branch {
  id: string;
  nameEn: string;
  nameTa: string;
  region: "Bengaluru" | "Interstate & Hubs";
  cityEn: string;
  cityTa: string;
  addressEn: string;
  addressTa: string;
  hubTypeEn: string;
  hubTypeTa: string;
  contact: string;
  timingsEn: string;
  timingsTa: string;
  focusEn: string;
  focusTa: string;
  badge: string;
  badgeTa: string;
  badgeColor: string;
}

const BRANCHES_DATA: Branch[] = [
  {
    id: "b1",
    nameEn: "Bengaluru Central Hub",
    nameTa: "பெங்களூரு மத்திய விநியோக மையம்",
    region: "Bengaluru",
    cityEn: "Bengaluru, Karnataka",
    cityTa: "பெங்களூரு, கர்நாடகா",
    addressEn: "APMC Yard Commercial Complex, Yeshwanthpur",
    addressTa: "APMC யார்டு வணிக வளாகம், யஷ்வந்த்பூர்",
    hubTypeEn: "Logistics & Wholesale Depot",
    hubTypeTa: "மொத்த விற்பனை & போக்குவரத்து மையம்",
    contact: "9150766377",
    timingsEn: "Mon – Sat: 8:00 AM – 8:30 PM",
    timingsTa: "திங்கள் – சனி: காலை 8:00 – இரவு 8:30",
    focusEn: "Primary B2B depot for 15kg/16L tins supplying supermarkets, grocers & retail stores.",
    focusTa: "பல்பொருள் அங்காடிகள் மற்றும் ஆர்கானிக் கடைகளுக்கு 15 கிலோ வணிக டின் விரைவு விநியோகம்.",
    badge: "CENTRAL DEPOT",
    badgeTa: "முதன்மை மையம்",
    badgeColor: "#9E6F1B",
  },
  {
    id: "b2",
    nameEn: "Jayanagar Branch",
    nameTa: "ஜெயநகர் கிளை",
    region: "Bengaluru",
    cityEn: "Bengaluru, Karnataka",
    cityTa: "பெங்களூரு, கர்நாடகா",
    addressEn: "4th Block Commercial Main Road, Jayanagar",
    addressTa: "4வது பிளாக் மெயின் ரோடு, ஜெயநகர்",
    hubTypeEn: "Retail Experience Store",
    hubTypeTa: "சில்லறை விற்பனை & வாடிக்கையாளர் மையம்",
    contact: "9655336376",
    timingsEn: "Mon – Sun: 9:00 AM – 9:00 PM",
    timingsTa: "திங்கள் – ஞாயிறு: காலை 9:00 – இரவு 9:00",
    focusEn: "Direct refilling counter, cold-pressed glass bottles, and family trial packs.",
    focusTa: "நேரடி மறுநிரப்புதல் வசதி, கண்ணாடி பாட்டில் மற்றும் குடும்ப பயன்பாட்டு பேக்குகள்.",
    badge: "RETAIL OUTLET",
    badgeTa: "சில்லறை கிளை",
    badgeColor: "#166534",
  },
  {
    id: "b3",
    nameEn: "Whitefield Unit",
    nameTa: "ஒயிட்பீல்ட் வணிக விநியோகம்",
    region: "Bengaluru",
    cityEn: "Bengaluru, Karnataka",
    cityTa: "பெங்களூரு, கர்நாடகா",
    addressEn: "ITPL Main Road, Hoodi Industrial Area",
    addressTa: "ITPL மெயின் ரோடு, ஹூடி இண்டஸ்ட்ரியல்",
    hubTypeEn: "B2B Supply Point",
    hubTypeTa: "B2B மொத்த சப்ளை மையம்",
    contact: "9150766377",
    timingsEn: "Mon – Sat: 8:30 AM – 8:00 PM",
    timingsTa: "திங்கள் – சனி: காலை 8:30 – இரவு 8:00",
    focusEn: "Commercial 15kg tin supplies for catering firms, corporate canteens, and cafes.",
    focusTa: "உணவகங்கள் மற்றும் கார்ப்பரேட் சிற்றுண்டிச்சாலைகளுக்கு 15 கிலோ டின் நேரடி சப்ளை.",
    badge: "B2B HUB",
    badgeTa: "மொத்த விநியோகம்",
    badgeColor: "#141612",
  },
  {
    id: "b4",
    nameEn: "Electronic City Center",
    nameTa: "எலக்ட்ரானிக் சிட்டி கிளை",
    region: "Bengaluru",
    cityEn: "Bengaluru, Karnataka",
    cityTa: "பெங்களூரு, கர்நாடகா",
    addressEn: "Phase 1 Neeladri Road, Electronic City",
    addressTa: "பேஸ் 1 நீலாத்ரி ரோடு, எலக்ட்ரானிக் சிட்டி",
    hubTypeEn: "Retail & Local Delivery",
    hubTypeTa: "சில்லறை & டெலிவரி மையம்",
    contact: "9655336376",
    timingsEn: "Mon – Sun: 9:00 AM – 8:30 PM",
    timingsTa: "திங்கள் – ஞாயிறு: காலை 9:00 – இரவு 8:30",
    focusEn: "Express same-day residential delivery for 1L bottles and 5L jerrycans across South BLR.",
    focusTa: "தெற்கு பெங்களூரு குடியிருப்பு பகுதிகளுக்கு 1L மற்றும் 5L விரைவு டோர் டெலிவரி.",
    badge: "EXPRESS STORE",
    badgeTa: "விரைவு கிளை",
    badgeColor: "#C48A27",
  },
  {
    id: "b5",
    nameEn: "Salem Central Plant",
    nameTa: "சேலம் முதன்மை உற்பத்தி ஆலை",
    region: "Interstate & Hubs",
    cityEn: "Salem, Tamil Nadu",
    cityTa: "சேலம், தமிழ்நாடு",
    addressEn: "Vagai Chekku Industrial Estate, Omalur Road",
    addressTa: "வாகை மரச்செக்கு வளாகம், ஓமலூர் ரோடு",
    hubTypeEn: "Main Production Facility",
    hubTypeTa: "பாரம்பரிய மரச்செக்கு உற்பத்தி ஆலை",
    contact: "9150766377",
    timingsEn: "24/7 Production & Intake Facility",
    timingsTa: "24/7 உற்பத்தி மற்றும் நேரடி கொள்முதல்",
    focusEn: "Primary wood chekku pressing plant, native seed testing, and high-volume dispatch.",
    focusTa: "வாகை மரச்செக்கு பிழிதல், தரப்பரிசோதனை மற்றும் மாநில அளவிலான மொத்த சரக்கு அனுப்புதல்.",
    badge: "MAIN PLANT",
    badgeTa: "முதன்மை ஆலை",
    badgeColor: "#166534",
  },
  {
    id: "b6",
    nameEn: "Coimbatore Branch",
    nameTa: "கோயம்புத்தூர் கிளை",
    region: "Interstate & Hubs",
    cityEn: "Coimbatore, Tamil Nadu",
    cityTa: "கோயம்புத்தூர், தமிழ்நாடு",
    addressEn: "Mettupalayam Road, Commercial Trade Hub",
    addressTa: "மேட்டுப்பாளையம் ரோடு வணிக வளாகம்",
    hubTypeEn: "Wholesale Mandi Depot",
    hubTypeTa: "மொத்த மண்டி விநியோகம்",
    contact: "9655336376",
    timingsEn: "Mon – Sat: 7:30 AM – 8:00 PM",
    timingsTa: "திங்கள் – சனி: காலை 7:30 – இரவு 8:00",
    focusEn: "Bulk trading in sulphur-free coconut oil and gingelly oil for sweet makers and mandis.",
    focusTa: "தேங்காய் எண்ணெய் மற்றும் நல்லெண்ணெய் மொத்த வர்த்தகம் & இனிப்பக உற்பத்தியாளர்கள் சப்ளை.",
    badge: "MANDI DEPOT",
    badgeTa: "மண்டி மையம்",
    badgeColor: "#9E6F1B",
  },
  {
    id: "b7",
    nameEn: "Chennai Metro Outlet",
    nameTa: "சென்னை மெட்ரோ கிளை",
    region: "Interstate & Hubs",
    cityEn: "Chennai, Tamil Nadu",
    cityTa: "சென்னை, தமிழ்நாடு",
    addressEn: "Poonamallee High Road, Koyambedu Corridor",
    addressTa: "பூந்தமல்லி ஹை ரோடு, கோயம்பேடு",
    hubTypeEn: "Retail & Wholesale Hub",
    hubTypeTa: "சில்லறை & மொத்த விற்பனை கிளை",
    contact: "9150766377",
    timingsEn: "Mon – Sat: 8:00 AM – 9:00 PM",
    timingsTa: "திங்கள் – சனி: காலை 8:00 – இரவு 9:00",
    focusEn: "Direct delivery for supermarket chains, organic grocers, and catering accounts.",
    focusTa: "சூப்பர் மார்க்கெட் சப்ளை, ஆர்கானிக் அங்காடிகள் மற்றும் கேட்ரிங் மொத்த ஆர்டர்கள்.",
    badge: "METRO HUB",
    badgeTa: "மெட்ரோ கிளை",
    badgeColor: "#141612",
  },
  {
    id: "b8",
    nameEn: "Erode Jaggery Center",
    nameTa: "ஈரோடு வெல்ல விநியோக மையம்",
    region: "Interstate & Hubs",
    cityEn: "Erode, Tamil Nadu",
    cityTa: "ஈரோடு, தமிழ்நாடு",
    addressEn: "Sugarcane Mandi Circle, Perundurai Bypass",
    addressTa: "கரும்பு மண்டி வட்டம், பெருந்துறை பைபாஸ்",
    hubTypeEn: "Agri-Procurement Hub",
    hubTypeTa: "கரும்பு விவசாய கொள்முதல் மையம்",
    contact: "9655336376",
    timingsEn: "Mon – Sat: 8:00 AM – 7:30 PM",
    timingsTa: "திங்கள் – சனி: காலை 8:00 – இரவு 7:30",
    focusEn: "Pure sugarcane procurement, chemical-free jaggery powder and solid achu jaggery dispatch.",
    focusTa: "நாட்டு சர்க்கரை, அச்சு வெல்லம் தயாரிப்பு மற்றும் நேரடி மூட்டை பேக்கிங் விநியோகம்.",
    badge: "AGRI HUB",
    badgeTa: "விவசாய மையம்",
    badgeColor: "#965F2F",
  },
  {
    id: "b9",
    nameEn: "Tirupur Wholesale Depot",
    nameTa: "திருப்பூர் மொத்த விற்பனை மையம்",
    region: "Interstate & Hubs",
    cityEn: "Tirupur, Tamil Nadu",
    cityTa: "திருப்பூர், தமிழ்நாடு",
    addressEn: "Kangeyam Road Commercial Complex",
    addressTa: "காங்கேயம் ரோடு வணிக வளாகம்",
    hubTypeEn: "Commercial Supply Center",
    hubTypeTa: "வணிக சப்ளை மையம்",
    contact: "9150766377",
    timingsEn: "Mon – Sat: 8:00 AM – 8:00 PM",
    timingsTa: "திங்கள் – சனி: காலை 8:00 – இரவு 8:00",
    focusEn: "High-volume tin supply for textile canteen dining halls, institutions & bakeries.",
    focusTa: "கேண்டீன்கள், பேக்கரிகள் மற்றும் மொத்த நிறுவன பயன்பாட்டுக்கான 15kg டின் விநியோகம்.",
    badge: "COMMERCIAL",
    badgeTa: "வணிக மையம்",
    badgeColor: "#141612",
  },
  {
    id: "b10",
    nameEn: "Hosur Corridor Hub",
    nameTa: "ஓசூர் எல்லை விநியோக மையம்",
    region: "Interstate & Hubs",
    cityEn: "Hosur, Tamil Nadu",
    cityTa: "ஓசூர், தமிழ்நாடு",
    addressEn: "Bangalore-Salem National Highway Cross",
    addressTa: "பெங்களூரு-சேலம் தேசிய நெடுஞ்சாலை சந்திப்பு",
    hubTypeEn: "Interstate Cross-Dock",
    hubTypeTa: "மாநிலங்களுக்கு இடையிலான விநியோக மையம்",
    contact: "9655336376",
    timingsEn: "Mon – Sat: 8:00 AM – 8:30 PM",
    timingsTa: "திங்கள் – சனி: காலை 8:00 – இரவு 8:30",
    focusEn: "Express corridor bridging Karnataka-Tamil Nadu freight logistics within 24 hours.",
    focusTa: "கர்நாடகா மற்றும் தமிழ்நாடு மாநில எல்லை விரைவு சரக்கு போக்குவரத்து இணைப்பு மையம்.",
    badge: "CROSS-DOCK",
    badgeTa: "எல்லை மையம்",
    badgeColor: "#C48A27",
  },
];

export default function BranchesSection() {
  const [selectedRegion, setSelectedRegion] = useState<"All" | "Bengaluru" | "Interstate & Hubs">("All");
  const { language } = useLanguage();
  const isTa = language === "ta";

  const filteredBranches =
    selectedRegion === "All"
      ? BRANCHES_DATA
      : BRANCHES_DATA.filter((b) => b.region === selectedRegion);

  const handleWhatsAppBranch = (branch: Branch) => {
    const text = isTa
      ? `வணக்கம்! வி.எஸ் ஆர்கானிக் கிளை: ${branch.nameTa} (${branch.cityTa}). சில்லறை / மொத்த டின் இருப்பு மற்றும் விநியோக விவரங்களை அறிய விரும்புகிறேன்.`
      : `Hello! I would like to inquire about current stock, retail packs, and commercial 15kg tins at VS Organic: ${branch.nameEn} (${branch.cityEn}).`;
    window.open(`https://wa.me/91${branch.contact}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section
      id="branches"
      style={{
        paddingTop: "76px",
        paddingBottom: "84px",
        backgroundColor: "#FAF7F2",
        borderTop: "1px solid #ECE7DD",
        borderBottom: "1px solid #ECE7DD",
      }}
    >
      <div className="site-container">
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "780px",
            margin: "0 auto 40px auto",
          }}
        >
          <span className="eyebrow-text" style={{ display: "block", marginBottom: "8px" }}>
            {isTa ? "10 நேரடி கிளைகள் & விநியோக நெட்வொர்க்" : "OUR 10 REGIONAL HUBS & BRANCH NETWORK"}
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
            {isTa ? "தென்னிந்தியா முழுவதும் 10 நேரடி விநியோக மையங்கள்" : "Strategically Located Across South India"}
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
              ? "பெங்களூரு, சேலம், சென்னை, கோயம்புத்தூர், ஈரோடு உள்ளிட்ட 10 கிளைகளில் சில்லறை பாட்டில் விற்பனை மற்றும் 15 கிலோ வணிக டின் நேரடி ஆலை சப்ளை."
              : "Direct retail refilling counters, household pantry supplies, and commercial 15kg tin wholesale depots across Bengaluru and major South Indian industrial corridors."}
          </p>
        </div>

        {/* 4 Quick Stats Metrics Strip (Matching First-Half Feature Badges) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
            marginBottom: "36px",
          }}
          className="branches-metrics-strip"
        >
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #ECE7DD",
              borderRadius: "14px",
              padding: "18px 20px",
              display: "flex",
              alignItems: "center",
              gap: "14px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
            }}
          >
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
              <Building2 size={20} strokeWidth={2} />
            </div>
            <div>
              <span style={{ fontSize: "19px", fontWeight: 800, color: "#141612", lineHeight: 1.1, display: "block" }}>
                10 Hubs
              </span>
              <span style={{ fontSize: "11.5px", color: "#6B6E66" }}>
                {isTa ? "கர்நாடகா & தமிழ்நாடு" : "Bengaluru & South India"}
              </span>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #ECE7DD",
              borderRadius: "14px",
              padding: "18px 20px",
              display: "flex",
              alignItems: "center",
              gap: "14px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
            }}
          >
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
              <Store size={20} strokeWidth={2} />
            </div>
            <div>
              <span style={{ fontSize: "19px", fontWeight: 800, color: "#141612", lineHeight: 1.1, display: "block" }}>
                4 Bengaluru
              </span>
              <span style={{ fontSize: "11.5px", color: "#6B6E66" }}>
                {isTa ? "மத்திய & சில்லறை கிளைகள்" : "Yeshwanthpur, Jayanagar"}
              </span>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #ECE7DD",
              borderRadius: "14px",
              padding: "18px 20px",
              display: "flex",
              alignItems: "center",
              gap: "14px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
            }}
          >
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
              <Truck size={20} strokeWidth={2} />
            </div>
            <div>
              <span style={{ fontSize: "19px", fontWeight: 800, color: "#141612", lineHeight: 1.1, display: "block" }}>
                24 – 48h
              </span>
              <span style={{ fontSize: "11.5px", color: "#6B6E66" }}>
                {isTa ? "ஆலை நேரடி விநியோகம்" : "Direct Mill Freight"}
              </span>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #ECE7DD",
              borderRadius: "14px",
              padding: "18px 20px",
              display: "flex",
              alignItems: "center",
              gap: "14px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
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
              <ShieldCheck size={20} strokeWidth={2} />
            </div>
            <div>
              <span style={{ fontSize: "19px", fontWeight: 800, color: "#166534", lineHeight: 1.1, display: "block" }}>
                Zero Middlemen
              </span>
              <span style={{ fontSize: "11.5px", color: "#6B6E66" }}>
                {isTa ? "நேரடி ஆலை மில் விலை" : "Honest Mill-Gate Value"}
              </span>
            </div>
          </div>
        </div>

        {/* Region Filter Buttons (Matching ProductCatalog Category Pills) */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "36px",
          }}
        >
          <button
            onClick={() => setSelectedRegion("All")}
            className={`btn-cta ${selectedRegion === "All" ? "btn-cta-primary" : "btn-cta-secondary"} btn-cta-sm`}
          >
            {isTa ? "அனைத்து 10 கிளைகள்" : "ALL 10 REGIONAL HUBS"}
          </button>

          <button
            onClick={() => setSelectedRegion("Bengaluru")}
            className={`btn-cta ${selectedRegion === "Bengaluru" ? "btn-cta-primary" : "btn-cta-secondary"} btn-cta-sm`}
          >
            {isTa ? "பெங்களூரு கிளைகள் (4)" : "BENGALURU METRO UNITS (4)"}
          </button>

          <button
            onClick={() => setSelectedRegion("Interstate & Hubs")}
            className={`btn-cta ${selectedRegion === "Interstate & Hubs" ? "btn-cta-primary" : "btn-cta-secondary"} btn-cta-sm`}
          >
            {isTa ? "உற்பத்தி & பிற கிளைகள் (6)" : "INTERSTATE & MANDI HUBS (6)"}
          </button>
        </div>

        {/* 10 Branches Cards Grid (Luxora Editorial Cards with High Contrast) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "22px",
            width: "100%",
            marginBottom: "36px",
          }}
          className="branches-cards-grid"
        >
          {filteredBranches.map((branch) => {
            const bName = isTa ? branch.nameTa : branch.nameEn;
            const bCity = isTa ? branch.cityTa : branch.cityEn;
            const bAddress = isTa ? branch.addressTa : branch.addressEn;
            const bHub = isTa ? branch.hubTypeTa : branch.hubTypeEn;
            const bFocus = isTa ? branch.focusTa : branch.focusEn;
            const bTimings = isTa ? branch.timingsTa : branch.timingsEn;
            const bBadge = isTa ? branch.badgeTa : branch.badge;

            return (
              <div
                key={branch.id}
                className="lux-product-card"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "16px",
                  padding: "24px 22px",
                  border: "1px solid #ECE7DD",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
                  position: "relative",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <div>
                  {/* Top Bar: Location & Hub Badge */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "8px",
                      marginBottom: "14px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                      <MapPin size={13} color="#9E6F1B" strokeWidth={2.2} />
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 700,
                          color: "#9E6F1B",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {bCity}
                      </span>
                    </div>

                    <span
                      style={{
                        fontSize: "9.5px",
                        fontWeight: 800,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        backgroundColor: "#FAF4E8",
                        color: branch.badgeColor,
                        padding: "3px 9px",
                        borderRadius: "12px",
                        border: "1px solid #ECE7DD",
                      }}
                    >
                      {bBadge}
                    </span>
                  </div>

                  {/* Branch Heading */}
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#141612",
                      lineHeight: 1.25,
                      marginBottom: "4px",
                    }}
                  >
                    {bName}
                  </h3>

                  {/* Hub Classification */}
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#7E8079",
                      fontWeight: 600,
                      display: "block",
                      marginBottom: "10px",
                    }}
                  >
                    {bHub}
                  </span>

                  {/* Address */}
                  <p
                    style={{
                      fontSize: "12.5px",
                      color: "#6B6E66",
                      lineHeight: 1.5,
                      marginBottom: "14px",
                    }}
                  >
                    {bAddress}
                  </p>

                  {/* Operational Focus Box */}
                  <div
                    style={{
                      backgroundColor: "#FAF7F2",
                      borderRadius: "10px",
                      padding: "12px 14px",
                      border: "1px solid #EDE8DE",
                      marginBottom: "14px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "9.5px",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "#9E6F1B",
                        display: "block",
                        marginBottom: "3px",
                      }}
                    >
                      {isTa ? "முக்கிய சேவை" : "SPECIALIZATION & ROLE"}
                    </span>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#555750",
                        lineHeight: 1.45,
                        margin: 0,
                      }}
                    >
                      {bFocus}
                    </p>
                  </div>

                  {/* Operating Timings */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "7px",
                      fontSize: "11.5px",
                      color: "#7E8079",
                      marginBottom: "18px",
                    }}
                  >
                    <Clock size={13} color="#9E6F1B" strokeWidth={2} />
                    <span>{bTimings}</span>
                  </div>
                </div>

                {/* Bottom Actions: Call + WhatsApp Inquiry Buttons */}
                <div
                  style={{
                    paddingTop: "14px",
                    borderTop: "1px solid #F0EEE9",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "8px",
                  }}
                >
                  <a
                    href={`tel:${branch.contact}`}
                    className="btn-cta btn-cta-secondary"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                      padding: "9px 12px",
                      fontSize: "11.5px",
                      textDecoration: "none",
                    }}
                  >
                    <Phone size={12} strokeWidth={2} />
                    <span>{isTa ? "அழைக்க" : "Call Hub"}</span>
                  </a>

                  <button
                    onClick={() => handleWhatsAppBranch(branch)}
                    className="btn-cta btn-cta-primary"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                      padding: "9px 12px",
                      fontSize: "11.5px",
                      cursor: "pointer",
                      border: "none",
                    }}
                  >
                    <MessageCircle size={12} strokeWidth={2} />
                    <span>{isTa ? "விசாரிக்க" : "Enquire"}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* South India Express Logistics Corridor Showcase (Editorial Strip) */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "16px",
            padding: "24px 30px",
            border: "1px solid #ECE7DD",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            boxShadow: "0 4px 18px rgba(0, 0, 0, 0.02)",
          }}
          className="corridor-showcase-strip"
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <span
              style={{
                width: "44px",
                height: "44px",
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
              <Navigation size={20} strokeWidth={2} />
            </span>
            <div>
              <h4 style={{ fontSize: "14.5px", fontWeight: 700, color: "#141612", marginBottom: "3px" }}>
                {isTa
                  ? "சேலம் ஆலை ⇄ பெங்களூரு தினசரி நேரடி விரைவு சரக்கு இணைப்பு"
                  : "Salem Production Mill ⇄ Bengaluru Daily Express Transit Corridor"}
              </h4>
              <p style={{ fontSize: "12px", color: "#6B6E66", margin: 0 }}>
                {isTa
                  ? "மாநில எல்லைகளுக்கு இடையே இடைவிடாத விநியோகம் • 15kg டின் மொத்த ஆர்டர்கள் 24 முதல் 48 மணி நேரத்தில் வந்து சேரும்."
                  : "Seamless logistics bridging Salem extraction with Yeshwanthpur APMC Yard & retail stores within 24-48 hours."}
              </p>
            </div>
          </div>

          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <span
              style={{
                padding: "6px 14px",
                backgroundColor: "#FAF7F2",
                border: "1px solid #ECE7DD",
                borderRadius: "20px",
                fontSize: "11.5px",
                fontWeight: 700,
                color: "#141612",
              }}
            >
              🚚 Daily Mill Dispatches
            </span>
            <span
              style={{
                padding: "6px 14px",
                backgroundColor: "#E6F8EB",
                border: "1px solid #C8EEDB",
                borderRadius: "20px",
                fontSize: "11.5px",
                fontWeight: 700,
                color: "#166534",
              }}
            >
              ✓ 500+ Retail Partners
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .branches-metrics-strip {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .corridor-showcase-strip {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
        @media (max-width: 520px) {
          .branches-metrics-strip {
            grid-template-columns: 1fr !important;
          }
          .branches-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
