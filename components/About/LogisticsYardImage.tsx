"use client";

import { motion } from "framer-motion";

interface LogisticsYardImageProps {
  className?: string;
}

const LogisticsYardImage = ({ className = "" }: LogisticsYardImageProps) => {
  return (
    <div className={`w-full mb-8 ${className}`}>
      <motion.div
        className="relative h-64 bg-gradient-to-br from-blue-50 to-gray-100 rounded-lg overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Sky gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-200 via-blue-100 to-white opacity-60"></div>
        
        {/* Logistics Yard SVG */}
        <svg className="w-full h-full" viewBox="0 0 800 300" fill="none">
          {/* Background elements */}
          <rect x="0" y="0" width="800" height="300" fill="url(#skyGradient)"/>
          
          {/* Ground */}
          <rect x="0" y="250" width="800" height="50" fill="#8B7355"/>
          <rect x="0" y="250" width="800" height="10" fill="#A0522D"/>
          
          {/* Container stacks - Left side */}
          <g className="container-stack">
            {/* Stack 1 */}
            <rect x="50" y="180" width="60" height="40" fill="#DC2626" stroke="#991B1B" strokeWidth="1"/>
            <rect x="50" y="160" width="60" height="20" fill="#DC2626" stroke="#991B1B" strokeWidth="1"/>
            <rect x="50" y="140" width="60" height="20" fill="#DC2626" stroke="#991B1B" strokeWidth="1"/>
            
            {/* Stack 2 */}
            <rect x="120" y="190" width="60" height="40" fill="#059669" stroke="#047857" strokeWidth="1"/>
            <rect x="120" y="170" width="60" height="20" fill="#059669" stroke="#047857" strokeWidth="1"/>
            
            {/* Stack 3 */}
            <rect x="190" y="200" width="60" height="40" fill="#2563EB" stroke="#1D4ED8" strokeWidth="1"/>
            <rect x="190" y="180" width="60" height="20" fill="#2563EB" stroke="#1D4ED8" strokeWidth="1"/>
            <rect x="190" y="160" width="60" height="20" fill="#2563EB" stroke="#1D4ED8" strokeWidth="1"/>
            <rect x="190" y="140" width="60" height="20" fill="#2563EB" stroke="#1D4ED8" strokeWidth="1"/>
            
            {/* Stack 4 */}
            <rect x="260" y="210" width="60" height="40" fill="#F59E0B" stroke="#D97706" strokeWidth="1"/>
            <rect x="260" y="190" width="60" height="20" fill="#F59E0B" stroke="#D97706" strokeWidth="1"/>
            <rect x="260" y="170" width="60" height="20" fill="#F59E0B" stroke="#D97706" strokeWidth="1"/>
          </g>
          
          {/* Container stacks - Right side */}
          <g className="container-stack">
            {/* Stack 5 */}
            <rect x="450" y="200" width="60" height="40" fill="#DC2626" stroke="#991B1B" strokeWidth="1"/>
            <rect x="450" y="180" width="60" height="20" fill="#DC2626" stroke="#991B1B" strokeWidth="1"/>
            <rect x="450" y="160" width="60" height="20" fill="#DC2626" stroke="#991B1B" strokeWidth="1"/>
            
            {/* Stack 6 */}
            <rect x="520" y="190" width="60" height="40" fill="#7C3AED" stroke="#6D28D9" strokeWidth="1"/>
            <rect x="520" y="170" width="60" height="20" fill="#7C3AED" stroke="#6D28D9" strokeWidth="1"/>
            <rect x="520" y="150" width="60" height="20" fill="#7C3AED" stroke="#6D28D9" strokeWidth="1"/>
            
            {/* Stack 7 */}
            <rect x="590" y="210" width="60" height="40" fill="#059669" stroke="#047857" strokeWidth="1"/>
            <rect x="590" y="190" width="60" height="20" fill="#059669" stroke="#047857" strokeWidth="1"/>
            
            {/* Stack 8 */}
            <rect x="660" y="200" width="60" height="40" fill="#F59E0B" stroke="#D97706" strokeWidth="1"/>
            <rect x="660" y="180" width="60" height="20" fill="#F59E0B" stroke="#D97706" strokeWidth="1"/>
            <rect x="660" y="160" width="60" height="20" fill="#F59E0B" stroke="#D97706" strokeWidth="1"/>
          </g>
          
          {/* Reach Stacker (Main Equipment) */}
          <g className="reach-stacker">
            {/* Main body */}
            <rect x="350" y="220" width="80" height="25" fill="#DC2626" rx="3"/>
            {/* Cab */}
            <rect x="360" y="200" width="25" height="20" fill="#DC2626" rx="2"/>
            {/* Boom */}
            <rect x="380" y="210" width="40" height="8" fill="#991B1B"/>
            {/* Wheels */}
            <circle cx="365" cy="250" r="8" fill="#374151"/>
            <circle cx="415" cy="250" r="8" fill="#374151"/>
            {/* Container being lifted */}
            <rect x="420" y="180" width="60" height="40" fill="#DC2626" stroke="#991B1B" strokeWidth="2"/>
            <rect x="425" y="185" width="50" height="30" fill="#FEE2E2"/>
          </g>
          
          {/* Small vehicles */}
          <g className="small-vehicles">
            {/* Yellow forklift */}
            <rect x="320" y="235" width="20" height="12" fill="#F59E0B" rx="2"/>
            <rect x="325" y="225" width="10" height="10" fill="#F59E0B" rx="1"/>
            <circle cx="330" cy="250" r="4" fill="#374151"/>
            <circle cx="340" cy="250" r="4" fill="#374151"/>
          </g>
          
          {/* Train tracks */}
          <rect x="0" y="270" width="800" height="4" fill="#374151"/>
          <rect x="0" y="278" width="800" height="4" fill="#374151"/>
          
          {/* Container details - logos and markings */}
          <g className="container-details">
            <text x="55" y="195" fill="white" fontSize="8" fontWeight="bold">MAERSK</text>
            <text x="125" y="205" fill="white" fontSize="8" fontWeight="bold">CMA</text>
            <text x="195" y="175" fill="white" fontSize="8" fontWeight="bold">MSC</text>
            <text x="265" y="205" fill="white" fontSize="8" fontWeight="bold">COSCO</text>
          </g>
        </svg>
        
        {/* Overlay text */}
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded">
          <p className="text-sm font-semibold">Modern Logistics Yard</p>
          <p className="text-xs opacity-90">Professional container handling operations</p>
        </div>
        
        {/* Gradients */}
        <defs>
          <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#DBEAFE"/>
            <stop offset="50%" stopColor="#EFF6FF"/>
            <stop offset="100%" stopColor="#F8FAFC"/>
          </linearGradient>
        </defs>
      </motion.div>
    </div>
  );
};

export default LogisticsYardImage; 