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
  const lastScrollYRef = useRef(0);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Scroll-based show/hide header
  useEffect(() => {
    const scrollDiff = Math.abs(currentScrollY - lastScrollYRef.current);
    
    // Only update if scroll difference is significant (more than 10px)
    if (scrollDiff < 10) {
      return;
    }

    if (currentScrollY === 0) {
      setIsNavVisible(prev => prev !== true ? true : prev);
    } else if (currentScrollY > lastScrollYRef.current && currentScrollY > 80) {
      setIsNavVisible(prev => prev !== false ? false : prev);
    } else if (currentScrollY < lastScrollYRef.current) {
      setIsNavVisible(prev => prev !== true ? true : prev);
    }

    lastScrollYRef.current = currentScrollY;
  }, [currentScrollY]);

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
    { name: "Contact Us", path: "/contact", icon: Phone },
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

  // Swipe to close mobile menu
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      // Swiped up - close menu
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop / Tablet - EXACTLY YOUR ORIGINAL DESIGN */}
      <header
        ref={headerRef}
        className="hidden md:flex fixed top-0 left-0 right-0 z-50 px-8 py-4 backdrop-blur-xl border-b border-gray-200 shadow-sm bg-white/90"
      >
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <div ref={logoRef} className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="J Tours Logo" 
                className="h-20 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">J Tours</span>
                <span className="text-xs text-gray-600">Explore Sri Lanka</span>
              </div>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link key={item.name} href={item.path}>
                <button
                  ref={(el) => (navLinksRef.current[index] = el)}
                  onClick={() => handleNavClick(index)}
                  className="relative transition-colors duration-300 text-gray-700 hover:text-orange-500"
                >
                  <span className="text-sm font-medium">{item.name}</span>
                </button>
              </Link>
            ))}
          </nav>

          {/* Book Now Button */}
          <Link href="/book">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-md font-medium transition-all duration-300 transform hover:scale-105 shadow-md">
              BOOK NOW
            </button>
          </Link>
        </div>
      </header>

      {/* Mobile Header Bar */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/10 bg-white/90 shadow-lg">
        <div className="flex items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="J Tours Logo" 
              className="h-16 w-auto"
            />
            <span className="text-lg font-bold text-gray-900">J Tours</span>
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
        className={`md:hidden fixed inset-0 z-[60] backdrop-blur-xl bg-white/95 transition-all duration-500 ${
          mobileMenuOpen 
            ? "opacity-100 visible translate-y-0" 
            : "opacity-0 invisible -translate-y-full"
        }`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Swipe Indicator */}
        {mobileMenuOpen && (
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-1.5 bg-gray-400 rounded-full"></div>
        )}
        
        <div className="flex flex-col h-full pt-20">
          <nav className="flex-1 px-8 py-8">
            <div className="space-y-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link 
                    key={item.name} 
                    href={item.path}
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
                  </Link>
                );
              })}
            </div>
          </nav>
          
          {/* Mobile Menu Footer */}
          <div className="px-8 pb-8 pt-4 border-t border-black/10">
            <p className="text-center text-sm text-black/60">
              © 2024 J Tours Sri Lanka
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Quick Nav - Only 4 most important items */}
      
    </>
  );
};

export default Header;