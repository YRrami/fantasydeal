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
    nav: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Work", href: "#work" },
      { label: "Contact", href: "#contact" }
    ],
    dropdown: [
      { label: "Why Choose Us?", href: "#why" },
      { label: "Mission & Vision", href: "#vision" },
      { label: "Core Values", href: "#values" },
      { label: "Services", href: "#services" },
      { label: "Success Partners", href: "#partners" },
      { label: "Team", href: "#team" }
    ],
    coreValues: [
      "Creativity with Purpose", "Transparency & Trust", "Data-Driven Decisions", "Continuous Growth",
      "Client-Centered Solutions", "Collaboration", "Excellence", "Accountability", "Respect"
    ],
    services: [
      { title: "Social Media Management", desc: "Content creation, posting, community management, and page growth strategies.", icon: "📱" },
      { title: "Graphic & Motion Design", desc: "Engaging designs tailored for digital platforms.", icon: "🎨" },
      { title: "Content Creation & Copywriting", desc: "Engaging, relevant, and culturally localized content.", icon: "✍️" },
      { title: "Media Buying", desc: "Paid ad campaigns across Meta, Google, TikTok, and Snapchat—optimized for ROI.", icon: "💡" },
      { title: "Search Engine Optimization (SEO)", desc: "Rank your website on Google and attract organic traffic.", icon: "🔍" },
      { title: "Email Marketing & Automation", desc: "CRM-integrated campaigns that nurture and convert leads.", icon: "📧" },
      { title: "Brand Identity & Strategy", desc: "Build a brand that’s memorable, relevant, and trustworthy.", icon: "🏷️" }
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
    aboutAgency: "Fantasy Deal Agency",
    aboutDesc1: "Riyadh-based. GCC impact.",
    aboutDesc2: "We help brands become digital leaders through",
    aboutDesc3: "brilliant strategy, storytelling & design.",
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
    snap: "Snapchat"
  },
  ar: {
    nav: [
      { label: "الرئيسية", href: "#home" },
      { label: "من نحن", href: "#about" },
      { label: "الأعمال", href: "#work" },
      { label: "تواصل", href: "#contact" }
    ],
    dropdown: [
      { label: "لماذا نحن؟", href: "#why" },
      { label: "الرؤية والرسالة", href: "#vision" },
      { label: "القيم الجوهرية", href: "#values" },
      { label: "خدماتنا", href: "#services" },
      { label: "شركاء النجاح", href: "#partners" },
      { label: "الفريق", href: "#team" }
    ],
    coreValues: [
      "الإبداع الهادف", "الشفافية والثقة", "قرارات مبنية على البيانات", "النمو المستمر",
      "حلول تركّز على العميل", "التعاون", "التميز", "المسؤولية", "الاحترام"
    ],
    services: [
      { title: "إدارة وسائل التواصل الاجتماعي", desc: "إنشاء المحتوى، النشر، إدارة المجتمعات، واستراتيجيات نمو الصفحات.", icon: "📱" },
      { title: "تصميم الجرافيك والموشن", desc: "تصاميم جذابة مخصصة للمنصات الرقمية.", icon: "🎨" },
      { title: "كتابة وإنشاء المحتوى", desc: "محتوى ملائم وجذاب وموّطن ثقافياً.", icon: "✍️" },
      { title: "الإعلانات المدفوعة", desc: "حملات إعلانية عبر Meta, Google, TikTok, Snapchat لتحقق أعلى عائد.", icon: "💡" },
      { title: "تحسين محركات البحث", desc: "ترتيب موقعك على جوجل وجذب زيارات عضوية.", icon: "🔍" },
      { title: "التسويق عبر البريد الإلكتروني", desc: "حملات CRM فعالة لبناء العلاقات وتحويل العملاء.", icon: "📧" },
      { title: "هوية العلامة واستراتيجيتها", desc: "بناء علامة تجارية مميزة وموثوقة وذات صلة.", icon: "🏷️" }
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
    heroTitleA: "تمكين العلامات التجارية",
    heroTitleB: "للنجاح عبر الإنترنت",
    heroSub: "وكالة إبداعية في الرياض، نرتقي بالعلامات التجارية عبر الاستراتيجية، والتصميم، ورواية القصص الرقمية.",
    heroBtnA: "تواصل معنا",
    heroBtnB: "شاهد أعمالنا",
    aboutAgency: "وكالة Fantasy Deal",
    aboutDesc1: "مقرنا الرياض. تأثيرنا خليجي.",
    aboutDesc2: "نساعد العلامات التجارية على الريادة رقمياً عبر",
    aboutDesc3: "استراتيجية مبدعة، قصة ملهمة وتصميم رائع.",
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

function HeroSection({ t }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-orb blue1" />
      <div className="hero-orb blue2" />
      <div className="hero-orb blue3" />
      <div className="hero-orb gold1" />
      <div className="hero-orb gold2" />
      <div className="hero-orb white1" />
      <div className="hero-orb white2" />
      <div className="hero-center animate-in">
        <div className="hero-badge">{t.badge}</div>
        <h1 className="hero-title">
          <span className="big">{t.heroTitleA}</span>
          <span className="big">{t.heroTitleB}</span>
        </h1>
        <div className="hero-subtext">{t.heroSub}</div>
        <div className="hero-cta-main">
          <a href="#contact" className="hero-main-btn">{t.heroBtnA}</a>
          <a href="#work" className="hero-main-btn gold-btn">{t.heroBtnB}</a>
        </div>
      </div>
    </section>
  );
}

function AboutSection({ t }) {
  return (
    <section id="about" className="section about-section animate-in">
      <div className="about-bg-orb" />
      <div className="about-inner">
        <div className="about-left">
          <div className="about-icon-badge">
            <span className="about-icon-main" aria-hidden="true">🚀</span>
          </div>
          <div className="about-signature">{t.aboutSince}</div>
        </div>
        <div className="about-right">
          <h2>
            <span className="about-title-blue">{t.aboutAgency}</span>
          </h2>
          <p className="about-blurb">
            {t.aboutDesc1}<br />
            {t.aboutDesc2} <span className="about-blurb-highlight">{t.aboutDesc3}</span>.<br />
            <span className="about-promise">{t.aboutPromise}</span>
          </p>
          <div className="about-pillars">
            <div className="about-pillar">
              <span className="pillar-icon">🌟</span>
              <div>
                <b>9+</b>
                <div>{t.aboutExp}</div>
              </div>
            </div>
            <div className="about-pillar">
              <span className="pillar-icon">🏆</span>
              <div>
                <b>50+</b>
                <div>{t.aboutBrands}</div>
              </div>
            </div>
            <div className="about-pillar">
              <span className="pillar-icon">👥</span>
              <div>
                <b>10M+</b>
                <div>{t.aboutAud}</div>
              </div>
            </div>
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

function MissionVisionSection({ t }) {
  return (
    <section id="vision" className="section vision mv-section animate-in">
      <div className="mv-bg-orb" />
      <div className="section-content mv-content">
        <h2 className="mv-heading">{t.mvHeading}</h2>
        <div className="mission-vision-cards mv-cards">
          <div className="mv-card mv-mission">
            <div className="mv-card-icon" aria-hidden="true">🎯</div>
            <div className="mv-title">{t.mission}</div>
            <div className="mv-body">{t.missionBody}</div>
          </div>
          <div className="mv-card mv-vision">
            <div className="mv-card-icon blue" aria-hidden="true">🌟</div>
            <div className="mv-title blue">{t.vision}</div>
            <div className="mv-body">{t.visionBody}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

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

function ContactSection({ t }) {
  return (
    <section id="contact" className="section contact animate-in">
      <div className="section-content">
        <h2>{t.contactHeading}</h2>
        <div className="contact-content">
          <div className="contact-details">
            <div>{t.contactTitle}</div>
            <div style={{ margin: "13px 0" }}>{t.contactLoc}</div>
            <a href="mailto:info@fantasydeal.com">info@fantasydeal.com</a>
            <a href="tel:+966xxxxxxxxx">+966 (your number)</a>
            <div className="contact-links">
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">{t.insta}</a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">{t.linkedin}</a>
              <a href="https://snapchat.com/" target="_blank" rel="noopener noreferrer">{t.snap}</a>
            </div>
          </div>
          <form className="contact-form" onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder={t.contactFormName} required aria-label={t.contactFormName} />
            <input type="email" placeholder={t.contactFormEmail} required aria-label={t.contactFormEmail} />
            <textarea placeholder={t.contactFormMsg} required aria-label={t.contactFormMsg} />
            <button type="submit" className="header-cta-btn">{t.contactBtn}</button>
          </form>
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
        <HeroSection t={t} />
        <AboutSection t={t} />
        <WhySection t={t} />
        <MissionVisionSection t={t} />
        <ValuesSection t={t} />
        <ServicesSection t={t} />
        <PartnersSection t={t} />
        <TeamSection t={t} />
        <WorkSection t={t} />
        <ContactSection t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
