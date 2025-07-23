"use client";

import { useState, useRef, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import Image from 'next/image';
import vietnamFlag from "@/Asset/image/vietnam.png";
import ukFlag from "@/Asset/image/united-kingdom.png";

interface LanguageSwitcherProps {
  onLanguageChange?: (language: 'vi' | 'en' | 'zh') => void;
}

const LanguageSwitcher = ({ onLanguageChange }: LanguageSwitcherProps) => {
  const { currentLanguage, changeLanguage, getAvailableLanguages } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = getAvailableLanguages();

  const getFlagImage = (code: string) => {
    switch (code) {
      case 'vi':
        return vietnamFlag;
      case 'en':
        return ukFlag;
      case 'zh':
        return null; // Will use emoji instead
      default:
        return vietnamFlag;
    }
  };

  const getFlagEmoji = (code: string) => {
    switch (code) {
      case 'vi':
        return '🇻🇳';
      case 'en':
        return '🇺🇸';
      case 'zh':
        return '🇨🇳';
      default:
        return '🇻🇳';
    }
  };

  const handleLanguageChange = (languageCode: string) => {
    const lang = languageCode as 'vi' | 'en' | 'zh';
    changeLanguage(lang);
    
    // Call parent callback if provided
    if (onLanguageChange) {
      onLanguageChange(lang);
    }
    
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-gray-800 hover:text-yellow-500 transition-colors"
      >
        {currentLanguage === 'zh' ? (
          <span className="text-lg">{getFlagEmoji(currentLanguage)}</span>
        ) : (
          <Image
            src={getFlagImage(currentLanguage)!}
            width={20}
            height={15}
            alt={languages.find(lang => lang.code === currentLanguage)?.name || 'Language'}
            className="rounded-sm"
          />
        )}
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-32 bg-white shadow-lg rounded-md z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm transition-colors ${
                currentLanguage === language.code ? 'bg-gray-50' : ''
              }`}
            >
              <div className="flex items-center space-x-2">
                {language.code === 'zh' ? (
                  <span className="text-base">{getFlagEmoji(language.code)}</span>
                ) : (
                  <Image 
                    src={getFlagImage(language.code)!} 
                    width={16} 
                    height={12} 
                    alt={language.name} 
                    className="rounded-sm"
                  />
                )}
                <span>{language.name}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher; 