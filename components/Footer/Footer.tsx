"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/Asset/image/logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-6 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
          {/* Left Side - KTO Logistics Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {/* Logo */}
            <div className="flex items-center mb-4">
              <div className="w-24 h-12 mr-3">
                <Image
                  src={logo}
                  width={96}
                  height={48}
                  alt="KTO Logistics Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* <div>
                <h2 className="text-2xl font-bold text-yellow-500">KTO</h2>
                <p className="text-sm text-gray-400">Logistics</p>
              </div> */}
            </div>

            {/* Contact Details */}
            <div className="space-y-2 text-sm">
              <p>Tel.: <span className="text-gray-200">(84-4) 38135888</span></p>
              <p>Hotline: <span className="text-gray-200">0936113738</span></p>
              <p>E-mail: <span className="text-gray-200">admin@ktologistics.com.vn</span></p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3 pt-4">
              <div className="w-8 h-8 border-2 border-yellow-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </div>
              <div className="w-8 h-8 border-2 border-yellow-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div className="w-8 h-8 border-2 border-yellow-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a9.981 9.981 0 0 0-9.938 9.939 9.981 9.981 0 0 0 9.938 9.938c4.467 0 8.529-3.249 9.284-7.356z"/>
                </svg>
              </div>
              <div className="w-8 h-8 border-2 border-yellow-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div className="w-8 h-8 border-2 border-yellow-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Office Addresses */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Head Office */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-200">Trụ Sở</h3>
              <p className="text-sm leading-relaxed">
                Tầng 21, Capital Tower, 109 Trần Hưng Đạo, phường Cửa Nam, quận Hoàn Kiếm, Hà Nội, Việt Nam
              </p>
              <a href="#" className="text-yellow-500 text-sm hover:text-yellow-400 transition-colors">
                View Map
              </a>
            </div>

            {/* Branch Office */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-200">Văn Phòng</h3>
              <p className="text-sm leading-relaxed">
                N02T2 Khu đô thị Ngoại Giao đoàn, Xuân Tảo, Quận Bắc Từ Liêm, Hà Nội, Việt Nam
              </p>
              <a href="#" className="text-yellow-500 text-sm hover:text-yellow-400 transition-colors">
                View Map
              </a>
            </div>
          </motion.div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-gray-600 mb-4"></div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-xl font-bold text-yellow-500 uppercase">
            Solution for your business
          </h3>
        </motion.div>
      </div>

      {/* Floating Chat Widget */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 z-50 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;
