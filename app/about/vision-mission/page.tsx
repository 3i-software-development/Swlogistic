"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer/Footer";
import ContactSidebar from "@/components/About/ContactSidebar";
import AboutSubNavigation from "@/components/About/AboutSubNavigation";
import LogisticsImageStrip from "@/components/About/LogisticsImageStrip";

export default function VisionMission() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-6">
          <div className="text-gray-600 text-sm">
            Home / About / Vision - Mission
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
              {/* Page Title */}
              <h1 className="text-4xl font-bold text-blue-600 mb-6 uppercase">Vision - Mission</h1>
              
              {/* Logistics Images Strip */}
              <LogisticsImageStrip />

              {/* Vision Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">I. Vision</h2>
                <div className="text-gray-700 leading-relaxed">
                  <p>
                    Our customers' needs and strategic ambition are at the centre of all we do. 
                    Our aim is to act as an essential partner to our clients by helping them build 
                    and maximize sustainable competitive advantages. We do this by helping them get 
                    their products to market quickly, efficiently, and safely. In addition to our 
                    expertly crafted and reliably delivered logistics solutions, our clients can 
                    rest assured that every interaction will be driven by integrity and respect, 
                    the fundamental principles of our business.
                  </p>
                </div>
              </div>

              {/* Mission Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">II. Mission</h2>
                <div className="text-gray-700 leading-relaxed">
                  <p>
                    Our mission is to deliver a positive, reliable experience to each and every 
                    one of our clients while offering exceptional value in the marketplace and 
                    setting the standard for professionalism in the logistic solutions we provide. 
                    In addition to operating our business profitably, we strive to operate it 
                    responsibly both for our clients and our employees, for whom our goal is to 
                    provide a safe and secure work environment.
                  </p>
                </div>
              </div>

              {/* Sub Navigation */}
              <AboutSubNavigation currentPage="/gioi-thieu/vision-mission" />
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