"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background with split colors */}
      <div className="absolute inset-0">
        {/* Teal background (left and bottom) */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800"></div>
        
        {/* Yellow blob (top-middle and top-right) */}
        <div className="absolute top-0 right-0 w-3/4 h-1/2 bg-yellow-400 rounded-bl-full opacity-90"></div>
        
        {/* Abstract white lines */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute top-20 right-20 w-96 h-96 opacity-20" viewBox="0 0 400 400" fill="none">
            <path 
              d="M50 200 Q150 100 250 200 T450 200" 
              stroke="white" 
              strokeWidth="2" 
              fill="none"
              className="animate-pulse"
            />
            <path 
              d="M100 150 Q200 50 300 150 T500 150" 
              stroke="white" 
              strokeWidth="1.5" 
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: '0.5s' }}
            />
            <path 
              d="M75 250 Q175 150 275 250 T475 250" 
              stroke="white" 
              strokeWidth="1" 
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: '1s' }}
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Professional
              <span className="block text-yellow-400">Logistics Solutions</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl mb-8 text-gray-200 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We provide comprehensive logistics services with global reach, 
              ensuring your cargo reaches its destination safely and on time. 
              Trust Paris Logistics for all your transportation needs.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a 
                href="/services"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors duration-300 inline-flex items-center justify-center"
              >
                Our Services
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a 
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-300 inline-flex items-center justify-center"
              >
                Get Quote
              </a>
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">15+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">50+</div>
                <div className="text-sm text-gray-300">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">1000+</div>
                <div className="text-sm text-gray-300">Happy Clients</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Truck illustration */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Truck SVG illustration */}
              <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
                <svg 
                  className="w-full h-full max-w-md" 
                  viewBox="0 0 400 300" 
                  fill="none"
                >
                  {/* Truck body */}
                  <rect x="50" y="120" width="200" height="80" fill="white" rx="10"/>
                  
                  {/* Truck cabin */}
                  <rect x="250" y="140" width="80" height="60" fill="white" rx="5"/>
                  
                  {/* Windows */}
                  <rect x="260" y="150" width="60" height="30" fill="#87CEEB" rx="3"/>
                  <rect x="70" y="130" width="160" height="40" fill="#87CEEB" rx="5"/>
                  
                  {/* Wheels */}
                  <circle cx="100" cy="220" r="25" fill="#333"/>
                  <circle cx="100" cy="220" r="15" fill="#666"/>
                  <circle cx="300" cy="220" r="25" fill="#333"/>
                  <circle cx="300" cy="220" r="15" fill="#666"/>
                  
                  {/* Headlights */}
                  <circle cx="330" cy="160" r="8" fill="#FFD700"/>
                  <circle cx="330" cy="180" r="8" fill="#FFD700"/>
                  
                  {/* Motion blur effect */}
                  <defs>
                    <linearGradient id="motionBlur" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="transparent" stopOpacity="0"/>
                      <stop offset="50%" stopColor="white" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="transparent" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="400" height="300" fill="url(#motionBlur)" opacity="0.5"/>
                  
                  {/* Road */}
                  <rect x="0" y="250" width="400" height="50" fill="#444"/>
                  <rect x="0" y="270" width="400" height="5" fill="#666"/>
                  <rect x="0" y="285" width="400" height="5" fill="#666"/>
                  <rect x="0" y="300" width="400" height="5" fill="#666"/>
                </svg>
                
                {/* Light rays effect */}
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/30 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute top-20 left-20 w-24 h-24 bg-white/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-gray-800">Global Network</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-yellow-400 rounded-lg shadow-lg p-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span className="text-sm font-semibold text-gray-800">24/7 Support</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2">Scroll to explore</span>
          <motion.div 
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
