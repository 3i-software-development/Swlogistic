"use client";

import { Language, languages } from "@/Utils/language";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setLanguage } from "@/Redux/languageSlice";
import { useAppSelector } from "@/Redux/hook";
import Link from "next/link";
import logo from "@/Asset/image/logo.png";
import vietnamFlag from "@/Asset/image/vietnam.png";
import ukFlag from "@/Asset/image/united-kingdom.png";

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
        <nav className="hidden lg:flex items-center space-x-8">
          <Link href="/" className="text-gray-800 hover:text-yellow-500 font-semibold transition-colors text-sm">
            TRANG CHỦ
          </Link>
          <div className="relative group">
            <button className="text-gray-800 hover:text-yellow-500 font-semibold transition-colors flex items-center text-sm">
              GIỚI THIỆU
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link href="/gioi-thieu" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">About Us</Link>
              <Link href="/gioi-thieu/meeting" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">Meeting</Link>
              <Link href="/gioi-thieu/vision-mission" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">Vision - Mission</Link>
              <Link href="/gioi-thieu/core-values" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">Core Values</Link>
              <Link href="/gioi-thieu/code-conduct" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">Code of Business Conduct</Link>
              <Link href="/gioi-thieu/trading-conditions" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">Standard Trading Conditions</Link>
              <Link href="/team" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">Our Team</Link>
            </div>
          </div>
          <div className="relative group">
            <button className="text-gray-800 hover:text-yellow-500 font-semibold transition-colors flex items-center text-sm">
              DỊCH VỤ
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute md:pl-6 md:pt-8 top-full left-0 mt-2 w-auto bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link href="/services/logistic/customs-clearance" className="block md:w-[285px] px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">CUSTOMS CLEARANCE</Link>
              <Link href="/services/logistic/warehouse" className="block md:w-[285px] px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">WAREHOUSE</Link>
              <Link href="/services/logistic/inland-haulage" className="block md:w-[285px] px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">INLAND HAULAGE</Link>
              <Link href="/services/logistic/temperature-controlled-transport" className="block md:w-[285px] px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">TEMPERATURE-CONTROLLED TRANSPORT</Link>
              <Link href="/services/logistic/international-freight-forwarding" className="block md:w-[285px] px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">INTERNATIONAL FREIGHT FORWARDING</Link>
              <Link href="/services/logistic/project-cargoes" className="block md:w-[285px] px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">PROJECT CARGOES</Link>
            </div>
          </div>
          <Link href="/tin-tuc" className="text-gray-800 hover:text-yellow-500 font-semibold transition-colors text-sm">
            TIN TỨC
          </Link>
          <Link href="/thu-vien" className="text-gray-800 hover:text-yellow-500 font-semibold transition-colors text-sm">
            THƯ VIỆN
          </Link>
          <Link href="/bao-gia" className="text-gray-800 hover:text-yellow-500 font-semibold transition-colors text-sm">
            BÁO GIÁ
          </Link>
        </nav>

        {/* Right Side - Contact Button, Language, Search */}
        <div className="flex items-center space-x-4">
          {/* Contact Button */}
          <Link 
            href="/lien-he" 
            className="bg-yellow-500 text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200 text-sm"
          >
            LIÊN HỆ
          </Link>

          {/* Language Selector */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleLanguageDropdown}
              className="flex items-center space-x-1 text-gray-800 hover:text-yellow-500 transition-colors"
            >
              <Image
                src={vietnamFlag}
                width={20}
                height={15}
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
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavTop;
