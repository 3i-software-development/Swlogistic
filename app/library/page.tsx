"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer/Footer";
import ContactSidebar from "@/components/About/ContactSidebar";

export default function ThuVien() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-6">
          <div className="text-gray-600 text-sm">
            Home / Library
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
              {/* Library Section */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-blue-600 mb-6 uppercase">Library</h1>
                
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    Chào mừng đến với Thư viện KTO Logistics! Đây là nơi chúng tôi chia sẻ những tài liệu, 
                    báo cáo và thông tin hữu ích về ngành logistics và chuỗi cung ứng.
                  </p>
                  
                  <p>
                    Thư viện của chúng tôi bao gồm các tài liệu chuyên môn, báo cáo thị trường, 
                    hướng dẫn thủ tục hải quan, và nhiều thông tin giá trị khác để hỗ trợ doanh nghiệp 
                    trong việc tối ưu hóa hoạt động logistics.
                  </p>
                </div>
              </div>

              {/* Documents Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Tài Liệu</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-600 mb-2">Hướng Dẫn Thủ Tục Hải Quan</h3>
                    <p className="text-sm text-gray-600 mb-3">Tài liệu hướng dẫn chi tiết về các thủ tục hải quan xuất nhập khẩu</p>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Tải xuống PDF</button>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-600 mb-2">Báo Cáo Thị Trường Logistics</h3>
                    <p className="text-sm text-gray-600 mb-3">Phân tích xu hướng và dự báo thị trường logistics Việt Nam</p>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Tải xuống PDF</button>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-600 mb-2">Quy Trình Vận Chuyển</h3>
                    <p className="text-sm text-gray-600 mb-3">Hướng dẫn quy trình vận chuyển hàng hóa quốc tế</p>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Tải xuống PDF</button>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-600 mb-2">Tiêu Chuẩn Chất Lượng</h3>
                    <p className="text-sm text-gray-600 mb-3">Các tiêu chuẩn chất lượng trong dịch vụ logistics</p>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Tải xuống PDF</button>
                  </div>
                </div>
              </div>

              {/* News & Updates */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Tin Tức & Cập Nhật</h2>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Cập nhật quy định hải quan mới 2024</h3>
                    <p className="text-sm text-gray-600 mb-2">Ngày đăng: 15/01/2024</p>
                    <p className="text-sm text-gray-700">Những thay đổi quan trọng trong quy định hải quan xuất nhập khẩu...</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Xu hướng logistics xanh tại Việt Nam</h3>
                    <p className="text-sm text-gray-600 mb-2">Ngày đăng: 10/01/2024</p>
                    <p className="text-sm text-gray-700">Các giải pháp logistics thân thiện với môi trường đang được áp dụng...</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Công nghệ AI trong quản lý kho bãi</h3>
                    <p className="text-sm text-gray-600 mb-2">Ngày đăng: 05/01/2024</p>
                    <p className="text-sm text-gray-700">Ứng dụng trí tuệ nhân tạo trong tối ưu hóa quản lý kho bãi...</p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Nếu bạn cần thêm thông tin hoặc tài liệu chuyên môn, vui lòng liên hệ với chúng tôi.
                </p>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold">KTO Logistics., JSC</p>
                  <p>Hotline: <span className="text-blue-600">0909.40.0990</span></p>
                  <p>Email: <span className="text-blue-600">info@ktologistics.com.vn</span></p>
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