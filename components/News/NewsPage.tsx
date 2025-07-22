"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer/Footer";
import NewsCard, { NewsArticle } from "./NewsCard";

interface NewsPageProps {
  articles: NewsArticle[];
  pageTitle?: string;
  pageDescription?: string;
  categories?: {
    name: string;
    count: number;
    color: string;
  }[];
  onLoadMore?: () => void;
  onCategoryClick?: (category: string) => void;
  onNewsletterSubscribe?: (email: string) => void;
}

const NewsPage = ({ 
  articles, 
  pageTitle = "Latest News & Updates",
  pageDescription = "Stay informed about our latest logistics operations, port activities, and industry insights",
  categories = [
    { name: "Warehousing", count: 12, color: "blue" },
    { name: "Port Operations", count: 8, color: "green" },
    { name: "Transportation", count: 15, color: "orange" },
    { name: "Industry News", count: 6, color: "purple" }
  ],
  onLoadMore,
  onCategoryClick,
  onNewsletterSubscribe
}: NewsPageProps) => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email') as string;
    if (onNewsletterSubscribe && email) {
      onNewsletterSubscribe(email);
    }
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
          <h1 className="text-4xl font-bold text-blue-600 mb-4">{pageTitle}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {pageDescription}
          </p>
        </motion.div>

        {/* News Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <NewsCard key={article.id} article={article} index={index} />
          ))}
        </div>

        {/* Load More Section */}
        {onLoadMore && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button 
              onClick={onLoadMore}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Load More Articles
            </button>
          </motion.div>
        )}

        {/* News Categories */}
        <motion.div
          className="mt-16 bg-gray-50 rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">News Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="bg-white p-4 rounded-lg border border-gray-200 text-center hover:shadow-md transition-shadow duration-200 cursor-pointer"
                onClick={() => onCategoryClick?.(category.name)}
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
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                name="email"
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

      <Footer />
    </div>
  );
};

export default NewsPage; 