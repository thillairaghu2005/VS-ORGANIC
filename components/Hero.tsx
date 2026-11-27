"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface HeroProps {
  onOpenEnquiry?: (defaultProduct?: string) => void;
}

export default function Hero({ onOpenEnquiry }: HeroProps) {
  const { language } = useLanguage();
  const isTa = language === "ta";

  const PRODUCTS = [
    {
      id: "groundnut-oil",
      nameEn: "Wood Pressed Groundnut Oil",
      nameTa: "மரச்செக்கு கடலை எண்ணெய்",
      subEn: "Pure Vaagai Chekku • Kadalai Ennai",
      subTa: "அசல் வாகை மரச்செக்கு • நாட்டு நிலக்கடலை",
      highlightEn: "Cold-pressed below 45°C in traditional Vaagai wooden chekkus. Unrefined, unbleached, retaining rich nutty flavor & heart-healthy nutrients.",
      highlightTa: "பாரம்பரிய வாகை மரச்செக்கில் பிழியப்பட்ட தூய கடலை எண்ணெய். ரசாயனங்கள் அற்ற அசல் இயற்கை சத்துக்கள் நிறைந்தது.",
      image: "/images/products/groundnut-oil.jpg",
      qualityEn: "100% Wood-Pressed • Zero Chemicals",
      qualityTa: "100% மரச்செக்கு • ரசாயனம் இல்லை",
    },
    {
      id: "sesame-oil",
      nameEn: "Traditional Sesame Chekku Oil",
      nameTa: "சுத்தமான மரச்செக்கு நல்லெண்ணெய்",
      subEn: "Native Black Sesame • Nallennai",
      subTa: "கருப்பு எள் • தூய பனைவெல்லம்",
      highlightEn: "Native black sesame seeds slowly crushed with unrefined palm jaggery. Rich in authentic South Indian aroma, minerals & sesamol.",
      highlightTa: "நாட்டு கருப்பு எள்ளுடன் தூய பனைவெல்லம் சேர்த்து பிழியப்பட்ட பாரம்பரிய மரச்செக்கு நல்லெண்ணெய். அசல் இயற்கை நறுமணம்.",
      image: "/images/products/sesame-oil.jpg",
      qualityEn: "100% Cold-Pressed • Palm Jaggery",
      qualityTa: "100% மரச்செக்கு • பனைவெல்லம்",
    },
    {
      id: "coconut-oil",
      nameEn: "Pure Copra Coconut Oil",
      nameTa: "மரச்செக்கு தேங்காய் எண்ணெய்",
      subEn: "Sulphur-Free Copra • Thengai Ennai",
      subTa: "கந்தகம் அற்ற கொப்பரை • தேங்காய் எண்ணெய்",
      highlightEn: "100% sulphur-free copra pressed at low temperatures without synthetic bleaches. Rich in natural lauric acid & nourishing goodness.",
      highlightTa: "இயற்கையாக வெயிலில் உலர்த்தப்பட்ட கந்தகமில்லா கொப்பரையில் இருந்து எடுக்கப்படும் தேங்காய் எண்ணெய். இயற்கை லாரிக் அமிலம் நிறைந்தது.",
      image: "/images/products/coconut-oil.jpg",
      qualityEn: "Sulphur-Free Copra • Unrefined",
      qualityTa: "கந்தகம் இல்லாத கொப்பரை • இயற்கை",
    },
    {
      id: "castor-oil",
      nameEn: "Pure Cold Pressed Castor Oil",
      nameTa: "மரச்செக்கு விளக்கெண்ணெய்",
      subEn: "Marachekku Aamanakku Ennai",
      subTa: "தூய ஆமணக்கு எண்ணெய்",
      highlightEn: "Cold-pressed from native castor seeds. Pure golden viscous oil ideal for hair care, body cooling, and traditional therapeutic remedies.",
      highlightTa: "நாட்டு ஆமணக்கு விதைகளை மரச்செக்கில் பிழிந்து எடுக்கப்பட்ட அடர்த்தியான சுத்தமான விளக்கெண்ணெய். கூந்தல் மற்றும் உடல் குளிர்ச்சிக்கு சிறந்தது.",
      image: "/images/products/castor-oil.svg",
      qualityEn: "100% Pure • Therapeutic Grade",
      qualityTa: "100% தூயது • உடல் குளிர்ச்சி",
    },
    {
      id: "mustard-oil",
      nameEn: "Wood Pressed Mustard Oil",
      nameTa: "மரச்செக்கு கடுகு எண்ணெய்",
      subEn: "Kachi Ghani Kadugu Ennai",
      subTa: "அசல் கார கடுகு எண்ணெய்",
      highlightEn: "Extracted from high-grade black mustard seeds at low cold temperatures. Distinct sharp aroma, high smoke point, and authentic taste for curries.",
      highlightTa: "உயர்தர கருங்கடுகு விதைகளை மரச்செக்கில் பிழிந்து வடிக்கப்பட்ட சுத்தமான கடுகு எண்ணெய். ஊறுகாய் மற்றும் சமையலுக்கு ஏற்ற காரத்தன்மை.",
      image: "/images/products/mustard-oil.svg",
      qualityEn: "Cold Wood-Pressed • Pungent",
      qualityTa: "மரச்செக்கு காரம் • அசல் தரம்",
    },
    {
      id: "neem-oil",
      nameEn: "Pure Cold Pressed Neem Oil",
      nameTa: "மரச்செக்கு வேப்பெண்ணெய்",
      subEn: "Marachekku Veppennai",
      subTa: "தூய வேப்பெண்ணெய்",
      highlightEn: "Extracted from native sun-dried neem seeds using cold-pressed wooden mills. Rich in azadirachtin, perfect for organic farming and skin care.",
      highlightTa: "நாட்டு வேப்பங்கொட்டைகளை மரச்செக்கில் பிழிந்து தயாரிக்கப்பட்ட கசப்பு வாசம் கொண்ட தூய வேப்பெண்ணெய். இயற்கை விவசாயத்திற்கு உகந்தது.",
      image: "/images/products/neem-oil.svg",
      qualityEn: "Therapeutic Grade • Zero Solvents",
      qualityTa: "மூலிகை பயன் • இயற்கை விவசாயம்",
    },
    {
      id: "deepam-oil",
      nameEn: "Pancha Deepam Pooja Oil",
      nameTa: "பஞ்ச தீபம் பூஜா எண்ணெய்",
      subEn: "5 Sacred Oils Traditional Blend",
      subTa: "தெய்வீக விளக்கேற்றும் எண்ணெய்",
      highlightEn: "A sacred blend of sesame oil, mahua oil, castor oil, neem oil, and pure cow ghee formulated for bright soot-free divine illumination.",
      highlightTa: "நல்லெண்ணெய், இலுப்பை எண்ணெய், விளக்கெண்ணெய், வேப்பெண்ணெய் மற்றும் பசு நெய் இணைந்த புனித பஞ்ச தீப எண்ணெய். பிரகாசமான சுடர்.",
      image: "/images/products/deepam-oil.svg",
      qualityEn: "5 Sacred Oils • Divine Aroma",
      qualityTa: "5 புனித எண்ணெய் • தெய்வீக மணம்",
    },
    {
      id: "pure-ghee",
      nameEn: "Pure Desi Cow Ghee (Danedar)",
      nameTa: "சுத்தமான பசு நெய் (மணல் பதம்)",
      subEn: "Grass-Fed Cow Butter • Pasu Nei",
      subTa: "புல் மேயும் பசு வெண்ணெய் • மணல் பதம்",
      highlightEn: "Clarified in small batches using traditional slow-heating methods. Golden granular texture, rich butter aroma & zero artificial coloring.",
      highlightTa: "பாரம்பரிய முறையில் சிறு பாத்திரங்களில் காய்ச்சப்பட்ட மணல் மணலான தூய பசு நெய். எவ்வித ரசாயன நிறமூட்டிகள் இல்லாத அசல் சுவை.",
      image: "/images/products/pure-ghee.jpg",
      qualityEn: "Danedar Texture • Cultured Butter",
      qualityTa: "மணல் மணலான பதம் • பசு வெண்ணெய்",
    },
    {
      id: "jaggery-powder",
      nameEn: "Organic Naattu Sakkarai",
      nameTa: "நாட்டு சர்க்கரை / வெல்ல தூள்",
      subEn: "Unrefined Cane Sugar • Pure Sweetener",
      subTa: "ரசாயனம் கலக்காத இயற்கை நாட்டு சர்க்கரை",
      highlightEn: "Evaporated fresh cane juice naturally unrefined and sun-dried. Rich in organic iron, calcium, potassium & wholesome minerals.",
      highlightTa: "தூய கரும்பு சாற்றை இயற்கை முறையில் காய்ச்சி தயாரிக்கப்பட்ட சர்க்கரை. அசல் இரும்புச்சத்து மற்றும் தாதுக்கள் நிறைந்தது.",
      image: "/images/products/jaggery-powder.jpg",
      qualityEn: "100% Unrefined • Free-Flowing",
      qualityTa: "100% ரசாயனம் இல்லை • இயற்கை இனிப்பு",
    },
    {
      id: "palm-jaggery",
      nameEn: "Traditional Palm Jaggery (Karupatti)",
      nameTa: "பாரம்பரிய பனை வெல்லம் (கருப்பட்டி)",
      subEn: "Pure Panai Karupatti",
      subTa: "உடன்குடி பனை கருப்பட்டி",
      highlightEn: "Handcrafted by boiling pure palm neera in copper vessels without sulphur or artificial colours. Rich in potassium and iron.",
      highlightTa: "பதநீரை செப்பு பாத்திரத்தில் காய்ச்சி பனை ஓலையில் வார்ப்பு செய்யப்பட்ட அசல் கருப்பட்டி. சளி, இருமல் மற்றும் உடல் ஆரோக்கியத்திற்கு சிறந்தது.",
      image: "/images/products/palm-jaggery.svg",
      qualityEn: "Authentic Neera • Zero Adulteration",
      qualityTa: "அசல் பனை பதநீர் • இரும்புச்சத்து",
    },
    {
      id: "cane-jaggery",
      nameEn: "Traditional Cane Jaggery (Achu Vellam)",
      nameTa: "நாட்டு அச்சு வெல்லம் / உருண்டை வெல்லம்",
      subEn: "Solid Cane Achu & Mandai Vellam",
      subTa: "பாரம்பரிய கரும்பு அச்சு வெல்லம்",
      highlightEn: "Solid unrefined traditional sugarcane jaggery blocks prepared without chemical bleaches or synthetic preservatives. Pure natural sweetness.",
      highlightTa: "எவ்வித ரசாயன நிறமூட்டிகள் இல்லாத பாரம்பரிய அச்சு வெல்லம் மற்றும் மண்டை வெல்லம். பண்டிகைகள் மற்றும் அன்றாட சமையலுக்கு ஏற்றது.",
      image: "/images/products/traditional-jaggery.jpg",
      qualityEn: "Solid Cane Blocks • Chemical-Free",
      qualityTa: "அசல் அச்சு வெல்லம் • ரசாயனம் இல்லை",
    },
    {
      id: "kadala-parupu",
      nameEn: "Organic Kadalai Paruppu (Chana Dal)",
      nameTa: "நாட்டு கடலை பருப்பு",
      subEn: "Pure Bengal Gram Dal",
      subTa: "கொண்டைக்கடலை பருப்பு",
      highlightEn: "Naturally sourced desi chana split lentils, unpolished and free from artificial yellow colorants. High protein and nutty aroma for medu vadai.",
      highlightTa: "நாட்டு கொண்டைக்கடலையிலிருந்து உடைக்கப்பட்ட இயற்கை மஞ்சள் நிற கடலை பருப்பு. பாலீஷ் செய்யப்படாதது. வடை மற்றும் குழம்புகளுக்கு தனி சுவை தரும்.",
      image: "/images/products/kadala-paruppu.svg",
      qualityEn: "Unpolished Grain • High Protein",
      qualityTa: "நோ பாலிஷ் • அதிக புரதம்",
    },
    {
      id: "thovuram-parupu",
      nameEn: "Unpolished Thuvaram Paruppu (Toor Dal)",
      nameTa: "நாட்டு துவரம் பருப்பு",
      subEn: "Pure Pigeon Pea Dal",
      subTa: "பாலீஷ் செய்யப்படாத துவரம்பருப்பு",
      highlightEn: "100% laser-sorted unpolished toor dal without oil or water polishing. Cooks to smooth buttery consistency with deep authentic sambar aroma.",
      highlightTa: "எண்ணெய் அல்லது நீர் பாலிஷ் பூசப்படாத தூய நாட்டு துவரம் பருப்பு. எளிதில் வேகும், பாரம்பரிய சாம்பாரின் நறுமணத்தை கூட்டும்.",
      image: "/images/products/thuvaram-paruppu.svg",
      qualityEn: "Laser-Sorted • Zero Oil Polish",
      qualityTa: "எண்ணெய் பாலிஷ் இல்லை • சாம்பார் மணம்",
    },
    {
      id: "olutham-parupu",
      nameEn: "Native Ulutham Paruppu (Urad Dal)",
      nameTa: "நாட்டு உளுத்தம் பருப்பு",
      subEn: "White Split Urad Dal",
      subTa: "மாவு பொங்கும் வெள்ளை உளுந்து",
      highlightEn: "Handpicked native split urad dal known for supreme batter volume. Delivers softest feather-light idlis and crisp golden medu vadas.",
      highlightTa: "கிரைண்டரில் அரைக்கும் போது அதிக மாவு பொங்கும் தன்மை கொண்ட அசல் நாட்டு உளுந்து. பஞ்சு போன்ற இட்லி மற்றும் மொறுமொறு மெதுவடைக்கு சிறந்தது.",
      image: "/images/products/ulutham-paruppu.svg",
      qualityEn: "High Fluff Batter • Pure Native",
      qualityTa: "அதிக மாவு உப்பல் • மல்லிகைப்பூ இட்லி",
    },
    {
      id: "pasi-parupu",
      nameEn: "Farm Fresh Paasi Paruppu (Moong Dal)",
      nameTa: "நாட்டு பாசிப் பருப்பு",
      subEn: "Split Yellow Moong Dal",
      subTa: "சத்து நிறைந்த சிறுபருப்பு",
      highlightEn: "Golden split green gram lentils, exceptionally light on digestion and rich in clean protein. Cooks smoothly for comforting ven pongal and kootu.",
      highlightTa: "செரிமானத்திற்கு மிகவும் எளிதான சுத்தமான பாசிப்பருப்பு. குழந்தைகள் முதல் பெரியவர்கள் வரை அனைவருக்கும் உகந்தது. வெண் பொங்கலுக்கு ஏற்றது.",
      image: "/images/products/paasi-paruppu.svg",
      qualityEn: "Easy to Digest • Clean Protein",
      qualityTa: "எளிதில் செரிக்கும் • வெண் பொங்கல்",
    },
  ];

  // Duplicated list for seamless infinite loop from left to right
  const SLIDE_ITEMS = [...PRODUCTS, ...PRODUCTS];

  return (
    <section
      className="hero-full-view-section"
      style={{
        position: "relative",
        backgroundColor: "#FAF7F2",
        width: "100%",
        overflowX: "hidden",
        paddingTop: "16px",
        paddingBottom: "24px",
        borderBottom: "1px solid #EBE5D8",
      }}
    >
      {/* FULL-VIEW AUTOMATIC MOVING SLIDE (FROM LEFT TO RIGHT • NO ARROWS) */}
      <div
        className="hero-auto-slide-container"
        style={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
          paddingTop: "6px",
          paddingBottom: "12px",
        }}
      >
        {/* Soft edge fade masks for seamless horizontal flow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: "60px",
            background: "linear-gradient(to right, #FAF7F2 10%, rgba(250, 247, 242, 0) 100%)",
            zIndex: 4,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: "60px",
            background: "linear-gradient(to left, #FAF7F2 10%, rgba(250, 247, 242, 0) 100%)",
            zIndex: 4,
            pointerEvents: "none",
          }}
        />

        {/* Continuous Left-to-Right Moving Sliding Track */}
        <div
          className="hero-continuous-moving-track"
          style={{
            display: "flex",
            width: "max-content",
            animation: "slideLeftToRight 90s linear infinite",
            willChange: "transform",
          }}
        >
          {SLIDE_ITEMS.map((product, idx) => (
            <div
              key={`${product.id}-${idx}`}
              className="hero-product-slide-card"
              style={{
                width: "350px",
                flexShrink: 0,
                marginRight: "22px",
                backgroundColor: "#FFFFFF",
                borderRadius: "22px",
                border: "1.5px solid #EBE5D8",
                boxShadow: "0 10px 30px rgba(20, 22, 18, 0.06)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              {/* Product Bottle & Nature Image Stage */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "290px",
                  backgroundColor: "#FAF7F2",
                  overflow: "hidden",
                }}
              >
                <img
                  src={product.image}
                  alt={product.nameEn}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  loading="lazy"
                />

                {/* Subtle bottom gradient on image */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(20, 22, 18, 0.55) 0%, rgba(20, 22, 18, 0) 35%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Bottom title overlay on image */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "14px",
                    left: "16px",
                    right: "16px",
                    color: "#FFFFFF",
                    zIndex: 2,
                  }}
                >
                  <div
                    className="font-serif"
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      lineHeight: 1.2,
                      textShadow: "0 2px 6px rgba(0,0,0,0.6)",
                    }}
                  >
                    {isTa ? product.nameTa : product.nameEn}
                  </div>
                </div>
              </div>

              {/* Card Body: Details & Nature Highlight */}
              <div
                style={{
                  padding: "16px 18px 18px 18px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  justifyContent: "space-between",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <div>
                  {/* Category / Sub-heading */}
                  <span
                    style={{
                      fontSize: "10.5px",
                      fontWeight: 700,
                      color: "#9E6F1B",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    {isTa ? product.subTa : product.subEn}
                  </span>

                  {/* Highlight text */}
                  <p
                    style={{
                      fontSize: "12.5px",
                      lineHeight: 1.55,
                      color: "#555750",
                      margin: 0,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {isTa ? product.highlightTa : product.highlightEn}
                  </p>
                </div>

                {/* Pure Quality Check */}
                <div
                  style={{
                    marginTop: "12px",
                    paddingTop: "10px",
                    borderTop: "1px solid #F0ECE4",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "#166534",
                  }}
                >
                  <span style={{ fontSize: "13px" }}>✓</span>
                  <span>{isTa ? product.qualityTa : product.qualityEn}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        /* Smooth continuous scroll from left to right */
        @keyframes slideLeftToRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .hero-continuous-moving-track:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .hero-product-slide-card {
            width: 290px !important;
            margin-right: 14px !important;
          }
        }
      `}</style>
    </section>
  );
}
