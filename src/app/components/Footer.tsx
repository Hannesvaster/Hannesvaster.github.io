import { Link } from "react-router";
import { Mail, Linkedin, Twitter } from "lucide-react";
import logo from "../../assets/9a57df3434b48fee512852dc6e2ec8d0c173cb9b.png";

export function Footer() {
  return (
    <footer className="bg-[#0a0f1c] border-t border-white/10 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Turtlo" className="w-10 h-10" />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#41e3a4] to-[#4af0b8] bg-clip-text text-transparent">
                Turtlo
              </span>
            </div>
            <p className="text-gray-400 max-w-md">
              AI lahendused Eesti ettevõtetele. Tugevdame kliendituge, automatiseerime protsesse ja viime sinu äri järgmisele tasemele.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kiirlingid</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#41e3a4] transition-colors">
                  Avaleht
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-[#41e3a4] transition-colors">
                  Teenused
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#41e3a4] transition-colors">
                  Meist
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-[#41e3a4] transition-colors">
                  Hinnakiri
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#41e3a4] transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Ühendus</h3>
            <div className="flex space-x-4">
              <a
                href="mailto:hello@turtlo.com"
                className="hover:text-[#41e3a4] transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#41e3a4] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#41e3a4] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Turtlo – AI lahendused Eesti ettevõtetele</p>
        </div>
      </div>
    </footer>
  );
}