"use client";

import { motion } from "framer-motion";

interface LogisticsImageStripProps {
  className?: string;
}

const LogisticsImageStrip = ({ className = "" }: LogisticsImageStripProps) => {
  const images = [
    {
      id: 1,
      title: "Truck Transportation",
      svg: (
        <svg className="w-full h-full" viewBox="0 0 200 120" fill="none">
          {/* Truck */}
          <rect x="20" y="60" width="80" height="30" fill="#2563eb" rx="5"/>
          <rect x="100" y="70" width="40" height="20" fill="#2563eb" rx="3"/>
          <circle cx="35" cy="105" r="8" fill="#1e40af"/>
          <circle cx="105" cy="105" r="8" fill="#1e40af"/>
          <rect x="25" y="50" width="70" height="10" fill="#1e40af" rx="2"/>
          {/* Road */}
          <rect x="10" y="115" width="180" height="5" fill="#6b7280"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Ocean Freight",
      svg: (
        <svg className="w-full h-full" viewBox="0 0 200 120" fill="none">
          {/* Ship */}
          <path d="M30 80 L170 80 L160 100 L40 100 Z" fill="#0ea5e9"/>
          <rect x="40" y="60" width="120" height="20" fill="#0ea5e9"/>
          <rect x="80" y="40" width="40" height="20" fill="#0ea5e9"/>
          <rect x="90" y="30" width="20" height="10" fill="#0ea5e9"/>
          {/* Containers */}
          <rect x="50" y="45" width="15" height="12" fill="#f59e0b"/>
          <rect x="70" y="45" width="15" height="12" fill="#f59e0b"/>
          <rect x="90" y="45" width="15" height="12" fill="#f59e0b"/>
          <rect x="110" y="45" width="15" height="12" fill="#f59e0b"/>
          <rect x="130" y="45" width="15" height="12" fill="#f59e0b"/>
          {/* Water */}
          <rect x="10" y="105" width="180" height="15" fill="#0ea5e9" opacity="0.3"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Air Freight",
      svg: (
        <svg className="w-full h-full" viewBox="0 0 200 120" fill="none">
          {/* Airplane */}
          <path d="M20 60 L180 60 L160 70 L140 65 L120 70 L100 65 L80 70 L60 65 L40 70 L20 60 Z" fill="#6366f1"/>
          <rect x="80" y="50" width="40" height="10" fill="#6366f1"/>
          <rect x="90" y="40" width="20" height="10" fill="#6366f1"/>
          <circle cx="100" cy="35" r="3" fill="#4f46e5"/>
          {/* Wings */}
          <path d="M70 65 L50 45 L60 65 L70 65 Z" fill="#6366f1"/>
          <path d="M130 65 L150 45 L140 65 L130 65 Z" fill="#6366f1"/>
          {/* Ground crew */}
          <circle cx="30" cy="100" r="5" fill="#374151"/>
          <circle cx="170" cy="100" r="5" fill="#374151"/>
          <rect x="25" y="105" width="10" height="15" fill="#374151"/>
          <rect x="165" y="105" width="10" height="15" fill="#374151"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Warehouse",
      svg: (
        <svg className="w-full h-full" viewBox="0 0 200 120" fill="none">
          {/* Warehouse building */}
          <rect x="20" y="40" width="160" height="60" fill="#f3f4f6" stroke="#6b7280" strokeWidth="2"/>
          <rect x="30" y="50" width="140" height="40" fill="#e5e7eb"/>
          {/* Shelves */}
          <rect x="40" y="55" width="20" height="30" fill="#9ca3af"/>
          <rect x="70" y="55" width="20" height="30" fill="#9ca3af"/>
          <rect x="100" y="55" width="20" height="30" fill="#9ca3af"/>
          <rect x="130" y="55" width="20" height="30" fill="#9ca3af"/>
          {/* Boxes on shelves */}
          <rect x="42" y="57" width="16" height="8" fill="#f59e0b"/>
          <rect x="42" y="67" width="16" height="8" fill="#10b981"/>
          <rect x="42" y="77" width="16" height="8" fill="#ef4444"/>
          <rect x="72" y="57" width="16" height="8" fill="#8b5cf6"/>
          <rect x="72" y="67" width="16" height="8" fill="#06b6d4"/>
          <rect x="72" y="77" width="16" height="8" fill="#f97316"/>
          <rect x="102" y="57" width="16" height="8" fill="#84cc16"/>
          <rect x="102" y="67" width="16" height="8" fill="#ec4899"/>
          <rect x="102" y="77" width="16" height="8" fill="#6366f1"/>
          <rect x="132" y="57" width="16" height="8" fill="#fbbf24"/>
          <rect x="132" y="67" width="16" height="8" fill="#34d399"/>
          <rect x="132" y="77" width="16" height="8" fill="#f87171"/>
          {/* Door */}
          <rect x="85" y="70" width="30" height="30" fill="#6b7280"/>
          <rect x="87" y="72" width="26" height="26" fill="#9ca3af"/>
        </svg>
      )
    }
  ];

  return (
    <div className={`grid grid-cols-4 gap-4 mb-8 ${className}`}>
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div className="h-24 bg-gradient-to-br from-blue-50 to-gray-50 p-2">
            {image.svg}
          </div>
          <div className="p-3 bg-gray-50">
            <p className="text-xs font-medium text-gray-700 text-center">{image.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default LogisticsImageStrip; 