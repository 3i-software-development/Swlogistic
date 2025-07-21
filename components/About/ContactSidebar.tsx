"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ContactSidebarProps {
  className?: string;
}

const ContactSidebar = ({ className = "" }: ContactSidebarProps) => {
  return (
    <div className={`lg:col-span-1 ${className}`}>
      <motion.div
        className="bg-blue-600 text-white p-6 rounded-lg relative"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Angled corner effect */}
        <div className="absolute top-0 right-0 w-8 h-8 bg-white transform rotate-45 translate-x-4 -translate-y-4"></div>
        
        {/* Logo */}
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold">PARIS LOGISTICS</h3>
            <p className="text-sm text-blue-200">PROFESSIONAL & LOGICAL</p>
          </div>
        </div>

        {/* Company Name */}
        <h4 className="text-lg font-bold mb-6">CÔNG TY TNHH PARIS LOGISTICS</h4>

        {/* Contact Details */}
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <svg className="w-5 h-5 text-blue-200 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-sm">
              60 Nguyễn Văn Thủ, Phường Đakao Quận 1, Thành phố Hồ Chí Minh, Việt Nam
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-blue-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <p className="text-sm">Phone: <span className="font-semibold">028.628.74042</span></p>
          </div>

          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-blue-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p className="text-sm">028.628.74043</p>
          </div>

          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-blue-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <p className="text-sm">Email: <span className="font-semibold">parislogistics@parislogistics.com.vn</span></p>
          </div>

          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-blue-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
            </svg>
            <p className="text-sm">Website: <span className="font-semibold">http://www.parislogistics.com.vn</span></p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSidebar; 