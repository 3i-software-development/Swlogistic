"use client";

import Hero from "@/components/Hero/Hero";
import ProductByCategory from "@/components/ProductByCategory";
import { GetListProductByGroup, GetProductGroup, getAllProduct } from "@/Apis/Product";
import Footer from "@/components/Footer/Footer";
import { useEffect, useState } from "react";
import { Product } from "@/Apis/Product";
import uiaCatMeme from '@/Asset/image/uia-cat-meme.gif';

interface Category {
  code: string;
  name: string;
}

export default function Home() {
  getAllProduct();
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryProducts, setCategoryProducts] = useState<{ [key: string]: Product[] }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await GetProductGroup();
        setCategories(response);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      if (!categories.length) return;
      
      setLoading(true);
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const products = await GetListProductByGroup(category.code);
            return { [category.code]: products };
          })
        );
        
        const productsMap = results.reduce((acc, curr) => ({ ...acc, ...curr }), {});
        setCategoryProducts(productsMap);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsByCategory();
  }, [categories]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {/* <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div> */}
        <img src={uiaCatMeme.src} alt="Loading..." width={100} height={100} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow">
        <Hero />
        <div className="max-w-7xl mx-auto px-4 py-8">
          {categories.map((category) => (
            <ProductByCategory 
              key={category.code}
              title={category.name} 
              products={categoryProducts[category.code] || []}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
