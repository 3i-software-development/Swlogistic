"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "@/components/Footer/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    title: "",
    fullName: "",
    email: "",
    phone: "",
    content: "",
    sendToEmail: true
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
  };

  const handleRetype = () => {
    setFormData({
      title: "",
      fullName: "",
      email: "",
      phone: "",
      content: "",
      sendToEmail: true
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-6">
          <div className="text-gray-600 text-sm">
            Home / Contact
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form - Left Side */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl font-bold text-blue-600 mb-8 uppercase">
              WE HAVE BEST SOLUTIONS FOR OUR CUSTOMER
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title Field */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your title"
                />
              </div>

              {/* Full Name Field */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Content Field */}
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                  Content <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Enter your message content"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="sendToEmail"
                  name="sendToEmail"
                  checked={formData.sendToEmail}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="sendToEmail" className="ml-2 block text-sm text-gray-700">
                  Send this content to my Email
                </label>
              </div>

              {/* Buttons */}
              <div className="flex space-x-4 pt-4">
                <button
                  type="button"
                  onClick={handleRetype}
                  className="flex-1 bg-gray-400 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-500 transition-colors duration-200"
                >
                  RETYPE
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  SEND
                </button>
              </div>
            </form>
          </motion.div>

          {/* Container Port Illustration - Right Side */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-full min-h-[500px] bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg overflow-hidden shadow-xl">
              {/* Container Ship */}
              <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
                {/* Ocean/Water */}
                <rect x="0" y="400" width="800" height="200" fill="#1E40AF" opacity="0.9"/>
                
                {/* Water surface with waves */}
                <path d="M0 400 Q100 390 200 400 Q300 410 400 400 Q500 390 600 400 Q700 410 800 400 L800 420 L0 420 Z" fill="#3B82F6" opacity="0.7"/>
                <path d="M0 420 Q100 410 200 420 Q300 430 400 420 Q500 410 600 420 Q700 430 800 420 L800 440 L0 440 Z" fill="#60A5FA" opacity="0.5"/>
                
                {/* Large Container Ship */}
                <rect x="100" y="350" width="600" height="50" fill="#1E3A8A" rx="5"/>
                <rect x="120" y="330" width="560" height="20" fill="#1E3A8A" rx="3"/>
                <rect x="140" y="310" width="520" height="20" fill="#1E3A8A" rx="3"/>
                
                {/* Ship superstructure */}
                <rect x="650" y="280" width="80" height="30" fill="#1E3A8A"/>
                <rect x="660" y="260" width="60" height="20" fill="#1E3A8A"/>
                <rect x="670" y="240" width="40" height="20" fill="#1E3A8A"/>
                
                {/* Ship windows */}
                <rect x="680" y="285" width="8" height="8" fill="#FBBF24"/>
                <rect x="695" y="285" width="8" height="8" fill="#FBBF24"/>
                <rect x="710" y="285" width="8" height="8" fill="#FBBF24"/>
                
                <rect x="665" y="265" width="8" height="8" fill="#FBBF24"/>
                <rect x="680" y="265" width="8" height="8" fill="#FBBF24"/>
                <rect x="695" y="265" width="8" height="8" fill="#FBBF24"/>
                <rect x="710" y="265" width="8" height="8" fill="#FBBF24"/>
                
                {/* Containers on ship */}
                <rect x="120" y="320" width="40" height="30" fill="#EF4444"/>
                <rect x="170" y="320" width="40" height="30" fill="#10B981"/>
                <rect x="220" y="320" width="40" height="30" fill="#F59E0B"/>
                <rect x="270" y="320" width="40" height="30" fill="#8B5CF6"/>
                <rect x="320" y="320" width="40" height="30" fill="#06B6D4"/>
                <rect x="370" y="320" width="40" height="30" fill="#F97316"/>
                <rect x="420" y="320" width="40" height="30" fill="#84CC16"/>
                <rect x="470" y="320" width="40" height="30" fill="#EC4899"/>
                <rect x="520" y="320" width="40" height="30" fill="#14B8A6"/>
                <rect x="570" y="320" width="40" height="30" fill="#F43F5E"/>
                
                {/* Second row of containers */}
                <rect x="120" y="290" width="40" height="30" fill="#8B5CF6"/>
                <rect x="170" y="290" width="40" height="30" fill="#06B6D4"/>
                <rect x="220" y="290" width="40" height="30" fill="#F97316"/>
                <rect x="270" y="290" width="40" height="30" fill="#84CC16"/>
                <rect x="320" y="290" width="40" height="30" fill="#EC4899"/>
                <rect x="370" y="290" width="40" height="30" fill="#14B8A6"/>
                <rect x="420" y="290" width="40" height="30" fill="#F43F5E"/>
                <rect x="470" y="290" width="40" height="30" fill="#EF4444"/>
                <rect x="520" y="290" width="40" height="30" fill="#10B981"/>
                <rect x="570" y="290" width="40" height="30" fill="#F59E0B"/>
                
                {/* Third row of containers */}
                <rect x="120" y="260" width="40" height="30" fill="#06B6D4"/>
                <rect x="170" y="260" width="40" height="30" fill="#F97316"/>
                <rect x="220" y="260" width="40" height="30" fill="#84CC16"/>
                <rect x="270" y="260" width="40" height="30" fill="#EC4899"/>
                <rect x="320" y="260" width="40" height="30" fill="#14B8A6"/>
                <rect x="370" y="260" width="40" height="30" fill="#F43F5E"/>
                <rect x="420" y="260" width="40" height="30" fill="#EF4444"/>
                <rect x="470" y="260" width="40" height="30" fill="#10B981"/>
                <rect x="520" y="260" width="40" height="30" fill="#F59E0B"/>
                <rect x="570" y="260" width="40" height="30" fill="#8B5CF6"/>
                
                {/* Port Area */}
                <rect x="0" y="300" width="800" height="100" fill="#374151"/>
                
                {/* Container Yard */}
                <rect x="50" y="250" width="700" height="50" fill="#6B7280"/>
                
                {/* Gantry Cranes */}
                <rect x="80" y="200" width="20" height="100" fill="#DC2626"/>
                <rect x="75" y="190" width="30" height="10" fill="#DC2626"/>
                <rect x="85" y="180" width="10" height="10" fill="#DC2626"/>
                
                <rect x="150" y="200" width="20" height="100" fill="#DC2626"/>
                <rect x="145" y="190" width="30" height="10" fill="#DC2626"/>
                <rect x="155" y="180" width="10" height="10" fill="#DC2626"/>
                
                <rect x="220" y="200" width="20" height="100" fill="#DC2626"/>
                <rect x="215" y="190" width="30" height="10" fill="#DC2626"/>
                <rect x="225" y="180" width="10" height="10" fill="#DC2626"/>
                
                <rect x="290" y="200" width="20" height="100" fill="#DC2626"/>
                <rect x="285" y="190" width="30" height="10" fill="#DC2626"/>
                <rect x="295" y="180" width="10" height="10" fill="#DC2626"/>
                
                <rect x="360" y="200" width="20" height="100" fill="#DC2626"/>
                <rect x="355" y="190" width="30" height="10" fill="#DC2626"/>
                <rect x="365" y="180" width="10" height="10" fill="#DC2626"/>
                
                <rect x="430" y="200" width="20" height="100" fill="#DC2626"/>
                <rect x="425" y="190" width="30" height="10" fill="#DC2626"/>
                <rect x="435" y="180" width="10" height="10" fill="#DC2626"/>
                
                <rect x="500" y="200" width="20" height="100" fill="#DC2626"/>
                <rect x="495" y="190" width="30" height="10" fill="#DC2626"/>
                <rect x="505" y="180" width="10" height="10" fill="#DC2626"/>
                
                <rect x="570" y="200" width="20" height="100" fill="#DC2626"/>
                <rect x="565" y="190" width="30" height="10" fill="#DC2626"/>
                <rect x="575" y="180" width="10" height="10" fill="#DC2626"/>
                
                <rect x="640" y="200" width="20" height="100" fill="#DC2626"/>
                <rect x="635" y="190" width="30" height="10" fill="#DC2626"/>
                <rect x="645" y="180" width="10" height="10" fill="#DC2626"/>
                
                <rect x="710" y="200" width="20" height="100" fill="#DC2626"/>
                <rect x="705" y="190" width="30" height="10" fill="#DC2626"/>
                <rect x="715" y="180" width="10" height="10" fill="#DC2626"/>
                
                {/* Container stacks in yard */}
                <rect x="60" y="260" width="30" height="20" fill="#F59E0B"/>
                <rect x="100" y="260" width="30" height="20" fill="#10B981"/>
                <rect x="140" y="260" width="30" height="20" fill="#EF4444"/>
                <rect x="180" y="260" width="30" height="20" fill="#8B5CF6"/>
                <rect x="220" y="260" width="30" height="20" fill="#06B6D4"/>
                <rect x="260" y="260" width="30" height="20" fill="#F97316"/>
                <rect x="300" y="260" width="30" height="20" fill="#84CC16"/>
                <rect x="340" y="260" width="30" height="20" fill="#EC4899"/>
                <rect x="380" y="260" width="30" height="20" fill="#14B8A6"/>
                <rect x="420" y="260" width="30" height="20" fill="#F43F5E"/>
                <rect x="460" y="260" width="30" height="20" fill="#F59E0B"/>
                <rect x="500" y="260" width="30" height="20" fill="#10B981"/>
                <rect x="540" y="260" width="30" height="20" fill="#EF4444"/>
                <rect x="580" y="260" width="30" height="20" fill="#8B5CF6"/>
                <rect x="620" y="260" width="30" height="20" fill="#06B6D4"/>
                <rect x="660" y="260" width="30" height="20" fill="#F97316"/>
                <rect x="700" y="260" width="30" height="20" fill="#84CC16"/>
                
                {/* Second row of containers in yard */}
                <rect x="60" y="280" width="30" height="20" fill="#10B981"/>
                <rect x="100" y="280" width="30" height="20" fill="#EF4444"/>
                <rect x="140" y="280" width="30" height="20" fill="#8B5CF6"/>
                <rect x="180" y="280" width="30" height="20" fill="#06B6D4"/>
                <rect x="220" y="280" width="30" height="20" fill="#F97316"/>
                <rect x="260" y="280" width="30" height="20" fill="#84CC16"/>
                <rect x="300" y="280" width="30" height="20" fill="#EC4899"/>
                <rect x="340" y="280" width="30" height="20" fill="#14B8A6"/>
                <rect x="380" y="280" width="30" height="20" fill="#F43F5E"/>
                <rect x="420" y="280" width="30" height="20" fill="#F59E0B"/>
                <rect x="460" y="280" width="30" height="20" fill="#10B981"/>
                <rect x="500" y="280" width="30" height="20" fill="#EF4444"/>
                <rect x="540" y="280" width="30" height="20" fill="#8B5CF6"/>
                <rect x="580" y="280" width="30" height="20" fill="#06B6D4"/>
                <rect x="620" y="280" width="30" height="20" fill="#F97316"/>
                <rect x="660" y="280" width="30" height="20" fill="#84CC16"/>
                <rect x="700" y="280" width="30" height="20" fill="#EC4899"/>
                
                {/* Urban landscape in background */}
                <rect x="0" y="100" width="800" height="100" fill="#9CA3AF" opacity="0.3"/>
                <rect x="50" y="130" width="30" height="70" fill="#6B7280"/>
                <rect x="100" y="120" width="25" height="80" fill="#6B7280"/>
                <rect x="150" y="135" width="35" height="65" fill="#6B7280"/>
                <rect x="200" y="125" width="40" height="75" fill="#6B7280"/>
                <rect x="250" y="130" width="30" height="70" fill="#6B7280"/>
                <rect x="300" y="120" width="35" height="80" fill="#6B7280"/>
                <rect x="350" y="135" width="25" height="65" fill="#6B7280"/>
                <rect x="400" y="125" width="40" height="75" fill="#6B7280"/>
                <rect x="450" y="130" width="30" height="70" fill="#6B7280"/>
                <rect x="500" y="120" width="35" height="80" fill="#6B7280"/>
                <rect x="550" y="135" width="25" height="65" fill="#6B7280"/>
                <rect x="600" y="125" width="40" height="75" fill="#6B7280"/>
                <rect x="650" y="130" width="30" height="70" fill="#6B7280"/>
                <rect x="700" y="120" width="35" height="80" fill="#6B7280"/>
                <rect x="750" y="135" width="25" height="65" fill="#6B7280"/>
                
                {/* Green hills */}
                <path d="M0 100 Q200 70 400 100 Q600 130 800 100 L800 150 L0 150 Z" fill="#16A34A" opacity="0.6"/>
                
                {/* Small vehicles */}
                <rect x="150" y="290" width="15" height="8" fill="#374151"/>
                <rect x="300" y="290" width="15" height="8" fill="#374151"/>
                <rect x="450" y="290" width="15" height="8" fill="#374151"/>
                <rect x="600" y="290" width="15" height="8" fill="#374151"/>
                
                {/* Tugboat */}
                <rect x="720" y="380" width="40" height="15" fill="#1E40AF"/>
                <rect x="725" y="375" width="30" height="5" fill="#1E40AF"/>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 