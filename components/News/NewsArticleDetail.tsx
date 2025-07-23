"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";

export interface NewsArticleDetail {
  id: number;
  title: string;
  description: string;
  content: string;
  date: string;
  category: string;
  author: string;
  urlAlias: string;
  images?: {
    main?: string;
    secondary?: string;
  };
  relatedArticles?: {
    id: number;
    title: string;
    description: string;
    urlAlias: string;
  }[];
}

interface NewsArticleDetailProps {
  article: NewsArticleDetail;
  breadcrumbPath?: string;
}

const NewsArticleDetail = ({ article, breadcrumbPath }: NewsArticleDetailProps) => {
  // SVG illustrations based on category
  const getMainIllustration = (category: string) => {
    switch (category.toLowerCase()) {
      case 'port operations':
        return (
          <svg className="w-full h-full max-w-4xl" viewBox="0 0 800 400" fill="none">
            {/* Ocean/Water */}
            <rect x="0" y="250" width="800" height="150" fill="#1E40AF" opacity="0.8"/>
            
            {/* Port Area */}
            <rect x="50" y="200" width="700" height="50" fill="#374151"/>
            
            {/* Container Yard */}
            <rect x="100" y="150" width="600" height="50" fill="#6B7280"/>
            
            {/* Red Gantry Cranes */}
            <rect x="120" y="100" width="20" height="100" fill="#DC2626"/>
            <rect x="115" y="90" width="30" height="10" fill="#DC2626"/>
            <rect x="125" y="80" width="10" height="10" fill="#DC2626"/>
            
            <rect x="200" y="100" width="20" height="100" fill="#DC2626"/>
            <rect x="195" y="90" width="30" height="10" fill="#DC2626"/>
            <rect x="205" y="80" width="10" height="10" fill="#DC2626"/>
            
            <rect x="280" y="100" width="20" height="100" fill="#DC2626"/>
            <rect x="275" y="90" width="30" height="10" fill="#DC2626"/>
            <rect x="285" y="80" width="10" height="10" fill="#DC2626"/>
            
            <rect x="360" y="100" width="20" height="100" fill="#DC2626"/>
            <rect x="355" y="90" width="30" height="10" fill="#DC2626"/>
            <rect x="365" y="80" width="10" height="10" fill="#DC2626"/>
            
            <rect x="440" y="100" width="20" height="100" fill="#DC2626"/>
            <rect x="435" y="90" width="30" height="10" fill="#DC2626"/>
            <rect x="445" y="80" width="10" height="10" fill="#DC2626"/>
            
            <rect x="520" y="100" width="20" height="100" fill="#DC2626"/>
            <rect x="515" y="90" width="30" height="10" fill="#DC2626"/>
            <rect x="525" y="80" width="10" height="10" fill="#DC2626"/>
            
            <rect x="600" y="100" width="20" height="100" fill="#DC2626"/>
            <rect x="595" y="90" width="30" height="10" fill="#DC2626"/>
            <rect x="605" y="80" width="10" height="10" fill="#DC2626"/>
            
            {/* Blue Container Ship */}
            <rect x="650" y="220" width="120" height="30" fill="#1E40AF"/>
            <rect x="660" y="210" width="100" height="10" fill="#1E40AF"/>
            <rect x="670" y="200" width="80" height="10" fill="#1E40AF"/>
            
            {/* Containers with logos */}
            <rect x="120" y="160" width="40" height="30" fill="#F59E0B"/>
            <text x="130" y="180" fill="white" fontSize="8" fontWeight="bold">SITC</text>
            
            <rect x="170" y="160" width="40" height="30" fill="#10B981"/>
            <text x="180" y="180" fill="white" fontSize="8" fontWeight="bold">MAERSK</text>
            
            <rect x="220" y="160" width="40" height="30" fill="#EF4444"/>
            <text x="230" y="180" fill="white" fontSize="8" fontWeight="bold">CMA</text>
            
            <rect x="270" y="160" width="40" height="30" fill="#8B5CF6"/>
            <text x="280" y="180" fill="white" fontSize="8" fontWeight="bold">MSC</text>
            
            <rect x="320" y="160" width="40" height="30" fill="#06B6D4"/>
            <text x="330" y="180" fill="white" fontSize="8" fontWeight="bold">ONE</text>
            
            <rect x="370" y="160" width="40" height="30" fill="#F97316"/>
            <text x="380" y="180" fill="white" fontSize="8" fontWeight="bold">HMM</text>
            
            {/* More container stacks */}
            <rect x="420" y="160" width="40" height="30" fill="#84CC16"/>
            <rect x="470" y="160" width="40" height="30" fill="#EC4899"/>
            <rect x="520" y="160" width="40" height="30" fill="#14B8A6"/>
            <rect x="570" y="160" width="40" height="30" fill="#F43F5E"/>
            
            {/* Urban landscape in background */}
            <rect x="0" y="50" width="800" height="100" fill="#9CA3AF" opacity="0.3"/>
            <rect x="50" y="80" width="30" height="70" fill="#6B7280"/>
            <rect x="100" y="70" width="25" height="80" fill="#6B7280"/>
            <rect x="150" y="85" width="35" height="65" fill="#6B7280"/>
            <rect x="200" y="75" width="40" height="75" fill="#6B7280"/>
            
            {/* Green hills */}
            <path d="M0 50 Q200 20 400 50 Q600 80 800 50 L800 100 L0 100 Z" fill="#16A34A" opacity="0.6"/>
            
            {/* Small vehicles */}
            <rect x="150" y="190" width="15" height="8" fill="#374151"/>
            <rect x="300" y="190" width="15" height="8" fill="#374151"/>
            <rect x="450" y="190" width="15" height="8" fill="#374151"/>
          </svg>
        );
      
      case 'warehousing':
        return (
          <svg className="w-full h-full max-w-4xl" viewBox="0 0 800 400" fill="none">
            {/* Warehouse building */}
            <rect x="50" y="100" width="700" height="250" fill="#9CA3AF" opacity="0.3"/>
            <rect x="60" y="110" width="680" height="230" fill="#D1D5DB"/>
            
            {/* Warehouse interior structure */}
            <rect x="80" y="130" width="640" height="200" fill="#F3F4F6"/>
            
            {/* Storage racks */}
            <rect x="100" y="140" width="200" height="180" fill="#E5E7EB"/>
            <rect x="110" y="150" width="180" height="160" fill="#F9FAFB"/>
            
            <rect x="320" y="140" width="200" height="180" fill="#E5E7EB"/>
            <rect x="330" y="150" width="180" height="160" fill="#F9FAFB"/>
            
            <rect x="540" y="140" width="200" height="180" fill="#E5E7EB"/>
            <rect x="550" y="150" width="180" height="160" fill="#F9FAFB"/>
            
            {/* Forklifts */}
            <rect x="120" y="280" width="25" height="15" fill="#F59E0B"/>
            <rect x="125" y="285" width="15" height="8" fill="#F59E0B"/>
            <circle cx="130" cy="300" r="3" fill="#374151"/>
            <circle cx="140" cy="300" r="3" fill="#374151"/>
            
            <rect x="200" y="280" width="25" height="15" fill="#F59E0B"/>
            <rect x="205" y="285" width="15" height="8" fill="#F59E0B"/>
            <circle cx="210" cy="300" r="3" fill="#374151"/>
            <circle cx="220" cy="300" r="3" fill="#374151"/>
            
            <rect x="280" y="280" width="25" height="15" fill="#F59E0B"/>
            <rect x="285" y="285" width="15" height="8" fill="#F59E0B"/>
            <circle cx="290" cy="300" r="3" fill="#374151"/>
            <circle cx="300" cy="300" r="3" fill="#374151"/>
            
            {/* Containers and packages */}
            <rect x="120" y="160" width="40" height="30" fill="#F59E0B"/>
            <rect x="170" y="160" width="40" height="30" fill="#10B981"/>
            <rect x="220" y="160" width="40" height="30" fill="#EF4444"/>
            <rect x="270" y="160" width="40" height="30" fill="#8B5CF6"/>
            
            <rect x="340" y="160" width="40" height="30" fill="#06B6D4"/>
            <rect x="390" y="160" width="40" height="30" fill="#F97316"/>
            <rect x="440" y="160" width="40" height="30" fill="#84CC16"/>
            <rect x="490" y="160" width="40" height="30" fill="#EC4899"/>
            
            <rect x="560" y="160" width="40" height="30" fill="#14B8A6"/>
            <rect x="610" y="160" width="40" height="30" fill="#F43F5E"/>
            <rect x="660" y="160" width="40" height="30" fill="#F59E0B"/>
            <rect x="710" y="160" width="40" height="30" fill="#10B981"/>
            
            {/* More containers on different levels */}
            <rect x="120" y="200" width="40" height="30" fill="#EF4444"/>
            <rect x="170" y="200" width="40" height="30" fill="#8B5CF6"/>
            <rect x="220" y="200" width="40" height="30" fill="#06B6D4"/>
            <rect x="270" y="200" width="40" height="30" fill="#F97316"/>
            
            <rect x="340" y="200" width="40" height="30" fill="#84CC16"/>
            <rect x="390" y="200" width="40" height="30" fill="#EC4899"/>
            <rect x="440" y="200" width="40" height="30" fill="#14B8A6"/>
            <rect x="490" y="200" width="40" height="30" fill="#F43F5E"/>
            
            <rect x="560" y="200" width="40" height="30" fill="#F59E0B"/>
            <rect x="610" y="200" width="40" height="30" fill="#10B981"/>
            <rect x="660" y="200" width="40" height="30" fill="#EF4444"/>
            <rect x="710" y="200" width="40" height="30" fill="#8B5CF6"/>
            
            {/* Loading dock */}
            <rect x="50" y="320" width="700" height="30" fill="#374151"/>
            
            {/* Trucks at loading dock */}
            <rect x="100" y="330" width="80" height="20" fill="#1E40AF"/>
            <rect x="110" y="325" width="60" height="5" fill="#1E40AF"/>
            <circle cx="120" cy="355" r="4" fill="#374151"/>
            <circle cx="160" cy="355" r="4" fill="#374151"/>
            
            <rect x="300" y="330" width="80" height="20" fill="#1E40AF"/>
            <rect x="310" y="325" width="60" height="5" fill="#1E40AF"/>
            <circle cx="320" cy="355" r="4" fill="#374151"/>
            <circle cx="360" cy="355" r="4" fill="#374151"/>
            
            <rect x="500" y="330" width="80" height="20" fill="#1E40AF"/>
            <rect x="510" y="325" width="60" height="5" fill="#1E40AF"/>
            <circle cx="520" cy="355" r="4" fill="#374151"/>
            <circle cx="560" cy="355" r="4" fill="#374151"/>
          </svg>
        );
      
      default:
        return (
          <svg className="w-full h-full max-w-4xl" viewBox="0 0 800 400" fill="none">
            {/* Default logistics illustration */}
            <rect x="50" y="200" width="700" height="150" fill="#374151"/>
            <rect x="100" y="150" width="600" height="50" fill="#6B7280"/>
            <rect x="120" y="100" width="20" height="100" fill="#DC2626"/>
            <rect x="200" y="100" width="20" height="100" fill="#DC2626"/>
            <rect x="280" y="100" width="20" height="100" fill="#DC2626"/>
            <rect x="360" y="100" width="20" height="100" fill="#DC2626"/>
            <rect x="440" y="100" width="20" height="100" fill="#DC2626"/>
            <rect x="520" y="100" width="20" height="100" fill="#DC2626"/>
            <rect x="600" y="100" width="20" height="100" fill="#DC2626"/>
          </svg>
        );
    }
  };

  const getSecondaryIllustration = (category: string) => {
    switch (category.toLowerCase()) {
      case 'port operations':
        return (
          <svg className="w-full h-full max-w-2xl" viewBox="0 0 600 300" fill="none">
            {/* Port structure */}
            <rect x="50" y="150" width="500" height="100" fill="#374151"/>
            
            {/* Container yard */}
            <rect x="80" y="120" width="440" height="30" fill="#6B7280"/>
            
            {/* Red cranes */}
            <rect x="100" y="80" width="15" height="70" fill="#DC2626"/>
            <rect x="95" y="70" width="25" height="10" fill="#DC2626"/>
            
            <rect x="150" y="80" width="15" height="70" fill="#DC2626"/>
            <rect x="145" y="70" width="25" height="10" fill="#DC2626"/>
            
            <rect x="200" y="80" width="15" height="70" fill="#DC2626"/>
            <rect x="195" y="70" width="25" height="10" fill="#DC2626"/>
            
            <rect x="250" y="80" width="15" height="70" fill="#DC2626"/>
            <rect x="245" y="70" width="25" height="10" fill="#DC2626"/>
            
            <rect x="300" y="80" width="15" height="70" fill="#DC2626"/>
            <rect x="295" y="70" width="25" height="10" fill="#DC2626"/>
            
            <rect x="350" y="80" width="15" height="70" fill="#DC2626"/>
            <rect x="345" y="70" width="25" height="10" fill="#DC2626"/>
            
            <rect x="400" y="80" width="15" height="70" fill="#DC2626"/>
            <rect x="395" y="70" width="25" height="10" fill="#DC2626"/>
            
            <rect x="450" y="80" width="15" height="70" fill="#DC2626"/>
            <rect x="445" y="70" width="25" height="10" fill="#DC2626"/>
            
            {/* Containers */}
            <rect x="90" y="130" width="30" height="20" fill="#F59E0B"/>
            <rect x="130" y="130" width="30" height="20" fill="#10B981"/>
            <rect x="170" y="130" width="30" height="20" fill="#EF4444"/>
            <rect x="210" y="130" width="30" height="20" fill="#8B5CF6"/>
            <rect x="250" y="130" width="30" height="20" fill="#06B6D4"/>
            <rect x="290" y="130" width="30" height="20" fill="#F97316"/>
            <rect x="330" y="130" width="30" height="20" fill="#84CC16"/>
            <rect x="370" y="130" width="30" height="20" fill="#EC4899"/>
            <rect x="410" y="130" width="30" height="20" fill="#14B8A6"/>
            
            {/* Tugboat */}
            <rect x="520" y="200" width="40" height="15" fill="#1E40AF"/>
            <rect x="525" y="195" width="30" height="5" fill="#1E40AF"/>
            
            {/* Green hill background */}
            <path d="M0 80 Q150 40 300 80 Q450 120 600 80 L600 120 L0 120 Z" fill="#16A34A" opacity="0.7"/>
          </svg>
        );
      
      default:
        return (
          <svg className="w-full h-full max-w-2xl" viewBox="0 0 600 300" fill="none">
            {/* Default secondary illustration */}
            <rect x="50" y="50" width="500" height="200" fill="#F3F4F6"/>
            <rect x="60" y="60" width="480" height="180" fill="#FFFFFF"/>
            <rect x="80" y="80" width="150" height="120" fill="#E5E7EB"/>
            <rect x="90" y="90" width="130" height="100" fill="#F9FAFB"/>
            <rect x="250" y="80" width="150" height="120" fill="#E5E7EB"/>
            <rect x="260" y="90" width="130" height="100" fill="#F9FAFB"/>
            <rect x="420" y="80" width="150" height="120" fill="#E5E7EB"/>
            <rect x="430" y="90" width="130" height="100" fill="#F9FAFB"/>
          </svg>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-6">
          <div className="text-gray-600 text-sm">
            {breadcrumbPath || `Home / News / ${article.title}`}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold text-blue-600 mb-4">{article.title}</h1>
            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
              <span>Published: {new Date(article.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
              <span>•</span>
              <span>Category: {article.category}</span>
              <span>•</span>
              <span>Author: {article.author}</span>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              {article.description}
            </p>
          </motion.div>

          {/* Main Image Section */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{article.title}</h2>
            
            {/* Main Image */}
            <div className="relative mb-6">
              <div className="w-full h-96 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg overflow-hidden">
                {article.images?.main ? (
                  <img 
                    src={article.images.main} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    {getMainIllustration(article.category)}
                  </div>
                )}
                
                {/* Image caption */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm bg-black bg-opacity-50 px-3 py-2 rounded">
                    {article.title} - {article.category} operations
                  </p>
                </div>
              </div>
            </div>

            {/* Secondary Image */}
            {article.images?.secondary && (
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg overflow-hidden">
                  {article.images.secondary ? (
                    <img 
                      src={article.images.secondary} 
                      alt={`${article.title} - Secondary view`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      {getSecondaryIllustration(article.category)}
                    </div>
                  )}
                  
                  {/* Image caption */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm bg-black bg-opacity-50 px-3 py-2 rounded">
                      Additional view of {article.category.toLowerCase()} operations
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Article Content */}
          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Related Articles */}
          {article.relatedArticles && article.relatedArticles.length > 0 && (
            <motion.div
              className="mt-12 pt-8 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {article.relatedArticles.map((relatedArticle) => (
                  <Link key={relatedArticle.id} href={`/news/${relatedArticle.urlAlias}`} className="block group">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                      <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {relatedArticle.title}
                      </h4>
                      <p className="text-gray-600 text-sm mt-2">{relatedArticle.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* Back to News */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link 
              href="/news"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to News
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewsArticleDetail; 