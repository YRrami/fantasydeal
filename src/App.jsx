import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./App.css";
import logo from './Logo.png';
import section from './section.png';
import section1 from './section1.png';
import section2 from './section2.png';
import section3 from './section3.png';
import section4 from './section4.png';

const TEXT = {
  en: {

blogsHeading: {
  en: "The Blog – “Marketing Universes Journal”"
},
blogs: [
  "Beyond Short-Form Content: How Interactive Video Shapes Customer Journeys?",
  "AI or Human Creativity? Crafting Powerful Marketing Blends",
  "With X and Real-time Trends: Timing Strategies in the Age of Speed",
  "Retail Customer Experience: How to Build a ‘Super App’ That Sells & Supports",
  "Impact in the Nonprofit Sector: Turning Digital Engagement into Real Change",
  "Secrets of Tourism Marketing After Covid: Storytelling to Revive Cities Worldwide"
],


   packages: [
  {
    icon: "🪐",
    title: "Orbit Package (Standard Orbit)",
    features: [
      "12 content posts / month",
      "Monthly ad campaign up to 5,000 SAR",
      "Interactive monthly performance report",
      "Quarterly photoshoot session"
    ]
  },
  {
    icon: "🌌",
    title: "Nebula Package (Custom Cloud)",
    features: [
      "Everything is customizable to your goals and budget (from 20,000 SAR and up)",
      "Dedicated account manager + 24/7 creative ops room",
      "AR/VR experiences, predictive AI analytics, and joint growth strategy"
    ]
  }
],
packagesHeading: {
  en: "Packages – Flexible Orbit Plans",
  ar: "الباقات – “خُطط بمدارات مرنة”"
},
    nav: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Work", href: "#work" },
      { label: "Contact", href: "#contact" }
    ],
    dropdown: [
      { label: "Why Choose Us?", href: "#why" },
      { label: "Packages", href: "#packages" },
      { label: "Core Values", href: "#values" },
      { label: "Services", href: "#services" },
      { label: "Success Partners", href: "#partners" },
      { label: "Success Stories", href: "#success-stories" },
      { label: "sectors", href: "#sectors" },
      { label: "Team", href: "#team" },
      { label: "Blog", href: "#blogs" },
    ],
    coreValues: [
      "Astrolabe Vision – We think outside the galaxy.",
      "Crystal Clarity – Transparency from every angle.",
      "Disciplined Rhythm – We tune to the heartbeat of the market.",
      "Engineered Passion – Creativity empowered by data.",
      "Flawless Collaboration – One team, one planet, one goal."
    ],
services: [
  {
    icon: "🏬",
    title: "Retail & Gov. Apps",
    desc: "App launches, government entities, innovative e-stores, internal platforms."
  },
  {
    icon: "📱",
    title: "Social Media Management",
    desc: "X, LinkedIn, Snapchat, Instagram. Content strategy, design, writing, publishing, analytics."
  },
  {
    icon: "🆔",
    title: "Brand Identity Creation",
    desc: "Naming, logo, and guidelines to leave a lasting brand impression."
  },
  {
    icon: "💡",
    title: "Paid Advertising",
    desc: "Meta, Google, TikTok, Snapchat. Smart targeting & continuous optimization."
  },
  {
    icon: "🎥",
    title: "Production & Visual Experience",
    desc: "Cinematic shots, motion graphics, virtual tours, 360° video."
  },
  {
    icon: "🌐",
    title: "Web & Platforms",
    desc: "Saudi hosting, UI/UX, content, SEO improvement."
  },
  {
    icon: "📊",
    title: "Analytics & Monitoring",
    desc: "Instant dashboards, periodic reporting, actionable insights."
  }
],
    partners: [
      "eCommerce Market", "Al Riyadh Hospital", "AlMajal Schools", "TasteHub F&B", "HealthTechX", "Mobit App", "Qode Medical"
    ],
    team: [
      { initials: "RA", name: "Rami Al-Qassim", role: "CEO", desc: "Vision, leadership, and 14+ years of marketing experience." },
      { initials: "DF", name: "Dana Farouk", role: "Head of Creative", desc: "Award-winning designer and visual brand builder." },
      { initials: "MA", name: "Mohammed Ameen", role: "Growth Lead", desc: "Analytics, campaigns, and digital growth specialist." },
      { initials: "LK", name: "Lina Khaled", role: "Copy & Social", desc: "Storytelling, Arabic/English content, and campaigns." }
    ],
    works: [
      { img: section4, title: "Zahra Luxury - Brand Identity", desc: "Full visual identity and online launch for an award-winning luxury florist.", extra: "Branding · Campaign · Launch" },
      { img: section3, title: "Mobit App Campaign", desc: "Viral launch and growth strategy for the fastest GCC mobility app.", extra: "Social · Ads" },
      { img: section2, title: "Qode Medical Platform", desc: "Brand design & digital presence for B2B MedTech startup.", extra: "Web · Identity" },
      { img: section, title: "AlMajal Schools", desc: "Social storytelling and campaigns for K-12 leader.", extra: "Social · Content" },
      { img: section1, title: "TasteHub F&B Group", desc: "Branding, content and paid media for hospitality group.", extra: "Brand · Ads" }
    ],
    badge: "Your Strategic Partner in Digital Growth",
    heroTitleA: "Empowering Brands",
    heroTitleB: "to Win Online",
    heroSub: "Creative agency in Riyadh, elevating brands through strategy, design, and digital storytelling.",
    heroBtnA: "Let’s Talk",
    heroBtnB: "See Our Work",
    aboutAgency: "Who We Are – Journey Between Reality & Imagination",
    aboutDesc1: "Vision: To be the gateway through which brands in Saudi Arabia transcend into new spaces of influence.",
    aboutDesc2: "Mission: Harnessing imagination to craft realistic marketing solutions that drive measurable growth.",
    aboutDesc3: "Our Values (written with imagination):",
    aboutValues: [
      "Astrolabe Vision – We think outside the galaxy.",
      "Crystal Clarity – Transparency from every angle.",
      "Disciplined Rhythm – We tune to the heartbeat of the market.",
      "Engineered Passion – Creativity empowered by data.",
      "Flawless Collaboration – One team, one planet, one goal."
    ],
    aboutPromise: "Measurable results. Memorable presence.",
    aboutExp: "Years Experience",
    aboutBrands: "Brands Launched",
    aboutAud: "Audience Reached",
    aboutSince: "Premium Since 2016",
    whyTitle: "Why Choose",
    why1title: "Strategic, Not Generic",
    why1desc: "Every brand gets a tailored digital blueprint—no copy-paste campaigns.",
    why2title: "Creativity Meets Data",
    why2desc: "Designs and stories built on insight, not just aesthetics.",
    why3title: "Partners, Not Just Providers",
    why3desc: "We grow with our clients—your wins are our wins.",
    why4title: "Performance Obsessed",
    why4desc: "Clear reporting, real ROI, and growth you can measure.",
    mvHeading: "Our Mission & Vision",
    mission: "Mission",
    vision: "Vision",
    missionBody: "To empower businesses with modern marketing strategies that inspire audiences and drive tangible results.",
    visionBody: "To become a leading digital marketing agency in the GCC, known for creativity, performance, and client success.",
    valuesHeading: "Our Core Values",
    servicesHeading: "Our Services",
    partnersHeading: "Success Partners",
    partnersDesc: "We’ve worked with leading brands and local heroes across multiple industries—from eCommerce to healthcare, education, hospitality, and more.",
    teamHeading: "Meet the Team",
    teamDesc: "Our creative and strategic minds bring together a passion for design, content, and analytics.\nEvery team member is committed to helping you grow your brand with care and creativity.",
    workHeading: "Our Work",
    workDesc: "Check out some of the projects we’ve brought to life—from viral campaigns to beautiful social media grids and top-performing ads.",
    workFeatured: "Featured",
    contactHeading: "Contact Us",
    contactTitle: "Let’s bring your vision to life!",
    contactLoc: "📍 Riyadh, Saudi Arabia",
    contactBtn: "Send Message",
    contactFormName: "Name",
    contactFormEmail: "Email",
    contactFormMsg: "Your message...",
    footer: "Crafted in Riyadh. All Rights Reserved.",
    contactUs: "Contact Us",
    more: "More",
    insta: "Instagram",
    linkedin: "LinkedIn",
    snap: "Snapchat",
     sectorsHeading: "Sectors We Serve – Every Planet Speaks Its Language",
    sectorsDesc: "We tailor success stories, case studies, and video testimonials for every sector to showcase our diverse expertise.",
    sectors: [
      "Retail & E-commerce",
      "Health & Beauty",
      "Government & Semi-Government",
      "Hospitality & Tourism",
      "Technology & Innovation",
      "Non-Profit Sector"
    ],


successStoriesHeading: "Success Stories – Stars That Lit Up the Sky",
successStories: [
  {
    img: "elite-clinics.jpg", // Replace with your real image path
    title: "Elite Clinics",
    goals: "Grow engagement by 300% in 6 months.",
    approach: "Social content strategy, video series, targeted campaigns.",
    results: "Achieved 300% increase in engagement in 6 months."
  },
  {
    img: "trendycart.jpg",
    title: "TrendyCart Store",
    goals: "Triple sales during the 11.11 campaign.",
    approach: "Flash sales, influencer marketing, retargeting ads.",
    results: "Sales multiplied 3x during 11.11 campaign."
  },
  {
    img: "green-nation.jpg",
    title: "‘Green Nation’ Gov. Initiative",
    goals: "Achieve 2M organic views in 2 weeks.",
    approach: "Awareness campaign, viral hashtag challenge, UGC.",
    results: "2M+ organic views in just two weeks."
  }
],



  },
  ar: {


blogsHeading: {
  ar: "المدونة – “مدوّنة الأكوان التسويقية”"
},
blogs: [
  "مـا بعد المحتوى القصير: كيف يؤثر الفيديو التفاعلي في رحلة العميل؟",
  "بذكاء اصطناعي أم إبداع إنساني؟ صناعة مزيج تسويقي فائق القوة",
  "بمنصة X وتردد اللحظة: استراتيجيات توقيت النشر في عالم السرعة",
  "تجربة العميل في متاجر التجزئة: كيف تخلق “سوبر آب” يجمع البيع والدعم؟",
  "إيصال الأثر في القطاع غير الربحي: تحويل التفاعل الرقمي إلى تأثيرات حقيقية",
  "أسرار التسويق السياحي بعد كوفيد: سرد القصص لإحياء مدن العالم"
],


successStoriesHeading: "قصص النجاح – “نجوم أضاءت السماء”",
successStories: [
  {
    img: "elite-clinics.jpg",
    title: "Elite Clinics",
    goals: "نمو التفاعل بنسبة 300% خلال 6 أشهر.",
    approach: "استراتيجية محتوى اجتماعي، سلسلة فيديو، حملات موجهة.",
    results: "تحقيق زيادة 300% في التفاعل خلال 6 أشهر."
  },
  {
    img: "trendycart.jpg",
    title: "متجر TrendyCart",
    goals: "مضاعفة المبيعات ثلاث مرات في حملة “11.11”.",
    approach: "عروض فلاش، تسويق مؤثرين، إعادة الاستهداف.",
    results: "المبيعات تضاعفت ثلاث مرات في حملة 11.11."
  },
  {
    img: "green-nation.jpg",
    title: "مبادرة “وطن أخضر” الحكومية",
    goals: "تحقيق 2 مليون مشاهدة عضوية خلال أسبوعين.",
    approach: "حملة توعية، تحدي هاشتاق فيروسي، محتوى جماهيري.",
    results: "2 مليون مشاهدة عضوية خلال أسبوعين فقط."
  }
],




    sectorsHeading: "القطاعات التي نخدمها – “لكل كوكبٍ لغته”",
    sectorsDesc: "يتم تخصيص قصص نجاح وعينات عمل لكل قطاع مع شهادات مصوّرة لإظهار التنوع.",
    sectors: [
      "التجزئة والمتاجر الإلكترونية",
      "الصحة والجمال",
      "القطاع الحكومي والجهات شبه الحكومية",
      "الضيافة والسياحة",
      "التقنية والابتكار",
      "القطاع غير الربحي"
    ],
  packages: [
  {
    icon: "🪐",
    title: "باقة Orbit (المدار القياسي)",
    features: [
      "12 منشور محتوى / شهر",
      "حملة إعلانية شهرية حتى 5,000 ر.س.",
      "تقرير أداء شهري تفاعلي",
      "جلسة تصوير ربع سنوية"
    ]
  },
  {
    icon: "🌌",
    title: "باقة Nebula (السحابة المخصّصة)",
    features: [
      "كل شيء قابل للتشكيل حسب أهدافك وميزانيتك (من 20,000 ر.س وحتى ما لا نهاية)",
      "مدير حساب مخصّص + غرفة عمليات إبداعية على مدار الساعة",
      "تجارب واقع معزّز/افتراضي، تحليلات AI تنبؤية، واستراتيجية نموّ مشتركة"
    ]
  }
],
packagesHeading: {
  ar: "الباقات – “خُطط بمدارات مرنة”"
},

    nav: [
      { label: "الرئيسية", href: "#home" },
      { label: "من نحن", href: "#about" },
      { label: "الأعمال", href: "#work" },
      { label: "تواصل", href: "#contact" }
    ],
    dropdown: [
      { label: "لماذا نحن؟", href: "#why" },
      { label: "الباقات", href: "#packages" },
      { label: "القيم الجوهرية", href: "#values" },
      { label: "خدماتنا", href: "#services" },
      { label: "شركاء النجاح", href: "#partners" },
      { label: "قصص النجاح", href: "#success-stories" },
      { label: "الفريق", href: "#team" },
      { label: "القطاعات", href: "#sectors" },
      { label: "المدونة", href: "#blogs" },
    ],
    coreValues: [
      "رؤية اسطرلابية – نفكّر خارج المجرة.",
      "على وضح النقا – وضوح يُرى من كل زاوية.",
      "الإيقاع المنضبط – نضبط نبض السوق على المقاس.",
      "الشغف المُمكنن – إبداع مُدعّم بالبيانات.",
      "تعاون ما وراه ذلة – فريق واحد، كوكبٌ واحد، هدفٌ واحد."
    ],
   services: [
  {
    icon: "🏬",
    title: "تطبيقات المتاجر والجهات",
    desc: "إطلاق تطبيقات متاجر إلكترونية، منصات حكومية، حلول مبتكرة داخلية."
  },
  {
    icon: "📱",
    title: "إدارة منصات التواصل",
    desc: "إستراتيجية، كتابة، تصميم، نشر، تحليلات على انستجرام، X، لينكدإن، سناب."
  },
  {
    icon: "🆔",
    title: "ابتكار الهوية",
    desc: "صياغة اسم، شعار، ودليل بصري يمنح علامتك حضور لا يُنسى."
  },
  {
    icon: "💡",
    title: "الإعلانات المدفوعة",
    desc: "حملات META وGoogle وTikTok وسناب باستهداف ذكي وتحسين مستمر."
  },
  {
    icon: "🎥",
    title: "إنتاج وتجربة بصرية",
    desc: "تصوير سينمائي وجولات، موشن جرافيك، فيديو 360°."
  },
  {
    icon: "🌐",
    title: "حلول المواقع والمنصات",
    desc: "حجز نطاق سعودي، تصميم UX/UI، كتابة محتوى، تحسين SEO."
  },
  {
    icon: "📊",
    title: "التحليلات الذكية",
    desc: "لوحات بيانات لحظية، تقارير دورية، توصيات فورية."
  }

    ],
    partners: [
      "eCommerce Market", "مستشفى الرياض", "مدارس المجال", "TasteHub F&B", "HealthTechX", "تطبيق Mobit", "Qode Medical"
    ],
    team: [
      { initials: "RA", name: "رامي القاسم", role: "المدير التنفيذي", desc: "رؤية وقيادة وخبرة أكثر من ١٤ سنة في التسويق." },
      { initials: "DF", name: "دانا فاروق", role: "رئيسة الإبداع", desc: "مصممة حائزة على جوائز وبناء علامات بصرية." },
      { initials: "MA", name: "محمد أمين", role: "قائد النمو", desc: "تحليلات، حملات، وخبير نمو رقمي." },
      { initials: "LK", name: "لينا خالد", role: "كتابة ومحتوى", desc: "قصص إبداعية، محتوى عربي/إنجليزي، وحملات." }
    ],
    works: [
      { img: section4, title: "زهرة لوكشري - هوية العلامة", desc: "تصميم الهوية البصرية الكاملة والإطلاق الإلكتروني لمتجر ورد فاخر.", extra: "هوية · حملة · إطلاق" },
      { img: section3, title: "حملة تطبيق Mobit", desc: "إطلاق استثنائي واستراتيجية نمو لأسرع تطبيق تنقل في الخليج.", extra: "سوشال · إعلانات" },
      { img: section2, title: "منصة Qode Medical", desc: "تصميم العلامة والحضور الرقمي لشركة تقنية طبية.", extra: "موقع · هوية" },
      { img: section, title: "مدارس المجال", desc: "قصص تفاعلية وحملات لمؤسسة تعليمية رائدة.", extra: "سوشال · محتوى" },
      { img: section1, title: "مجموعة TasteHub F&B", desc: "تصميم الهوية، المحتوى، والإعلانات لقطاع الضيافة.", extra: "هوية · إعلانات" }
    ],
    badge: "شريكك الاستراتيجي للنمو الرقمي",
    heroSlogan: "حدودنا تتخطى كل خيال",
    heroAnimated: "تسويق بخيال واقعي",
    heroIntro: "في عالمٍ يتبدّل كلَّ ثانية، نخلق في الصفقة الخيالية أكواناً جديدة من الفرص التسويقيّة؛ نصيغ الفكرة، نُلهم الجماهير، ونحوِّل قصتك إلى ضوءٍ يلمع في فضاء المنافسة. انضم إلينا… حيث لا سقف فوق الإبداع.",
    heroQuickCards: [
      { title: "استراتيجية", icon: "📊" },
      { title: "إبداع بصري", icon: "🎨" },
      { title: "نموّ مستمر", icon: "🚀" }
    ],
    heroCounters: [
      { label: "قطاعات خدمناها", value: 10, prefix: "+", suffix: "" },
      { label: "علامة تجارية", value: 15, prefix: "+", suffix: "" },
      { label: "رضا عملاء", value: 97, prefix: "", suffix: "%" }
    ],
    heroCta: "ابدأ معنا",
    heroTitleA: "تمكين العلامات التجارية",
    heroTitleB: "للنجاح عبر الإنترنت",
    heroSub: "وكالة إبداعية في الرياض، نرتقي بالعلامات التجارية عبر الاستراتيجية، والتصميم، ورواية القصص الرقمية.",
    heroBtnA: "تواصل معنا",
    heroBtnB: "شاهد أعمالنا",
    aboutAgency: "من نحن – رحلة بين الواقع والخيال",
    aboutDesc1: "رؤيتنا: أن نكون البوابة التي تعبر من خلالها العلامات التجارية في المملكة إلى فضاءات جديدة من التأثير.",
    aboutDesc2: "رسالتنا: تسخير الخيال لصناعة حلول تسويقيّة واقعيّة تقود إلى نموّ قابل للقياس.",
    aboutDesc3: "قيمنا (مُصاغة بخيال):",
    aboutValues: [
      "رؤية اسطرلابية – نفكّر خارج المجرة.",
      "على وضح النقا – وضوح يُرى من كل زاوية.",
      "الإيقاع المنضبط – نضبط نبض السوق على المقاس.",
      "الشغف المُمكنن – إبداع مُدعّم بالبيانات.",
      "تعاون ما وراه ذلة – فريق واحد، كوكبٌ واحد، هدفٌ واحد."
    ],
    aboutPromise: "نتائج ملموسة. حضور لا يُنسى.",
    aboutExp: "سنوات خبرة",
    aboutBrands: "علامة تم إطلاقها",
    aboutAud: "شخص وصلنا إليهم",
    aboutSince: "بريميوم منذ ٢٠١٦",
    whyTitle: "لماذا تختار",
    why1title: "استراتيجية وليست نمطية",
    why1desc: "كل علامة تحصل على خطة رقمية مصممة خصيصاً — لا حملات منسوخة.",
    why2title: "الإبداع مبني على البيانات",
    why2desc: "التصاميم والقصص تعتمد على الرؤى وليس فقط الجمال.",
    why3title: "شركاء لا مزودو خدمة",
    why3desc: "ننمو مع عملائنا — نجاحكم نجاحنا.",
    why4title: "مهووسون بالأداء",
    why4desc: "تقارير واضحة، عائد حقيقي، ونمو يمكن قياسه.",
    mvHeading: "الرؤية والرسالة",
    mission: "الرسالة",
    vision: "الرؤية",
    missionBody: "تمكين الأعمال باستراتيجيات تسويق حديثة تلهم الجمهور وتحقق نتائج ملموسة.",
    visionBody: "أن نصبح وكالة التسويق الرقمي الرائدة في الخليج، معروفة بالإبداع والأداء ونجاح العملاء.",
    valuesHeading: "قيمنا الجوهرية",
    servicesHeading: "خدماتنا",
    partnersHeading: "شركاء النجاح",
    partnersDesc: "عملنا مع علامات رائدة وأبطال محليين في عدة قطاعات — من التجارة الإلكترونية إلى الصحة والتعليم والضيافة وأكثر.",
    teamHeading: "تعرف على الفريق",
    teamDesc: "فريقنا المبدع والاستراتيجي يجمع بين الشغف في التصميم والمحتوى والتحليل.\nكل عضو ملتزم بنمو علامتك التجارية بعناية وإبداع.",
    workHeading: "أعمالنا",
    workDesc: "استعرض بعض المشاريع التي أطلقناها — من حملات فيروسية إلى شبكات اجتماعية رائعة وإعلانات عالية الأداء.",
    workFeatured: "مميز",
    contactHeading: "تواصل معنا",
    contactTitle: "دعنا نحقق رؤيتك!",
    contactLoc: "📍 الرياض، المملكة العربية السعودية",
    contactBtn: "إرسال الرسالة",
    contactFormName: "الاسم",
    contactFormEmail: "البريد الإلكتروني",
    contactFormMsg: "رسالتك...",
    footer: "صُمم في الرياض. جميع الحقوق محفوظة.",
    contactUs: "تواصل معنا",
    more: "المزيد",
    insta: "انستقرام",
    linkedin: "لينكدإن",
    snap: "سناب شات"
  }
};
 
function LangSwitcher({ lang, setLang }) {
  return (
    <button
      onClick={() => setLang(lang === "en" ? "ar" : "en")}
      style={{
        border: "none",
        background: "#ffd166",
        color: "#23253d",
        borderRadius: "18px",
        fontWeight: "900",
        fontSize: "1.03rem",
        padding: "8px 22px",
        marginLeft: "16px",
        marginRight: "4px",
        cursor: "pointer",
        boxShadow: "0 2px 16px #ffd16633",
        outline: "none",
        transition: "background 0.15s, color 0.15s, transform 0.15s",
        position: "relative",
        zIndex: 15,
        direction: "ltr"
      }}
      aria-label={lang === "en" ? "العربية" : "English"}
      title={lang === "en" ? "العربية" : "English"}
      className="lang-switcher-btn"
    >
      {lang === "en" ? "العربية" : "English"}
    </button>
  );
}

function useIsMobile(breakpoint = 950) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);
  return isMobile;
}

function Header({
  menuOpen, setMenuOpen,
  moreOpen, setMoreOpen,
  moreAnim, setMoreAnim,
  moreMenuRef, drawerNavRef,
  lang, setLang
}) {
  const isMobile = useIsMobile();
  const t = TEXT[lang];

  useEffect(() => {
    if (moreOpen) setMenuOpen(false);
    if (menuOpen) setMoreOpen(false);
  }, [moreOpen, menuOpen, setMenuOpen, setMoreOpen]);

  useEffect(() => {
    if (!moreOpen) return;
    function handleClick(e) {
      if (
        moreMenuRef.current &&
        !moreMenuRef.current.contains(e.target) &&
        !e.target.classList.contains("more-btn")
      ) {
        setMoreOpen(false);
      }
    }
    function handleEsc(e) {
      if (e.key === "Escape") setMoreOpen(false);
    }
    window.addEventListener("mousedown", handleClick);
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("mousedown", handleClick);
      window.removeEventListener("keydown", handleEsc);
    };
  }, [moreOpen, setMoreOpen, moreMenuRef]);

  useEffect(() => {
    if (moreOpen) {
      setMoreAnim(true);
      setTimeout(() => setMoreAnim(false), 400);
      if (moreMenuRef.current) moreMenuRef.current.focus();
    }
  }, [moreOpen, setMoreAnim, moreMenuRef]);

  useEffect(() => {
    if (!menuOpen) return;
    if (drawerNavRef.current) drawerNavRef.current.focus();
    function handler(e) {
      if (e.key === "Escape") setMenuOpen(false);
      if (e.key === "Tab" && drawerNavRef.current) {
        const nodes = drawerNavRef.current.querySelectorAll("a,button");
        if (!nodes.length) return;
        const first = nodes[0], last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first.focus();
        }
      }
    }
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [menuOpen, setMenuOpen, drawerNavRef]);

  function handleMoreBtnKey(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setMoreOpen(o => !o);
    }
  }
  function handleBurgerKey(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setMenuOpen(o => !o);
    }
  }

  return (
    <header className="header-main" role="banner">
      <div className="header-main-inner" style={{ flexDirection: lang === "ar" ? "row-reverse" : "row" }}>
        <div className="logo-img">
          <img src={logo} alt="Fantasy Deal Logo" />
        </div>
        <nav className="header-nav" role="navigation" aria-label="Main Navigation">
          {t.nav.map(l => (
            <a
              href={l.href}
              className="header-link"
              key={l.href}
              onClick={() => { setMenuOpen(false); setMoreOpen(false); }}
            >{l.label}</a>
          ))}
          <div className="more-dropdown" tabIndex={-1}>
            <button
              className="more-btn"
              aria-haspopup="menu"
              aria-expanded={moreOpen}
              aria-controls="dropdown-menu"
              onClick={e => {
                e.preventDefault();
                setMoreOpen(o => !o);
                setMoreAnim(true);
              }}
              onKeyDown={handleMoreBtnKey}
              tabIndex={0}
              type="button"
            >
              {t.more} <span style={{ fontSize: "1.2em", marginLeft: 3 }}>▼</span>
            </button>
            <div
              className={`dropdown-menu${moreOpen || moreAnim ? " animated" : ""}${moreOpen ? " open" : ""}`}
              ref={moreMenuRef}
              aria-hidden={!moreOpen}
              tabIndex={-1}
              role="menu"
              id="dropdown-menu"
              style={{
                display: moreOpen || moreAnim ? "flex" : "none",
                right: lang === "ar" ? 0 : "unset",
                left: lang === "en" ? 0 : "unset",
                direction: lang === "ar" ? "rtl" : "ltr"
              }}
              onAnimationEnd={() => !moreOpen && setMoreAnim(false)}
            >
              {t.dropdown.map(link => (
                <a
                  href={link.href}
                  key={link.href}
                  tabIndex={0}
                  role="menuitem"
                  onClick={() => setMoreOpen(false)}
                >{link.label}</a>
              ))}
            </div>
          </div>
        </nav>
        <div style={{
          display: "flex",
          alignItems: "center",
          flexDirection: lang === "ar" ? "row-reverse" : "row"
        }}>
          <LangSwitcher lang={lang} setLang={setLang} />
          {!isMobile && (
            <a href="#contact" className="header-cta-btn" onClick={() => { setMenuOpen(false); setMoreOpen(false); }}>
              {t.contactUs}
            </a>
          )}
        </div>
        <button
          className="header-burger"
          aria-label="Menu"
          aria-controls="drawer-nav"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
          onKeyDown={handleBurgerKey}
          type="button"
        >
          <span style={{ transform: menuOpen ? "translateY(9px) rotate(43deg)" : "none" }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? "translateY(-9px) rotate(-43deg)" : "none" }} />
        </button>
      </div>
      {menuOpen && <div className="drawer-backdrop" onClick={() => setMenuOpen(false)} />}
      {menuOpen && (
        <nav
          className="drawer-nav"
          id="drawer-nav"
          tabIndex={-1}
          ref={drawerNavRef}
          role="navigation"
          aria-label="Mobile Navigation"
        >
          {t.nav.concat(t.dropdown).map(l => (
            <a href={l.href} key={l.href} tabIndex={0} onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <a href="#contact" className="header-cta-btn drawer-cta" tabIndex={0} onClick={() => setMenuOpen(false)}>
            {t.contactUs}
          </a>
          <LangSwitcher lang={lang} setLang={setLang} />
        </nav>
      )}
    </header>
  );
}


function QuickCard({ icon, title }) {
  return (
    <div className="hero-quick-card">
      <div className="quick-card-icon">{icon}</div>
      <div className="quick-card-title">{title}</div>
    </div>
  );
}
function AnimatedCounter({ value, suffix, duration = 1200 }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef();

  useEffect(() => {
    let start = 0;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setDisplay(Math.floor(progress * (value - start) + start));
      if (progress < 1) {
        ref.current = requestAnimationFrame(step);
      } else {
        setDisplay(value);
      }
    };
    ref.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(ref.current);
  }, [value, duration]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

function HeroSectionCustom({ lang }) {
  const isAr = lang === "ar";
  const counters = isAr
    ? [
        { value: 10, suffix: "+", label: "قطاعات خدمناها" },
        { value: 15, suffix: "+", label: "علامة تجارية" },
        { value: 97, suffix: "%", label: "رضا عملاء" }
      ]
    : [
        { value: 10, suffix: "+", label: "Sectors Served" },
        { value: 15, suffix: "+", label: "Brands" },
        { value: 97, suffix: "%", label: "Client Satisfaction" }
      ];

  const quickCards = isAr
    ? [
        { icon: "📊", label: "استراتيجية" },
        { icon: "🎨", label: "إبداع بصري" },
        { icon: "🚀", label: "نمو مستمر" }
      ]
    : [
        { icon: "📊", label: "Strategy" },
        { icon: "🎨", label: "Visual Creativity" },
        { icon: "🚀", label: "Continuous Growth" }
      ];

  const slogan = isAr ? "حدودنا تتخطى كل خيال" : "Our Imagination Knows No Bounds";
  const subSlogan = isAr
    ? <>تسويق <span className="animated-gradient">بخيال واقعي</span></>
    : <>Marketing with <span className="animated-gradient">Realistic Imagination</span></>;
  const intro = isAr
    ? "في عالمٍ يتبدّل كلَّ ثانية، نخلق في الصفقة الخيالية أكواناً جديدة من الفرص التسويقيّة؛ نصيغ الفكرة، نُلهم الجماهير، ونحوِّل قصتك إلى ضوءٍ يلمع في فضاء المنافسة. انضم إلينا… حيث لا سقف فوق الإبداع."
    : "In a world that changes every second, Fantasy Deal crafts new marketing universes: we shape ideas, inspire audiences, and turn your story into a light that shines in the space of competition. Join us—where creativity has no limits.";
  const ctaText = isAr ? "ابدأ معنا" : "Start With Us";
  const logoPath = logo;

  return (
    <section id="home" className="hero-modern">
      <div className="hero-orb-glassy orb1"></div>
      <div className="hero-orb-glassy orb2"></div>
      <div className="hero-orb-glassy orb3"></div>
      <div className="hero-modern-inner">
        <div className="hero-modern-left-col">
          <img src={logoPath} className="hero-logo-modern" alt="Fantasy Deal Logo" />
          <div className="hero-modern-text-group">
            <h1 className="hero-modern-title">{slogan}</h1>
            <div className="hero-modern-sub">{subSlogan}</div>
            <div className="hero-modern-intro">{intro}</div>
            <a href="#contact" className="hero-modern-cta">{ctaText}</a>
          </div>
        </div>
        <div className="hero-modern-right-col">
          <div className="hero-modern-counters">
            {counters.map((counter) => (
              <div className="hero-modern-counter" key={counter.label}>
                <div className="counter-value">
                  <AnimatedCounter value={counter.value} suffix={counter.suffix} />
                </div>
                <div className="counter-label">{counter.label}</div>
              </div>
            ))}
          </div>
          <div className="hero-modern-cardgrid">
            {quickCards.map((card) => (
              <div className="hero-modern-card" key={card.label}>
                <div className="card-icon">{card.icon}</div>
                <div className="card-label">{card.label}</div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}







function AboutSection({ t, lang }) {
  const isAr = lang === "ar";
  const aboutValues = (t && t.aboutValues) ? t.aboutValues : [];

  return (
    <section id="about" className="section about-section animate-in">
      <div className="about-bg-orb" />
      <div className="about-inner">
        <div className="about-left">
          <div className="about-icon-badge">
            <span className="about-icon-main" aria-hidden="true">{isAr ? "🧾" : "🚀"}</span>
          </div>
          <div className="about-signature">
            {isAr ? "من نحن" : t?.aboutSince || ""}
          </div>
        </div>
        <div className="about-right" style={isAr ? { direction: "rtl", textAlign: "right" } : {}}>
          <h2 style={{
            fontSize: "2.05rem",
            fontWeight: 900,
            marginBottom: "10px",
            letterSpacing: "-0.8px",
            color: "#6bbac3"
          }}>
            {t?.aboutAgency || ""}
          </h2>
          <div className="about-blurb" style={{ fontWeight: 700, color: "#FFD166", marginBottom: 20 }}>
            <div style={{ color: "#FFD166", fontWeight: 700 }}>
              {isAr ? "رؤيتنا:" : "Vision:"}
            </div>
            <div style={{ color: "#fff", fontWeight: 600, marginBottom: 7 }}>
              {t?.aboutDesc1 || ""}
            </div>
            <div style={{ color: "#FFD166", fontWeight: 700 }}>
              {isAr ? "رسالتنا:" : "Mission:"}
            </div>
            <div style={{ color: "#fff", fontWeight: 600 }}>
              {t?.aboutDesc2 || ""}
            </div>
          </div>
          <div style={{
            fontWeight: 800,
            color: "#6bbac3",
            marginBottom: 14,
            fontSize: "1.12rem"
          }}>
            {t?.aboutDesc3 || ""}
          </div>
          <div className="about-pillars" style={{ marginTop: 16 }}>
            {aboutValues.map((val, i) => (
              <div className="about-pillar" key={i}>
                <span className="pillar-icon">
                  {val.match(/اسطرلابية|Astrolabe/) ? "🌌" :
                    val.match(/النقا|Clarity/) ? "🔭" :
                    val.match(/الإيقاع|Rhythm/) ? "🎵" :
                    val.match(/الشغف|Passion/) ? "💡" :
                    val.match(/تعاون|Collaboration/) ? "🤝" :
                    "🌟"
                  }
                </span>
                <div>
                  <b>{val.split("–")[0]}</b>
                  <div>{val.split("–")[1]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhySection({ t }) {
  return (
    <section id="why" className="section why-section animate-in">
      <div className="why-bg-orb" />
      <div className="why-cards-wrap">
        <h2 className="why-header">
          <span className="why-header-icon">✨</span>
          {t.whyTitle} <span className="why-header-blue">Fantasy Deal?</span>
        </h2>
        <div className="why-cards-list">
          <div className="why-card">
            <span className="why-card-icon">🎯</span>
            <div>
              <div className="why-card-title">{t.why1title}</div>
              <div className="why-card-desc">{t.why1desc}</div>
            </div>
          </div>
          <div className="why-card">
            <span className="why-card-icon">⚡</span>
            <div>
              <div className="why-card-title">{t.why2title}</div>
              <div className="why-card-desc">{t.why2desc}</div>
            </div>
          </div>
          <div className="why-card">
            <span className="why-card-icon">🤝</span>
            <div>
              <div className="why-card-title">{t.why3title}</div>
              <div className="why-card-desc">{t.why3desc}</div>
            </div>
          </div>
          <div className="why-card">
            <span className="why-card-icon">📈</span>
            <div>
              <div className="why-card-title">{t.why4title}</div>
              <div className="why-card-desc">{t.why4desc}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// ---- Packages Section ----
function PackagesSection({ t, lang }) {
  // Defensive: handle both string/object for heading and for package data
  let heading = "";
  if (typeof t.packagesHeading === "string") {
    heading = t.packagesHeading;
  } else if (typeof t.packagesHeading === "object" && t.packagesHeading !== null) {
    heading = t.packagesHeading[lang] || Object.values(t.packagesHeading)[0] || "";
  }

  const packages = Array.isArray(t.packages) ? t.packages : [];

  return (
    <section id="packages" className="section packages-section animate-in">
      <div className="section-content">
        <h2 className="packages-heading">{heading}</h2>
        <div className="packages-cards-grid">
          {packages.map((pkg, i) => {
            // Get the correct title and features for the current language
            let title = typeof pkg.title === "string"
              ? pkg.title
              : (pkg.title?.[lang] || Object.values(pkg.title || {})[0] || "");

            let features = Array.isArray(pkg.features)
              ? pkg.features
              : (pkg.features?.[lang] || Object.values(pkg.features || {})[0] || []);

            // If features is not array, wrap as array
            if (!Array.isArray(features)) features = [features];

            return (
              <div className="package-card" key={i}>
                <div className="package-icon">{pkg.icon}</div>
                <div className="package-title">{title}</div>
                <ul className="package-features">
                  {features.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

PackagesSection.propTypes = {
  t: PropTypes.object.isRequired,
  lang: PropTypes.oneOf(["en", "ar"]).isRequired
};



function ValuesSection({ t }) {
  return (
    <section id="values" className="section values-ultra-simple-section animate-in">
      <div className="section-content values-ultra-simple-content">
        <h2 className="values-ultra-simple-heading">{t.valuesHeading}</h2>
        <div className="values-ultra-simple-row">
          {t.coreValues.map((val, i) => (
            <div className="values-ultra-simple-value" key={i}>{val}</div>
          ))}
        </div>
      </div>
    </section>
  );
}





function ServiceCard({ icon, title, desc }) {
  return (
    <div className="service-card animate-in">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
ServiceCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

function ServicesSection({ t }) {
  return (
    <section id="services" className="section services-ultra-simple animate-in">
      <div className="section-content">
        <h2 className="services-ultra-simple-heading">{t.servicesHeading}</h2>
        <div className="services-ultra-simple-grid">
          {t.services.map((service, i) => (
            <ServiceCard {...service} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}


function SectorsSection({ t }) {
  return (
    <section id="sectors" className="section sectors-section animate-in">
      <div className="sectors-orb-bg" />
      <div className="section-content">
        <h2 className="sectors-heading">{t.sectorsHeading}</h2>
        <div className="sectors-cards-grid">
          {t.sectors.map((sector, idx) => (
            <div className="sector-card" key={idx}>
              <div className="sector-icon">
  {
    [
      "🛍️", // Retail & E-commerce
      "🧴", // Health & Beauty
      "🏢", // Government & Semi-Government
      "🏨", // Hospitality & Tourism
      "🖥️", // Technology & Innovation
      "🫱"  // Non-Profit Sector
    ][idx] || "🛍️"
  }
</div>
              <div className="sector-label">{sector}</div>
            </div>
          ))}
        </div>
        <div className="sectors-desc">{t.sectorsDesc}</div>
      </div>
    </section>
  );
}




function SuccessStoriesSection({ t }) {
  return (
    <section id="success-stories" className="section success-stories-section animate-in">
      <div className="section-content">
        <h2 className="success-stories-heading">
          <span className="star-icon" aria-hidden="true">🌟</span> {t.successStoriesHeading}
        </h2>
        <div className="success-stories-grid">
          {t.successStories.map((story, i) => (
            <div className="success-story-card" key={i}>
              <div className="story-img-wrap">
                <img src={story.img} alt={story.title} className="story-img" />
              </div>
              <div className="story-title">{story.title}</div>
              <div className="story-detail"><b>🎯 {t.lang === "ar" ? "الأهداف" : "Goals"}:</b> {story.goals}</div>
              <div className="story-detail"><b>🛠️ {t.lang === "ar" ? "آلية العمل" : "Approach"}:</b> {story.approach}</div>
              <div className="story-detail"><b>📊 {t.lang === "ar" ? "النتائج" : "Results"}:</b> {story.results}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}









function PartnersSection({ t }) {
  return (
    <section id="partners" className="section partners-ultra-simple animate-in">
      <div className="section-content">
        <h2 className="partners-ultra-simple-heading">{t.partnersHeading}</h2>
        <div className="partners-ultra-simple-desc">{t.partnersDesc}</div>
        <div className="partners-ultra-simple-logos">
          {t.partners.map((p, i) => (
            <div className="partners-ultra-simple-logo animate-in" key={i}>{p}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamMember({ initials, name, role, desc }) {
  return (
    <div className="team-member animate-in">
      <div className="team-initials">{initials}</div>
      <div className="team-name">{name}</div>
      <div className="team-role">{role}</div>
      <div className="team-desc">{desc}</div>
    </div>
  );
}
TeamMember.propTypes = {
  initials: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

function TeamSection({ t }) {
  return (
    <section id="team" className="section team animate-in">
      <div className="section-content">
        <h2>{t.teamHeading}</h2>
        <div className="team-desc">
          {t.teamDesc.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
        </div>
        <div className="team-grid">
          {t.team.map((member, i) => (
            <TeamMember {...member} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function getWorkImg(img) {
  if (!img) return "https://placehold.co/600x400?text=Project+Image";
  if (typeof img === "string") return img;
  if (typeof img === "object" && img !== null) {
    const v = Object.values(img)[0];
    if (typeof v === "string") return v;
  }
  return "https://placehold.co/600x400?text=Project+Image";
}

function WorkCard({ img, title, desc, extra, className = "" }) {
  const imageSrc = getWorkImg(img);
  return (
    <div className={`work-card animate-in ${className}`}>
      <img src={imageSrc} alt={title || "Project"} />
      <div className="work-title">{title}</div>
      <div className="work-desc">{desc}</div>
      <div className="work-extra">{extra}</div>
    </div>
  );
}
WorkCard.propTypes = {
  img: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  extra: PropTypes.string.isRequired,
  className: PropTypes.string,
};

function WorkSection({ t }) {
  const featured = t.works[0];
  const featuredImg = getWorkImg(featured.img);
  return (
    <section id="work" className="section work-modern-section animate-in">
      <div className="section-content">
        <h2 className="work-modern-heading">{t.workHeading}</h2>
        <div className="work-modern-section-desc">{t.workDesc}</div>
        <div className="work-modern-grid">
          <div className="work-modern-featured animate-in">
            <img
              src={featuredImg}
              alt={featured.title || "Featured Project"}
              className="work-modern-featured-img"
            />
            <div className="work-modern-featured-label">{t.workFeatured}</div>
            <div className="work-modern-featured-title">{featured.title}</div>
            <div className="work-modern-featured-desc">{featured.desc}</div>
            <div className="work-modern-featured-extra">{featured.extra}</div>
          </div>
          {t.works.slice(1).map((work, i) => (
            <WorkCard {...work} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}




function BlogSection({ t, lang }) {
  const heading = t.blogsHeading?.[lang] || t.blogsHeading || "";
  const subtitle = t.blogsSubtitle?.[lang] || t.blogsSubtitle || "";
  const blogs = Array.isArray(t.blogs) ? t.blogs : [];

  return (
    <section id="blogs" className="section blogs-section animate-in">
      <div className="section-content">
        <div className="blogs-header">
          <span className="blogs-emoji" aria-hidden>📝</span>
          <h2 className="blogs-heading">{heading}</h2>
        </div>
        {subtitle && <div className="blogs-subtitle">{subtitle}</div>}
        <div className="blogs-grid">
          {blogs.map((blog, i) => (
            <a
              className="blog-card"
              key={i}
              href={blog.href || "#"}
              tabIndex={0}
              style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
            >
              <div className="blog-card-inner">
                <div className="blog-card-title">{typeof blog === "string" ? blog : blog.title}</div>
                {blog.desc && <div className="blog-card-desc">{blog.desc}</div>}
              </div>
              <span className="blog-card-arrow" aria-hidden>→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}














function ContactSection({ t, lang = "ar" }) {
  const isRTL = lang === "ar";
  const dir = isRTL ? "rtl" : "ltr";
  return (
    <section id="contact" className="section contact animate-in" dir={dir}>
      <div className="section-content">
        <h2 className="contact-heading">{t.contactHeading}</h2>
        <div className="contact-content-grid">
          <div className="contact-info-panel">
            <div className="contact-title">{t.contactTitle}</div>
            <div className="contact-row">
              <span className="contact-label">🌐</span>
              <a href="https://fantasydeal.sa" target="_blank" rel="noopener noreferrer">
                fantasydeal.sa
              </a>
            </div>
            <div className="contact-row">
              <span className="contact-label">✉️</span>
              <a href="mailto:fantasydeal.sa@gmail.com">fantasydeal.sa@gmail.com</a>
            </div>
            <div className="contact-row">
              <span className="contact-label">📞</span>
              <a href="https://wa.me/966566221181" target="_blank" rel="noopener noreferrer">
                +966 56 622 1181
              </a>
            </div>
            <div className="contact-row">
              <span className="contact-label">📍</span>
              <span>{t.contactLoc}</span>
            </div>
            <div className="contact-social-row">
              <a href="https://instagram.com/fantasy.deal" className="contact-social" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <span>Instagram</span>
              </a>
              <a href="https://x.com/fantasy.deal" className="contact-social" target="_blank" rel="noopener noreferrer" aria-label="X">
                <span>X</span>
              </a>
              <a href="https://snapchat.com/add/fantasy.deal" className="contact-social" target="_blank" rel="noopener noreferrer" aria-label="Snapchat">
                <span>Snapchat</span>
              </a>
              <a href="https://linkedin.com/company/fantasydeal" className="contact-social" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={e => e.preventDefault()}>
            <input
              type="text"
              placeholder={t.contactFormName}
              required
              aria-label={t.contactFormName}
              className="input-field"
            />
            <input
              type="email"
              placeholder={t.contactFormEmail}
              required
              aria-label={t.contactFormEmail}
              className="input-field"
            />
            <select
              required
              aria-label={t.contactFormSector}
              defaultValue=""
              className="input-field"
            >
              <option value="" disabled>
                {t.contactFormSector || "Sector / Industry"}
              </option>
              {(t.sectorsList || [
                "Retail & eCommerce",
                "Health & Beauty",
                "Government / Semi-Gov",
                "Hospitality & Tourism",
                "Tech & Innovation",
                "Non-profit",
                "Other",
              ]).map((sector, i) => (
                <option value={sector} key={i}>{sector}</option>
              ))}
            </select>
            <textarea
              placeholder={t.contactFormMsg}
              required
              aria-label={t.contactFormMsg}
              className="input-field"
              rows={4}
            />
            <button type="submit" className="header-cta-btn contact-submit-btn">
              {t.contactBtn}
            </button>
          </form>
        </div>
        <div className="contact-map-embed">
          <iframe
            title="Fantasy Deal Riyadh Location"
            src="https://www.google.com/maps?q=24.7136,46.6753&z=15&output=embed"
            width="100%"
            height="220"
            frameBorder="0"
            style={{
              borderRadius: "14px",
              minHeight: "180px",
              background: "#f7f7fa",
              marginTop: 24,
              border: "none"
            }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
function Footer({ t }) {
  return (
    <footer className="footer">
      &copy; {new Date().getFullYear()} <span>Fantasy Deal</span> | {t.footer}
    </footer>
  );
}

export default function App() {
  const [lang, setLang] = useState("en");
  const [moreOpen, setMoreOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreAnim, setMoreAnim] = useState(false);
  const moreMenuRef = useRef();
  const drawerNavRef = useRef();
  const t = TEXT[lang];

  useEffect(() => {
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.style.fontFamily = lang === "ar"
      ? "'Tajawal', 'Cairo', Arial, sans-serif"
      : "inherit";
  }, [lang]);

  return (
    <div className="bg-main" style={{ direction: lang === "ar" ? "rtl" : "ltr" }}>
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        moreOpen={moreOpen}
        setMoreOpen={setMoreOpen}
        moreAnim={moreAnim}
        setMoreAnim={setMoreAnim}
        moreMenuRef={moreMenuRef}
        drawerNavRef={drawerNavRef}
        lang={lang}
        setLang={setLang}
      />
      <main>
       <HeroSectionCustom lang={lang} />
        <AboutSection t={t} />
        <WhySection t={t} />
        <PackagesSection t={t} />
        <ValuesSection t={t} />
        <ServicesSection t={t} />
        <SectorsSection t={t} />
        <SuccessStoriesSection t={t} />
        <PartnersSection t={t} />
        <TeamSection t={t} />
        <WorkSection t={t} />
        <BlogSection t={t} lang={lang} />
        <ContactSection t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
