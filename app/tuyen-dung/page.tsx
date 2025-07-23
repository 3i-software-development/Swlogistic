"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer/Footer";
import ContactSidebar from "@/components/About/ContactSidebar";

export default function TuyenDung() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-6">
          <div className="text-gray-600 text-sm">
            Home / Job
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
              {/* Job Section */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-blue-600 mb-6 uppercase">Tuyển Dụng</h1>
                
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    Chào mừng bạn đến với trang tuyển dụng của KTO Logistics! Chúng tôi đang tìm kiếm những 
                    nhân tài xuất sắc để tham gia vào đội ngũ chuyên nghiệp của chúng tôi.
                  </p>
                  
                  <p>
                    Tại KTO Logistics, chúng tôi tin rằng con người là tài sản quý giá nhất. Chúng tôi cam kết 
                    tạo môi trường làm việc năng động, chuyên nghiệp và cơ hội phát triển sự nghiệp cho tất cả nhân viên.
                  </p>
                </div>
              </div>

              {/* Company Culture */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Văn Hóa Công Ty</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-600 mb-2">Môi Trường Làm Việc</h3>
                    <p className="text-sm text-gray-600">Môi trường làm việc năng động, chuyên nghiệp và thân thiện</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-600 mb-2">Cơ Hội Phát Triển</h3>
                    <p className="text-sm text-gray-600">Cơ hội thăng tiến và phát triển sự nghiệp rõ ràng</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-600 mb-2">Đào Tạo & Học Hỏi</h3>
                    <p className="text-sm text-gray-600">Chương trình đào tạo liên tục và cập nhật kiến thức mới</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-600 mb-2">Phúc Lợi Hấp Dẫn</h3>
                    <p className="text-sm text-gray-600">Chế độ phúc lợi cạnh tranh và đãi ngộ tốt</p>
                  </div>
                </div>
              </div>

              {/* Job Listings */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Vị Trí Đang Tuyển</h2>
                
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-gray-900 text-lg">Chuyên Viên Thủ Tục Hải Quan</h3>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Đang tuyển</span>
                    </div>
                    <p className="text-gray-600 mb-3">Xử lý thủ tục hải quan xuất nhập khẩu, tư vấn khách hàng về quy trình và thủ tục</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Kinh nghiệm: 2-3 năm</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Địa điểm: TP.HCM</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Lương: Thỏa thuận</span>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm">
                      Ứng tuyển ngay
                    </button>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-gray-900 text-lg">Nhân Viên Kinh Doanh Logistics</h3>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Đang tuyển</span>
                    </div>
                    <p className="text-gray-600 mb-3">Tìm kiếm và phát triển khách hàng mới, duy trì mối quan hệ với khách hàng hiện tại</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Kinh nghiệm: 1-2 năm</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Địa điểm: TP.HCM</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Lương: Cơ bản + hoa hồng</span>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm">
                      Ứng tuyển ngay
                    </button>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-gray-900 text-lg">Nhân Viên Kho Bãi</h3>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Đang tuyển</span>
                    </div>
                    <p className="text-gray-600 mb-3">Quản lý kho bãi, kiểm tra và xử lý hàng hóa, đảm bảo quy trình kho bãi</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Kinh nghiệm: 1 năm</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Địa điểm: TP.HCM</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Lương: Thỏa thuận</span>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm">
                      Ứng tuyển ngay
                    </button>
                  </div>
                </div>
              </div>

              {/* Application Process */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Quy Trình Ứng Tuyển</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">1</div>
                    <h3 className="font-semibold text-gray-900 mb-2">Nộp Hồ Sơ</h3>
                    <p className="text-sm text-gray-600">Gửi CV và thư xin việc qua email</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">2</div>
                    <h3 className="font-semibold text-gray-900 mb-2">Sàng Lọc</h3>
                    <p className="text-sm text-gray-600">HR sẽ xem xét và sàng lọc hồ sơ</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">3</div>
                    <h3 className="font-semibold text-gray-900 mb-2">Phỏng Vấn</h3>
                    <p className="text-sm text-gray-600">Phỏng vấn với HR và trưởng bộ phận</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">4</div>
                    <h3 className="font-semibold text-gray-900 mb-2">Nhận Việc</h3>
                    <p className="text-sm text-gray-600">Ký hợp đồng và bắt đầu công việc</p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Để ứng tuyển, vui lòng gửi CV và thư xin việc đến địa chỉ email dưới đây.
                </p>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold">Phòng Nhân Sự - KTO Logistics., JSC</p>
                  <p>Email: <span className="text-blue-600">hr@ktologistics.com.vn</span></p>
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