"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NewsArticle } from "@/components/News/NewsCard";
import NewsService from "@/services/newsService";

export default function NewsSection() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const data = await NewsService.getArticles();
        // Chỉ lấy 3 bài viết đầu tiên cho trang home
        setArticles(data.slice(0, 3));
      } catch (err) {
        console.error('Error fetching articles:', err);
        // Fallback to mock data if API fails
        setArticles([
          {
            id: 1,
            title: "WAREHOUSING AND PACKAGING OF GOODS IN TRANSIT",
            description: "Discover our comprehensive warehousing and packaging services that ensure your goods are safely stored and properly prepared for international transit.",
            date: "2024-01-15",
            category: "Warehousing",
            readMoreText: "Xem Thêm →",
            urlAlias: "warehousing-packaging-goods-transit"
          },
          {
            id: 2,
            title: "PHNOM PENH PORT PHOTOS",
            description: "Explore our latest collection of photos from Phnom Penh Port operations. See the bustling activity of container handling and vessel operations.",
            date: "2024-01-10",
            category: "Port Operations",
            readMoreText: "Xem Thêm →",
            urlAlias: "phnom-penh-port-photos"
          },
          {
            id: 3,
            title: "SIHANOUKVILLE PORT PHOTOS",
            description: "Take a visual tour of Sihanoukville Port, Cambodia's premier deep-water port. Our photos showcase the extensive container operations.",
            date: "2024-01-05",
            category: "Port Operations",
            readMoreText: "Xem Thêm →",
            urlAlias: "sihanoukville-port-photos"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      date: date.getDate().toString(),
      month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()
    };
  };

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="text-center mt-12 mb-12">
          <h2 className="text-4xl font-semibold text-blue-600">NEWS</h2>
          <div className="mt-2 w-12 h-1 mx-auto bg-gray-300 rounded-full"></div>
        </div>
        <div className="max-w-screen-2xl mx-auto px-4 flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="text-center mt-12 mb-12">
        <h2 className="text-4xl font-semibold text-blue-600">NEWS</h2>
        <div className="mt-2 w-12 h-1 mx-auto bg-gray-300 rounded-full"></div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        {articles.map((article, index) => {
          const { date, month } = formatDate(article.date);
          return (
            <motion.div 
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Link href={`/news/${article.urlAlias}`} className="block hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <Image
                    src={`/images/new${index + 1}.jpg`}
                    alt={article.title}
                    width={500}
                    height={300}
                    className="w-full object-cover rounded"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded text-sm">
                    {article.category}
                  </div>
                </div>
                <div className="flex mt-4 gap-4 items-start">
                  <div className="border border-gray-300 px-3 py-2 rounded text-center">
                    <p className="text-xl font-bold text-blue-600 leading-none">
                      {date}
                    </p>
                    <p className="text-sm text-blue-600">{month}</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-1 line-clamp-2">{article.title}</h3>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-3">{article.description}</p>
                    <span className="text-sm font-bold text-black hover:underline inline-flex items-center">
                      CONTINUE READING <span className="ml-1">▸</span>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
      
      <div className="text-center mt-12">
        <Link 
          href="/news" 
          className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          View All News <span className="ml-2">→</span>
        </Link>
      </div>
    </section>
  );
}
