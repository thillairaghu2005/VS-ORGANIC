"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import {
  ShoppingBag,
  HelpCircle,
  Star,
  Check,
  Filter,
  X,
  SlidersHorizontal,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Package,
  Droplet,
  ArrowUpDown,
} from "lucide-react";

export interface ProductItem {
  id: string;
  nameEn: string;
  nameTa: string;
  category: "oil" | "essential";
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
    sizeKey: "0.5L" | "1L" | "5L" | "15kg";
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
      { label: "0.5 Litre", price: 115, originalPrice: 135, packaging: "Bottle", sizeKey: "0.5L" },
      { label: "1 Litre", price: 220, originalPrice: 260, packaging: "Bottle", sizeKey: "1L" },
      { label: "5 Litre", price: 1050, originalPrice: 1200, packaging: "Can", sizeKey: "5L" },
      { label: "15kg / 16L", price: 2950, originalPrice: 3300, packaging: "Commercial Tin", sizeKey: "15kg" },
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
      { label: "Best For", value: "Daily Cooking, Frying" },
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
      { label: "0.5 Litre", price: 195, originalPrice: 230, packaging: "Bottle", sizeKey: "0.5L" },
      { label: "1 Litre", price: 380, originalPrice: 440, packaging: "Bottle", sizeKey: "1L" },
      { label: "5 Litre", price: 1850, originalPrice: 2100, packaging: "Can", sizeKey: "5L" },
      { label: "15kg / 16L", price: 5400, originalPrice: 5900, packaging: "Commercial Tin", sizeKey: "15kg" },
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
      { label: "Best For", value: "South Indian Cuisine, Podi" },
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
      { label: "0.5 Litre", price: 135, originalPrice: 160, packaging: "Bottle", sizeKey: "0.5L" },
      { label: "1 Litre", price: 260, originalPrice: 305, packaging: "Bottle", sizeKey: "1L" },
      { label: "5 Litre", price: 1250, originalPrice: 1450, packaging: "Can", sizeKey: "5L" },
      { label: "15kg / 16L", price: 3600, originalPrice: 4100, packaging: "Commercial Tin", sizeKey: "15kg" },
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
      { label: "Best For", value: "Cooking & Hair Care" },
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
  {
    id: "pure-ghee",
    nameEn: "Pure Desi Cow Ghee",
    nameTa: "சுத்தமான பசு நெய்",
    category: "essential",
    brand: "VS Desi Dairy",
    brandTa: "வி.எஸ் நாட்டு பால் பண்ணை",
    image: "/images/products/pure-ghee.jpg",
    subEn: "Pasu Nei (Danedar)",
    subTa: "மணல் மணலான நெய்",
    badge: "GRANULAR",
    badgeTa: "மணல் பதம்",
    badgeType: "black",
    rating: 4.9,
    reviewCount: 175,
    basePrice: 680,
    sizes: [
      { label: "0.5 Litre", price: 350, originalPrice: 395, packaging: "Jar", sizeKey: "0.5L" },
      { label: "1 Litre", price: 680, originalPrice: 760, packaging: "Jar", sizeKey: "1L" },
      { label: "5 Litre", price: 3200, originalPrice: 3600, packaging: "Can", sizeKey: "5L" },
      { label: "15kg Tin", price: 9200, originalPrice: 10400, packaging: "Commercial Tin", sizeKey: "15kg" },
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
      { label: "Adulteration", value: "Zero Palm Oil" },
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
  {
    id: "jaggery-powder",
    nameEn: "Organic Jaggery Powder",
    nameTa: "நாட்டு சர்க்கரை / வெல்ல தூள்",
    category: "essential",
    brand: "VS Sweet Essentials",
    brandTa: "வி.எஸ் இயற்கை இனிப்புகள்",
    image: "/images/products/jaggery-powder.jpg",
    subEn: "Nattu Sakkarai",
    subTa: "ரசாயனம் இல்லாத நாட்டு சர்க்கரை",
    badge: "-10% BULK",
    badgeTa: "-10% தள்ளுபடி",
    badgeType: "discount",
    rating: 4.9,
    reviewCount: 132,
    basePrice: 85,
    sizes: [
      { label: "0.5 kg", price: 45, originalPrice: 55, packaging: "Pouch", sizeKey: "0.5L" },
      { label: "1 kg", price: 85, originalPrice: 100, packaging: "Pouch", sizeKey: "1L" },
      { label: "5 kg", price: 410, originalPrice: 480, packaging: "Pack", sizeKey: "5L" },
      { label: "25kg Sack", price: 2050, originalPrice: 2350, packaging: "Bulk Sack", sizeKey: "15kg" },
    ],
    taglineEn: "Unrefined Natural Cane Sugar",
    taglineTa: "இயற்கை இரும்புச்சத்து நிறைந்தது",
    descEn:
      "Pure sugarcane crystals prepared by evaporating fresh cane juice without phosphoric acid, sulphur, or chemical bleaches. Natural mineral sweetener.",
    descTa:
      "சுத்தமான கரும்பு சாற்றை ரசாயனம் கலக்காமல் காய்ச்சி தயாரிக்கப்பட்ட தூய நாட்டு சர்க்கரை. ஆரோக்கியமான இனிப்பு.",
    packagingTypes: ["Moisture Bag", "Bulk Sacks"],
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
  {
    id: "traditional-jaggery",
    nameEn: "Traditional Achu Jaggery",
    nameTa: "பாரம்பரிய அச்சு வெல்லம் & மண்டி",
    category: "essential",
    brand: "VS Sweet Essentials",
    brandTa: "வி.எஸ் இயற்கை இனிப்புகள்",
    image: "/images/products/traditional-jaggery.jpg",
    subEn: "Achu Vellam & Blocks",
    subTa: "கரும்பு அச்சு வெல்லம்",
    badge: "100% PURE",
    badgeTa: "100% இயற்கை",
    badgeType: "black",
    rating: 4.8,
    reviewCount: 88,
    basePrice: 90,
    sizes: [
      { label: "1 kg", price: 90, originalPrice: 110, packaging: "Box", sizeKey: "1L" },
      { label: "5 kg", price: 440, originalPrice: 510, packaging: "Box", sizeKey: "5L" },
      { label: "10 kg", price: 850, originalPrice: 980, packaging: "Carton", sizeKey: "15kg" },
      { label: "Master Box", price: 2450, originalPrice: 2800, packaging: "30kg Master", sizeKey: "15kg" },
    ],
    taglineEn: "Solid Pure Cane Jaggery",
    taglineTa: "அசல் இனிப்பு சுவை",
    descEn:
      "Solid traditional blocks and cubes made using time-honored cane evaporation. Rich earthy caramel flavor with zero chemical brightening agents.",
    descTa:
      "பாரம்பரிய முறைப்படி காய்ச்சி தயாரிக்கப்படும் கெட்டி அச்சு வெல்லம் மற்றும் உருண்டை வெல்லம். நிறமேற்றிகள் இல்லாதது.",
    packagingTypes: ["Box Pack", "Bulk Cartons"],
    specsEn: [
      { label: "Ingredients", value: "100% Sugarcane Juice" },
      { label: "Form", value: "Solid Block / Achu" },
      { label: "Chemicals", value: "No Hydrosulphite" },
      { label: "Best For", value: "Traditional Festival Dishes" },
    ],
    specsTa: [
      { label: "மூலப்பொருள்", value: "100% இயற்கை கரும்பு சாறு" },
      { label: "வடிவம்", value: "திட அச்சு வடிவம் / மண்டி" },
      { label: "ரசாயனம்", value: "ஹைட்ரோஸ் இல்லாதது" },
      { label: "பயன்பாடு", value: "பொங்கல், இனிப்புகள்" },
    ],
    wholesaleNotesEn: "Sought after during festive seasons and catering.",
    wholesaleNotesTa: "பண்டிகை காலங்களில் மற்றும் கேட்டரிங் தொழில்களுக்கு அதிக தேவை.",
  },
];

interface ProductCatalogProps {
  onSelectProductForEnquiry: (productName: string) => void;
}

export default function ProductCatalog({ onSelectProductForEnquiry }: ProductCatalogProps) {
  const { language } = useLanguage();
  const { addItem } = useCart();
  const isTa = language === "ta";

  // Filter & Sort States
  const [selectedCategory, setSelectedCategory] = useState<"all" | "oil" | "essential">("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("all");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [selectedSize, setSelectedSize] = useState<string>("all");
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "rating">("featured");

  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [addedItemNotice, setAddedItemNotice] = useState<string | null>(null);

  // Active packaging size selection index per product
  const [selectedSizes, setSelectedSizes] = useState<Record<string, number>>({
    "groundnut-oil": 1,
    "sesame-oil": 1,
    "coconut-oil": 1,
    "pure-ghee": 1,
    "jaggery-powder": 1,
    "traditional-jaggery": 0,
  });

  const BRANDS = [
    { id: "all", nameEn: "All Brands", nameTa: "அனைத்து பிராண்டுகள்" },
    { id: "VS Organic Heritage", nameEn: "VS Organic Heritage", nameTa: "வி.எஸ் பாரம்பரியம்" },
    { id: "VS Farm Direct", nameEn: "VS Farm Direct", nameTa: "வி.எஸ் விவசாய நேரடி" },
    { id: "VS Desi Dairy", nameEn: "VS Desi Dairy", nameTa: "வி.எஸ் நாட்டு பால் பண்ணை" },
    { id: "VS Sweet Essentials", nameEn: "VS Sweet Essentials", nameTa: "வி.எஸ் இயற்கை இனிப்புகள்" },
  ];

  const PRICE_RANGES = [
    { id: "all", labelEn: "All Prices", labelTa: "அனைத்து விலைகளும்" },
    { id: "under200", labelEn: "Under ₹200 (Kitchen Essentials)", labelTa: "₹200-க்கு கீழ்" },
    { id: "200to500", labelEn: "₹200 - ₹500 (1L Bottles)", labelTa: "₹200 - ₹500" },
    { id: "500to1500", labelEn: "₹500 - ₹1,500 (Family Packs)", labelTa: "₹500 - ₹1,500" },
    { id: "above1500", labelEn: "Above ₹1,500 (15kg Bulk Tins)", labelTa: "₹1,500-க்கு மேல்" },
  ];

  const SIZE_OPTIONS = [
    { id: "all", labelEn: "All Sizes", labelTa: "அனைத்து அளவுகள்" },
    { id: "0.5L", labelEn: "0.5 Litre / 500g", labelTa: "அரை லிட்டர் (0.5L)" },
    { id: "1L", labelEn: "1 Litre / 1 kg", labelTa: "1 லிட்டர் பாட்டில்" },
    { id: "5L", labelEn: "5 Litre Jerrycan / 5kg", labelTa: "5 லிட்டர் கேன்" },
    { id: "15kg", labelEn: "15kg / 16L Bulk Tin", labelTa: "15 கிலோ வணிக டின்" },
  ];

  const RATING_OPTIONS = [
    { id: 0, labelEn: "All Ratings", labelTa: "அனைத்து மதிப்பீடுகள்" },
    { id: 4.9, labelEn: "4.9★ & Above", labelTa: "4.9★ மற்றும் மேல்" },
    { id: 4.8, labelEn: "4.8★ & Above", labelTa: "4.8★ மற்றும் மேல்" },
    { id: 4.5, labelEn: "4.5★ & Above", labelTa: "4.5★ மற்றும் மேல்" },
  ];

  // Filtering Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      // 1. Category Filter
      if (selectedCategory !== "all" && product.category !== selectedCategory) {
        return false;
      }

      // 2. Brand Filter
      if (selectedBrand !== "all" && product.brand !== selectedBrand) {
        return false;
      }

      // 3. Rating Filter
      if (selectedRating > 0 && product.rating < selectedRating) {
        return false;
      }

      // 4. Size Filter: Product must offer this size
      if (selectedSize !== "all") {
        const hasSize = product.sizes.some((s) => s.sizeKey === selectedSize);
        if (!hasSize) return false;
      }

      // 5. Price Filter (Check across product sizes or base price)
      if (selectedPriceRange !== "all") {
        const minPrice = Math.min(...product.sizes.map((s) => s.price));
        if (selectedPriceRange === "under200" && minPrice >= 200) return false;
        if (selectedPriceRange === "200to500") {
          const hasInRange = product.sizes.some((s) => s.price >= 200 && s.price <= 500);
          if (!hasInRange) return false;
        }
        if (selectedPriceRange === "500to1500") {
          const hasInRange = product.sizes.some((s) => s.price >= 500 && s.price <= 1500);
          if (!hasInRange) return false;
        }
        if (selectedPriceRange === "above1500") {
          const hasInRange = product.sizes.some((s) => s.price > 1500);
          if (!hasInRange) return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") {
        return a.basePrice - b.basePrice;
      }
      if (sortBy === "price-desc") {
        return b.basePrice - a.basePrice;
      }
      if (sortBy === "rating") {
        return b.rating - a.rating;
      }
      return 0; // featured default
    });
  }, [selectedCategory, selectedBrand, selectedPriceRange, selectedSize, selectedRating, sortBy]);

  const activeFiltersCount =
    (selectedCategory !== "all" ? 1 : 0) +
    (selectedPriceRange !== "all" ? 1 : 0) +
    (selectedBrand !== "all" ? 1 : 0) +
    (selectedSize !== "all" ? 1 : 0) +
    (selectedRating > 0 ? 1 : 0);

  const clearAllFilters = () => {
    setSelectedCategory("all");
    setSelectedPriceRange("all");
    setSelectedBrand("all");
    setSelectedSize("all");
    setSelectedRating(0);
    setSortBy("featured");
  };

  const handleSelectSize = (productId: string, sizeIdx: number) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: sizeIdx }));
  };

  const handleAddToCart = (product: ProductItem) => {
    const sizeIdx = selectedSizes[product.id] || 0;
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
              {isTa ? "சிறந்த தயாரிப்புகள் (BEST SELLERS)" : "EXPLORE OUR COLLECTION"}
            </h2>
          </div>

          {/* Category Filter Pills (All, Oils, Essentials) */}
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
              {isTa ? "அனைத்தும் (6)" : "VIEW ALL (6)"}
            </button>

            <button
              onClick={() => setSelectedCategory("oil")}
              className={`btn-cta ${selectedCategory === "oil" ? "btn-cta-primary" : "btn-cta-secondary"} btn-cta-sm`}
              style={{ flexShrink: 0 }}
            >
              {isTa ? "மரச்செக்கு எண்ணெய்கள் (3)" : "CHEKKU OILS (3)"}
            </button>

            <button
              onClick={() => setSelectedCategory("essential")}
              className={`btn-cta ${selectedCategory === "essential" ? "btn-cta-primary" : "btn-cta-secondary"} btn-cta-sm`}
              style={{ flexShrink: 0 }}
            >
              {isTa ? "நெய் & வெல்லம் (3)" : "GHEE & SWEETENERS (3)"}
            </button>
          </div>
        </div>

        {/* Filter Controls Bar (Price, Brand, Size, Rating & Sort) */}
        <div
          style={{
            backgroundColor: "#FAF8F5",
            borderRadius: "16px",
            padding: "16px 20px",
            border: "1px solid #ECE7DD",
            marginBottom: "28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "14px",
          }}
        >
          {/* Desktop Filter Dropdowns */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flexWrap: "wrap",
            }}
            className="filter-bar-desktop"
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#9E6F1B", fontWeight: 700, fontSize: "12px", textTransform: "uppercase" }}>
              <Filter size={15} strokeWidth={2} />
              <span>{isTa ? "வடிகட்டிகள்:" : "FILTERS:"}</span>
            </div>

            {/* 1. Price Filter */}
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="clean-select"
              style={{
                width: "auto",
                padding: "7px 12px",
                fontSize: "12px",
                fontWeight: 600,
                borderRadius: "20px",
                backgroundColor: selectedPriceRange !== "all" ? "#141612" : "#FFFFFF",
                color: selectedPriceRange !== "all" ? "#FFFFFF" : "#141612",
                border: "1px solid #DCD8CF",
                cursor: "pointer",
              }}
            >
              {PRICE_RANGES.map((pr) => (
                <option key={pr.id} value={pr.id} style={{ backgroundColor: "#FFFFFF", color: "#141612" }}>
                  💰 {isTa ? pr.labelTa : pr.labelEn}
                </option>
              ))}
            </select>

            {/* 2. Brand Filter */}
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="clean-select"
              style={{
                width: "auto",
                padding: "7px 12px",
                fontSize: "12px",
                fontWeight: 600,
                borderRadius: "20px",
                backgroundColor: selectedBrand !== "all" ? "#141612" : "#FFFFFF",
                color: selectedBrand !== "all" ? "#FFFFFF" : "#141612",
                border: "1px solid #DCD8CF",
                cursor: "pointer",
              }}
            >
              {BRANDS.map((b) => (
                <option key={b.id} value={b.id} style={{ backgroundColor: "#FFFFFF", color: "#141612" }}>
                  🏷️ {isTa ? b.nameTa : b.nameEn}
                </option>
              ))}
            </select>

            {/* 3. Size Filter */}
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="clean-select"
              style={{
                width: "auto",
                padding: "7px 12px",
                fontSize: "12px",
                fontWeight: 600,
                borderRadius: "20px",
                backgroundColor: selectedSize !== "all" ? "#141612" : "#FFFFFF",
                color: selectedSize !== "all" ? "#FFFFFF" : "#141612",
                border: "1px solid #DCD8CF",
                cursor: "pointer",
              }}
            >
              {SIZE_OPTIONS.map((so) => (
                <option key={so.id} value={so.id} style={{ backgroundColor: "#FFFFFF", color: "#141612" }}>
                  📦 {isTa ? so.labelTa : so.labelEn}
                </option>
              ))}
            </select>

            {/* 4. Rating Filter */}
            <select
              value={selectedRating}
              onChange={(e) => setSelectedRating(Number(e.target.value))}
              className="clean-select"
              style={{
                width: "auto",
                padding: "7px 12px",
                fontSize: "12px",
                fontWeight: 600,
                borderRadius: "20px",
                backgroundColor: selectedRating > 0 ? "#141612" : "#FFFFFF",
                color: selectedRating > 0 ? "#FFFFFF" : "#141612",
                border: "1px solid #DCD8CF",
                cursor: "pointer",
              }}
            >
              {RATING_OPTIONS.map((ro) => (
                <option key={ro.id} value={ro.id} style={{ backgroundColor: "#FFFFFF", color: "#141612" }}>
                  ★ {isTa ? ro.labelTa : ro.labelEn}
                </option>
              ))}
            </select>
          </div>

          {/* Mobile Filter Toggle */}
          <div className="filter-bar-mobile" style={{ display: "none" }}>
            <button
              onClick={() => setFilterDrawerOpen(!filterDrawerOpen)}
              className="btn-cta btn-cta-secondary btn-cta-sm"
              style={{ gap: "6px" }}
            >
              <SlidersHorizontal size={14} strokeWidth={2} />
              <span>{isTa ? "வடிகட்டுதல்" : "Filter & Sort"} {activeFiltersCount > 0 ? `(${activeFiltersCount})` : ""}</span>
            </button>
          </div>

          {/* Right Side: Sort By Dropdown & Count */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginLeft: "auto" }}>
            <span style={{ fontSize: "12px", color: "#84877E", whiteSpace: "nowrap" }}>
              {filteredProducts.length} {isTa ? "பொருட்கள்" : "products"}
            </span>

            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <ArrowUpDown size={14} strokeWidth={1.8} color="#84877E" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="clean-select"
                style={{
                  width: "auto",
                  padding: "6px 10px",
                  fontSize: "11.5px",
                  fontWeight: 600,
                  borderRadius: "8px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #DCD8CF",
                  cursor: "pointer",
                }}
              >
                <option value="featured">{isTa ? "பரிந்துரைக்கப்பட்டது" : "Featured"}</option>
                <option value="price-asc">{isTa ? "விலை: குறைந்தது முதல் அதிகம்" : "Price: Low to High"}</option>
                <option value="price-desc">{isTa ? "விலை: அதிகம் முதல் குறைந்தது" : "Price: High to Low"}</option>
                <option value="rating">{isTa ? "உயர்ந்த மதிப்பீடு" : "Highest Rated"}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Mobile Filter Expandable Drawer */}
        {filterDrawerOpen && (
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "14px",
              padding: "16px",
              border: "1px solid #ECE7DD",
              marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", color: "#141612" }}>
                Filter Options
              </span>
              <button
                onClick={() => setFilterDrawerOpen(false)}
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                <X size={16} />
              </button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              <div>
                <label style={{ fontSize: "11px", fontWeight: 600, color: "#84877E", display: "block", marginBottom: "4px" }}>
                  Price Range
                </label>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="clean-select"
                  style={{ fontSize: "12px", padding: "8px" }}
                >
                  {PRICE_RANGES.map((pr) => (
                    <option key={pr.id} value={pr.id}>
                      {isTa ? pr.labelTa : pr.labelEn}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ fontSize: "11px", fontWeight: 600, color: "#84877E", display: "block", marginBottom: "4px" }}>
                  Brand Line
                </label>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="clean-select"
                  style={{ fontSize: "12px", padding: "8px" }}
                >
                  {BRANDS.map((b) => (
                    <option key={b.id} value={b.id}>
                      {isTa ? b.nameTa : b.nameEn}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ fontSize: "11px", fontWeight: 600, color: "#84877E", display: "block", marginBottom: "4px" }}>
                  Pack Size
                </label>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="clean-select"
                  style={{ fontSize: "12px", padding: "8px" }}
                >
                  {SIZE_OPTIONS.map((so) => (
                    <option key={so.id} value={so.id}>
                      {isTa ? so.labelTa : so.labelEn}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ fontSize: "11px", fontWeight: 600, color: "#84877E", display: "block", marginBottom: "4px" }}>
                  Rating
                </label>
                <select
                  value={selectedRating}
                  onChange={(e) => setSelectedRating(Number(e.target.value))}
                  className="clean-select"
                  style={{ fontSize: "12px", padding: "8px" }}
                >
                  {RATING_OPTIONS.map((ro) => (
                    <option key={ro.id} value={ro.id}>
                      {isTa ? ro.labelTa : ro.labelEn}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Active Filter Chips / Clear All */}
        {activeFiltersCount > 0 && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexWrap: "wrap",
              marginBottom: "24px",
            }}
          >
            <span style={{ fontSize: "11px", color: "#84877E", fontWeight: 600 }}>Active Filters:</span>

            {selectedCategory !== "all" && (
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "4px 10px",
                  borderRadius: "16px",
                  backgroundColor: "#FAF4E8",
                  border: "1px solid #ECE7DD",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#9E6F1B",
                }}
              >
                Category: {selectedCategory === "oil" ? "Chekku Oils" : "Ghee & Sweeteners"}
                <X size={12} style={{ cursor: "pointer" }} onClick={() => setSelectedCategory("all")} />
              </span>
            )}

            {selectedPriceRange !== "all" && (
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "4px 10px",
                  borderRadius: "16px",
                  backgroundColor: "#FAF4E8",
                  border: "1px solid #ECE7DD",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#9E6F1B",
                }}
              >
                Price: {PRICE_RANGES.find((p) => p.id === selectedPriceRange)?.labelEn}
                <X size={12} style={{ cursor: "pointer" }} onClick={() => setSelectedPriceRange("all")} />
              </span>
            )}

            {selectedBrand !== "all" && (
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "4px 10px",
                  borderRadius: "16px",
                  backgroundColor: "#FAF4E8",
                  border: "1px solid #ECE7DD",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#9E6F1B",
                }}
              >
                Brand: {selectedBrand}
                <X size={12} style={{ cursor: "pointer" }} onClick={() => setSelectedBrand("all")} />
              </span>
            )}

            {selectedSize !== "all" && (
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "4px 10px",
                  borderRadius: "16px",
                  backgroundColor: "#FAF4E8",
                  border: "1px solid #ECE7DD",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#9E6F1B",
                }}
              >
                Size: {selectedSize}
                <X size={12} style={{ cursor: "pointer" }} onClick={() => setSelectedSize("all")} />
              </span>
            )}

            {selectedRating > 0 && (
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "4px 10px",
                  borderRadius: "16px",
                  backgroundColor: "#FAF4E8",
                  border: "1px solid #ECE7DD",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#9E6F1B",
                }}
              >
                Rating: {selectedRating}★ & Up
                <X size={12} style={{ cursor: "pointer" }} onClick={() => setSelectedRating(0)} />
              </span>
            )}

            <button
              onClick={clearAllFilters}
              style={{
                background: "none",
                border: "none",
                color: "#E53E3E",
                fontSize: "11.5px",
                fontWeight: 600,
                cursor: "pointer",
                textDecoration: "underline",
                marginLeft: "4px",
              }}
            >
              {isTa ? "அனைத்தையும் நீக்குக" : "Clear All"}
            </button>
          </div>
        )}

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
              onClick={clearAllFilters}
              className="btn-cta btn-cta-primary btn-cta-sm"
            >
              {isTa ? "அனைத்து வடிகட்டிகளையும் நீக்குக" : "Reset All Filters"}
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
              const activeSizeIdx = selectedSizes[product.id] || 0;
              const currentSize = product.sizes[activeSizeIdx] || product.sizes[0];
              const discountPct = Math.round(
                ((currentSize.originalPrice - currentSize.price) / currentSize.originalPrice) * 100
              );

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
                        product.badgeType === "discount" ? "#9E6F1B" : "#141612",
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
                    Bottle / Tin Available
                  </div>

                  {/* High-Resolution Product Image Box */}
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
                    {/* Real High-Resolution Photography */}
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
                        // In case of image load error, render stylized SVG fallback
                        e.currentTarget.style.display = "none";
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const fallback = parent.querySelector(".svg-fallback");
                          if (fallback) (fallback as HTMLElement).style.display = "block";
                        }
                      }}
                    />

                    {/* SVG Fallback if image network fails */}
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

                  {/* Product Title (Consistent 700 Weight) */}
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
        @media (max-width: 900px) {
          .filter-bar-desktop {
            display: none !important;
          }
          .filter-bar-mobile {
            display: block !important;
          }
        }
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
