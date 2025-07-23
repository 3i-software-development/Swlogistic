"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer/Footer";
import ContactSidebar from "@/components/About/ContactSidebar";

export default function LegalDocuments() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-6">
          <div className="text-gray-600 text-sm">
            Home / Library / Legal Documents
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
              {/* Legal Documents Section */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-blue-600 mb-6 uppercase">Legal Documents</h1>
                
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    Chào mừng đến với trang Legal Documents của KTO Logistics! Đây là nơi chúng tôi cung cấp 
                    các tài liệu pháp lý, hợp đồng mẫu và thông tin về tuân thủ pháp luật trong ngành logistics.
                  </p>
                  
                  <p>
                    Chúng tôi cam kết tuân thủ đầy đủ các quy định pháp luật và đảm bảo tính minh bạch 
                    trong tất cả các giao dịch và hoạt động kinh doanh.
                  </p>
                </div>
              </div>

              {/* Document Categories */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Danh Mục Tài Liệu Pháp Lý</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                    <h3 className="font-semibold text-red-600 mb-3 text-lg">Hợp Đồng Mẫu</h3>
                    <p className="text-gray-600 mb-4">Các mẫu hợp đồng chuẩn cho dịch vụ logistics</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Hợp đồng vận chuyển hàng hóa</li>
                      <li>• Hợp đồng kho bãi</li>
                      <li>• Hợp đồng thủ tục hải quan</li>
                      <li>• Hợp đồng freight forwarding</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-600 mb-3 text-lg">Quy Định Pháp Luật</h3>
                    <p className="text-gray-600 mb-4">Các quy định pháp luật liên quan đến logistics</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Luật Hải quan</li>
                      <li>• Nghị định về logistics</li>
                      <li>• Thông tư hướng dẫn</li>
                      <li>• Quyết định của Bộ GTVT</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-600 mb-3 text-lg">Chứng Chỉ & Giấy Phép</h3>
                    <p className="text-gray-600 mb-4">Thông tin về chứng chỉ và giấy phép cần thiết</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Giấy phép kinh doanh</li>
                      <li>• Chứng chỉ ISO</li>
                      <li>• Giấy phép vận tải</li>
                      <li>• Chứng nhận chất lượng</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-purple-600 mb-3 text-lg">Tuân Thủ & Bảo Mật</h3>
                    <p className="text-gray-600 mb-4">Chính sách tuân thủ và bảo mật thông tin</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Chính sách bảo mật</li>
                      <li>• Quy định GDPR</li>
                      <li>• Tuân thủ AML/KYC</li>
                      <li>• Bảo vệ dữ liệu</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Available Documents */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Tài Liệu Có Sẵn</h2>
                
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">Hợp đồng vận chuyển hàng hóa quốc tế</h3>
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Contract</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Cập nhật: 15/01/2024</p>
                    <p className="text-sm text-gray-700 mb-3">Mẫu hợp đồng chuẩn cho dịch vụ vận chuyển hàng hóa quốc tế, bao gồm các điều khoản và điều kiện...</p>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Tải xuống PDF</button>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">Quy định mới về thủ tục hải quan 2024</h3>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Regulation</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Cập nhật: 10/01/2024</p>
                    <p className="text-sm text-gray-700 mb-3">Tổng hợp các quy định mới về thủ tục hải quan xuất nhập khẩu có hiệu lực từ năm 2024...</p>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Tải xuống PDF</button>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">Chính sách bảo mật thông tin khách hàng</h3>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Policy</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Cập nhật: 05/01/2024</p>
                    <p className="text-sm text-gray-700 mb-3">Chính sách bảo mật thông tin khách hàng và tuân thủ quy định GDPR...</p>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Tải xuống PDF</button>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">Hướng dẫn tuân thủ AML/KYC</h3>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Guide</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Cập nhật: 01/01/2024</p>
                    <p className="text-sm text-gray-700 mb-3">Hướng dẫn tuân thủ quy định chống rửa tiền và xác minh khách hàng...</p>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Tải xuống PDF</button>
                  </div>
                </div>
              </div>

              {/* Legal Notice */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Thông Báo Pháp Lý</h2>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="font-semibold text-yellow-800 mb-3">Lưu Ý Quan Trọng</h3>
                  <div className="space-y-3 text-sm text-yellow-700">
                    <p>• Các tài liệu này chỉ mang tính chất tham khảo và hướng dẫn</p>
                    <p>• Vui lòng tham khảo ý kiến luật sư trước khi sử dụng cho mục đích thương mại</p>
                    <p>• KTO Logistics không chịu trách nhiệm về việc sử dụng sai mục đích</p>
                    <p>• Các quy định pháp luật có thể thay đổi, vui lòng cập nhật thường xuyên</p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Để được tư vấn pháp lý hoặc yêu cầu tài liệu cụ thể, vui lòng liên hệ với chúng tôi.
                </p>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold">Phòng Pháp Chế - KTO Logistics., JSC</p>
                  <p>Email: <span className="text-blue-600">legal@ktologistics.com.vn</span></p>
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