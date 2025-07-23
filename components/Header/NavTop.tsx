"use client";

import { Language, languages } from "@/utils/language";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setLanguage } from "@/Redux/languageSlice";
import { useAppSelector } from "@/Redux/hook";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import logo from "@/assets/image/logo.png";

const NavTop = () => {
  const dispatch = useDispatch();
  const { t, changeLanguage, currentLanguage } = useTranslation();
  
  const currentLanguageRedux = useAppSelector(
    (state) => state.language.selectedLanguage
  );

  // Sync translation hook with Redux state
  useEffect(() => {
    if (currentLanguageRedux) {
      // Convert Redux language format to translation hook format
      const languageMap: { [key: string]: 'vi' | 'en' | 'zh' } = {
        'vi_VN': 'vi',
        'en_US': 'en',
        'zh_CN': 'zh'
      };
      
      const mappedLanguage = languageMap[currentLanguageRedux.code] || 'vi';
      if (mappedLanguage !== currentLanguage) {
        changeLanguage(mappedLanguage);
      }
    }
  }, [currentLanguageRedux, currentLanguage, changeLanguage]);

  // Handle language change from translation hook
  const handleLanguageChange = (language: 'vi' | 'en' | 'zh') => {
    changeLanguage(language);
    
    // Also update Redux state
    const reverseLanguageMap: { [key: string]: Language } = {
      'vi': languages[0], // vi_VN
      'en': languages[1], // en_US
      'zh': languages[2]  // zh_CN
    };
    
    const reduxLanguage = reverseLanguageMap[language];
    if (reduxLanguage) {
      dispatch(setLanguage(reduxLanguage));
    }
  };

  return (
    <div className="bg-white text-gray-800 py-4 shadow-sm border-b-8 border-gray-200">
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
            {t('nav.home')}
          </Link>
          <div className="relative group">
            <button className="text-[#0088cc] hover:text-yellow-500 transition-colors flex items-center text-[24px] font-normal font-roboto-condensed">
              {t('nav.about')}
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link href="/about" className="block px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase">{t('about.aboutUs')}</Link>
              <Link href="/about/meeting" className="block px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase">{t('about.meeting')}</Link>
              <Link href="/about/vision-mission" className="block px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase">{t('about.visionMission')}</Link>
              <Link href="/about/core-values" className="block px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase">{t('about.coreValues')}</Link>
              <Link href="/about/code-conduct" className="block px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase">{t('about.codeConduct')}</Link>
              <Link href="/about/trading-conditions" className="block px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase">{t('about.tradingConditions')}</Link>
            </div>
          </div>
          <div className="relative group">
            <button className="text-[#0088cc] hover:text-yellow-500 transition-colors flex items-center text-[24px] font-normal font-roboto-condensed">
              {t('nav.services')}
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-auto bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link href="/services/logistics/customs-clearance" className="block md:w-[285px] px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase">{t('services.customsClearance')}</Link>
              <Link href="/services/logistics/warehouse" className="block md:w-[285px] px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase">{t('services.warehouse')}</Link>
              <Link href="/services/logistics/inland-haulage" className="block md:w-[285px] px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase">{t('services.inlandHaulage')}</Link>
              <Link href="/services/logistics/temperature-controlled-transport" className="block md:w-[285px] px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase">{t('services.temperatureControlled')}</Link>
              <Link href="/services/logistics/international-freight-forwarding" className="block md:w-[285px] px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase">{t('services.internationalFreight')}</Link>
              <Link href="/services/logistics/project-cargoes" className="block md:w-[285px] px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase">{t('services.projectCargoes')}</Link>
            </div>
          </div>
          <Link href="/news" className="text-[#0088cc] hover:text-yellow-500 transition-colors text-[24px] font-normal font-roboto-condensed">
            {t('nav.news')}
          </Link>
          <div className="relative group">
            <button className="text-[#0088cc] hover:text-yellow-500 transition-colors flex items-center text-[24px] font-normal font-roboto-condensed">
              {t('nav.library')}
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link href="/library/share" className="block px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase">{t('library.share')}</Link>
              <Link href="/library/legal-documents" className="block px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase">{t('library.legalDocuments')}</Link>
              <Link href="/library/useful-websites" className="block px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase">{t('library.usefulWebsites')}</Link>
              <Link href="/library/reference-documents" className="block px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase">{t('library.referenceDocuments')}</Link>
              <Link href="/library/qa" className="block px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase">{t('library.qa')}</Link>
            </div>
          </div>
          <Link href="/careers" className="text-[#0088cc] hover:text-yellow-500 transition-colors text-[24px] font-normal font-roboto-condensed">
            {t('nav.job')}
          </Link>
          <Link href="/contact" className="text-[#0088cc] hover:text-yellow-500 transition-colors text-[24px] font-normal font-roboto-condensed">
            {t('nav.contact')}
          </Link>
        </nav>

        {/* Right Side - Language Selector and Search */}
        <div className="flex items-center space-x-4 mt-8">
          {/* Language Selector */}
          <LanguageSwitcher onLanguageChange={handleLanguageChange} />

          {/* Search Icon */}
          <button className="text-gray-800 hover:text-yellow-500 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        {/* Contact Information - Center */}
        <div className="hidden lg:flex items-center space-x-6 mt-8 ">
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
