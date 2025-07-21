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
                <h1 className="text-4xl font-bold text-blue-600 mb-6 uppercase">Greetings</h1>
                
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    Welcome to Paris Logistics! We are delighted to introduce ourselves as one of the leading 
                    logistics and supply chain management companies in Vietnam. With years of experience and 
                    a dedicated team of professionals, we have established ourselves as a trusted partner 
                    for businesses worldwide.
                  </p>
                  
                  <p>
                    At Paris Logistics, we understand that the success of your business depends on efficient, 
                    reliable, and cost-effective logistics solutions. That's why we are committed to providing 
                    comprehensive logistics services that meet the highest standards of quality and customer satisfaction.
                  </p>

                  <p>
                    Our company specializes in customs clearance, freight forwarding, warehousing, and distribution 
                    services. We have built strong relationships with major shipping lines, airlines, and logistics 
                    partners across the globe, enabling us to offer competitive rates and reliable service to our clients.
                  </p>

                  <p>
                    We believe in ongoing investments in both human and financial capitals to ensure we stay 
                    ahead of industry trends and technological advancements. Our team continuously undergoes 
                    training and development to provide you with the best possible service and solutions.
                  </p>

                  <p>
                    Our mission is to be your strategic logistics partner, helping you navigate the complexities 
                    of international trade and supply chain management. We are committed to delivering value 
                    through innovative solutions, operational excellence, and exceptional customer service.
                  </p>

                  <p>
                    Whether you are a small business looking to expand internationally or a large corporation 
                    seeking to optimize your supply chain, Paris Logistics is here to support your growth and success. 
                    We look forward to building a long-term partnership with you and contributing to your business success.
                  </p>

                  <p>
                    Thank you for considering Paris Logistics as your logistics partner. We are excited about 
                    the opportunity to serve you and demonstrate our commitment to excellence in everything we do.
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