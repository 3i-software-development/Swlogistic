"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import logo from "@/assets/image/logo.png";
import vietnamFlag from "@/assets/image/vietnam.png";
import ukFlag from "@/assets/image/united-kingdom.png";
import { fetchMenu } from "@/apis/clientApi";
import { FaGhost } from "react-icons/fa";

// Types for menu data from API
interface ApiMenuItem {
  id: number;
  code: string;
  title: string;
  parentId: number | null;
  order: number;
  hasChild: boolean;
  level: number;
  parentCode: string | null;
}

interface MenuItem {
  id: number;
  code: string;
  title: string;
  url?: string;
  children?: MenuItem[];
}

interface MenuData {
  mainMenu: MenuItem[];
  contactInfo?: {
    phone: string;
    email: string;
  };
}

const NavTop = () => {
  const [menuData, setMenuData] = useState<MenuData | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState<'vi' | 'en'>('vi');
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  // Function to transform flat API data to hierarchical structure
  const transformApiDataToMenu = (apiData: ApiMenuItem[]): MenuItem[] => {
    console.log('Transform function called with:', apiData);
    const menuMap = new Map<number, MenuItem>();
    const rootItems: MenuItem[] = [];

    // First pass: create all menu items
    apiData.forEach(item => {
      console.log('Processing item:', item);
      menuMap.set(item.id, {
        id: item.id,
        code: item.code,
        title: item.title,
        url: getUrlFromCode(item.code),
        children: []
      });
    });

    console.log('Menu map after first pass:', menuMap);

    // Second pass: build hierarchy - only include level 1 items as main menu
    apiData.forEach(item => {
      const menuItem = menuMap.get(item.id);
      if (!menuItem) return;

      if (item.level === 1) {
        // Only level 1 items become main menu items
        // Filter out phone and email items (order 8 and 9)
        if (item.order <= 7) {
          console.log('Adding level 1 item to main menu:', menuItem);
          rootItems.push(menuItem);
        } else {
          console.log('Skipping phone/email item:', menuItem.title);
        }
      } else if (item.level === 2) {
        // Level 2 items become children
        const parent = menuMap.get(item.parentId!);
        if (parent) {
          if (!parent.children) {
            parent.children = [];
          }
          parent.children.push(menuItem);
          console.log('Adding child item:', menuItem.title, 'to parent:', parent.title);
        }
      }
      // Skip level 0 (root) items
    });

    console.log('Root items before sorting:', rootItems);

    // Sort by order
    const sortByOrder = (items: MenuItem[]) => {
      items.sort((a, b) => {
        const aOrder = apiData.find(item => item.id === a.id)?.order || 0;
        const bOrder = apiData.find(item => item.id === b.id)?.order || 0;
        return aOrder - bOrder;
      });
      
      items.forEach(item => {
        if (item.children && item.children.length > 0) {
          sortByOrder(item.children);
        }
      });
    };

    sortByOrder(rootItems);
    console.log('Final transformed menu:', rootItems);
    return rootItems;
  };

  // Function to generate URL from menu code
  const getUrlFromCode = (code: string): string => {
    const urlMap: { [key: string]: string } = {
      'Home': '/',
      'About Us': '/about',
      'Meeting': '/about/meeting',
      'Vision & Mission': '/about/vision-mission',
      'Core Values': '/about/core-values',
      'Code of Conduct': '/about/code-conduct',
      'Terms & Conditions': '/about/trading-conditions',
      'Customs Clearance': '/services/logistics/customs-clearance',
      'Warehouse Services': '/services/logistics/warehouse',
      'Domestic Transport': '/services/logistics/inland-haulage',
      'Temperature-Controlled Transport': '/services/logistics/temperature-controlled-transport',
      'International Transport': '/services/logistics/international-freight-forwarding',
      'Project Cargo': '/services/logistics/project-cargoes',
      'News': '/news',
      'Sharing': '/library/share',
      'Legal Documents': '/library/legal-documents',
      'Useful Websites': '/library/useful-websites',
      'Reference Materials': '/library/reference-documents',
      'Q&A': '/library/qa',
      'Jop': '/careers',
      'Contact': '/contact'
    };

    return urlMap[code] || '#';
  };

  // Function to extract contact info from API data
  const extractContactInfo = (apiData: ApiMenuItem[]): { phone: string; email: string } => {
    // Look for phone and email items in the API data
    const phoneItem = apiData.find(item => 
      item.code === "0989.686.868" || 
      item.title === "0989.686.868" ||
      (item.code && item.code.match(/^\d+\.\d+\.\d+$/)) // Pattern for phone number
    );
    
    const emailItem = apiData.find(item => 
      item.code === "kto@gmail.com" || 
      item.title === "kto@gmail.com" ||
      (item.code && item.code.includes('@')) // Pattern for email
    );
    
    return {
      phone: phoneItem?.title || phoneItem?.code || "0937.206.960", // Use API data or fallback
      email: emailItem?.title || emailItem?.code || "kto@ktologistics.com.vn" // Use API data or fallback
    };
  };

  // Temporary data structure - fallback with Vietnamese titles
  const tempMenuData: MenuData = {
    mainMenu: [
      {
        id: 2741,
        code: "Home",
        title: "Trang chủ",
        url: "/"
      },
      {
        id: 2742,
        code: "About",
        title: "Giới thiệu",
        children: [
          {
            id: 2747,
            code: "About Us",
            title: "Về chúng tôi",
            url: "/about"
          },
          {
            id: 2748,
            code: "Meeting",
            title: "Cuộc họp",
            url: "/about/meeting"
          },
          {
            id: 2749,
            code: "Vision & Mission",
            title: "Tầm nhìn & Sứ mệnh",
            url: "/about/vision-mission"
          },
          {
            id: 2750,
            code: "Core Values",
            title: "Giá trị cốt lõi",
            url: "/about/core-values"
          },
          {
            id: 2751,
            code: "Code of Conduct",
            title: "Quy tắc ứng xử",
            url: "/about/code-conduct"
          },
          {
            id: 2752,
            code: "Terms & Conditions",
            title: "Điều kiện thương mại",
            url: "/about/trading-conditions"
          }
        ]
      },
      {
        id: 2744,
        code: "Services",
        title: "Dịch vụ",
        children: [
          {
            id: 2753,
            code: "Customs Clearance",
            title: "Thông quan hải quan",
            url: "/services/logistics/customs-clearance"
          },
          {
            id: 2754,
            code: "Warehouse Services",
            title: "Kho bãi",
            url: "/services/logistics/warehouse"
          },
          {
            id: 2755,
            code: "Domestic Transport",
            title: "Vận chuyển nội địa",
            url: "/services/logistics/inland-haulage"
          },
          {
            id: 2756,
            code: "Temperature-Controlled Transport",
            title: "Vận chuyển có kiểm soát nhiệt độ",
            url: "/services/logistics/temperature-controlled-transport"
          },
          {
            id: 2757,
            code: "International Transport",
            title: "Vận chuyển quốc tế",
            url: "/services/logistics/international-freight-forwarding"
          },
          {
            id: 2758,
            code: "Project Cargo",
            title: "Hàng dự án",
            url: "/services/logistics/project-cargoes"
          }
        ]
      },
      {
        id: 2745,
        code: "News",
        title: "Tin tức",
        url: "/news"
      },
      {
        id: 2739,
        code: "Library",
        title: "Thư viện",
        children: [
          {
            id: 2759,
            code: "Sharing",
            title: "Chia sẻ",
            url: "/library/share"
          },
          {
            id: 2760,
            code: "Legal Documents",
            title: "Tài liệu pháp lý",
            url: "/library/legal-documents"
          },
          {
            id: 2761,
            code: "Useful Websites",
            title: "Website hữu ích",
            url: "/library/useful-websites"
          },
          {
            id: 2762,
            code: "Reference Materials",
            title: "Tài liệu tham khảo",
            url: "/library/reference-documents"
          },
          {
            id: 2763,
            code: "Q&A",
            title: "Hỏi đáp",
            url: "/library/qa"
          }
        ]
      },
      {
        id: 2746,
        code: "Jop",
        title: "Tuyển dụng",
        url: "/careers"
      },
      {
        id: 2743,
        code: "Contact",
        title: "Liên hệ",
        url: "/contact"
      }
    ],
    contactInfo: {
      phone: "0937.206.960",
      email: "kto@ktologistics.com.vn"
    }
  };

  useEffect(() => {
    // Simulate API call with temporary data
    const fetchMenuData = async () => {
      try {
        setLoading(true);
        // In real implementation, you would call the actual API here
        const res = await fetchMenu(2740);
        console.log('API Response:', res);
        console.log('API Response type:', typeof res);
        console.log('Is Array?', Array.isArray(res));
        
        // Check if response is directly an array
        if (Array.isArray(res) && res.length > 0) {
          console.log('API data is valid array, processing...');
          
          // Transform API data to menu structure
          const transformedMenu = transformApiDataToMenu(res);
          console.log('Transformed menu:', transformedMenu);
          setMenuData({
            mainMenu: transformedMenu,
            contactInfo: extractContactInfo(res)
          });
          console.log('Using API data');
        } else if (res && typeof res === 'object' && res.object && Array.isArray(res.object)) {
          // Handle case where response is wrapped in object
          console.log('API data is wrapped in object, processing...');
          const transformedMenu = transformApiDataToMenu(res.object);
          console.log('Transformed menu:', transformedMenu);
          setMenuData({
            mainMenu: transformedMenu,
            contactInfo: extractContactInfo(res.object)
          });
          console.log('Using API data');
        } else {
          // Fallback to Vietnamese temp data if API fails or returns invalid data
          console.log('API failed or returned invalid data, using fallback menu');
          console.log('Response type:', typeof res);
          console.log('Is array:', Array.isArray(res));
          setMenuData(tempMenuData);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching menu data:', error);
        // Fallback to Vietnamese temp data on error
        setMenuData(tempMenuData);
        setLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  const handleLanguageChange = (language: 'vi' | 'en') => {
    setCurrentLanguage(language);
    setIsLanguageDropdownOpen(false);
  };
FaGhost
  const getFlagImage = (code: 'vi' | 'en') => {
    return code === 'vi' ? vietnamFlag : ukFlag;
  };

  if (loading) {
    return (
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!menuData) {
    return null;
  }

  console.log('Current menuData being rendered:', menuData);

  return (
    <div className="bg-white shadow-md border-b-8 border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between">
        {/* Logo and Top Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image src={logo} alt="Paris Logistics" width={150} height={50} />
          </div>
        </div>

        {/* Navigation Links - Center */}
        <nav className="hidden lg:flex items-center space-x-8 mt-8">
          {menuData.mainMenu.map((item) => (
            <div key={item.id}>
              {item.children && item.children.length > 0 ? (
                <div className="relative group">
                  <button className="text-[#0088cc] hover:text-yellow-500 transition-colors flex items-center text-[24px] font-normal font-roboto-condensed">
                    {item.title}
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-auto bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {item.children.map((child) => (
                      <Link 
                        key={child.id}
                        href={child.url || '#'} 
                        className="block md:w-[285px] px-6 py-3 text-[#000] hover:text-[#006699] hover:bg-gray-50 text-[16px] font-normal transition-colors font-roboto-condensed uppercase"
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link 
                  href={item.url || '#'} 
                  className="text-[#0088cc] hover:text-yellow-500 transition-colors text-[24px] font-normal font-roboto-condensed"
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Right Side - Language Selector and Search */}
        <div className="flex items-center space-x-4 mt-8">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              className="flex items-center space-x-1 text-gray-800 hover:text-yellow-500 transition-colors"
            >
              <Image
                src={getFlagImage(currentLanguage)}
                width={30}
                height={20}
                alt={currentLanguage === 'vi' ? 'Tiếng Việt' : 'English'}
                className="rounded-sm"
              />
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isLanguageDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-32 bg-white shadow-lg rounded-md z-50">
                <button
                  onClick={() => handleLanguageChange('vi')}
                  className={`block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm transition-colors ${
                    currentLanguage === 'vi' ? 'bg-gray-50' : ''
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Image 
                      src={vietnamFlag} 
                      width={16} 
                      height={12} 
                      alt="Tiếng Việt" 
                      className="rounded-sm"
                    />
                    <span>Tiếng Việt</span>
                  </div>
                </button>
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={`block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm transition-colors ${
                    currentLanguage === 'en' ? 'bg-gray-50' : ''
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Image 
                      src={ukFlag} 
                      width={16} 
                      height={12} 
                      alt="English" 
                      className="rounded-sm"
                    />
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
        {/* Contact Information - Top Right */}
        <div className="hidden lg:flex items-center space-x-6 mt-8">
            <div className="flex items-center space-x-2">
              <span className="text-[#0088cc] text-[20px] font-medium">{menuData.contactInfo?.phone || "0937.206.960"}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-700 text-[20px] font-medium">{menuData.contactInfo?.email || "kto@ktologistics.com.vn"}</span>
            </div>
          </div>
      </div>
    </div>
  );
};

export default NavTop;
