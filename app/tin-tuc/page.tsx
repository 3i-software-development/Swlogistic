"use client";

import { useEffect, useState } from "react";
import NewsPage from "@/components/News/NewsPage";
import { NewsArticle } from "@/components/News/NewsCard";
import NewsService from "@/services/newsService";

export default function News() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const data = await NewsService.getArticles();
        setArticles(data);
      } catch (err) {
        setError('Failed to load news articles');
        console.error('Error fetching articles:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const handleLoadMore = async () => {
    // This could be implemented to load more articles
    console.log('Load more clicked');
  };

  const handleCategoryClick = (category: string) => {
    // This could be implemented to filter by category
    console.log('Category clicked:', category);
  };

  const handleNewsletterSubscribe = async (email: string) => {
    try {
      await NewsService.subscribeToNewsletter(email);
      alert('Thank you for subscribing to our newsletter!');
    } catch (err) {
      alert('Failed to subscribe. Please try again.');
      console.error('Newsletter subscription error:', err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading news articles...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <NewsPage
      articles={articles}
      onLoadMore={handleLoadMore}
      onCategoryClick={handleCategoryClick}
      onNewsletterSubscribe={handleNewsletterSubscribe}
    />
  );
} 