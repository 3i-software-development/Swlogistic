"use client";

import { Language, languages } from "@/utils/language";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setLanguage } from "@/Redux/languageSlice";
import { useAppSelector } from "@/Redux/hook";
import Link from "next/link";
import logo from "@/assets/image/logo.png";
import vietnamFlag from "@/assets/image/vietnam.png";
import ukFlag from "@/assets/image/united-kingdom.png";

const NavTop = () => {
  const dispatch = useDispatch();
  
  const currentLanguage = useAppSelector(
    (state) => state.language.selectedLanguage
  );

  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (language: Language) => {
    dispatch(setLanguage(language));
    setIsLanguageDropdownOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsLanguageDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-white text-gray-800 py-4 shadow-sm border-b-8 border-gray-200 ">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Section - Left */}
        <div className="flex items-center">
          <div className="w-32 h-16 mr-3">
            <Image
              src={logo}
              width={128}
              height={64}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Navigation Links - Center */}
        <nav className="hidden lg:flex items-center space-x-8 mt-8">
          <Link href="/" className="text-[#0088cc] hover:text-yellow-500 transition-colors text-[24px] font-normal font-roboto-condensed">
            Home
          </Link>
          <div className="relative group">
            <button className="text-[#0088cc] hover:text-yellow-500 transition-colors flex items-center text-[24px] font-normal font-roboto-condensed">
              About
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link href="/about" className="block px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase">About Us</Link>
              <Link href="/about/meeting" className="block px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase">Meeting</Link>
              <Link href="/about/vision-mission" className="block px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase">Vision - Mission</Link>
              <Link href="/about/core-values" className="block px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase">Core Values</Link>
              <Link href="/about/code-conduct" className="block px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase">Code of Business Conduct</Link>
              <Link href="/about/trading-conditions" className="block px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase">Standard Trading Conditions</Link>
            </div>
          </div>
          <div className="relative group">
            <button className="text-[#0088cc] hover:text-yellow-500 transition-colors flex items-center text-[24px] font-normal font-roboto-condensed">
              Services
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-auto bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link href="/services/logistics/customs-clearance" className="block md:w-[285px] px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase">Customs Clearance</Link>
              <Link href="/services/logistics/warehouse" className="block md:w-[285px] px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase">Warehouse</Link>
              <Link href="/services/logistics/inland-haulage" className="block md:w-[285px] px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase">Inland Haulage</Link>
              <Link href="/services/logistics/temperature-controlled-transport" className="block md:w-[285px] px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase">Temperature-Controlled Transport</Link>
              <Link href="/services/logistics/international-freight-forwarding" className="block md:w-[285px] px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase">International Freight Forwarding</Link>
              <Link href="/services/logistics/project-cargoes" className="block md:w-[285px] px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase">Project Cargoes</Link>
            </div>
          </div>
          <Link href="/news" className="text-[#0088cc] hover:text-yellow-500 transition-colors text-[24px] font-normal font-roboto-condensed">
            News
          </Link>
          <div className="relative group">
            <button className="text-[#0088cc] hover:text-yellow-500 transition-colors flex items-center text-[24px] font-normal font-roboto-condensed">
              Library
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link href="/library/share" className="block px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase">Share</Link>
              <Link href="/library/legal-documents" className="block px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase">Legal Documents</Link>
              <Link href="/library/useful-websites" className="block px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase">Useful Websites</Link>
              <Link href="/library/reference-documents" className="block px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase">Reference CVs, Emails, Documents</Link>
              <Link href="/library/qa" className="block px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase">Q & A</Link>
            </div>
          </div>
          <Link href="/careers" className="text-[#0088cc] hover:text-yellow-500 transition-colors text-[24px] font-normal font-roboto-condensed">
            Job
          </Link>
          <Link href="/contact" className="text-[#0088cc] hover:text-yellow-500 transition-colors text-[24px] font-normal font-roboto-condensed">
            Contact
          </Link>
        </nav>

        {/* Right Side - Language Selector and Search */}
        <div className="flex items-center space-x-4 mt-8">
          {/* Language Selector */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleLanguageDropdown}
              className="flex items-center space-x-1 text-gray-800 hover:text-yellow-500 transition-colors"
            >
              <Image
                src={vietnamFlag}
                width={30}
                height={20}
                alt="Vietnamese"
                className="rounded-sm"
              />
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isLanguageDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-32 bg-white shadow-lg rounded-md z-50">
                <button
                  onClick={() => handleLanguageChange(languages[0])}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                >
                  <div className="flex items-center space-x-2">
                    <Image src={vietnamFlag} width={16} height={12} alt="Vietnamese" />
                    <span>Tiếng Việt</span>
                  </div>
                </button>
                <button
                  onClick={() => handleLanguageChange(languages[1])}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                >
                  <div className="flex items-center space-x-2">
                    <Image src={ukFlag} width={16} height={12} alt="English" />
                    <span>English</span>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Search Icon */}
          <button className="text-gray-800 hover:text-yellow-500 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        {/* Contact Information - Center */}
        <div className="hidden lg:flex items-center space-x-6 mt-8">
          <div className="flex items-center space-x-2">
            <span className="text-[#0088cc] text-[20px] font-medium">0937.206.960</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-700 text-[20px] font-medium">kto@ktologistics.com.vn</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTop;
