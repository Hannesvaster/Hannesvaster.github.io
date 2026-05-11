import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import logo from "../../assets/9a57df3434b48fee512852dc6e2ec8d0c173cb9b.png";

export function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { path: "/", label: "Avaleht" },
    { path: "/features", label: "Teenused" },
    { path: "/about", label: "Meist" },
    { path: "/pricing", label: "Hinnakiri" },
    { path: "/contact", label: "Kontakt" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0f1c]/80 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.img
              src={logo}
              alt="Turtlo"
              className="w-12 h-12"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#41e3a4] to-[#4af0b8] bg-clip-text text-transparent">
              Turtlo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-5 py-2 rounded-lg transition-all ${
                  isActive(link.path)
                    ? "text-[#41e3a4]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/5 rounded-lg border border-[#41e3a4]/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-[#41e3a4] to-[#4af0b8] text-[#0a0f1c] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#41e3a4]/30 transition-all"
            >
              Küsi pakkumist
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-white/10"
          >
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg ${
                  isActive(link.path)
                    ? "text-[#41e3a4] bg-white/5"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block mt-4 px-4 py-3 bg-gradient-to-r from-[#41e3a4] to-[#4af0b8] text-[#0a0f1c] rounded-lg font-semibold text-center"
            >
              Küsi pakkumist
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}