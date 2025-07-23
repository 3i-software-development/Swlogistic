"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer/Footer";

export default function GioiThieu() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-6">
          <div className="text-gray-600 text-sm">
            Home / About
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area - Left Side */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* About Section */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-blue-600 mb-6 uppercase">About</h1>
                
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    Được thành lập vào năm 2015, Công ty cổ phần Giao nhận KTO (KTO Logistics., JSC) nay là một trong những doanh nghiệp cung cấp dịch vụ logistics tổng hợp hàng đầu khu vực, với đội ngũ chuyên gia logistics có kiến thức và chuyên môn cao.
                  </p>
                  
                  <p>
                    Chúng tôi liên tục cải tiến để đưa đến cho khách hàng đa dạng, tổng hợp các giải pháp logistics trọn gói giúp đáp ứng các nhu cầu ngày càng phức tạp của khách hàng, cả ở Việt Nam và trên toàn thế giới. Với tư duy toàn cầu và triết lý kinh doanh lấy khách hàng làm trọng tâm phục vụ, kết hợp với chuyên môn và những sáng kiến cải tiến công nghệ tân tiến, chúng tôi luôn cải tiến chất lượng dịch vụ để vượt xa sự mong đợi của khách hàng, vì sự phát triển và thành công của khách hàng cũng như của chính chúng tôi.
                  </p>
                </div>
              </div>

              {/* Services Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Dịch Vụ Chính</h2>
                <p className="text-gray-700 mb-4">Chúng tôi cung cấp các dịch vụ logistics toàn diện:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-600 mb-2">Customs Clearance</h3>
                    <p className="text-sm text-gray-600">Thủ tục hải quan nhanh chóng và chuyên nghiệp</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-600 mb-2">Warehouse</h3>
                    <p className="text-sm text-gray-600">Kho bãi hiện đại với hệ thống quản lý tiên tiến</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-600 mb-2">Inland Haulage</h3>
                    <p className="text-sm text-gray-600">Vận chuyển nội địa an toàn và đúng hẹn</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-600 mb-2">International Freight Forwarding</h3>
                    <p className="text-sm text-gray-600">Vận chuyển quốc tế với mạng lưới toàn cầu</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-600 mb-2">Temperature-Controlled Transport</h3>
                    <p className="text-sm text-gray-600">Vận chuyển hàng hóa cần kiểm soát nhiệt độ</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-600 mb-2">Project Cargoes</h3>
                    <p className="text-sm text-gray-600">Vận chuyển hàng dự án đặc biệt</p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mb-8">
                <p className="text-gray-700 mb-4">
                  Nếu bạn có nhu cầu vận chuyển hàng hóa, đừng ngần ngại liên hệ với chúng tôi.
                </p>
                <p className="text-gray-700 mb-6">
                  Chúng tôi mong muốn thiết lập mối quan hệ hợp tác thành công với quý công ty trong tương lai.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">Trân trọng!</p>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold">KTO Logistics., JSC</p>
                  <p>Hotline: <span className="text-blue-600">0909.40.0990</span></p>
                  <p>Email: <span className="text-blue-600">info@ktologistics.com.vn</span></p>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-300">
                  <p className="font-bold text-gray-900 mb-2">CÔNG TY CỔ PHẦN GIAO NHẬN KTO</p>
                  <div className="space-y-1 text-gray-700">
                    <p>Địa chỉ: 60 Nguyễn Văn Thủ, Phường Đakao, Quận 1, TP. Hồ Chí Minh</p>
                    <p>Điện thoại: <span className="text-blue-600">028.628.74042</span></p>
                    <p>Hotline: <span className="text-blue-600">0909.40.0990</span></p>
                    <p>Website: <span className="text-blue-600">www.ktologistics.com.vn</span></p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Right Side */}
          <div className="lg:col-span-1">
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
                  <h3 className="text-lg font-bold">KTO LOGISTICS</h3>
                  <p className="text-sm text-blue-200">PROFESSIONAL & LOGICAL</p>
                </div>
              </div>

              {/* Company Name */}
              <h4 className="text-lg font-bold mb-6">CÔNG TY CỔ PHẦN GIAO NHẬN KTO</h4>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-200 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm">
                    60 Nguyễn Văn Thủ, Phường Đakao, Quận 1, TP. Hồ Chí Minh, Việt Nam
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p className="text-sm">Điện thoại: <span className="font-semibold">028.628.74042</span></p>
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
                  <p className="text-sm">Email: <span className="font-semibold">info@ktologistics.com.vn</span></p>
                </div>

                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                  </svg>
                  <p className="text-sm">Website: <span className="font-semibold">www.ktologistics.com.vn</span></p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 