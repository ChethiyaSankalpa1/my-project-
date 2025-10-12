"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { Menu, X, Home, Info, Package, Car, MapPin, Phone } from "lucide-react";
import { useWindowScroll } from "react-use";

const Header = () => {
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navLinksRef = useRef([]);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll-based show/hide header
  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  // GSAP animation for header visibility
useEffect(() => {
  if (!headerRef.current) return;

  gsap.to(headerRef.current, {
    y: isNavVisible ? 0 : -100,
    autoAlpha: isNavVisible ? 1 : 0,
    duration: 0.4,
    ease: "power4.out",
    overwrite: 'auto',
    clearProps: isNavVisible ? '' : 'visibility',
  });
}, [isNavVisible]);



  useGSAP(() => {
    gsap.registerPlugin(SplitText);

    gsap.set(headerRef.current, { y: -80, opacity: 0 });
    gsap.set(navLinksRef.current, { y: 20, opacity: 0 });

    const tl = gsap.timeline();
    tl.to(headerRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    }).to(
      navLinksRef.current,
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(1.7)",
      },
      "-=0.5"
    );
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About Us", path: "/about", icon: Info },
    { name: "Tour Packages", path: "/packages", icon: Package },
    { name: "Car Rent", path: "/cars", icon: Car },
    { name: "Destinations", path: "/destinations", icon: MapPin },
    { name: "Contact", path: "/contact", icon: Phone },
  ];

  const handleNavClick = (index) => {
    gsap.to(navLinksRef.current[index], {
      scale: 0.9,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
    });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Desktop / Tablet - EXACTLY YOUR ORIGINAL DESIGN */}
      <header
        ref={headerRef}
        className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl px-8 py-5 rounded-full backdrop-blur-xl border border-white/10 shadow-lg bg-white/10"
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div
            ref={logoRef}
            className="flex items-center gap-3 cursor-pointer"
          >
            <Link href="/">
              <span className="text-black tracking-wide text-xl font-semibold">
                Dream Tour
              </span>
            </Link>
          </div>

          {/* Nav Links */}
          <nav className="flex items-center space-x-10">
            {navItems.map((item, index) => (
              <Link key={item.name} href={item.path}>
                <button
                  ref={(el) => (navLinksRef.current[index] = el)}
                  onClick={() => handleNavClick(index)}
                  className="relative transition-colors duration-300 text-black/70 hover:text-cyan-400"
                >
                  <span className="text-sm font-medium">{item.name}</span>
                </button>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Header Bar */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/10 bg-white/10 shadow-lg">
        <div className="flex items-center justify-between px-4 py-4">
          <Link href="/">
            <span className="text-black tracking-wide text-lg font-semibold">
              Dream Tour
            </span>
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg hover:bg-white/20 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 backdrop-blur-xl bg-white/95 transition-all duration-500 ${
          mobileMenuOpen 
            ? "opacity-100 visible translate-y-0" 
            : "opacity-0 invisible -translate-y-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20">
          <nav className="flex-1 px-8 py-8">
            <div className="space-y-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link key={item.name} href={item.path}>
                    <button
                      onClick={() => {
                        handleNavClick(index);
                        setMobileMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-white/50 transition-all duration-300"
                    >
                      <Icon className="w-5 h-5 text-cyan-500" />
                      <span className="text-lg font-medium text-black/80">
                        {item.name}
                      </span>
                    </button>
                  </Link>
                );
              })}
            </div>
          </nav>
          
          {/* Mobile Menu Footer */}
          <div className="px-8 pb-8 pt-4 border-t border-black/10">
            <p className="text-center text-sm text-black/60">
              © 2024 Dream Tour Sri Lanka
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Quick Nav - Only 4 most important items */}
      
    </>
  );
};

export default Header;