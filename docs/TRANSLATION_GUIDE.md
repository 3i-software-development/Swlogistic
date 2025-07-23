# Hướng dẫn sử dụng hệ thống đa ngôn ngữ

## Tổng quan

Hệ thống đa ngôn ngữ được xây dựng với các thành phần chính:

1. **Hook `useTranslation`** - Quản lý ngôn ngữ và chuyển đổi
2. **File JSON** - Chứa các bản dịch cho từng ngôn ngữ
3. **Component `LanguageSwitcher`** - Giao diện chuyển đổi ngôn ngữ

## Cấu trúc thư mục

```
├── hooks/
│   └── useTranslation.ts          # Hook chính
├── locales/
│   ├── vi.json                    # Tiếng Việt
│   ├── en.json                    # Tiếng Anh
│   └── zh.json                    # Tiếng Trung
├── components/
│   └── LanguageSwitcher.tsx       # Component chuyển đổi ngôn ngữ
└── docs/
    └── TRANSLATION_GUIDE.md       # Hướng dẫn này
```

## Cách sử dụng

### 1. Import hook trong component

```tsx
import { useTranslation } from '@/hooks/useTranslation';

const MyComponent = () => {
  const { t, changeLanguage, currentLanguage } = useTranslation();
  
  return (
    <div>
      <h1>{t('nav.home')}</h1>
      <p>{t('common.loading')}</p>
    </div>
  );
};
```

### 2. Sử dụng hàm `t()` để dịch

```tsx
// Dịch đơn giản
t('nav.home')  // "Trang chủ" / "Home" / "首页"

// Dịch với tham số
t('welcome.message', { name: 'John' })  // "Xin chào John" / "Hello John" / "你好 John"
```

### 3. Chuyển đổi ngôn ngữ

```tsx
const { changeLanguage } = useTranslation();

// Chuyển sang tiếng Anh
changeLanguage('en');

// Chuyển sang tiếng Việt
changeLanguage('vi');

// Chuyển sang tiếng Trung
changeLanguage('zh');
```

### 4. Sử dụng LanguageSwitcher component

```tsx
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Header = () => {
  return (
    <header>
      <nav>
        {/* Navigation items */}
      </nav>
      <LanguageSwitcher />
    </header>
  );
};
```

## Cấu trúc file JSON

### Ví dụ cấu trúc

```json
{
  "nav": {
    "home": "Trang chủ",
    "about": "Giới thiệu",
    "services": "Dịch vụ"
  },
  "common": {
    "loading": "Đang tải...",
    "learnMore": "Tìm hiểu thêm",
    "getQuote": "Nhận báo giá"
  },
  "home": {
    "hero": {
      "title1": "Giải pháp Logistics Chuyên nghiệp",
      "subtitle1": "Phủ sóng toàn cầu, Chuyên môn địa phương"
    },
    "about": {
      "title": "Về KTO Logistics",
      "description": "Được thành lập vào năm 2015..."
    }
  }
}
```

### Quy tắc đặt tên key

1. **Phân cấp rõ ràng**: Sử dụng dấu chấm để phân cấp
   - `nav.home` - Navigation item "Home"
   - `home.hero.title1` - Hero title trong trang chủ

2. **Tên key ngắn gọn**: Sử dụng tên ngắn gọn nhưng mô tả
   - ✅ `nav.home` thay vì `navigation.homepage`
   - ✅ `common.loading` thay vì `common.loadingText`

3. **Nhất quán**: Sử dụng cùng pattern cho các phần tương tự
   - `nav.home`, `nav.about`, `nav.services`
   - `common.loading`, `common.error`, `common.success`

## Thêm ngôn ngữ mới

### 1. Tạo file JSON mới

Tạo file `locales/ja.json` cho tiếng Nhật:

```json
{
  "nav": {
    "home": "ホーム",
    "about": "会社概要",
    "services": "サービス"
  },
  "common": {
    "loading": "読み込み中...",
    "learnMore": "詳細を見る",
    "getQuote": "見積もりを取得"
  }
}
```

### 2. Cập nhật hook

Trong `hooks/useTranslation.ts`, thêm ngôn ngữ mới:

```tsx
export type Language = 'vi' | 'en' | 'zh' | 'ja';

// Trong getAvailableLanguages function
const getAvailableLanguages = (): { code: Language; name: string; flag: string }[] => [
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' }  // Thêm dòng này
];

// Trong useEffect, thêm import
const [viData, enData, zhData, jaData] = await Promise.all([
  import('@/locales/vi.json'),
  import('@/locales/en.json'),
  import('@/locales/zh.json'),
  import('@/locales/ja.json')  // Thêm dòng này
]);
```

### 3. Cập nhật LanguageSwitcher

Thêm flag cho ngôn ngữ mới trong `getFlagEmoji`:

```tsx
const getFlagEmoji = (code: string) => {
  switch (code) {
    case 'vi': return '🇻🇳';
    case 'en': return '🇺🇸';
    case 'zh': return '🇨🇳';
    case 'ja': return '🇯🇵';  // Thêm dòng này
    default: return '🇻🇳';
  }
};
```

## Best Practices

### 1. Tổ chức key hợp lý

```json
{
  "nav": { /* Navigation items */ },
  "common": { /* Common UI elements */ },
  "home": { /* Homepage specific */ },
  "about": { /* About page specific */ },
  "services": { /* Services page specific */ },
  "footer": { /* Footer content */ }
}
```

### 2. Sử dụng tham số khi cần

```json
{
  "welcome": {
    "message": "Xin chào {{name}}!",
    "greeting": "Chào mừng bạn đến với {{company}}"
  }
}
```

```tsx
t('welcome.message', { name: 'John' })  // "Xin chào John!"
t('welcome.greeting', { company: 'KTO Logistics' })  // "Chào mừng bạn đến với KTO Logistics"
```

### 3. Fallback cho key không tồn tại

Nếu key không tồn tại, hook sẽ trả về chính key đó:

```tsx
t('non.existent.key')  // Trả về "non.existent.key"
```

### 4. Lưu trữ ngôn ngữ ưa thích

Hook tự động lưu ngôn ngữ vào localStorage:

```tsx
// Tự động lưu khi chuyển ngôn ngữ
changeLanguage('en');  // Lưu vào localStorage

// Tự động load khi khởi động
// Hook sẽ đọc từ localStorage và set ngôn ngữ mặc định
```

## Troubleshooting

### 1. Key không hiển thị đúng

- Kiểm tra key có tồn tại trong file JSON không
- Kiểm tra cấu trúc phân cấp có đúng không
- Kiểm tra file JSON có syntax đúng không

### 2. Ngôn ngữ không chuyển đổi

- Kiểm tra file JSON có được import đúng không
- Kiểm tra component có re-render khi ngôn ngữ thay đổi không
- Kiểm tra console có lỗi không

### 3. Performance issues

- Sử dụng `useMemo` cho các object lớn
- Tránh tạo object mới trong render
- Sử dụng `React.memo` cho component con nếu cần

## Ví dụ hoàn chỉnh

```tsx
import { useTranslation } from '@/hooks/useTranslation';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Header = () => {
  const { t, currentLanguage } = useTranslation();

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <nav className="flex items-center space-x-8">
            <a href="/" className="text-blue-600 hover:text-yellow-500">
              {t('nav.home')}
            </a>
            <a href="/about" className="text-blue-600 hover:text-yellow-500">
              {t('nav.about')}
            </a>
            <a href="/services" className="text-blue-600 hover:text-yellow-500">
              {t('nav.services')}
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              {t('common.contactUs')}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
```

Hệ thống này giúp bạn dễ dàng quản lý và chuyển đổi ngôn ngữ trong toàn bộ ứng dụng! 