import { useState, useEffect } from "react";
import Styles from "./headerr.module.css";
import { useTheme } from "../DarkLight";

export default function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const { isDark, toggleTheme } = useTheme();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleNavClick = (section) => {
    setActiveLink(section);
    const el = document.getElementById(section);
    el?.scrollIntoView({ behavior: "smooth" });
    setIsMobileOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home", icon: <i className="bx bx-home"></i> },
    { id: "about", label: "About", icon: <i className="bx bx-user"></i> },
    { id: "skills", label: "Skills", icon: <i className="bx bx-code"></i> },
    { id: "services", label: "Services", icon: <i className="bx bx-cog"></i> },
    {
      id: "contact",
      label: "Contact",
      icon: <i className="bx bx-envelope"></i>,
    },
  ];

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);
    const handleScroll = () => {
      const scrollY = window.scrollY + 150;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollY) {
          setActiveLink(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={Styles.header}>
      <a href="#" className={Styles.logo}>
        Portfolio
      </a>

      <div
        className={Styles.hamburger}
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        <i className={`bx ${isMobileOpen ? "bx-x" : "bx-menu"}`}></i>
      </div>

      <nav className={Styles.navbar}>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`${Styles.navItem} ${
              activeLink === item.id ? Styles.active : ""
            }`}
            onClick={() => handleNavClick(item.id)}
            title={item.label}
          >
            <span className={Styles.icon}>{item.icon}</span>
            <span className={Styles.label}>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className={Styles.toggleSwitch} onClick={toggleTheme}>
        <span className={Styles.icon}>☀️</span>
        <span className={Styles.icon}>🌙</span>
        <span
          className={Styles.thumb}
          style={{ left: isDark ? "33px" : "3px" }}
        ></span>
      </div>

      <div
        className={`${Styles.drawer} ${isMobileOpen ? Styles.drawerOpen : ""}`}
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            className={activeLink === item.id ? Styles.active : ""}
            href={`#${item.id}`}
            onClick={() => handleNavClick(item.id)}
          >
            {item.label}
          </a>
        ))}
        <div className={Styles.toggleSwitch} onClick={toggleTheme}>
          <span className={Styles.icon}>☀️</span>
          <span className={Styles.icon}>🌙</span>
          <span
            className={Styles.thumb}
            style={{ left: isDark ? "33px" : "3px" }}
          ></span>
        </div>
      </div>
    </header>
  );
}
