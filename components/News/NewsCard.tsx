"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export interface NewsArticle {
  id: number;
  title: string;
  description: string;
  image?: string;
  date: string;
  category: string;
  readMoreText?: string;
  urlAlias: string;
}

interface NewsCardProps {
  article: NewsArticle;
  index?: number;
}

const NewsCard = ({ article, index = 0 }: NewsCardProps) => {
  // SVG illustrations based on category or ID
  const getArticleIllustration = (article: NewsArticle) => {
    switch (article.category.toLowerCase()) {
      case 'warehousing':
        return (
          <svg className="w-32 h-32 text-white opacity-80" viewBox="0 0 200 200" fill="currentColor">
            {/* Warehouse building */}
            <rect x="40" y="80" width="120" height="80" fill="currentColor" opacity="0.3"/>
            <rect x="50" y="90" width="100" height="60" fill="currentColor" opacity="0.5"/>
            {/* Forklifts */}
            <rect x="60" y="120" width="20" height="15" fill="currentColor"/>
            <rect x="65" y="125" width="10" height="8" fill="currentColor"/>
            <circle cx="70" cy="140" r="3" fill="currentColor"/>
            <circle cx="80" cy="140" r="3" fill="currentColor"/>
            
            <rect x="100" y="120" width="20" height="15" fill="currentColor"/>
            <rect x="105" y="125" width="10" height="8" fill="currentColor"/>
            <circle cx="110" cy="140" r="3" fill="currentColor"/>
            <circle cx="120" cy="140" r="3" fill="currentColor"/>
            
            <rect x="140" y="120" width="20" height="15" fill="currentColor"/>
            <rect x="145" y="125" width="10" height="8" fill="currentColor"/>
            <circle cx="150" cy="140" r="3" fill="currentColor"/>
            <circle cx="160" cy="140" r="3" fill="currentColor"/>
          </svg>
        );
      
      case 'port operations':
        return (
          <svg className="w-32 h-32 text-white opacity-80" viewBox="0 0 200 200" fill="currentColor">
            {/* Port/crane structure */}
            <rect x="30" y="60" width="140" height="8" fill="currentColor"/>
            <rect x="80" y="40" width="8" height="40" fill="currentColor"/>
            <rect x="70" y="30" width="28" height="8" fill="currentColor"/>
            {/* People */}
            <circle cx="60" cy="100" r="8" fill="currentColor"/>
            <rect x="56" y="108" width="8" height="20" fill="currentColor"/>
            <circle cx="140" cy="100" r="8" fill="currentColor"/>
            <rect x="136" y="108" width="8" height="20" fill="currentColor"/>
            {/* Screen/desk */}
            <rect x="90" y="110" width="30" height="20" fill="currentColor" opacity="0.7"/>
          </svg>
        );
      
      default:
        return (
          <svg className="w-32 h-32 text-white opacity-80" viewBox="0 0 200 200" fill="currentColor">
            {/* Default logistics illustration */}
            <rect x="20" y="80" width="160" height="60" fill="currentColor" opacity="0.3"/>
            {/* People with clipboard */}
            <circle cx="80" cy="100" r="8" fill="currentColor"/>
            <rect x="76" y="108" width="8" height="20" fill="currentColor"/>
            <rect x="70" y="115" width="20" height="15" fill="currentColor" opacity="0.8"/>
            
            <circle cx="120" cy="100" r="8" fill="currentColor"/>
            <rect x="116" y="108" width="8" height="20" fill="currentColor"/>
            {/* Containers/packages */}
            <rect x="140" y="90" width="30" height="40" fill="currentColor" opacity="0.6"/>
            <rect x="150" y="80" width="30" height="40" fill="currentColor" opacity="0.6"/>
          </svg>
        );
    }
  };

  return (
    <motion.article
      className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Article Image */}
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        {article.image ? (
          // If image URL is provided, use it
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
        ) : (
          // Otherwise use SVG illustration
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
            {getArticleIllustration(article)}
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
            {article.category}
          </span>
        </div>
        
        {/* Date Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-white text-gray-700 text-xs px-2 py-1 rounded-full font-medium">
            {new Date(article.date).toLocaleDateString('vi-VN')}
          </span>
        </div>
      </div>

      {/* Article Content */}
      <div className="p-6">
        {/* Article Title */}
        <h2 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
          {article.title}
        </h2>
        
        {/* Article Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {article.description}
        </p>
        
        {/* Read More Button */}
        <Link 
          href={`/tin-tuc/${article.urlAlias}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
        >
          {article.readMoreText || "Xem Thêm →"}
        </Link>
      </div>
    </motion.article>
  );
};

export default NewsCard; 