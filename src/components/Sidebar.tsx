import React from "react";
import { navlinks } from "../data/navlinks";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  showContact?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose, showContact = true }) => {
  return (
    <>
      {/* Fullscreen overlay */}
      <div
        className={`fixed inset-0 z-50 bg-white transition-opacity duration-300 flex flex-col ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ minHeight: '100dvh' }}
      >
        {/* Close icon */}
        <button
          className="absolute top-6 left-6 text-black text-3xl focus:outline-none"
          onClick={onClose}
          aria-label="Close menu"
        >
          &times;
        </button>
        {/* Centered nav links */}
        <nav className="flex flex-1 flex-col justify-center items-center gap-8">
          {navlinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[var(--brown-var,#A87634)] text-xl sm:text-2xl font-inter font-semibold tracking-wide hover:bg-[var(--brown-var,#A87634)] hover:text-white focus:bg-[var(--brown-var,#A87634)] focus:text-white transition-colors duration-200 text-center px-8 py-3 rounded-xl"
              onClick={onClose}
            >
              {link.name}
            </a>
          ))}
          {showContact && (
            <a
              href="#contact"
              className="mt-4 bg-[var(--brown-var,#A87634)] text-white px-8 py-3 rounded-lg font-medium text-lg font-inter shadow hover:scale-105 hover:-rotate-1.5 hover:shadow-lg focus:scale-105 focus:-rotate-1.5 focus:shadow-lg transition-transform duration-200"
              onClick={onClose}
            >
              Contact Us
            </a>
          )}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
