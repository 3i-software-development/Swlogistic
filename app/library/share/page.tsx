"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer/Footer";
import ContactSidebar from "@/components/About/ContactSidebar";

export default function Share() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-6">
          <div className="text-gray-600 text-sm">
            Home / Library / Share
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
              {/* Share Section */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-blue-600 mb-6 uppercase">Share</h1>
                
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    Chào mừng đến với trang Share của KTO Logistics! Đây là nơi chúng tôi chia sẻ những tài liệu, 
                    thông tin và kiến thức hữu ích về ngành logistics với cộng đồng.
                  </p>
                  
                  <p>
                    Chúng tôi tin rằng việc chia sẻ kiến thức và kinh nghiệm sẽ giúp phát triển ngành logistics 
                    tại Việt Nam và tạo ra giá trị cho tất cả các bên liên quan.
                  </p>
                </div>
              </div>

              {/* Sharing Categories */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Danh Mục Chia Sẻ</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-600 mb-3 text-lg">Tài Liệu Chuyên Môn</h3>
                    <p className="text-gray-600 mb-4">Chia sẻ các tài liệu, báo cáo và nghiên cứu về logistics</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Báo cáo thị trường logistics</li>
                      <li>• Hướng dẫn thủ tục hải quan</li>
                      <li>• Quy trình vận chuyển quốc tế</li>
                      <li>• Tiêu chuẩn chất lượng</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-600 mb-3 text-lg">Kinh Nghiệm Thực Tế</h3>
                    <p className="text-gray-600 mb-4">Chia sẻ các case study và kinh nghiệm từ dự án thực tế</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Case study dự án lớn</li>
                      <li>• Giải pháp xử lý vấn đề</li>
                      <li>• Kinh nghiệm quốc tế</li>
                      <li>• Best practices</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-purple-600 mb-3 text-lg">Công Nghệ & Đổi Mới</h3>
                    <p className="text-gray-600 mb-4">Chia sẻ về công nghệ mới và xu hướng đổi mới trong logistics</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Công nghệ AI/ML</li>
                      <li>• Blockchain trong logistics</li>
                      <li>• IoT và tracking</li>
                      <li>• Digital transformation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                    <h3 className="font-semibold text-orange-600 mb-3 text-lg">Đào Tạo & Phát Triển</h3>
                    <p className="text-gray-600 mb-4">Chia sẻ tài liệu đào tạo và phát triển kỹ năng</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Khóa học online</li>
                      <li>• Webinar và workshop</li>
                      <li>• Tài liệu đào tạo</li>
                      <li>• Chứng chỉ chuyên môn</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Recent Shares */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Chia Sẻ Gần Đây</h2>
                
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">Hướng dẫn thủ tục hải quan mới 2024</h3>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">PDF</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Ngày chia sẻ: 20/01/2024</p>
                    <p className="text-sm text-gray-700 mb-3">Tài liệu hướng dẫn chi tiết về các thay đổi trong quy định hải quan xuất nhập khẩu năm 2024...</p>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Tải xuống</button>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">Case study: Dự án vận chuyển hàng dự án lớn</h3>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Case Study</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Ngày chia sẻ: 18/01/2024</p>
                    <p className="text-sm text-gray-700 mb-3">Chia sẻ kinh nghiệm thực hiện dự án vận chuyển hàng dự án lớn cho khách hàng...</p>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Xem chi tiết</button>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">Webinar: Xu hướng logistics xanh</h3>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Video</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Ngày chia sẻ: 15/01/2024</p>
                    <p className="text-sm text-gray-700 mb-3">Buổi webinar về xu hướng logistics xanh và các giải pháp bền vững...</p>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Xem video</button>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Nếu bạn muốn chia sẻ tài liệu hoặc đóng góp nội dung, vui lòng liên hệ với chúng tôi.
                </p>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold">KTO Logistics., JSC</p>
                  <p>Email: <span className="text-blue-600">share@ktologistics.com.vn</span></p>
                  <p>Hotline: <span className="text-blue-600">0909.40.0990</span></p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Right Side */}
          <ContactSidebar />
        </div>
      </div>

      <Footer />
    </div>
  );
} 