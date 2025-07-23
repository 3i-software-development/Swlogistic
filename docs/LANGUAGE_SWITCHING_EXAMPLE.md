# Ví dụ sử dụng hàm chuyển đổi ngôn ngữ

## Cách sử dụng cơ bản

### 1. Import hook
```tsx
import { useTranslation } from '@/hooks/useTranslation';
```

### 2. Sử dụng trong component
```tsx
const MyComponent = () => {
  const { t, changeLanguage, currentLanguage } = useTranslation();

  // Chuyển sang tiếng Anh
  const switchToEnglish = () => {
    changeLanguage('en');
  };

  // Chuyển sang tiếng Việt
  const switchToVietnamese = () => {
    changeLanguage('vi');
  };

  // Chuyển sang tiếng Trung
  const switchToChinese = () => {
    changeLanguage('zh');
  };

  return (
    <div>
      <h1>{t('nav.home')}</h1>
      <p>Ngôn ngữ hiện tại: {currentLanguage}</p>
      
      <div className="space-x-2">
        <button onClick={switchToVietnamese}>Tiếng Việt</button>
        <button onClick={switchToEnglish}>English</button>
        <button onClick={switchToChinese}>中文</button>
      </div>
    </div>
  );
};
```

## Sử dụng với Redux (như trong NavTop)

### 1. Sync với Redux state
```tsx
const NavTop = () => {
  const dispatch = useDispatch();
  const { t, changeLanguage, currentLanguage } = useTranslation();
  const currentLanguageRedux = useAppSelector((state) => state.language.selectedLanguage);

  // Sync translation hook với Redux
  useEffect(() => {
    if (currentLanguageRedux) {
      const languageMap = {
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

  // Hàm chuyển đổi ngôn ngữ
  const handleLanguageChange = (language: 'vi' | 'en' | 'zh') => {
    changeLanguage(language);
    
    // Cập nhật Redux state
    const reverseLanguageMap = {
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
    <div>
      <LanguageSwitcher onLanguageChange={handleLanguageChange} />
    </div>
  );
};
```

## Các hàm có sẵn

### 1. `changeLanguage(language)`
```tsx
// Chuyển đổi ngôn ngữ
changeLanguage('en');  // Tiếng Anh
changeLanguage('vi');  // Tiếng Việt
changeLanguage('zh');  // Tiếng Trung
```

### 2. `currentLanguage`
```tsx
// Lấy ngôn ngữ hiện tại
console.log(currentLanguage); // 'vi', 'en', hoặc 'zh'
```

### 3. `t(key, params?)`
```tsx
// Dịch text
t('nav.home');  // "Trang chủ" / "Home" / "首页"

// Dịch với tham số
t('welcome.message', { name: 'John' });  // "Xin chào John"
```

### 4. `getAvailableLanguages()`
```tsx
// Lấy danh sách ngôn ngữ có sẵn
const languages = getAvailableLanguages();
// [
//   { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
//   { code: 'en', name: 'English', flag: '🇺🇸' },
//   { code: 'zh', name: '中文', flag: '🇨🇳' }
// ]
```

## Lưu ý quan trọng

1. **Auto-save**: Ngôn ngữ được tự động lưu vào localStorage
2. **Auto-load**: Ngôn ngữ được tự động load khi khởi động
3. **Sync Redux**: Có thể sync với Redux state nếu cần
4. **Type-safe**: Hỗ trợ TypeScript đầy đủ

## Ví dụ hoàn chỉnh

```tsx
import { useTranslation } from '@/hooks/useTranslation';
import { useState, useEffect } from 'react';

const LanguageDemo = () => {
  const { t, changeLanguage, currentLanguage, getAvailableLanguages } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(currentLanguage);

  const languages = getAvailableLanguages();

  const handleLanguageSwitch = (lang: 'vi' | 'en' | 'zh') => {
    changeLanguage(lang);
    setSelectedLang(lang);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        {t('nav.home')} - {currentLanguage.toUpperCase()}
      </h1>
      
      <div className="mb-4">
        <p>{t('common.loading')}</p>
        <p>{t('common.learnMore')}</p>
      </div>

      <div className="space-x-2">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageSwitch(lang.code as 'vi' | 'en' | 'zh')}
            className={`px-4 py-2 rounded ${
              selectedLang === lang.code 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {lang.flag} {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageDemo;
```

Hệ thống này đã sẵn sàng sử dụng và dễ dàng tích hợp vào bất kỳ component nào! 🎉 