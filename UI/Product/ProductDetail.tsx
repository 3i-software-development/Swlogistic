"use client";

import { GetProductById, getReviewProducts } from "@/Apis/Product";
import { useAppDispatch } from "@/Redux/hook";
import { baseURL } from "@/Utils/Axios";
import { Product, ProductType } from "@/Utils/type";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { addItem } from "@/Redux/cart";
import { FaArrowUp } from "react-icons/fa";

interface DetailType {
  id: string;
}

const ProductDetailUi = ({ id }: DetailType) => {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [previewProducts, setPreviewProducts] = useState<ProductType[]>([]);
  const [loadingPreview, setLoadingPreview] = useState(true);
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    setLoading(true);
    setError(null);
    GetProductById(Number(id))
      .then((res) => setProduct(res))
      .catch(() => setError("Không tìm thấy sản phẩm"))
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    setLoadingPreview(true);
    getReviewProducts()
      .then((data) => setPreviewProducts(data || []))
      .catch(() => setPreviewProducts([]))
      .finally(() => setLoadingPreview(false));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const formatCurrency = (amount: number) => {
    return amount?.toLocaleString("vi-VN") + "₫";
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }
  if (error || !product) {
    return (
      <div className="flex justify-center items-center min-h-[400px] text-red-600">{error || "Không tìm thấy sản phẩm"}</div>
    );
  }

  const fullpath = product.image ? `${baseURL}${product.image}` : "/no-image.png";

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Modal Thông số kỹ thuật */}
      {showModal && (
        <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-lg">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Thông số kỹ thuật</h2>
                <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="space-y-4">
                {/* Hiển thị thông số kỹ thuật động nếu có */}
                {product.description ? (
                  <div className="whitespace-pre-line text-gray-700" dangerouslySetInnerHTML={{__html: product.description}} />
                ) : (
                  <div>Không có thông số kỹ thuật</div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold transition-transform duration-300 hover:-translate-y-1">
          {product.productName}
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Cột trái: Hình ảnh và thông tin cơ bản */}
        <div className="space-y-6">
          {/* Hình ảnh sản phẩm */}
          <div className="border border-black/10 rounded-lg overflow-hidden shadow transition-shadow duration-300">
            <img className="w-full h-[400px] object-contain" src={fullpath} alt={product.productName} />
          </div>
          {/* Thông tin sản phẩm */}
          <div className="bg-white p-4 rounded-lg border border-gray-100 shadow">
            <div className="text-lg font-semibold mb-2">{product.groupCodeName || product.groupCode}</div>
            <div className="text-gray-600 mb-2">Mã sản phẩm: <span className="font-bold">{product.productCode}</span></div>
            <div className="text-gray-600 mb-2">Thương hiệu: <span className="font-bold">{product.brand}</span></div>
            <div className="text-gray-600 mb-2">Tình trạng: <span className="font-bold text-green-600">{product.inStock > 0 ? "Còn hàng" : "Hết hàng"}</span></div>
            <div className="text-2xl font-bold text-red-600 mb-2">{formatCurrency(product.price)}</div>
            {product.priceCostCatelogue && (
              <div className="line-through text-gray-400">{formatCurrency(Number(product.priceCostCatelogue))}</div>
            )}
            <div className="flex items-center gap-2 mt-4">
              <span>Số lượng:</span>
              <input type="number" min={1} value={quantity} onChange={e => setQuantity(Number(e.target.value))} className="w-16 border rounded px-2 py-1" />
              <button
                onClick={() =>
                  dispatch(
                    addItem({
                      id: product.id,
                      productname: product.productName,
                      Price: product.price,
                      pathimg: product.image,
                      qualitiy: quantity, // chú ý đúng tên trường
                      maxQuantity: 99 // hoặc số lượng tối đa nếu có
                    })
                  )
                }
                className="ml-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Thêm vào giỏ
              </button>
            </div>
            <button className="mt-4 text-blue-600 underline" onClick={() => setShowModal(true)}>Xem thông số kỹ thuật</button>
          </div>
        </div>
        {/* Cột phải: Đặc điểm nổi bật và mô tả */}
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg border border-gray-100 shadow">
            <h2 className="text-xl font-bold text-red-600 mb-4">Đặc điểm nổi bật</h2>
            <div className="text-gray-700 whitespace-pre-line" dangerouslySetInnerHTML={{__html: product.description || "Chưa có mô tả cho sản phẩm này."}} />
          </div>
          {/* Thông số kỹ thuật (hiển thị nhanh) */}
          {product.description && (
            <div className="bg-white p-4 rounded-lg border border-gray-100 shadow">
              <h3 className="font-semibold mb-2">Thông số kỹ thuật</h3>
              <div className="whitespace-pre-line text-gray-700" dangerouslySetInnerHTML={{__html: product.description}} />
            </div>
          )}
        </div>
      </div>
      {/* Sản phẩm tương tự */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">Sản phẩm tương tự</h2>
        {loadingPreview ? (
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-red-600"></div>
          </div>
        ) : previewProducts.length === 0 ? (
          <div className="text-gray-500">Không có sản phẩm tương tự</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {previewProducts.slice(0, 8).map((item) => (
              <div key={item.id} className="bg-white rounded-lg border border-gray-100 shadow p-4 flex flex-col items-center">
                <img src={item.pathimg ? `${baseURL}${item.pathimg}` : "/no-image.png"} alt={item.productname} className="h-32 object-contain mb-2" />
                <div className="font-semibold text-center mb-1 line-clamp-2">{item.productname}</div>
                <div className="text-red-600 font-bold mb-1">{formatCurrency(item.Price)}</div>
                <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition" onClick={() => window.location.href = `/Product/${item.productcode}`}>Xem chi tiết</button>
                </div>
              ))}
          </div>
        )}
      </div>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed z-50 bg-gray-400 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-gray-500 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'} md:bottom-8 md:right-8 bottom-20 right-4`}
        style={{ zIndex: 100 }}
        aria-label="Scroll to top"
      >
        <FaArrowUp size={20} />
      </button>
    </div>
  );
};

export default ProductDetailUi;
