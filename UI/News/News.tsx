"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const newsData = [
  {
    id: 1,
    title: "WAREHOUSING AND PACKAGING OF GOODS IN TRANSIT",
    description: "Discover our comprehensive warehousing and packaging services that ensure your goods are safely stored and properly prepared for international transit.",
    date: "2024-01-15",
    category: "Warehousing",
    image: "/images/new1.jpg",
    alias: "warehousing-packaging-goods-transit",
  },
  {
    id: 2,
    title: "PHNOM PENH PORT PHOTOS",
    description: "Explore our latest collection of photos from Phnom Penh Port operations. See the bustling activity of container handling and vessel operations.",
    date: "2024-01-10",
    category: "Port Operations",
    image: "/images/new2.jpg",
    alias: "phnom-penh-port-photos",
  },
  {
    id: 3,
    title: "SIHANOUKVILLE PORT PHOTOS",
    description: "Take a visual tour of Sihanoukville Port, Cambodia's premier deep-water port. Our photos showcase the extensive container operations.",
    date: "2024-01-05",
    category: "Port Operations",
    image: "/images/new3.jpg",
    alias: "sihanoukville-port-photos",
  },
  {
    id: 4,
    title: "INTERNATIONAL FREIGHT FORWARDING SERVICES",
    description: "Learn about our comprehensive international freight forwarding services that connect businesses across continents with reliable and cost-effective solutions.",
    date: "2024-01-01",
    category: "Freight Forwarding",
    image: "/images/new4.jpg",
    alias: "international-freight-forwarding-services",
  },
];

export default function News() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      date: date.getDate().toString(),
      month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()
    };
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-6">
          <div className="text-gray-600 text-sm">
            Home / News
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Page Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Latest News & Updates</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about our latest logistics operations, port activities, and industry insights
          </p>
        </motion.div>

        {/* News Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsData.map((article, index) => {
            const { date, month } = formatDate(article.date);
            return (
              <motion.article
                key={article.id}
                className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/news/${article.alias}`}>
                  {/* Article Image */}
                  <div className="relative h-48 bg-gray-200 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                        {article.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white text-gray-700 text-xs px-2 py-1 rounded-full font-medium">
                        {new Date(article.date).toLocaleDateString('vi-VN')}
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Article Content */}
                <div className="p-6">
                  {/* Article Title */}
                  <h2 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                    <Link 
                      href={`/news/${article.alias}`}
                      className="hover:text-blue-600 transition-colors duration-200"
                    >
                      {article.title}
                    </Link>
                  </h2>
                  
                  {/* Article Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {article.description}
                  </p>
                  
                  {/* Read More Button */}
                  <Link 
                    href={`/news/${article.alias}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
                  >
                    Xem Thêm →
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* News Categories */}
        <motion.div
          className="mt-16 bg-gray-50 rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">News Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Warehousing", count: 12, color: "blue" },
              { name: "Port Operations", count: 8, color: "green" },
              { name: "Transportation", count: 15, color: "orange" },
              { name: "Industry News", count: 6, color: "purple" }
            ].map((category, index) => (
              <div
                key={category.name}
                className="bg-white p-4 rounded-lg border border-gray-200 text-center hover:shadow-md transition-shadow duration-200 cursor-pointer"
              >
                <div className={`w-12 h-12 bg-${category.color}-100 rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <svg className={`w-6 h-6 text-${category.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count} articles</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Stay Updated with Our Newsletter</h2>
            <p className="text-blue-100 mb-6">
              Get the latest news, industry insights, and updates from Paris Logistics delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
              <button 
                type="submit"
                className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
