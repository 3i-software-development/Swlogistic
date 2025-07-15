"use client";

import { Product } from "@/Apis/Product";
import { baseURL } from "@/Utils/Axios";
import Image from "next/image";
import Link from "next/link";

interface ProductByCategoryProps {
  title: string;
  products: Product[];
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

const ProductByCategory = ({ title, products }: ProductByCategoryProps) => {
  if (!products || products.length === 0) return null;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <Link 
          href={`/category/${title.toLowerCase()}`}
          className="text-blue-600 hover:text-blue-800 text-sm"
        >
          Xem tất cả
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <Link
            href={`/product/${product.productcode}`}
            key={product.id}
            className="group"
          >
            <div className="bg-white p-3 rounded hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-[4/3] mb-3">
                <Image
                  src={`${baseURL}${product.pathimg}`}
                  alt={product.productname}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <h3 className="text-[15px] font-normal text-gray-800 line-clamp-2 min-h-[42px] mb-2">
                  {product.productname}
                </h3>
                <div className="flex flex-col">
                  <div className="text-red-600 font-bold text-lg">
                    {formatPrice(product.price)}
                  </div>
                  {product.discount && (
                    <div className="flex items-center gap-2 mt-1">
                      <span className="line-through text-gray-400 text-sm">
                        {formatPrice(product.price * (1 + product.discount / 100))}
                      </span>
                      <span className="text-red-600 text-sm">-{product.discount}%</span>
                    </div>
                  )}
                </div>
                {/* {product.unit && (
                  <div className="text-gray-500 text-xs mt-1">
                    Đơn vị: {product.unit}
                  </div>
                )} */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductByCategory; 