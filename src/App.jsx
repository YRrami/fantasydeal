import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./App.css";
import logo from './1.png';

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" }
];
const DROPDOWN_LINKS = [
  { label: "Why Choose Us?", href: "#why" },
  { label: "Mission & Vision", href: "#vision" },
  { label: "Core Values", href: "#values" },
  { label: "Services", href: "#services" },
  { label: "Success Partners", href: "#partners" },
  { label: "Team", href: "#team" }
];
const CORE_VALUES = [
  "Creativity with Purpose",
  "Transparency & Trust",
  "Data-Driven Decisions",
  "Continuous Growth",
  "Client-Centered Solutions",
  "Collaboration",
  "Excellence",
  "Accountability",
  "Respect"
];
const SERVICES = [
  { title: "Social Media Management", desc: "Content creation, posting, community management, and page growth strategies.", icon: "📱" },
  { title: "Graphic & Motion Design", desc: "Engaging designs tailored for digital platforms.", icon: "🎨" },
  { title: "Content Creation & Copywriting", desc: "Engaging, relevant, and culturally localized content.", icon: "✍️" },
  { title: "Media Buying", desc: "Paid ad campaigns across Meta, Google, TikTok, and Snapchat—optimized for ROI.", icon: "💡" },
  { title: "Search Engine Optimization (SEO)", desc: "Rank your website on Google and attract organic traffic.", icon: "🔍" },
  { title: "Email Marketing & Automation", desc: "CRM-integrated campaigns that nurture and convert leads.", icon: "📧" },
  { title: "Brand Identity & Strategy", desc: "Build a brand that’s memorable, relevant, and trustworthy.", icon: "🏷️" }
];
const PARTNERS = [
  "eCommerce Market",
  "Al Riyadh Hospital",
  "AlMajal Schools",
  "TasteHub F&B",
  "HealthTechX",
  "Mobit App",
  "Qode Medical"
];
const TEAM = [
  { initials: "RA", name: "Rami Al-Qassim", role: "CEO", desc: "Vision, leadership, and 14+ years of marketing experience." },
  { initials: "DF", name: "Dana Farouk", role: "Head of Creative", desc: "Award-winning designer and visual brand builder." },
  { initials: "MA", name: "Mohammed Ameen", role: "Growth Lead", desc: "Analytics, campaigns, and digital growth specialist." },
  { initials: "LK", name: "Lina Khaled", role: "Copy & Social", desc: "Storytelling, Arabic/English content, and campaigns." }
];
const WORKS = [
  { img: "https://placehold.co/600x400?text=Project+Image", title: "Zahra Luxury - Brand Identity", desc: "Full visual identity and online launch for an award-winning luxury florist.", extra: "Branding · Campaign · Launch" },
  { img: "https://placehold.co/600x400?text=Project+Image", title: "Mobit App Campaign", desc: "Viral launch and growth strategy for the fastest GCC mobility app.", extra: "Social · Ads" },
  { img: "https://placehold.co/600x400?text=Project+Image", title: "Qode Medical Platform", desc: "Brand design & digital presence for B2B MedTech startup.", extra: "Web · Identity" },
  { img: "./section.png", title: "AlMajal Schools", desc: "Social storytelling and campaigns for K-12 leader.", extra: "Social · Content" },
  { img: "https://placehold.co/600x400?text=Project+Image", title: "TasteHub F&B Group", desc: "Branding, content and paid media for hospitality group.", extra: "Brand · Ads" }
];

function useIsMobile(breakpoint = 950) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);
  return isMobile;
}

// --------------------------------------
// Header Navigation (Responsive)
// --------------------------------------
function Header({
  menuOpen,
  setMenuOpen,
  moreOpen,
  setMoreOpen,
  moreAnim,
  setMoreAnim,
  moreMenuRef,
  drawerNavRef
}) {
  const isMobile = useIsMobile();

  // Only one menu open at a time
  useEffect(() => {
    if (moreOpen) setMenuOpen(false);
    if (menuOpen) setMoreOpen(false);
  }, [moreOpen, menuOpen, setMenuOpen, setMoreOpen]);

  // Dropdown: close when click outside or Escape
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

  // Animate dropdown open
  useEffect(() => {
    if (moreOpen) {
      setMoreAnim(true);
      setTimeout(() => setMoreAnim(false), 400);
      if (moreMenuRef.current) moreMenuRef.current.focus();
    }
  }, [moreOpen, setMoreAnim, moreMenuRef]);

  // Mobile drawer: focus trap and escape close
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

  // Keyboard handlers
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
      <div className="header-main-inner">
        <div className="logo-img">
          <img src={logo} alt="Fantasy Deal Logo" />
        </div>
        <nav className="header-nav" role="navigation" aria-label="Main Navigation">
          {NAV_LINKS.map(l => (
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
              More <span style={{ fontSize: "1.2em", marginLeft: 3 }}>▼</span>
            </button>
            <div
              className={`dropdown-menu${moreOpen || moreAnim ? " animated" : ""}${moreOpen ? " open" : ""}`}
              ref={moreMenuRef}
              aria-hidden={!moreOpen}
              tabIndex={-1}
              role="menu"
              id="dropdown-menu"
              style={{ display: moreOpen || moreAnim ? "flex" : "none" }}
              onAnimationEnd={() => !moreOpen && setMoreAnim(false)}
            >
              {DROPDOWN_LINKS.map(link => (
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
        <div className="header-actions">
          {!isMobile && (
            <a href="#contact" className="header-cta-btn" onClick={() => { setMenuOpen(false); setMoreOpen(false); }}>Contact Us</a>
          )}
        </div>
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
          {NAV_LINKS.concat(DROPDOWN_LINKS).map(l => (
            <a href={l.href} key={l.href} tabIndex={0} onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <a href="#contact" className="header-cta-btn drawer-cta" tabIndex={0} onClick={() => setMenuOpen(false)}>Contact Us</a>
        </nav>
      )}
    </header>
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

function HeroSection() {
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
        <div className="hero-badge">Your Strategic Partner in Digital Growth</div>
        <h1 className="hero-title">
          <span className="big">Empowering Brands </span>
          <span className="big">to Win Online</span>
        </h1>
        <div className="hero-subtext">
          Creative agency in Riyadh, elevating brands through strategy, design, and digital storytelling.
        </div>
        <div className="hero-cta-main">
          <a href="#contact" className="hero-main-btn">Let’s Talk</a>
          <a href="#work" className="hero-main-btn gold-btn">See Our Work</a>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section about-section animate-in">
      <div className="about-bg-orb" />
      <div className="about-inner">
        <div className="about-left">
          <div className="about-icon-badge">
            <span className="about-icon-main" aria-hidden="true">🚀</span>
          </div>
          <div className="about-signature">Premium Since 2016</div>
        </div>
        <div className="about-right">
          <h2>
            <span className="about-title-blue">Fantasy Deal Agency</span> 
          </h2>
          <p className="about-blurb">
            Riyadh-based. GCC impact.<br />
            We help brands become digital leaders through <span className="about-blurb-highlight">brilliant strategy, storytelling & design</span>.<br />
            <span className="about-promise">Measurable results. Memorable presence.</span>
          </p>
          <div className="about-pillars">
            <div className="about-pillar">
              <span className="pillar-icon">🌟</span>
              <div>
                <b>9+</b>
                <div>Years Experience</div>
              </div>
            </div>
            <div className="about-pillar">
              <span className="pillar-icon">🏆</span>
              <div>
                <b>50+</b>
                <div>Brands Launched</div>
              </div>
            </div>
            <div className="about-pillar">
              <span className="pillar-icon">👥</span>
              <div>
                <b>10M+</b>
                <div>Audience Reached</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section id="why" className="section why-section animate-in">
      <div className="why-bg-orb" />
      <div className="why-cards-wrap">
        <h2 className="why-header">
          <span className="why-header-icon">✨</span>
          Why Choose <span className="why-header-blue">Fantasy Deal?</span>
        </h2>
        <div className="why-cards-list">
          <div className="why-card">
            <span className="why-card-icon">🎯</span>
            <div>
              <div className="why-card-title">Strategic, Not Generic</div>
              <div className="why-card-desc">
                Every brand gets a <span>tailored digital blueprint</span>—no copy-paste campaigns.
              </div>
            </div>
          </div>
          <div className="why-card">
            <span className="why-card-icon">⚡</span>
            <div>
              <div className="why-card-title">Creativity Meets Data</div>
              <div className="why-card-desc">
                Designs and stories built on insight, not just aesthetics.
              </div>
            </div>
          </div>
          <div className="why-card">
            <span className="why-card-icon">🤝</span>
            <div>
              <div className="why-card-title">Partners, Not Just Providers</div>
              <div className="why-card-desc">
                We grow with our clients—<span>your wins are our wins</span>.
              </div>
            </div>
          </div>
          <div className="why-card">
            <span className="why-card-icon">📈</span>
            <div>
              <div className="why-card-title">Performance Obsessed</div>
              <div className="why-card-desc">
                Clear reporting, real ROI, and <span>growth you can measure</span>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionVisionSection() {
  return (
    <section id="vision" className="section vision mv-section animate-in">
      <div className="mv-bg-orb" />
      <div className="section-content mv-content">
        <h2 className="mv-heading">Our Mission &amp; Vision</h2>
        <div className="mission-vision-cards mv-cards">
          <div className="mv-card mv-mission">
            <div className="mv-card-icon" aria-hidden="true">🎯</div>
            <div className="mv-title">Mission</div>
            <div className="mv-body">
              To empower businesses with modern marketing strategies that inspire audiences and drive tangible results.
            </div>
          </div>
          <div className="mv-card mv-vision">
            <div className="mv-card-icon blue" aria-hidden="true">🌟</div>
            <div className="mv-title blue">Vision</div>
            <div className="mv-body">
              To become a leading digital marketing agency in the GCC, known for creativity, performance, and client success.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section id="values" className="section values-ultra-simple-section animate-in">
      <div className="section-content values-ultra-simple-content">
        <h2 className="values-ultra-simple-heading">Our Core Values</h2>
        <div className="values-ultra-simple-row">
          {CORE_VALUES.map((val, i) => (
            <div className="values-ultra-simple-value" key={i}>{val}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="section services-ultra-simple animate-in">
      <div className="section-content">
        <h2 className="services-ultra-simple-heading">Our Services</h2>
        <div className="services-ultra-simple-grid">
          {SERVICES.map((service, i) => (
            <ServiceCard {...service} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  return (
    <section id="partners" className="section partners-ultra-simple animate-in">
      <div className="section-content">
        <h2 className="partners-ultra-simple-heading">Success Partners</h2>
        <div className="partners-ultra-simple-desc">
          We’ve worked with leading brands and local heroes across multiple industries—from eCommerce to healthcare, education, hospitality, and more.
        </div>
        <div className="partners-ultra-simple-logos">
          {PARTNERS.map((p, i) => (
            <div className="partners-ultra-simple-logo animate-in" key={i}>{p}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section id="team" className="section team animate-in">
      <div className="section-content">
        <h2>Meet the Team</h2>
        <div className="team-desc">
          Our creative and strategic minds bring together a passion for design, content, and analytics.<br />
          Every team member is committed to helping you grow your brand with care and creativity.
        </div>
        <div className="team-grid">
          {TEAM.map((member, i) => (
            <TeamMember {...member} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkCard({ img, title, desc, extra, className = "" }) {
  const imageSrc = img && img.trim() !== "" ? img.replace(/^\.\//, "/public/") : "https://placehold.co/600x400?text=Project+Image";
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
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  extra: PropTypes.string.isRequired,
  className: PropTypes.string,
};

function WorkSection() {
  return (
    <section id="work" className="section work-modern-section animate-in">
      <div className="section-content">
        <h2 className="work-modern-heading">Our Work</h2>
        <div className="work-modern-section-desc">
          Check out some of the projects we’ve brought to life—from viral campaigns to beautiful social media grids and top-performing ads.
        </div>
        <div className="work-modern-grid">
          <div className="work-modern-featured animate-in">
            <img
              src={WORKS[0].img && WORKS[0].img.trim() !== "" ? WORKS[0].img.replace(/^\.\//, "/public/") : "https://placehold.co/900x480?text=Project+Image"}
              alt={WORKS[0].title || "Featured Project"}
              className="work-modern-featured-img"
            />
            <div className="work-modern-featured-label">Featured</div>
            <div className="work-modern-featured-title">{WORKS[0].title}</div>
            <div className="work-modern-featured-desc">{WORKS[0].desc}</div>
            <div className="work-modern-featured-extra">{WORKS[0].extra}</div>
          </div>
          {WORKS.slice(1).map((work, i) => (
            <WorkCard {...work} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="section contact animate-in">
      <div className="section-content">
        <h2>Contact Us</h2>
        <div className="contact-content">
          <div className="contact-details">
            <div>Let’s bring your vision to life!</div>
            <div style={{ margin: "13px 0" }}>📍 Riyadh, Saudi Arabia</div>
            <a href="mailto:info@fantasydeal.com">info@fantasydeal.com</a>
            <a href="tel:+966xxxxxxxxx">+966 (your number)</a>
            <div className="contact-links">
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://snapchat.com/" target="_blank" rel="noopener noreferrer">Snapchat</a>
            </div>
          </div>
          <form className="contact-form" onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Name" required aria-label="Name" />
            <input type="email" placeholder="Email" required aria-label="Email" />
            <textarea placeholder="Your message..." required aria-label="Your message" />
            <button type="submit" className="header-cta-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      &copy; {new Date().getFullYear()} <span>Fantasy Deal</span> | Crafted in Riyadh. All Rights Reserved.
    </footer>
  );
}

export default function App() {
  const [moreOpen, setMoreOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreAnim, setMoreAnim] = useState(false);
  const moreMenuRef = useRef();
  const drawerNavRef = useRef();

  return (
    <div className="bg-main">
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        moreOpen={moreOpen}
        setMoreOpen={setMoreOpen}
        moreAnim={moreAnim}
        setMoreAnim={setMoreAnim}
        moreMenuRef={moreMenuRef}
        drawerNavRef={drawerNavRef}
      />
      <main>
        <HeroSection />
        <AboutSection />
        <WhySection />
        <MissionVisionSection />
        <ValuesSection />
        <ServicesSection />
        <PartnersSection />
        <TeamSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
