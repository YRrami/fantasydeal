import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.products": "Products",
      "nav.gallery": "Gallery",
      "nav.contact": "Contact",
      "hero.title": "Crafted for modern living, with timeless appeal.",
      "hero.subtitle": "EGYWIN delivers exceptional aluminum systems for doors, windows, and facades, elevating comfort, efficiency, and style.",
      "hero.cta": "Explore Collection",
      "why.title": "Why Choose EGYWIN?",
      "features.premium": "Premium Materials",
      "features.premium_desc": "We select only the finest, most durable aluminum and components.",
      "features.security": "Security & Comfort",
      "features.security_desc": "Our products deliver safety, insulation, and peace of mind.",
      "features.sustainable": "Sustainable Value",
      "features.sustainable_desc": "High efficiency and eco-friendly choices for a greener future.",
      "features.installation": "Expertise & Support",
      "features.installation_desc": "From concept to installation, our team is with you every step."
    }
  },
  ar: {
    translation: {
      "nav.home": "الرئيسية",
      "nav.about": "من نحن",
      "nav.products": "المنتجات",
      "nav.gallery": "المعرض",
      "nav.contact": "تواصل",
      "hero.title": "مصممة لحياة عصرية بلمسة خالدة.",
      "hero.subtitle": "توفر Egywin أنظمة ألمنيوم استثنائية للأبواب والنوافذ والواجهات، لترتقي بالراحة والكفاءة والأناقة.",
      "hero.cta": "استكشف المجموعة",
      "why.title": "لماذا تختار إيجي وين؟",
      "features.premium": "خامات فاخرة",
      "features.premium_desc": "نختار أفضل خامات الألمنيوم والمكونات لضمان الجودة.",
      "features.security": "أمان وراحة",
      "features.security_desc": "منتجاتنا توفر الأمان والعزل والطمأنينة.",
      "features.sustainable": "استدامة وقيمة",
      "features.sustainable_desc": "كفاءة عالية وخيارات صديقة للبيئة لمستقبل أخضر.",
      "features.installation": "خبرة ودعم",
      "features.installation_desc": "من التصميم حتى التركيب، فريقنا معك في كل خطوة."
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
