"use client";

import React, { useState, useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import {
  ShoppingBag,
  HelpCircle,
  Check,
  Package,
} from "lucide-react";

export interface ProductItem {
  id: string;
  nameEn: string;
  nameTa: string;
  category: "oil" | "essential" | "pulse";
  brand: string;
  brandTa: string;
  image: string;
  subEn: string;
  subTa: string;
  badge: string;
  badgeTa: string;
  badgeType: "black" | "discount" | "gold";
  rating: number;
  reviewCount: number;
  basePrice: number;
  sizes: {
    label: string;
    price: number;
    originalPrice: number;
    packaging: string;
    sizeKey: "0.25L" | "0.5L" | "1L" | "5L" | "15kg";
  }[];
  taglineEn: string;
  taglineTa: string;
  descEn: string;
  descTa: string;
  packagingTypes: string[];
  specsEn: { label: string; value: string }[];
  specsTa: { label: string; value: string }[];
  wholesaleNotesEn: string;
  wholesaleNotesTa: string;
}

export const PRODUCTS_DATA: ProductItem[] = [
  // 1. GROUNDNUT OIL
  {
    id: "groundnut-oil",
    nameEn: "Wood Pressed Groundnut Oil",
    nameTa: "மரச்செக்கு கடலை எண்ணெய்",
    category: "oil",
    brand: "VS Organic Heritage",
    brandTa: "வி.எஸ் பாரம்பரியம்",
    image: "/images/products/groundnut-oil.jpg",
    subEn: "Marachekku Kadalai Ennai",
    subTa: "சுத்தமான கடலை எண்ணெய்",
    badge: "NEW HARVEST",
    badgeTa: "புதிய அறுவடை",
    badgeType: "black",
    rating: 4.9,
    reviewCount: 148,
    basePrice: 220,
    sizes: [
      { label: "1/4 Litre (250ml)", price: 65, originalPrice: 80, packaging: "Glass Bottle", sizeKey: "0.25L" },
      { label: "1/2 Litre (500ml)", price: 115, originalPrice: 135, packaging: "Glass Bottle", sizeKey: "0.5L" },
      { label: "1 Litre", price: 220, originalPrice: 260, packaging: "Glass Bottle", sizeKey: "1L" },
      { label: "5 Litre", price: 1050, originalPrice: 1200, packaging: "Can", sizeKey: "5L" },
      { label: "15 kg Tin", price: 2950, originalPrice: 3300, packaging: "Commercial Tin", sizeKey: "15kg" },
    ],
    taglineEn: "Cold-Pressed Peanut Oil",
    taglineTa: "பாரம்பரிய வாகை மரச்செக்கு",
    descEn:
      "Hand-picked peanut kernels extracted in traditional wooden chekkus. Unrefined, unbleached, retaining natural nutty flavor and heart-healthy nutrients.",
    descTa:
      "நேரடியாக விவசாயிகளிடம் கொள்முதல் செய்யப்பட்ட நிலக்கடலையை கொண்டு பாரம்பரிய வாகை மரச்செக்கில் பிழியப்பட்டது. ரசாயனங்கள் அற்றது.",
    packagingTypes: ["Bottle", "Tin Available"],
    specsEn: [
      { label: "Extraction", value: "Cold Wood-Pressed" },
      { label: "Refining", value: "100% Unrefined" },
      { label: "Preservatives", value: "Zero Additives" },
      { label: "Best For", value: "Daily Cooking, Deep Frying" },
    ],
    specsTa: [
      { label: "உற்பத்தி முறை", value: "வாகை மரச்செக்கு" },
      { label: "சுத்திகரிப்பு", value: "100% ரசாயனம் அற்றது" },
      { label: "பாதுகாப்பானவை", value: "ஜீரோ பிரிசர்வேட்டிவ்ஸ்" },
      { label: "பயன்பாடு", value: "தினசரி சமையல், பொரியல்" },
    ],
    wholesaleNotesEn: "High volume for retail chains, supermarkets, restaurants & grocers.",
    wholesaleNotesTa: "மளிகை கடைகள், உணவகங்கள் மற்றும் சூப்பர் மார்க்கெட்களுக்கு நேரடி விநியோகம்.",
  },

  // 2. SESAME OIL
  {
    id: "sesame-oil",
    nameEn: "Traditional Chekku Sesame Oil",
    nameTa: "மரச்செக்கு நல்லெண்ணெய்",
    category: "oil",
    brand: "VS Farm Direct",
    brandTa: "வி.எஸ் விவசாய நேரடி",
    image: "/images/products/sesame-oil.jpg",
    subEn: "Pure Gingelly / Nalla Ennai",
    subTa: "பாரம்பரிய நல்லெண்ணெய்",
    badge: "BESTSELLER",
    badgeTa: "அதிக விற்பனை",
    badgeType: "black",
    rating: 5.0,
    reviewCount: 210,
    basePrice: 380,
    sizes: [
      { label: "1/4 Litre (250ml)", price: 105, originalPrice: 125, packaging: "Glass Bottle", sizeKey: "0.25L" },
      { label: "1/2 Litre (500ml)", price: 195, originalPrice: 230, packaging: "Glass Bottle", sizeKey: "0.5L" },
      { label: "1 Litre", price: 380, originalPrice: 440, packaging: "Glass Bottle", sizeKey: "1L" },
      { label: "5 Litre", price: 1850, originalPrice: 2100, packaging: "Can", sizeKey: "5L" },
      { label: "15 kg Tin", price: 5400, originalPrice: 5900, packaging: "Commercial Tin", sizeKey: "15kg" },
    ],
    taglineEn: "Traditional Cold-Pressed Til Oil",
    taglineTa: "பனைவெல்லம் சேர்த்து பிழிந்தது",
    descEn:
      "Slow-pressed native black sesame seeds blended with pure palm jaggery to ensure rich amber clarity, smooth taste, and authentic culinary aroma.",
    descTa:
      "நாட்டு கருப்பு எள்ளுடன் சுத்தமான பனைவெல்லம் சேர்த்து பாரம்பரிய மரச்செக்கில் பிழியப்பட்ட சுத்தமான நல்லெண்ணெய்.",
    packagingTypes: ["Bottle", "Tin Available"],
    specsEn: [
      { label: "Extraction", value: "Traditional Chekku" },
      { label: "Color Tone", value: "Clear Deep Amber" },
      { label: "Nutrients", value: "Rich in Sesamol" },
      { label: "Best For", value: "South Indian Cuisine, Idli Podi" },
    ],
    specsTa: [
      { label: "உற்பத்தி முறை", value: "மரச்செக்கு & பனைவெல்லம்" },
      { label: "நிறம்", value: "தூய செம்பழுப்பு நிறம்" },
      { label: "சத்துக்கள்", value: "இயற்கை ஆன்டி-ஆக்சிடன்ட்" },
      { label: "பயன்பாடு", value: "பாரம்பரிய சமையல், இட்லி பொடி" },
    ],
    wholesaleNotesEn: "Consistent bulk supply for stores and commercial kitchens.",
    wholesaleNotesTa: "கடைகள் மற்றும் உணவகங்களுக்கு சீரான மொத்த விநியோகம்.",
  },

  // 3. COCONUT OIL
  {
    id: "coconut-oil",
    nameEn: "Pure Chekku Coconut Oil",
    nameTa: "மரச்செக்கு தேங்காய் எண்ணெய்",
    category: "oil",
    brand: "VS Farm Direct",
    brandTa: "வி.எஸ் விவசாய நேரடி",
    image: "/images/products/coconut-oil.jpg",
    subEn: "Chekku Thengai Ennai",
    subTa: "தூய தேங்காய் எண்ணெய்",
    badge: "-15% WHOLESALE",
    badgeTa: "-15% மொத்த தள்ளுபடி",
    badgeType: "discount",
    rating: 4.8,
    reviewCount: 96,
    basePrice: 260,
    sizes: [
      { label: "1/4 Litre (250ml)", price: 75, originalPrice: 90, packaging: "Glass Bottle", sizeKey: "0.25L" },
      { label: "1/2 Litre (500ml)", price: 135, originalPrice: 160, packaging: "Glass Bottle", sizeKey: "0.5L" },
      { label: "1 Litre", price: 260, originalPrice: 305, packaging: "Glass Bottle", sizeKey: "1L" },
      { label: "5 Litre", price: 1250, originalPrice: 1450, packaging: "Can", sizeKey: "5L" },
      { label: "15 kg Tin", price: 3600, originalPrice: 4100, packaging: "Commercial Tin", sizeKey: "15kg" },
    ],
    taglineEn: "Sulphur-Free Pure Copra Oil",
    taglineTa: "கந்தகம் அற்ற இயற்கை கொப்பரை",
    descEn:
      "Extracted from naturally sun-dried copra at low temperatures. Free from sulphur, chemicals, or synthetic bleaches with pure tropical fragrance.",
    descTa:
      "இயற்கையான முறையில் வெயிலில் காயவைத்த கொப்பரையை கொண்டு குறைந்த வெப்பத்தில் பிழியப்பட்டது. கந்தகம் மற்றும் பிளீச்சிங் இல்லாதது.",
    packagingTypes: ["Bottle", "Tin Available"],
    specsEn: [
      { label: "Raw Material", value: "Sulphur-Free Copra" },
      { label: "Aroma", value: "Natural Coconut" },
      { label: "Lauric Acid", value: "High Retention (>48%)" },
      { label: "Best For", value: "Cooking & Hair Nourishment" },
    ],
    specsTa: [
      { label: "மூலப்பொருள்", value: "கந்தகம் இல்லாத கொப்பரை" },
      { label: "நறுமணம்", value: "இயற்கை தேங்காய் வாசம்" },
      { label: "லாரிக் அமிலம்", value: "அதிக சத்து retention (>48%)" },
      { label: "பயன்பாடு", value: "சமையல் மற்றும் கூந்தல் பராமரிப்பு" },
    ],
    wholesaleNotesEn: "Preferred by supermarkets, bakeries & wellness buyers.",
    wholesaleNotesTa: "சூப்பர் மார்க்கெட்டுகள் மற்றும் பேக்கரிகளுக்கு உகந்தது.",
  },

  // 4. CASTOR OIL
  {
    id: "castor-oil",
    nameEn: "Pure Cold Pressed Castor Oil",
    nameTa: "மரச்செக்கு விளக்கெண்ணெய்",
    category: "oil",
    brand: "VS Organic Heritage",
    brandTa: "வி.எஸ் பாரம்பரியம்",
    image: "/images/products/castor-oil.svg",
    subEn: "Marachekku Aamanakku Ennai",
    subTa: "தூய ஆமணக்கு எண்ணெய்",
    badge: "100% PURE",
    badgeTa: "100% தூயது",
    badgeType: "black",
    rating: 4.9,
    reviewCount: 84,
    basePrice: 290,
    sizes: [
      { label: "1/4 Litre (250ml)", price: 85, originalPrice: 100, packaging: "Bottle", sizeKey: "0.25L" },
      { label: "1/2 Litre (500ml)", price: 155, originalPrice: 180, packaging: "Bottle", sizeKey: "0.5L" },
      { label: "1 Litre", price: 290, originalPrice: 340, packaging: "Bottle", sizeKey: "1L" },
      { label: "5 Litre", price: 1400, originalPrice: 1650, packaging: "Can", sizeKey: "5L" },
      { label: "15 kg Tin", price: 4100, originalPrice: 4700, packaging: "Commercial Tin", sizeKey: "15kg" },
    ],
    taglineEn: "Castor Seed Wood Pressed Oil",
    taglineTa: "உடல் குளிர்ச்சி & முடி வளர்ச்சி",
    descEn:
      "Cold wood-pressed from naturally cultivated native castor seeds. Pure golden viscous oil ideal for hair care, body cooling, and traditional therapeutic remedies.",
    descTa:
      "நாட்டு ஆமணக்கு விதைகளை மரச்செக்கில் பிழிந்து எடுக்கப்பட்ட அடர்த்தியான சுத்தமான விளக்கெண்ணெய். தலைமுடி மற்றும் உடல் ஆரோக்கியத்திற்கு சிறந்தது.",
    packagingTypes: ["Bottle", "Tin Available"],
    specsEn: [
      { label: "Source", value: "Native Castor Seeds" },
      { label: "Extraction", value: "Cold Wood-Pressed" },
      { label: "Consistency", value: "Rich Golden Viscous" },
      { label: "Best For", value: "Hair Growth, Body Cooling" },
    ],
    specsTa: [
      { label: "மூலம்", value: "நாட்டு ஆமணக்கு விதை" },
      { label: "உற்பத்தி", value: "பாரம்பரிய மரச்செக்கு" },
      { label: "பதம்", value: "இயற்கை அடர்த்தியான பொன்னிறம்" },
      { label: "பயன்பாடு", value: "கூந்தல் வளர்ச்சி, உடல் குளிர்ச்சி" },
    ],
    wholesaleNotesEn: "Supplied to ayurvedic dispensaries, retailers & salons.",
    wholesaleNotesTa: "ஆயுர்வேத மருந்தகங்கள் மற்றும் அழகு நிலையங்களுக்கு விநியோகம்.",
  },

  // 5. MUSTARD OIL
  {
    id: "mustard-oil",
    nameEn: "Wood Pressed Mustard Oil",
    nameTa: "மரச்செக்கு கடுகு எண்ணெய்",
    category: "oil",
    brand: "VS Organic Heritage",
    brandTa: "வி.எஸ் பாரம்பரியம்",
    image: "/images/products/mustard-oil.svg",
    subEn: "Kachi Ghani Kadugu Ennai",
    subTa: "அசல் கார கடுகு எண்ணெய்",
    badge: "COLD PRESSED",
    badgeTa: "மரச்செக்கு",
    badgeType: "black",
    rating: 4.8,
    reviewCount: 76,
    basePrice: 230,
    sizes: [
      { label: "1/4 Litre (250ml)", price: 70, originalPrice: 85, packaging: "Bottle", sizeKey: "0.25L" },
      { label: "1/2 Litre (500ml)", price: 125, originalPrice: 145, packaging: "Bottle", sizeKey: "0.5L" },
      { label: "1 Litre", price: 230, originalPrice: 270, packaging: "Bottle", sizeKey: "1L" },
      { label: "5 Litre", price: 1100, originalPrice: 1280, packaging: "Can", sizeKey: "5L" },
      { label: "15 kg Tin", price: 3200, originalPrice: 3650, packaging: "Commercial Tin", sizeKey: "15kg" },
    ],
    taglineEn: "Pungent Kachi Ghani Oil",
    taglineTa: "இயற்கை நறுமணம் மற்றும் காரத்தன்மை",
    descEn:
      "Extracted from high-grade black mustard seeds at low cold temperatures. Distinct sharp aroma, high smoke point, and authentic taste for curries and pickles.",
    descTa:
      "உயர்தர கருங்கடுகு விதைகளை மரச்செக்கில் பிழிந்து வடிக்கப்பட்ட சுத்தமான கடுகு எண்ணெய். ஊறுகாய் மற்றும் சமையலுக்கு ஏற்ற காரத்தன்மை.",
    packagingTypes: ["Bottle", "Tin Available"],
    specsEn: [
      { label: "Purity", value: "100% Kachi Ghani" },
      { label: "Aroma", value: "Distinct Natural Pungency" },
      { label: "Smoke Point", value: "High (Ideal for Sauté)" },
      { label: "Best For", value: "Pickling, Curries, Massage" },
    ],
    specsTa: [
      { label: "தரம்", value: "100% மரச்செக்கு பிழிந்தது" },
      { label: "நறுமணம்", value: "இயற்கை கடுகு காரம்" },
      { label: "தன்மை", value: "நீண்ட நாள் கெடாதது" },
      { label: "பயன்பாடு", value: "ஊறுகாய், காரக் குழம்பு, மசாஜ்" },
    ],
    wholesaleNotesEn: "High demand among pickle manufacturers and specialty kitchens.",
    wholesaleNotesTa: "ஊறுகாய் தயாரிப்பாளர்கள் மற்றும் உணவு நிறுவனங்களுக்கு.",
  },

  // 6. NEEM OIL
  {
    id: "neem-oil",
    nameEn: "Pure Cold Pressed Neem Oil",
    nameTa: "மரச்செக்கு வேப்பெண்ணெய்",
    category: "oil",
    brand: "VS Organic Heritage",
    brandTa: "வி.எஸ் பாரம்பரியம்",
    image: "/images/products/neem-oil.svg",
    subEn: "Marachekku Veppennai",
    subTa: "தூய வேப்பெண்ணெய்",
    badge: "HERBAL",
    badgeTa: "மூலிகை பயன்",
    badgeType: "black",
    rating: 4.9,
    reviewCount: 65,
    basePrice: 340,
    sizes: [
      { label: "1/4 Litre (250ml)", price: 95, originalPrice: 115, packaging: "Bottle", sizeKey: "0.25L" },
      { label: "1/2 Litre (500ml)", price: 180, originalPrice: 210, packaging: "Bottle", sizeKey: "0.5L" },
      { label: "1 Litre", price: 340, originalPrice: 395, packaging: "Bottle", sizeKey: "1L" },
      { label: "5 Litre", price: 1650, originalPrice: 1900, packaging: "Can", sizeKey: "5L" },
      { label: "15 kg Tin", price: 4800, originalPrice: 5400, packaging: "Commercial Tin", sizeKey: "15kg" },
    ],
    taglineEn: "Medicinal Grade Native Neem",
    taglineTa: "இயற்கை கிருமி நாசினி",
    descEn:
      "Extracted from native sun-dried neem seeds using cold-pressed wooden mills. Rich in azadirachtin, perfect for organic farming, pest control, and skin care.",
    descTa:
      "நாட்டு வேப்பங்கொட்டைகளை மரச்செக்கில் பிழிந்து தயாரிக்கப்பட்ட கசப்பு வாசம் கொண்ட தூய வேப்பெண்ணெய். பூச்சி விரட்டி மற்றும் இயற்கை விவசாயத்திற்கு உகந்தது.",
    packagingTypes: ["Bottle", "Tin Available"],
    specsEn: [
      { label: "Grade", value: "Cold Pressed Therapeutic" },
      { label: "Active Compound", value: "High Azadirachtin" },
      { label: "Chemicals", value: "Zero Synthetic Solvent" },
      { label: "Best For", value: "Organic Farming, Skin Care" },
    ],
    specsTa: [
      { label: "தரம்", value: "மரச்செக்கு மூலிகை தரம்" },
      { label: "சத்துக்கள்", value: "அசாடிராக்டின் நிறைந்தது" },
      { label: "கலப்படம்", value: "ரசாயன கரைப்பான்கள் இல்லை" },
      { label: "பயன்பாடு", value: "இயற்கை விவசாயம், பூச்சி விரட்டி" },
    ],
    wholesaleNotesEn: "Bulk drums and tins supplied for agriculture and wellness products.",
    wholesaleNotesTa: "விவசாய கூட்டமைப்புகள் மற்றும் ஆர்கானிக் தோட்டக்கலைக்கு.",
  },

  // 7. DEEPAM OIL
  {
    id: "deepam-oil",
    nameEn: "Deepam Oil (Pancha Deepam Pooja Oil)",
    nameTa: "தூய தீபம் எண்ணெய் (பஞ்ச தீபம் பூஜா எண்ணெய்)",
    category: "oil",
    brand: "VS Organic Heritage",
    brandTa: "வி.எஸ் பாரம்பரியம்",
    image: "/images/products/deepam-oil.svg",
    subEn: "Ainthu Ennai Kootu Deepam",
    subTa: "தெய்வீக விளக்கேற்றும் எண்ணெய்",
    badge: "DIVINE AROMA",
    badgeTa: "தெய்வீக மணம்",
    badgeType: "gold",
    rating: 4.9,
    reviewCount: 112,
    basePrice: 190,
    sizes: [
      { label: "1/4 Litre (250ml)", price: 55, originalPrice: 70, packaging: "Bottle", sizeKey: "0.25L" },
      { label: "1/2 Litre (500ml)", price: 105, originalPrice: 125, packaging: "Bottle", sizeKey: "0.5L" },
      { label: "1 Litre", price: 190, originalPrice: 230, packaging: "Bottle", sizeKey: "1L" },
      { label: "5 Litre", price: 920, originalPrice: 1080, packaging: "Can", sizeKey: "5L" },
      { label: "15 kg Tin", price: 2650, originalPrice: 3100, packaging: "Commercial Tin", sizeKey: "15kg" },
    ],
    taglineEn: "5 Sacred Oils Traditional Blend",
    taglineTa: "நேர்மறை ஆற்றலை ஈர்க்கும் தீபம்",
    descEn:
      "A sacred blend of sesame oil, mahua oil, castor oil, neem oil, and pure cow ghee formulated as per traditional agamas for bright soot-free divine temple illumination.",
    descTa:
      "நல்லெண்ணெய், இலுப்பை எண்ணெய், விளக்கெண்ணெய், வேப்பெண்ணெய் மற்றும் பசு நெய் இணைந்த புனித பஞ்ச தீப எண்ணெய். புகை இல்லா பிரகாசமான சுடர்.",
    packagingTypes: ["Bottle", "Tin Available"],
    specsEn: [
      { label: "Ingredients", value: "5 Sacred Traditional Oils" },
      { label: "Flame Quality", value: "Bright, Long-Lasting" },
      { label: "Smoke Level", value: "Minimal Soot" },
      { label: "Best For", value: "Pooja, Mandir, Deepam" },
    ],
    specsTa: [
      { label: "கலவை", value: "5 புனித எண்ணெய்களின் கூட்டு" },
      { label: "சுடர் தரம்", value: "பிரகாசமான, நீண்ட எரியும் சுடர்" },
      { label: "புகை", value: "மிகக் குறைந்த புகை மற்றும் கரி" },
      { label: "பயன்பாடு", value: "பூஜை அறை, கோவில் வழிபாடுகள்" },
    ],
    wholesaleNotesEn: "Regular bulk contracts for temples, mutts, and pooja stores.",
    wholesaleNotesTa: "கோவில்கள் மற்றும் பூஜை பொருள் கடைகளுக்கு நிரந்தர சப்ளை.",
  },

  // 8. PURE COW GHEE
  {
    id: "pure-ghee",
    nameEn: "Pure Desi Cow Ghee (Danedar)",
    nameTa: "சுத்தமான பசு நெய்",
    category: "essential",
    brand: "VS Desi Dairy",
    brandTa: "வி.எஸ் நாட்டு பால் பண்ணை",
    image: "/images/products/pure-ghee.jpg",
    subEn: "Pasu Nei (Danedar Texture)",
    subTa: "மணல் மணலான அசல் நெய்",
    badge: "GRANULAR",
    badgeTa: "மணல் பதம்",
    badgeType: "black",
    rating: 4.9,
    reviewCount: 175,
    basePrice: 680,
    sizes: [
      { label: "1/4 kg (250g)", price: 185, originalPrice: 215, packaging: "Glass Jar", sizeKey: "0.25L" },
      { label: "1/2 kg (500g)", price: 350, originalPrice: 395, packaging: "Glass Jar", sizeKey: "0.5L" },
      { label: "1 kg", price: 680, originalPrice: 760, packaging: "Glass Jar", sizeKey: "1L" },
      { label: "5 kg", price: 3200, originalPrice: 3600, packaging: "Can", sizeKey: "5L" },
      { label: "15 kg Tin", price: 9200, originalPrice: 10400, packaging: "Commercial Tin", sizeKey: "15kg" },
    ],
    taglineEn: "Granular Golden Ghee",
    taglineTa: "பாரம்பரிய நறுமணம்",
    descEn:
      "Traditional slow clarification of cultured butter. Delivers signature granular texture (manal manalana padam) and rich natural aroma without essence.",
    descTa:
      "பாரம்பரிய முறையில் காய்ச்சப்பட்ட தூய பசு வெண்ணெய் நெய். அசல் மணல் மணலான பதம் மற்றும் நறுமணம் கொண்டது.",
    packagingTypes: ["Jar", "Commercial Tin"],
    specsEn: [
      { label: "Source", value: "Pure Cow Milk Fat" },
      { label: "Texture", value: "Granular Danedar" },
      { label: "Adulteration", value: "Zero Palm Oil / Dalda" },
      { label: "Best For", value: "Sweets, Rice, Temples" },
    ],
    specsTa: [
      { label: "மூலம்", value: "தூய பசு பால் வெண்ணெய்" },
      { label: "பதம்", value: "மணல் மணலான பொன்னிற நெய்" },
      { label: "கலப்படம்", value: "டால்டா, பாமாயில் இல்லை" },
      { label: "பயன்பாடு", value: "இனிப்புகள், சாப்பாடு, பூஜைகள்" },
    ],
    wholesaleNotesEn: "Demanded by sweet makers, caterers & supermarkets.",
    wholesaleNotesTa: "இனிப்பகங்கள், திருமண ஆர்டர்கள் மற்றும் கடைகளுக்கு.",
  },

  // 9. JAGGERY POWDER
  {
    id: "jaggery-powder",
    nameEn: "Organic Jaggery Powder",
    nameTa: "நாட்டு சர்க்கரை / வெல்ல தூள்",
    category: "essential",
    brand: "VS Sweet Essentials",
    brandTa: "வி.எஸ் இயற்கை இனிப்புகள்",
    image: "/images/products/jaggery-powder.jpg",
    subEn: "Nattu Sakkarai (Free Flow)",
    subTa: "ரசாயனம் இல்லாத நாட்டு சர்க்கரை",
    badge: "-10% BULK",
    badgeTa: "-10% தள்ளுபடி",
    badgeType: "discount",
    rating: 4.9,
    reviewCount: 132,
    basePrice: 85,
    sizes: [
      { label: "1/4 kg (250g)", price: 28, originalPrice: 35, packaging: "Pouch", sizeKey: "0.25L" },
      { label: "1/2 kg (500g)", price: 48, originalPrice: 60, packaging: "Pouch", sizeKey: "0.5L" },
      { label: "1 kg", price: 85, originalPrice: 100, packaging: "Pouch", sizeKey: "1L" },
      { label: "5kg Pack", price: 410, originalPrice: 480, packaging: "Pack", sizeKey: "5L" },
    ],
    taglineEn: "Unrefined Natural Cane Sugar",
    taglineTa: "இயற்கை இரும்புச்சத்து நிறைந்தது",
    descEn:
      "Pure sugarcane crystals prepared by evaporating fresh cane juice without phosphoric acid, sulphur, or chemical bleaches. Natural mineral sweetener.",
    descTa:
      "சுத்தமான கரும்பு சாற்றை ரசாயனம் கலக்காமல் காய்ச்சி தயாரிக்கப்பட்ட தூய நாட்டு சர்க்கரை. ஆரோக்கியமான இனிப்பு.",
    packagingTypes: ["Pouch", "Pack Available"],
    specsEn: [
      { label: "Processing", value: "Chemical-Free" },
      { label: "Minerals", value: "Iron & Magnesium Rich" },
      { label: "Form", value: "Fine Free-Flowing" },
      { label: "Best For", value: "Tea, Coffee, Sweets" },
    ],
    specsTa: [
      { label: "தயாரிப்பு", value: "ரசாயன பிளீச்சிங் இல்லை" },
      { label: "தாதுக்கள்", value: "இரும்பு, கால்சியம் நிறைந்தது" },
      { label: "வடிவம்", value: "நயமான பவுடர் பதம்" },
      { label: "பயன்பாடு", value: "டீ, காபி, சமையல் இனிப்புகள்" },
    ],
    wholesaleNotesEn: "High bulk turnover for organic grocery stores.",
    wholesaleNotesTa: "ஆர்கானிக் கடைகளுக்கு விரைவான விற்பனை பொருள்.",
  },

  // 10. JAGGERY (PALM JAGGERY / KARUPATTI)
  {
    id: "palm-jaggery",
    nameEn: "Traditional Palm Jaggery (Karupatti)",
    nameTa: "பாரம்பரிய பனை வெல்லம் (கருப்பட்டி)",
    category: "essential",
    brand: "VS Sweet Essentials",
    brandTa: "வி.எஸ் இயற்கை இனிப்புகள்",
    image: "/images/products/palm-jaggery.svg",
    subEn: "Pure Panai Karupatti",
    subTa: "உடன்குடி பனை கருப்பட்டி",
    badge: "ORIGINAL",
    badgeTa: "அசல் பனை",
    badgeType: "black",
    rating: 4.9,
    reviewCount: 94,
    basePrice: 340,
    sizes: [
      { label: "1/4 kg (250g)", price: 95, originalPrice: 115, packaging: "Box Pack", sizeKey: "0.25L" },
      { label: "1/2 kg (500g)", price: 180, originalPrice: 210, packaging: "Box Pack", sizeKey: "0.5L" },
      { label: "1 kg", price: 340, originalPrice: 390, packaging: "Box Pack", sizeKey: "1L" },
      { label: "5 kg", price: 1650, originalPrice: 1900, packaging: "Master Box", sizeKey: "5L" },
    ],
    taglineEn: "Authentic Native Palm Sweetener",
    taglineTa: "உடல் நலம் தரும் பனை இனிப்பு",
    descEn:
      "Handcrafted by boiling pure palm neera (pathaneer) in copper vessels without sulphur or artificial colours. Rich in potassium, iron, and traditional therapeutic warmth.",
    descTa:
      "பதநீரை செப்பு பாத்திரத்தில் காய்ச்சி பனை ஓலையில் வார்ப்பு செய்யப்பட்ட அசல் கருப்பட்டி. சளி, இருமல் மற்றும் உடல் ஆரோக்கியத்திற்கு சிறந்த மருந்து இனிப்பு.",
    packagingTypes: ["Box Pack", "Master Box"],
    specsEn: [
      { label: "Source", value: "Pure Palm Neera (Pathaneer)" },
      { label: "Minerals", value: "High Iron & Calcium" },
      { label: "Preservatives", value: "Zero Adulteration" },
      { label: "Best For", value: "Sukku Kaapi, Herbal Tonics" },
    ],
    specsTa: [
      { label: "மூலம்", value: "சுத்தமான பனை பதநீர்" },
      { label: "சத்துக்கள்", value: "இயற்கை இரும்புச்சத்து & கால்சியம்" },
      { label: "கலப்படம்", value: "சர்க்கரை, சுண்ணாம்பு கலக்காதது" },
      { label: "பயன்பாடு", value: "சுக்கு காபி, ஆரோக்கிய உணவுகள்" },
    ],
    wholesaleNotesEn: "Highly sought after across wellness centers and festive seasons.",
    wholesaleNotesTa: "இயற்கை அங்காடி மற்றும் சித்த மருத்துவ கடைகளுக்கு தொடர் சப்ளை.",
  },

  // 11. VELLAM (TRADITIONAL CANE JAGGERY / ACHU VELLAM)
  {
    id: "cane-jaggery",
    nameEn: "Traditional Cane Jaggery (Achu Vellam)",
    nameTa: "நாட்டு அச்சு வெல்லம் / உருண்டை வெல்லம்",
    category: "essential",
    brand: "VS Sweet Essentials",
    brandTa: "வி.எஸ் இயற்கை இனிப்புகள்",
    image: "/images/products/traditional-jaggery.jpg",
    subEn: "Solid Cane Achu & Mandai Vellam",
    subTa: "கரும்பு அச்சு வெல்லம்",
    badge: "100% PURE",
    badgeTa: "100% இயற்கை",
    badgeType: "black",
    rating: 4.8,
    reviewCount: 88,
    basePrice: 90,
    sizes: [
      { label: "1/4 kg (250g)", price: 30, originalPrice: 38, packaging: "Box Pack", sizeKey: "0.25L" },
      { label: "1/2 kg (500g)", price: 50, originalPrice: 65, packaging: "Box Pack", sizeKey: "0.5L" },
      { label: "1 kg", price: 90, originalPrice: 110, packaging: "Box Pack", sizeKey: "1L" },
      { label: "5 kg", price: 430, originalPrice: 510, packaging: "Carton Box", sizeKey: "5L" },
    ],
    taglineEn: "Solid Pure Cane Jaggery",
    taglineTa: "அசல் இனிப்பு சுவை",
    descEn:
      "Solid traditional blocks and cubes made using time-honored cane evaporation. Rich earthy caramel flavor with zero chemical brightening agents.",
    descTa:
      "பாரம்பரிய முறைப்படி காய்ச்சி தயாரிக்கப்படும் கெட்டி அச்சு வெல்லம் மற்றும் உருண்டை வெல்லம். நிறமேற்றிகள் இல்லாதது.",
    packagingTypes: ["Box Pack", "Carton Box"],
    specsEn: [
      { label: "Ingredients", value: "100% Sugarcane Juice" },
      { label: "Form", value: "Solid Block / Achu" },
      { label: "Chemicals", value: "No Hydrosulphite" },
      { label: "Best For", value: "Traditional Festival Dishes, Pongal" },
    ],
    specsTa: [
      { label: "மூலப்பொருள்", value: "100% இயற்கை கரும்பு சாறு" },
      { label: "வடிவம்", value: "திட அச்சு வடிவம் / மண்டி" },
      { label: "ரசாயனம்", value: "ஹைட்ரோஸ் இல்லாதது" },
      { label: "பயன்பாடு", value: "பொங்கல், பாயாசம், இனிப்புகள்" },
    ],
    wholesaleNotesEn: "Sought after during festive seasons and catering.",
    wholesaleNotesTa: "பண்டிகை காலங்களில் மற்றும் கேட்டரிங் தொழில்களுக்கு அதிக தேவை.",
  },

  // 12. KADALA PARUPU
  {
    id: "kadala-parupu",
    nameEn: "Organic Kadalai Paruppu (Chana Dal)",
    nameTa: "நாட்டு கடலை பருப்பு",
    category: "pulse",
    brand: "VS Farm Direct",
    brandTa: "வி.எஸ் விவசாய நேரடி",
    image: "/images/products/kadala-paruppu.svg",
    subEn: "Pure Bengal Gram Dal",
    subTa: "கொண்டைக்கடலை பருப்பு",
    badge: "FARM DIRECT",
    badgeTa: "விவசாய நேரடி",
    badgeType: "black",
    rating: 4.8,
    reviewCount: 68,
    basePrice: 125,
    sizes: [
      { label: "1/4 kg (250g)", price: 36, originalPrice: 45, packaging: "Pouch", sizeKey: "0.25L" },
      { label: "1/2 kg (500g)", price: 68, originalPrice: 80, packaging: "Pouch", sizeKey: "0.5L" },
      { label: "1 kg", price: 125, originalPrice: 150, packaging: "Pouch", sizeKey: "1L" },
      { label: "5 kg", price: 600, originalPrice: 720, packaging: "5kg Bag", sizeKey: "5L" },
    ],
    taglineEn: "Golden Split Bengal Gram",
    taglineTa: "மொறுமொறு வடை மற்றும் சமையல் சுவை",
    descEn:
      "Naturally sourced desi chana split lentils, unpolished and free from artificial yellow colorants. High protein, nutty aroma, and excellent texture for medu vadai and curries.",
    descTa:
      "நாட்டு கொண்டைக்கடலையிலிருந்து உடைக்கப்பட்ட இயற்கை மஞ்சள் நிற கடலை பருப்பு. பாலீஷ் செய்யப்படாதது. வடை, கூட்டு மற்றும் குழம்புகளுக்கு தனி சுவை தரும்.",
    packagingTypes: ["Pouch", "Bag Available"],
    specsEn: [
      { label: "Grade", value: "Premium Unpolished" },
      { label: "Protein", value: "High Plant Protein (>22%)" },
      { label: "Color", value: "Natural Golden Yellow" },
      { label: "Best For", value: "Vadai, Kootu, Sundal" },
    ],
    specsTa: [
      { label: "தரம்", value: "அசல் நாட்டு பருப்பு (நோ பாலிஷ்)" },
      { label: "புரதம்", value: "அதிக இயற்கை புரோட்டீன்" },
      { label: "நிறம்", value: "இயற்கை பொன்னிறம்" },
      { label: "பயன்பாடு", value: "மசால் வடை, கூட்டு, சுண்டல்" },
    ],
    wholesaleNotesEn: "Supplied in wholesale sacks to mess, canteens, and sweet stalls.",
    wholesaleNotesTa: "உணவகங்கள், சிற்றுண்டி சாலைகள் மற்றும் மளிகை கடைகளுக்கு.",
  },

  // 13. THOVURAM PARUPU
  {
    id: "thovuram-parupu",
    nameEn: "Unpolished Thuvaram Paruppu (Toor Dal)",
    nameTa: "நாட்டு துவரம் பருப்பு",
    category: "pulse",
    brand: "VS Farm Direct",
    brandTa: "வி.எஸ் விவசாய நேரடி",
    image: "/images/products/thuvaram-paruppu.svg",
    subEn: "Pure Pigeon Pea Dal",
    subTa: "பாலீஷ் செய்யப்படாத துவரம்பருப்பு",
    badge: "UNPOLISHED",
    badgeTa: "பாலீஷ் அற்றது",
    badgeType: "black",
    rating: 4.9,
    reviewCount: 142,
    basePrice: 175,
    sizes: [
      { label: "1/4 kg (250g)", price: 48, originalPrice: 60, packaging: "Pouch", sizeKey: "0.25L" },
      { label: "1/2 kg (500g)", price: 92, originalPrice: 110, packaging: "Pouch", sizeKey: "0.5L" },
      { label: "1 kg", price: 175, originalPrice: 210, packaging: "Pouch", sizeKey: "1L" },
      { label: "5 kg", price: 850, originalPrice: 1020, packaging: "5kg Bag", sizeKey: "5L" },
    ],
    taglineEn: "Wholesome Aromatic Toor Dal",
    taglineTa: "மணமணக்கும் சாம்பார் & பருப்பு சாதம்",
    descEn:
      "100% laser-sorted unpolished toor dal without oil or water polishing. Cooks to smooth buttery consistency with deep authentic sambar aroma.",
    descTa:
      "எண்ணெய் அல்லது நீர் பாலிஷ் பூசப்படாத தூய நாட்டு துவரம் பருப்பு. எளிதில் வேகும், பாரம்பரிய சாம்பாரின் நறுமணத்தை கூட்டும்.",
    packagingTypes: ["Pouch", "Bag Available"],
    specsEn: [
      { label: "Polishing", value: "Zero Oil / Water Polish" },
      { label: "Cooking Time", value: "Quick & Soft Consistency" },
      { label: "Nutrients", value: "Rich in Dietary Fiber" },
      { label: "Best For", value: "Traditional South Indian Sambar" },
    ],
    specsTa: [
      { label: "பாலிஷ்", value: "எண்ணெய் பாலிஷ் இல்லாதது" },
      { label: "வேகும் தன்மை", value: "மென்மையாக குழைந்து வேகும்" },
      { label: "சத்துக்கள்", value: "நார்ச்சத்து & புரதம் நிறைந்தது" },
      { label: "பயன்பாடு", value: "பாரம்பரிய சாம்பார், பருப்பு குழம்பு" },
    ],
    wholesaleNotesEn: "Top volume daily essential for retail networks and catering.",
    wholesaleNotesTa: "தினசரி மளிகை மற்றும் கேட்டரிங் நிறுவனங்களுக்கு முதன்மை சப்ளை.",
  },

  // 14. OLUTHAM PARUPU
  {
    id: "olutham-parupu",
    nameEn: "Native Ulutham Paruppu (Urad Dal)",
    nameTa: "நாட்டு உளுத்தம் பருப்பு",
    category: "pulse",
    brand: "VS Farm Direct",
    brandTa: "வி.எஸ் விவசாய நேரடி",
    image: "/images/products/ulutham-paruppu.svg",
    subEn: "White Split Urad Dal",
    subTa: "மாவு பொங்கும் வெள்ளை உளுந்து",
    badge: "HIGH FLUFF",
    badgeTa: "அதிக மாவு",
    badgeType: "black",
    rating: 4.9,
    reviewCount: 156,
    basePrice: 160,
    sizes: [
      { label: "1/4 kg (250g)", price: 44, originalPrice: 55, packaging: "Pouch", sizeKey: "0.25L" },
      { label: "1/2 kg (500g)", price: 85, originalPrice: 100, packaging: "Pouch", sizeKey: "0.5L" },
      { label: "1 kg", price: 160, originalPrice: 190, packaging: "Pouch", sizeKey: "1L" },
      { label: "5 kg", price: 780, originalPrice: 920, packaging: "5kg Bag", sizeKey: "5L" },
    ],
    taglineEn: "Fluffy Batter Split Black Gram",
    taglineTa: "பஞ்சு போன்ற மெதுவான இட்லி & வடை",
    descEn:
      "Handpicked native split urad dal known for supreme batter volume (mavu ponkuthal). Delivers softest feather-light idlis and crisp golden medu vadas.",
    descTa:
      "கிரைண்டரில் அரைக்கும் போது அதிக மாவு பொங்கும் தன்மை கொண்ட அசல் நாட்டு உளுந்து. பஞ்சு போன்ற இட்லி மற்றும் மொறுமொறு மெதுவடைக்கு சிறந்தது.",
    packagingTypes: ["Pouch", "Bag Available"],
    specsEn: [
      { label: "Batter Fluff", value: "Exceptional Volume Yield" },
      { label: "Treatment", value: "Naturally Dried, Chemical-Free" },
      { label: "Origin", value: "Tamil Nadu Farm Harvest" },
      { label: "Best For", value: "Idli, Dosai, Crispy Medu Vadai" },
    ],
    specsTa: [
      { label: "மாவு வரத்து", value: "மிக அதிக உப்பல் மற்றும் புளிப்பு பதம்" },
      { label: "சுத்தம்", value: "இயற்கை உலர்த்தல், ரசாயனம் இல்லை" },
      { label: "தோற்றம்", value: "தமிழ்நாடு விவசாய நிலங்கள்" },
      { label: "பயன்பாடு", value: "மல்லிகைப் பூ இட்லி, தோசை, மெதுவடை" },
    ],
    wholesaleNotesEn: "Highest demand among tiffin centers, restaurants & households.",
    wholesaleNotesTa: "டிபன் கடைகள் மற்றும் உணவகங்களுக்கு அதிக லாபம் தரும் மாவு வரத்து.",
  },

  // 15. PASI PARUPU
  {
    id: "pasi-parupu",
    nameEn: "Farm Fresh Paasi Paruppu (Moong Dal)",
    nameTa: "நாட்டு பாசிப் பருப்பு",
    category: "pulse",
    brand: "VS Farm Direct",
    brandTa: "வி.எஸ் விவசாய நேரடி",
    image: "/images/products/paasi-paruppu.svg",
    subEn: "Split Yellow Moong Dal",
    subTa: "சத்து நிறைந்த சிறுபருப்பு",
    badge: "EASY DIGEST",
    badgeTa: "எளிதில் செரிக்கும்",
    badgeType: "black",
    rating: 4.9,
    reviewCount: 98,
    basePrice: 155,
    sizes: [
      { label: "1/4 kg (250g)", price: 42, originalPrice: 52, packaging: "Pouch", sizeKey: "0.25L" },
      { label: "1/2 kg (500g)", price: 82, originalPrice: 98, packaging: "Pouch", sizeKey: "0.5L" },
      { label: "1 kg", price: 155, originalPrice: 185, packaging: "Pouch", sizeKey: "1L" },
      { label: "5 kg", price: 750, originalPrice: 890, packaging: "5kg Bag", sizeKey: "5L" },
    ],
    taglineEn: "Delicate Golden Moong Lentils",
    taglineTa: "குழந்தைகளுக்கும் ஏற்ற சத்துணவு",
    descEn:
      "Golden split green gram lentils, exceptionally light on digestion and rich in clean protein. Cooks smoothly for comforting ven pongal, kootu, and payasam.",
    descTa:
      "செரிமானத்திற்கு மிகவும் எளிதான சுத்தமான பாசிப்பருப்பு. குழந்தைகள் முதல் பெரியவர்கள் வரை அனைவருக்கும் உகந்தது. வெண் பொங்கல் மற்றும் பாயாசத்திற்கு ஏற்றது.",
    packagingTypes: ["Pouch", "Bag Available"],
    specsEn: [
      { label: "Digestion", value: "Extremely Light & Soothing" },
      { label: "Nutrients", value: "High Folate, Iron & Protein" },
      { label: "Preparation", value: "Unpolished Pure Grain" },
      { label: "Best For", value: "Ven Pongal, Dal Kichadi, Payasam" },
    ],
    specsTa: [
      { label: "செரிமானம்", value: "மிகவும் எளிதான ஆரோக்கிய உணவு" },
      { label: "சத்துக்கள்", value: "புரதம், இரும்புச்சத்து மற்றும் போலேட்" },
      { label: "சுத்திகரிப்பு", value: "இயற்கை தானியம், நிறமூட்டி இல்லை" },
      { label: "பயன்பாடு", value: "வெண் பொங்கல், பருப்பு பாயாசம், கிச்சடி" },
    ],
    wholesaleNotesEn: "Popular staple for hospitals, wellness retreats, and household grocery.",
    wholesaleNotesTa: "மருத்துவமனைகள், இயற்கை உணவகங்கள் மற்றும் கடைகளுக்கு.",
  },
];

interface ProductCatalogProps {
  onSelectProductForEnquiry: (productName: string) => void;
}

export default function ProductCatalog({ onSelectProductForEnquiry }: ProductCatalogProps) {
  const { language } = useLanguage();
  const { addItem } = useCart();
  const isTa = language === "ta";

  // Filter States (Category only)
  const [selectedCategory, setSelectedCategory] = useState<"all" | "oil" | "essential" | "pulse">("all");
  const [addedItemNotice, setAddedItemNotice] = useState<string | null>(null);

  // Active packaging size selection index per product (default to 1L/1kg, index 2)
  const [selectedSizes, setSelectedSizes] = useState<Record<string, number>>({});

  // Filtering Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      if (selectedCategory !== "all" && product.category !== selectedCategory) {
        return false;
      }
      return true;
    });
  }, [selectedCategory]);

  const getProductActiveIdx = (product: ProductItem): number => {
    if (selectedSizes[product.id] !== undefined) {
      return selectedSizes[product.id];
    }
    // Default to 1L or 1kg (usually index 2)
    const oneLiterIdx = product.sizes.findIndex((s) => s.sizeKey === "1L");
    return oneLiterIdx !== -1 ? oneLiterIdx : 0;
  };

  const handleSelectSize = (productId: string, sizeIdx: number) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: sizeIdx }));
  };

  const handleAddToCart = (product: ProductItem) => {
    const sizeIdx = getProductActiveIdx(product);
    const selected = product.sizes[sizeIdx];
    addItem({
      productId: product.id,
      name: product.nameEn,
      nameTa: product.nameTa,
      size: selected.label,
      packaging: selected.packaging,
      price: selected.price,
      quantity: 1,
    });

    setAddedItemNotice(`${product.nameEn} (${selected.label})`);
    setTimeout(() => {
      setAddedItemNotice(null);
    }, 3000);
  };

  return (
    <section
      id="products"
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
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "32px",
            flexWrap: "wrap",
            gap: "18px",
          }}
        >
          <div>
            <span
              className="eyebrow-text"
              style={{ display: "block", marginBottom: "6px" }}
            >
              {isTa ? "பாரம்பரிய ஆர்கானிக் தயாரிப்புகள்" : "TRADITIONAL & UNREFINED ESSENTIALS"}
            </span>

            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(26px, 3.8vw, 36px)",
                fontWeight: 700,
                color: "#141612",
                letterSpacing: "0.01em",
                margin: 0,
              }}
            >
              {isTa ? "எங்கள் தயாரிப்புகள் (EXPLORE OUR COLLECTION)" : "EXPLORE OUR COLLECTION"}
            </h2>
          </div>

          {/* Category Filter Pills (All, Oils, Ghee & Sweeteners, Pulses) */}
          <div
            className="mobile-scroll-row"
            style={{
              display: "flex",
              gap: "8px",
              overflowX: "auto",
              paddingBottom: "4px",
              maxWidth: "100%",
            }}
          >
            <button
              onClick={() => setSelectedCategory("all")}
              className={`btn-cta ${selectedCategory === "all" ? "btn-cta-primary" : "btn-cta-secondary"} btn-cta-sm`}
              style={{ flexShrink: 0 }}
            >
              {isTa ? "அனைத்தும் (15)" : "VIEW ALL (15)"}
            </button>

            <button
              onClick={() => setSelectedCategory("oil")}
              className={`btn-cta ${selectedCategory === "oil" ? "btn-cta-primary" : "btn-cta-secondary"} btn-cta-sm`}
              style={{ flexShrink: 0 }}
            >
              {isTa ? "மரச்செக்கு எண்ணெய்கள் (7)" : "CHEKKU OILS (7)"}
            </button>

            <button
              onClick={() => setSelectedCategory("essential")}
              className={`btn-cta ${selectedCategory === "essential" ? "btn-cta-primary" : "btn-cta-secondary"} btn-cta-sm`}
              style={{ flexShrink: 0 }}
            >
              {isTa ? "நெய் & இனிப்புகள் (4)" : "GHEE & SWEETENERS (4)"}
            </button>

            <button
              onClick={() => setSelectedCategory("pulse")}
              className={`btn-cta ${selectedCategory === "pulse" ? "btn-cta-primary" : "btn-cta-secondary"} btn-cta-sm`}
              style={{ flexShrink: 0 }}
            >
              {isTa ? "பருப்பு வகைகள் (4)" : "PULSES & DALS (4)"}
            </button>
          </div>
        </div>

        {/* Added to Bag Toast Notification */}
        {addedItemNotice && (
          <div
            style={{
              position: "fixed",
              bottom: "28px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 90,
              backgroundColor: "#141612",
              color: "#FFFFFF",
              padding: "12px 24px",
              borderRadius: "30px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "13px",
              fontWeight: 600,
              animation: "fadeIn 0.3s ease",
            }}
          >
            <Check size={18} color="#25D366" strokeWidth={2.4} />
            <span>Added {addedItemNotice} to your shopping bag!</span>
          </div>
        )}

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              backgroundColor: "#FAF8F5",
              borderRadius: "16px",
              border: "1px solid #ECE7DD",
            }}
          >
            <Package size={42} strokeWidth={1.5} color="#9E6F1B" style={{ margin: "0 auto 12px auto" }} />
            <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#141612", marginBottom: "8px" }}>
              {isTa ? "தேர்ந்தெடுத்த வடிகட்டிகளுக்கு தயாரிப்புகள் கிடைக்கவில்லை" : "No Products Match Your Filters"}
            </h3>
            <p style={{ fontSize: "13px", color: "#84877E", marginBottom: "18px" }}>
              {isTa ? "வடிகட்டிகளை மாற்றி மீண்டும் முயற்சிக்கவும்." : "Try adjusting your price, size or brand filters to view available items."}
            </p>
            <button
              onClick={() => setSelectedCategory("all")}
              className="btn-cta btn-cta-primary btn-cta-sm"
            >
              {isTa ? "அனைத்து பொருட்களையும் காண்க" : "View All Products"}
            </button>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "24px",
            }}
            className="bestsellers-product-grid"
          >
            {filteredProducts.map((product) => {
              const activeSizeIdx = getProductActiveIdx(product);
              const currentSize = product.sizes[activeSizeIdx] || product.sizes[0];
              const discountPct = Math.round(
                ((currentSize.originalPrice - currentSize.price) / currentSize.originalPrice) * 100
              );

              const packagingTag =
                product.category === "oil"
                  ? isTa
                    ? "பாட்டில் & டின் உண்டு"
                    : "Bottle / Tin Available"
                  : product.category === "essential"
                  ? isTa
                    ? "ஜாடி & பாக்கெட்"
                    : "Jar / Pack Available"
                  : isTa
                  ? "இயற்கை தானியப் பை"
                  : "Unpolished Grain Bag";

              return (
                <div
                  key={product.id}
                  id={product.id}
                  className="lux-product-card"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "16px",
                    padding: "20px",
                    border: "1px solid #EFECE6",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  {/* Badge Left */}
                  <div
                    className="product-badge"
                    style={{
                      position: "absolute",
                      top: "16px",
                      left: "16px",
                      backgroundColor:
                        product.badgeType === "discount"
                          ? "#9E6F1B"
                          : product.badgeType === "gold"
                          ? "#B48328"
                          : "#141612",
                      color: "#FFFFFF",
                      fontSize: "9.5px",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      padding: "4px 9px",
                      borderRadius: "4px",
                      zIndex: 3,
                    }}
                  >
                    {isTa ? product.badgeTa : product.badge}
                  </div>

                  {/* Packaging Note Badge Right */}
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                      fontSize: "9.5px",
                      fontWeight: 600,
                      color: "#84877E",
                      backgroundColor: "#FAF7F2",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      border: "1px solid #ECE7DD",
                      zIndex: 3,
                    }}
                  >
                    {packagingTag}
                  </div>

                  {/* Product Image Box */}
                  <div
                    className="product-img-wrapper"
                    style={{
                      width: "100%",
                      aspectRatio: "1 / 1",
                      backgroundColor: "#FAF8F5",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      marginBottom: "16px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.nameEn}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const fallback = parent.querySelector(".svg-fallback");
                          if (fallback) (fallback as HTMLElement).style.display = "block";
                        }
                      }}
                    />

                    {/* SVG Fallback */}
                    <div
                      className="svg-fallback"
                      style={{
                        display: "none",
                        width: "100%",
                        height: "100%",
                        padding: "20px",
                      }}
                    >
                      <svg width="100%" height="100%" viewBox="0 0 140 180" fill="none">
                        <ellipse cx="70" cy="168" rx="46" ry="7" fill="#201C17" fillOpacity="0.08" />
                        <rect x="58" y="10" width="24" height="16" rx="3" fill="#181915" />
                        <path
                          d="M62 46 C52 58, 40 70, 40 88 L40 156 C40 162, 46 166, 54 166 L86 166 C94 166, 100 162, 100 156 L100 88 C100 70, 88 58, 78 46 Z"
                          fill="#D99B26"
                          stroke="#B88528"
                          strokeWidth="1.2"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Packaging Size Selector Chips */}
                  <div
                    style={{
                      display: "flex",
                      gap: "6px",
                      marginBottom: "12px",
                      flexWrap: "wrap",
                    }}
                  >
                    {product.sizes.map((s, idx) => (
                      <button
                        key={s.label}
                        onClick={() => handleSelectSize(product.id, idx)}
                        style={{
                          padding: "4px 9px",
                          fontSize: "11px",
                          fontWeight: 600,
                          borderRadius: "6px",
                          cursor: "pointer",
                          backgroundColor:
                            activeSizeIdx === idx ? "#141612" : "#FAF8F5",
                          color: activeSizeIdx === idx ? "#FFFFFF" : "#555750",
                          border:
                            activeSizeIdx === idx
                              ? "1px solid #141612"
                              : "1px solid #EBE7DF",
                          transition: "all 0.15s",
                        }}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>

                  {/* Brand Tag */}
                  <span
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#9E6F1B",
                      fontWeight: 700,
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    {isTa ? product.brandTa : product.brand}
                  </span>

                  {/* Product Title */}
                  <h3
                    className="font-inter"
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#141612",
                      marginBottom: "4px",
                      lineHeight: 1.3,
                    }}
                  >
                    {isTa ? product.nameTa : product.nameEn}
                  </h3>

                  {/* Subtitle */}
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#84877E",
                      marginBottom: "12px",
                    }}
                  >
                    {isTa ? product.subTa : product.subEn}
                  </p>

                  {/* Pricing & Rating Row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "16px",
                    }}
                  >
                    {/* Price and Original MRP Strikethrough */}
                    <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                      <span
                        style={{
                          fontSize: "19px",
                          fontWeight: 800,
                          color: "#141612",
                        }}
                      >
                        ₹{currentSize.price}
                      </span>

                      <span
                        style={{
                          fontSize: "12.5px",
                          color: "#84877E",
                          textDecoration: "line-through",
                        }}
                      >
                        ₹{currentSize.originalPrice}
                      </span>

                      <span
                        style={{
                          fontSize: "10.5px",
                          fontWeight: 700,
                          color: "#166534",
                          backgroundColor: "#E6F8EB",
                          padding: "2px 6px",
                          borderRadius: "4px",
                        }}
                      >
                        {discountPct}% OFF
                      </span>
                    </div>

                    {/* Star Rating & Review Count */}
                    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <span style={{ color: "#E5A93C", fontSize: "12px" }}>★★★★★</span>
                      <span style={{ fontSize: "11.5px", fontWeight: 700, color: "#141612" }}>
                        {product.rating}
                      </span>
                      <span style={{ fontSize: "11px", color: "#84877E" }}>
                        ({product.reviewCount})
                      </span>
                    </div>
                  </div>

                  {/* Clear CTA Buttons */}
                  <div style={{ display: "flex", gap: "8px", marginTop: "auto" }}>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="btn-cta btn-cta-primary"
                      style={{
                        flex: 1,
                        padding: "11px 16px",
                        fontSize: "12.5px",
                        gap: "6px",
                      }}
                    >
                      <ShoppingBag size={15} strokeWidth={2} />
                      <span>{isTa ? "கூடையில் சேர்" : "Add to Bag"}</span>
                    </button>

                    <button
                      onClick={() =>
                        onSelectProductForEnquiry(
                          `${product.nameEn} (${currentSize.label})`
                        )
                      }
                      className="btn-cta btn-cta-secondary"
                      style={{
                        padding: "11px 16px",
                        fontSize: "12.5px",
                        gap: "6px",
                      }}
                      title="Enquire wholesale rates"
                    >
                      <HelpCircle size={15} strokeWidth={1.8} />
                      <span>{isTa ? "விசாரணை" : "Enquire"}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .bestsellers-product-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          :global(.lux-product-card) {
            padding: 16px 14px !important;
          }
        }
      `}</style>
    </section>
  );
}
