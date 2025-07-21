"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer/Footer";
import ContactSidebar from "@/components/About/ContactSidebar";
import AboutSubNavigation from "@/components/About/AboutSubNavigation";
import LogisticsYardImage from "@/components/About/LogisticsYardImage";

export default function CoreValues() {
  const coreValues = [
    {
      title: "PROFESSIONALISM",
      description: "Creating true values for customers and the company's sustainable values by developing effective solutions and win-win cooperation.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      details: [
        "Expert knowledge in logistics and supply chain management",
        "Continuous improvement and innovation in service delivery",
        "Building long-term partnerships based on mutual trust",
        "Maintaining the highest standards of operational excellence"
      ]
    },
    {
      title: "INTEGRITY",
      description: "To be honest and trustful in all behaviors and transactions.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      details: [
        "Transparent communication with all stakeholders",
        "Ethical business practices in every transaction",
        "Reliable and consistent service delivery",
        "Accountability for all our actions and commitments"
      ]
    },
    {
      title: "COMPLIANCE",
      description: "To follow the laws, company's rules and regulations.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      ),
      details: [
        "Adherence to international trade regulations",
        "Compliance with customs and import/export laws",
        "Following industry best practices and standards",
        "Regular audits and quality assurance procedures"
      ]
    }
  ];

  const additionalValues = [
    {
      title: "Customer Focus",
      description: "We put our customers at the heart of everything we do, understanding their unique needs and delivering tailored solutions that exceed expectations."
    },
    {
      title: "Innovation",
      description: "We continuously embrace new technologies and methodologies to improve our services and stay ahead of industry trends."
    },
    {
      title: "Sustainability",
      description: "We are committed to environmental responsibility and sustainable business practices that benefit our planet and future generations."
    },
    {
      title: "Team Excellence",
      description: "We foster a culture of collaboration, continuous learning, and professional development to achieve outstanding results together."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-6">
          <div className="text-gray-600 text-sm">
            Home / About / Core Values
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
              <h1 className="text-4xl font-bold text-blue-600 mb-6 uppercase">Core Values</h1>
              
              {/* Logistics Yard Image */}
              <LogisticsYardImage />

              {/* Main Core Values */}
              <div className="space-y-8 mb-12">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    className="bg-white border-l-4 border-blue-600 p-6 rounded-lg shadow-md"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                        {value.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-blue-600 mb-3 uppercase">{value.title}</h3>
                        <p className="text-gray-700 mb-4 leading-relaxed">{value.description}</p>
                        <ul className="space-y-2">
                          {value.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start space-x-2">
                              <svg className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                              </svg>
                              <span className="text-gray-600 text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Values Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Supporting Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {additionalValues.map((value, index) => (
                    <motion.div
                      key={value.title}
                      className="bg-gray-50 p-6 rounded-lg border border-gray-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Commitment Statement */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-200 mb-8">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Commitment</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At Paris Logistics, our core values are not just words on paper – they are the foundation 
                  of our daily operations and the principles that guide every decision we make. We believe 
                  that by living these values, we create lasting value for our customers, employees, and 
                  the communities we serve.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our commitment to these values ensures that we maintain the highest standards of 
                  professionalism, build trust through integrity, and operate with full compliance 
                  in all aspects of our business. This commitment is reflected in every shipment we 
                  handle, every customer interaction, and every partnership we build.
                </p>
              </div>

              {/* Sub Navigation */}
              <AboutSubNavigation currentPage="/gioi-thieu/core-values" />
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