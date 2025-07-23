"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer/Footer";
import ContactSidebar from "@/components/About/ContactSidebar";
import AboutSubNavigation from "@/components/About/AboutSubNavigation";

export default function Meeting() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-6">
          <div className="text-gray-600 text-sm">
            Home / About / Meeting
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
              {/* Greetings Section */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-blue-600 mb-6 uppercase">Lời Chào</h1>
                
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    Chào mừng đến với KTO Logistics! Chúng tôi rất vui mừng được giới thiệu mình là một trong những công ty hàng đầu 
                    về logistics và quản lý chuỗi cung ứng tại Việt Nam. Với nhiều năm kinh nghiệm và đội ngũ chuyên gia tận tâm, 
                    chúng tôi đã thiết lập vị thế là đối tác tin cậy cho các doanh nghiệp trên toàn thế giới.
                  </p>
                  
                  <p>
                    Tại KTO Logistics, chúng tôi hiểu rằng sự thành công của doanh nghiệp bạn phụ thuộc vào các giải pháp logistics 
                    hiệu quả, đáng tin cậy và tiết kiệm chi phí. Đó là lý do tại sao chúng tôi cam kết cung cấp các dịch vụ logistics 
                    toàn diện đáp ứng các tiêu chuẩn chất lượng cao nhất và sự hài lòng của khách hàng.
                  </p>

                  <p>
                    Công ty chúng tôi chuyên về thủ tục hải quan, vận chuyển hàng hóa, kho bãi và dịch vụ phân phối. 
                    Chúng tôi đã xây dựng mối quan hệ mạnh mẽ với các hãng tàu, hãng bay và đối tác logistics lớn trên toàn cầu, 
                    cho phép chúng tôi cung cấp mức giá cạnh tranh và dịch vụ đáng tin cậy cho khách hàng.
                  </p>

                  <p>
                    Chúng tôi tin tưởng vào việc đầu tư liên tục cả về nguồn nhân lực và vốn tài chính để đảm bảo chúng tôi luôn 
                    đi đầu trong xu hướng ngành và tiến bộ công nghệ. Đội ngũ của chúng tôi liên tục được đào tạo và phát triển 
                    để cung cấp cho bạn dịch vụ và giải pháp tốt nhất có thể.
                  </p>

                  <p>
                    Sứ mệnh của chúng tôi là trở thành đối tác logistics chiến lược của bạn, giúp bạn điều hướng những phức tạp 
                    của thương mại quốc tế và quản lý chuỗi cung ứng. Chúng tôi cam kết mang lại giá trị thông qua các giải pháp 
                    sáng tạo, xuất sắc trong vận hành và dịch vụ khách hàng đặc biệt.
                  </p>

                  <p>
                    Dù bạn là doanh nghiệp nhỏ muốn mở rộng ra quốc tế hay tập đoàn lớn tìm cách tối ưu hóa chuỗi cung ứng, 
                    KTO Logistics luôn sẵn sàng hỗ trợ sự tăng trưởng và thành công của bạn. Chúng tôi mong muốn xây dựng 
                    mối quan hệ đối tác dài hạn với bạn và đóng góp vào sự thành công của doanh nghiệp bạn.
                  </p>

                  <p>
                    Cảm ơn bạn đã cân nhắc KTO Logistics làm đối tác logistics của mình. Chúng tôi rất hào hứng về cơ hội 
                    được phục vụ bạn và thể hiện cam kết của chúng tôi về sự xuất sắc trong mọi việc chúng tôi làm.
                  </p>
                </div>
              </div>

              {/* Sub Navigation */}
              <AboutSubNavigation currentPage="/gioi-thieu/meeting" />
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