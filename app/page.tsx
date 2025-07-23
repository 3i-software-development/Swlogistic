"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import OurServices from "@/components/Services/OurService";
import NewsHome from "@/components/News/NewsHome";
import Partners from "@/components/Partners/Partners";

// Import images from Asset folder
import productionLogistics from "@/assets/image/Production_Logistics_Services.jpg";
import inlineImages from "@/assets/image/inline-images-800x450-2.webp";
import nganhLogistic from "@/assets/image/Nganh-logistic-la-gi.webp";
import image2 from "@/assets/image/image-2-1024x666.jpeg";

// Define types for better TypeScript support
type Slide = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  bgColor: string;
  textColor: string;
  buttonText: string;
  buttonLink: string;
};

type AboutData = {
  title: string;
  description: string;
  description2: string;
  stats: { number: string; label: string; }[];
  features: { title: string; description: string; icon: string; }[];
};

// Service for fetching carousel data
const CarouselService = {
  // Mock API function - replace with your actual API endpoint
  async getCarouselSlides() {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Return mock data - replace this with actual API call
    return [
      {
        id: 1,
        title: "Professional Logistics Solutions",
        subtitle: "Global Reach, Local Expertise",
        description: "We provide comprehensive logistics services with worldwide coverage, ensuring your cargo reaches its destination safely and efficiently.",
        bgColor: "from-blue-600 to-blue-800",
        textColor: "text-white",
        buttonText: "Our Services",
        buttonLink: "/services"
      },
      {
        id: 2,
        title: "Customs Clearance Services",
        subtitle: "Fast & Reliable Processing",
        description: "Expert customs clearance services to streamline your import/export operations and reduce delays.",
        bgColor: "from-green-600 to-green-800",
        textColor: "text-white",
        buttonText: "Learn More",
        buttonLink: "/services/logistic/customs-clearance"
      },
      {
        id: 3,
        title: "Warehouse & Distribution",
        subtitle: "Strategic Storage Solutions",
        description: "Modern warehouse facilities with advanced inventory management systems for optimal storage and distribution.",
        bgColor: "from-orange-600 to-orange-800",
        textColor: "text-white",
        buttonText: "View Facilities",
        buttonLink: "/services/logistic/warehouse"
      },
      {
        id: 4,
        title: "International Freight Forwarding",
        subtitle: "Seamless Global Transportation",
        description: "End-to-end freight forwarding solutions connecting businesses across continents with reliable and cost-effective shipping options.",
        bgColor: "from-purple-600 to-purple-800",
        textColor: "text-white",
        buttonText: "Get Quote",
        buttonLink: "/services/logistic/international-freight-forwarding"
      }
    ];
  },

  // Real API function example (uncomment and modify as needed)
  /*
  async getCarouselSlides() {
    try {
      const response = await fetch('/api/carousel-slides');
      if (!response.ok) {
        throw new Error('Failed to fetch carousel data');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching carousel data:', error);
      return []; // Return empty array or fallback data
    }
  }
  */
};

// Service for fetching about section data
const AboutService = {
  async getAboutData(): Promise<AboutData> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return {
      title: "KTO Logistics",
      description: "Được thành lập vào năm 2015, Công ty cổ phần Giao nhận KTO (KTO Logistics., JSC) nay là một trong những doanh nghiệp cung cấp dịch vụ logistics tổng hợp hàng đầu khu vực, với đội ngũ chuyên gia logistics có kiến thức và chuyên môn cao.",
      description2: "Chúng tôi liên tục cải tiến để đưa đến cho khách hàng đa dạng, tổng hợp các giải pháp logistics trọn gói giúp đáp ứng các nhu cầu ngày càng phức tạp của khách hàng, cả ở Việt Nam và trên toàn thế giới. Với tư duy toàn cầu và triết lý kinh doanh lấy khách hàng làm trọng tâm phục vụ, kết hợp với chuyên môn và những sáng kiến cải tiến công nghệ tân tiến, chúng tôi luôn cải tiến chất lượng dịch vụ để vượt xa sự mong đợi của khách hàng, vì sự phát triển và thành công của khách hàng cũng như của chính chúng tôi.",
      stats: [
        { number: "8+", label: "Năm Kinh Nghiệm" },
        { number: "50+", label: "Quốc Gia Phục Vụ" },
        { number: "1000+", label: "Khách Hàng Hài Lòng" }
      ],
      features: [
        {
          title: "Mạng Lưới Toàn Cầu",
          description: "Phủ sóng rộng khắp thế giới với các đối tác chiến lược",
          icon: "globe"
        },
        {
          title: "Hỗ Trợ 24/7",
          description: "Dịch vụ khách hàng và theo dõi hàng hóa suốt ngày đêm",
          icon: "clock"
        },
        {
          title: "Công Nghệ Tiên Tiến",
          description: "Hệ thống quản lý logistics hiện đại và sáng tạo",
          icon: "chip"
        }
      ]
    };
  }
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState<Slide[]>([]);
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch carousel data
  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        const carouselData = await CarouselService.getCarouselSlides();
        setSlides(carouselData);
      } catch (error) {
        console.error('Error fetching carousel data:', error);
        // Fallback to empty array or default data
        setSlides([]);
      }
    };

    fetchCarouselData();
  }, []);

  // Fetch about section data
  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const about = await AboutService.getAboutData();
        setAboutData(about);
      } catch (error) {
        console.error('Error fetching about data:', error);
        setAboutData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    if (slides.length === 0) return;
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (slides.length === 0) return;
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow">
        {/* Hero Carousel Section */}
        {slides.length > 0 && (
          <section className="relative h-screen overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={currentSlide === 0 ? productionLogistics : 
                         currentSlide === 1 ? inlineImages :
                         currentSlide === 2 ? nganhLogistic : image2}
                    alt={slides[currentSlide].title}
                    fill
                    className="object-cover"
                    priority={currentSlide === 0}
                  />
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex items-center">
                  <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      {/* Text Content */}
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={`${slides[currentSlide].textColor}`}
                      >
                        <motion.h1 
                          className="text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                        >
                          {slides[currentSlide].title}
                        </motion.h1>
                        <motion.p 
                          className="text-xl mb-6 opacity-90"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.6 }}
                        >
                          {slides[currentSlide].subtitle}
                        </motion.p>
                        <motion.p 
                          className="text-lg mb-8 leading-relaxed opacity-80"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.8 }}
                        >
                          {slides[currentSlide].description}
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 1 }}
                          className="flex flex-col sm:flex-row gap-4"
                        >
                          <a 
                            href={slides[currentSlide].buttonLink} 
                            className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center"
                          >
                            {slides[currentSlide].buttonText}
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </a>
                          <a 
                            href="/lien-he" 
                            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-300 inline-flex items-center justify-center"
                          >
                            Get Quote
                          </a>
                        </motion.div>
                      </motion.div>

                      {/* Right side - Empty for now, can add additional content later */}
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative hidden lg:block"
                      >
                        {/* This space can be used for additional content or kept empty */}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-colors duration-200 z-20"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-colors duration-200 z-20"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </section>
        )}

        {/* About Section */}
        {aboutData && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    About <span className="text-blue-600">{aboutData.title}</span>
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {aboutData.description}
                  </p>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {aboutData.description2}
                  </p>
                  <div className="grid grid-cols-3 gap-6">
                    {aboutData.stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                    <div className="space-y-4">
                      {aboutData.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold">{feature.title}</h4>
                            <p className="text-sm opacity-90">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )}

        {/* Services Section */}
        <OurServices />
        <NewsHome />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
