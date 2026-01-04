import { useEffect, useState, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Facebook, Linkedin, Github, Mail, Phone } from "lucide-react";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);
  const footerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (id) => {
    const scrollToSection = () => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToSection, 100);
    } else {
      scrollToSection();
    }
  };

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowButton(entry.isIntersecting);
      },
      { root: null, threshold: 0.1 }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={footerRef}
      className="relative bg-neutral-900 dark:bg-zinc-950 text-white py-5 px-5 rounded-t-3xl transition-colors duration-500 border-t border-gray-700"
    >
      {showButton && (
        <button
          onClick={scrollToTop}
          title="Back to Top"
          className="absolute -top-6 right-5 bg-gray-600 text-white p-3 rounded-full shadow-lg cursor-pointer animate-bounce"
          style={{ width: '48px', height: '48px' }}
        >
          <i className="fa-solid fa-arrow-up text-xl" />
        </button>
      )}

      <h2 className="text-3xl font-bold text-center mb-6 animate-pulse">Let's Connect</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
        {/* Left */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">
            <i className="fa fa-code text-blue-400" /> Rachit Taneja
          </h3>
          <p className="text-sm text-gray-300">© 2025 All Rights Reserved</p>
        </div>

        {/* Center: Nav */}
        <ul className="flex justify-center gap-6 flex-wrap text-sm uppercase font-medium list-none p-0 m-0">
          <li>
            <span
              className="cursor-pointer hover:text-blue-400"
              onClick={() => handleNavClick('home')}
            >
              Home
            </span>
          </li>
          <li>
            <span
              className="cursor-pointer hover:text-blue-400"
              onClick={() => handleNavClick('skills')}
            >
              Skills
            </span>
          </li>
          <li>
            <Link className="hover:text-blue-400" to="/projects">
              Projects
            </Link>
          </li>
          {/* <li>
            <Link className="hover:text-blue-400" to="/certificates">
              Certificates
            </Link>
          </li> */}
          <li>
            <span
              className="cursor-pointer hover:text-blue-400"
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </span>
          </li>
        </ul>

        <div className="flex justify-center md:justify-end gap-4">
  <a href="https://facebook.com/profile.php?id=61583301752061" target="_blank">
    <Facebook className="w-6 h-6 hover:text-blue-400" />
  </a>

  <a href="https://www.linkedin.com/in/rachit-taneja-a88204323/" target="_blank">
    <Linkedin className="w-6 h-6 hover:text-blue-400" />
  </a>

  <a href="https://github.com/rachit-taneja" target="_blank">
    <Github className="w-6 h-6 hover:text-blue-400" />
  </a>

  <a href="mailto:tanejarachit111@gmail.com">
    <Mail className="w-6 h-6 hover:text-blue-400" />
  </a>

  <a href="tel:+916306475332">
    <Phone className="w-6 h-6 hover:text-blue-400" />
  </a>
</div>

      </div>

      <p className="text-center mt-8 text-sm text-gray-400">
        Made with <i className="fa-solid fa-heart text-red-500 mx-1 animate-ping" /> by Rachit Taneja
      </p>
    </footer>
  );
}
