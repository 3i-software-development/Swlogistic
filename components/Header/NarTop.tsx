"use client";

import { Language, languages } from "@/Utils/language";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setLanguage } from "@/Redux/languageSlice";
import { useAppSelector } from "@/Redux/hook";
import Link from "next/link";
import logo from "@/Asset/image/logo.png";

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

  const getLangShort = (code: string) => {
    switch (code) {
      case "en_US":
        return "EN";
      case "vi_VN":
        return "VI";
      case "zh_CN":
        return "CN";
      default:
        return "EN";
    }
  };

  return (
    <div className="bg-white text-gray-800 py-4 shadow-sm">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          <div className="flex items-center">
            {/* Logo Image */}
            <div className="w-32 h-16 mr-3">
              <Image
                src={logo}
                width={128}
                height={64}
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
            {/* <div>
              <h1 className="text-xl font-bold text-blue-600">PARIS LOGISTICS</h1>
              <p className="text-sm text-yellow-500 border-b border-yellow-500">PROFESSIONAL & LOGISTICS</p>
            </div> */}
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8 mb-4 md:mb-0">
          <Link href="/" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">
            Home
          </Link>
          <div className="relative group">
            <button className="text-gray-800 hover:text-blue-600 font-medium transition-colors flex items-center">
              About
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link href="/gioi-thieu" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About Us</Link>
              <Link href="/gioi-thieu/meeting" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Meeting</Link>
              <Link href="/gioi-thieu/vision-mission" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Vision - Mission</Link>
              <Link href="/gioi-thieu/core-values" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Core Values</Link>
              <Link href="/gioi-thieu/code-conduct" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Code of Business Conduct</Link>
              <Link href="/gioi-thieu/trading-conditions" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Standard Trading Conditions</Link>
              <Link href="/team" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Team</Link>
            </div>
          </div>
          <div className="relative group">
            <button className="text-gray-800 hover:text-blue-600 font-medium transition-colors flex items-center">
              Services
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute md:pl-6 md:pt-8 top-full left-0 mt-2 w-auto bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link href="/services/logistic/customs-clearance" className="block md:w-[285px] px-4 py-2 text-gray-700 hover:bg-gray-100">CUSTOMS CLEARANCE</Link>
              <Link href="/services/logistic/warehouse" className="block md:w-[285px] px-4 py-2 text-gray-700 hover:bg-gray-100">WAREHOUSE</Link>
              <Link href="/services/logistic/inland-haulage" className="block md:w-[285px] px-4 py-2 text-gray-700 hover:bg-gray-100">INLAND HAULAGE</Link>
              <Link href="/services/logistic/temperature-controlled-transport" className="block md:w-[285px] px-4 py-2 text-gray-700 hover:bg-gray-100">TEMPERATURE-CONTROLLED TRANSPORT</Link>
              <Link href="/services/logistic/international-freight-forwarding" className="block md:w-[285px] px-4 py-2 text-gray-700 hover:bg-gray-100">INTERNATIONAL FREIGHT FORWARDING</Link>
              <Link href="/services/logistic/project-cargoes" className="block md:w-[285px] px-4 py-2 text-gray-700 hover:bg-gray-100">PROJECT CARGOES</Link>
            </div>
          </div>
          <Link href="/tin-tuc" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">
            News
          </Link>
          <Link href="/lien-he" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">
            Contact
          </Link>
        </nav>

        {/* Contact Information & Language Selectors */}
        <div className="flex items-center space-x-4">
          {/* Language Selectors */}
          <div className="flex items-center space-x-2">
            <Image
              src="/flags/vn.png"
              width={20}
              height={15}
              alt="Vietnamese"
              className="rounded-sm cursor-pointer"
            />
            <Image
              src="/flags/uk.png"
              width={20}
              height={15}
              alt="English"
              className="rounded-sm cursor-pointer"
            />
          </div>
          
          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-gray-800 font-medium">0937.206.960</span>
            </div>
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-800 font-medium">paris@parislogistics.com.vn</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTop;
