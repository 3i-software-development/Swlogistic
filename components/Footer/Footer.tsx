"use client";

import { motion } from "framer-motion";

const Footer = () => {
  const offices = [
    {
      title: "HEAD OFFICE",
      address: "60 Nguyen Anh Thu street, DaKao, District 1, Ho Chi Minh City",
      phone: "028.628.74042 - 0909.40.0990 (Mr. Kayden)",
      fax: "028.628.74043",
      email: "paris@parislogistics.com.vn",
      website: "http://www.parislogistics.com.vn",
      hotline: "HOTLINE 24/7: 0909.40.0990",
      description: "The switchboard received and resolved service quality reflections from customers and agents."
    },
    {
      title: "DA NANG OFFICE",
      address: "586 Nguyen Huu Tho street, district Hai Chau, Da Nang",
      phone: "0937.206.960 (Mr. Victor)",
      email: "danang@parislogistics.com.vn",
      website: "http://www.parislogistics.com.vn"
    },
    {
      title: "HA NOI OFFICE",
      address: "No.9, 7 lane, Le Duc Tho street, My Dinh 2, Nam Tu Liem district, Ha Noi, Vietnam",
      phone: "077.873.4175 (Mr. Hưng)",
      email: "hanoi@parislogistics.com.vn",
      website: "http://www.parislogistics.com.vn"
    },
    {
      title: "CAN THO OFFICE",
      address: "16E Nguyen De street, An Hoa, Ninh Kieu district, Can Tho city",
      phone: "0777.319.503 (Mr. Paul)",
      email: "cantho@parislogistics.com.vn",
      website: "http://www.parislogistics.com.vn"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Office Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {offices.map((office, index) => (
            <motion.div
              key={office.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-4"
            >
              {/* Office Title */}
              <h3 className="text-lg font-bold uppercase border-b-2 border-yellow-400 pb-2">
                {office.title}
              </h3>

              {/* Address */}
              <div className="flex items-start space-x-2">
                <svg className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm leading-relaxed">{office.address}</p>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-sm">Phone: {office.phone}</p>
              </div>

              {/* Fax (only for Head Office) */}
              {office.fax && (
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <p className="text-sm">{office.fax}</p>
                </div>
              )}

              {/* Email */}
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">{office.email}</p>
              </div>

              {/* Website */}
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                </svg>
                <p className="text-sm">{office.website}</p>
              </div>

              {/* Hotline (only for Head Office) */}
              {office.hotline && (
                <div className="pt-2">
                  <p className="text-yellow-400 font-semibold text-base">{office.hotline}</p>
                  <p className="text-sm mt-2 leading-relaxed">{office.description}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-blue-200">
                © 2018 All Rights Reserved - Paris Logistics Co., Ltd
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-sm text-blue-200">
                Professional & Logistics Solutions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-colors duration-200 z-50 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;
