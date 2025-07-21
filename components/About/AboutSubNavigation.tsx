"use client";

import Link from "next/link";

interface AboutSubNavigationProps {
  currentPage?: string;
  className?: string;
}

const AboutSubNavigation = ({ currentPage = "", className = "" }: AboutSubNavigationProps) => {
  const navItems = [
    { href: "/gioi-thieu", label: "About" },
    { href: "/gioi-thieu/meeting", label: "Greetings" },
    { href: "/gioi-thieu/vision-mission", label: "Vision - Mission" },
    { href: "/gioi-thieu/core-values", label: "Core values" },
    { href: "/gioi-thieu/code-conduct", label: "Code of Business Conduct" },
    { href: "/gioi-thieu/trading-conditions", label: "Standard Trading Conditions" },
  ];

  return (
    <div className={`bg-gray-50 p-6 rounded-lg ${className}`}>
      <h2 className="text-xl font-bold text-gray-900 mb-4">About Section</h2>
      <div className="space-y-2">
        {navItems.map((item) => (
          <Link 
            key={item.href}
            href={item.href} 
            className={`flex items-center transition-colors ${
              currentPage === item.href 
                ? "text-blue-800 font-semibold" 
                : "text-blue-600 hover:text-blue-800"
            }`}
          >
            <span className="mr-2">>></span>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AboutSubNavigation; 