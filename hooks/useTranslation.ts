import { useState, useEffect } from 'react';

// Define supported languages
export type Language = 'vi' | 'en' | 'zh';

// Translation data type - support nested objects
export type TranslationData = {
  [key: string]: string | TranslationData;
};

// Hook for handling translations
export const useTranslation = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('vi');
  const [translations, setTranslations] = useState<{ [key in Language]: TranslationData }>({
    vi: {},
    en: {},
    zh: {}
  });

  // Load translations from JSON files
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const [viData, enData, zhData] = await Promise.all([
          import('@/locales/vi.json'),
          import('@/locales/en.json'),
          import('@/locales/zh.json')
        ]);

        setTranslations({
          vi: viData.default,
          en: enData.default,
          zh: zhData.default
        });
      } catch (error) {
        console.error('Error loading translations:', error);
      }
    };

    loadTranslations();
  }, []);

  // Helper function to get nested value
  const getNestedValue = (obj: any, path: string): string => {
    return path.split('.').reduce((current, key) => {
      return current && current[key] !== undefined ? current[key] : path;
    }, obj);
  };

  // Translation function
  const t = (key: string, params?: { [key: string]: string | number }): string => {
    const translation = getNestedValue(translations[currentLanguage], key);
    
    if (typeof translation !== 'string') {
      return key;
    }
    
    if (params) {
      return Object.entries(params).reduce((result, [paramKey, paramValue]) => {
        return result.replace(new RegExp(`{{${paramKey}}}`, 'g'), String(paramValue));
      }, translation);
    }
    
    return translation;
  };

  // Change language function
  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
    // Optionally save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', language);
    }
  };

  // Get current language
  const getCurrentLanguage = (): Language => currentLanguage;

  // Get available languages
  const getAvailableLanguages = (): { code: Language; name: string; flag: string }[] => [
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' }
  ];

  return {
    t,
    changeLanguage,
    getCurrentLanguage,
    getAvailableLanguages,
    currentLanguage
  };
}; 