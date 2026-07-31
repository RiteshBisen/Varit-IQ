"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Layers, Menu, X } from "lucide-react";

interface NavbarProps {
  theme: "light" | "dark";
  onThemeToggle: () => void;
  onHomeClick: () => void;
  onAboutClick: () => void;
  onSupportClick: () => void;
  onContactClick: () => void;
  currentPage: "home" | "about" | "quiz" | "results";
}

export default function Navbar({
  theme,
  onThemeToggle,
  onHomeClick,
  onAboutClick,
  onSupportClick,
  onContactClick,
  currentPage,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-30 w-full bg-background border-b border-border shadow-sm transition-colors duration-200">
      <div className="w-full px-4 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand/Logo */}
        <button
          onClick={onHomeClick}
          className="flex items-center gap-4 group focus:outline-none cursor-pointer"
        >
          <div className="w-11 h-11 bg-brutal-blue rounded-xl flex items-center justify-center transition-all duration-200 shadow-sm shrink-0">
            <Layers className="w-6 h-6 text-white" />
          </div>
          <div className="text-left">
            <span className="font-display font-semibold text-xl sm:text-2xl tracking-tight block leading-none text-foreground">
              Varit IQ
            </span>
            <span className="text-[10px] tracking-wide text-muted hidden sm:block font-medium mt-1">
              Truth & Intelligence Synergy
            </span>
          </div>
        </button>

        {/* Navigation Items (Desktop) */}
        <div className="hidden md:flex items-center gap-2 font-display">
          <button
            onClick={onHomeClick}
            className={`text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-200 cursor-pointer
              ${
                currentPage === "home"
                  ? "bg-brutal-blue/10 text-brutal-blue font-bold"
                  : "bg-transparent text-foreground hover:bg-accent-light"
              }`}
          >
            Home
          </button>
          
          <button
            onClick={onAboutClick}
            className={`text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-200 cursor-pointer
              ${
                currentPage === "about"
                  ? "bg-brutal-blue/10 text-brutal-blue font-bold"
                  : "bg-transparent text-foreground hover:bg-accent-light"
              }`}
          >
            About
          </button>

          <button
            onClick={onSupportClick}
            className="text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-200 cursor-pointer bg-transparent text-foreground hover:bg-accent-light"
          >
            Support
          </button>

          <button
            onClick={onContactClick}
            className="text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-200 cursor-pointer bg-transparent text-foreground hover:bg-accent-light"
          >
            Contact
          </button>

          {/* Vertical Divider */}
          <div className="w-[1px] h-8 bg-border mx-2" />

          {/* Theme Toggle Button */}
          <button
            onClick={onThemeToggle}
            className="w-11 h-11 rounded-full flex items-center justify-center bg-transparent text-foreground hover:bg-accent-light transition-all duration-200 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <Moon className="w-5.5 h-5.5 text-foreground" />
            ) : (
              <Sun className="w-5.5 h-5.5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onThemeToggle}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent text-foreground hover:bg-accent-light transition-all duration-200 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <Moon className="w-5.5 h-5.5 text-foreground" />
            ) : (
              <Sun className="w-5.5 h-5.5 text-foreground" />
            )}
          </button>
          
          <button
            onClick={() => setIsOpen(true)}
            className="w-10 h-10 rounded-xl border border-border bg-card flex items-center justify-center text-foreground hover:bg-accent-light transition-all duration-200 cursor-pointer"
            aria-label="Open Menu"
          >
            <Menu className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden cursor-pointer"
            />

            {/* Sidebar drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] max-w-[85vw] bg-white dark:bg-[#2B2B2B] border-l border-border z-50 flex flex-col p-6 shadow-2xl md:hidden font-display"
            >
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-4 border-b border-border/40 mb-6">
                <span className="font-semibold text-base text-foreground tracking-tight">Navigation</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-full text-muted hover:bg-accent-light hover:text-foreground transition-all flex items-center justify-center cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

              {/* Navigation links stack */}
              <div className="flex flex-col gap-3 flex-1">
                <button
                  onClick={() => {
                    onHomeClick();
                    setIsOpen(false);
                  }}
                  className={`text-left text-sm font-semibold py-3 px-4 rounded-xl transition-all duration-200 cursor-pointer
                    ${
                      currentPage === "home"
                        ? "bg-brutal-blue/10 text-brutal-blue font-bold"
                        : "bg-transparent text-foreground hover:bg-accent-light"
                    }`}
                >
                  Home
                </button>

                <button
                  onClick={() => {
                    onAboutClick();
                    setIsOpen(false);
                  }}
                  className={`text-left text-sm font-semibold py-3 px-4 rounded-xl transition-all duration-200 cursor-pointer
                    ${
                      currentPage === "about"
                        ? "bg-brutal-blue/10 text-brutal-blue font-bold"
                        : "bg-transparent text-foreground hover:bg-accent-light"
                    }`}
                >
                  About
                </button>

                <button
                  onClick={() => {
                    onSupportClick();
                    setIsOpen(false);
                  }}
                  className="text-left text-sm font-semibold py-3 px-4 rounded-xl bg-transparent text-foreground hover:bg-accent-light transition-all duration-200 cursor-pointer"
                >
                  Support
                </button>

                <button
                  onClick={() => {
                    onContactClick();
                    setIsOpen(false);
                  }}
                  className="text-left text-sm font-semibold py-3 px-4 rounded-xl bg-transparent text-foreground hover:bg-accent-light transition-all duration-200 cursor-pointer"
                >
                  Contact
                </button>
              </div>

              {/* Theme Selector inside drawer footer */}
              <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                <span className="text-xs font-semibold text-muted">Theme Preference</span>
                <button
                  onClick={onThemeToggle}
                  className="flex items-center gap-2 py-2 px-4 border border-border rounded-full hover:bg-accent-light text-foreground text-xs font-semibold transition-all cursor-pointer"
                >
                  {theme === "light" ? (
                    <>
                      <Moon className="w-4 h-4" />
                      <span>Dark</span>
                    </>
                  ) : (
                    <>
                      <Sun className="w-4 h-4" />
                      <span>Light</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
