"use client";

import { useState, useEffect } from 'react';
import { Spin } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import emptyOrder from "@/public/Image/lovepik-empty-shopping-cart-png-image_401651506_wh860.png";

interface OrderDetailItem {
  id: number;
  item: string;
  quantity: number;
  price: number;
  discount: number | null;
  currency: string;
  orderId: string;
  createdTime: string;
  createdBy: string | null;
  updatedBy: string | null;
  updatedTime: string | null;
  deletedBy: string | null;
  deletedTime: string | null;
  isDeleted: boolean;
}

interface OrderDetailResponse {
  error: boolean;
  data: OrderDetailItem[];
}

export default function OrderDetailPage({ params }: { params: { orderId: string } }) {
  const [orderDetail, setOrderDetail] = useState<OrderDetailResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrderDetail = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://localhost:7272/api/v1/orderManagers/GetDetailsByOrderId?orderId=${params.orderId}`);
        console.log('Order detail data:', response.data);
        setOrderDetail(response.data);
      } catch (err) {
        console.error('Error fetching order details:', err);
        setError('Có lỗi xảy ra khi tải thông tin đơn hàng');
      } finally {
        setLoading(false);
      }
    };

    if (params.orderId) {
      fetchOrderDetail();
    }
  }, [params.orderId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spin size="large" />
      </div>
    );
  }

  if (error || !orderDetail || orderDetail.error || !orderDetail.data.length) {
    return (
      <div className="flex flex-col items-center justify-center py-8" style={{height: '100vh'}}>
        <Image
          src={emptyOrder}
          alt="error state"
          className="w-32 h-32 mb-4"
        />
        <em className="text-gray-400 mb-2">
          {error || 'Không tìm thấy thông tin đơn hàng'}
        </em>
        <Link
          href="/OrderHistory"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
        >
          Quay lại danh sách đơn hàng
        </Link>
      </div>
    );
  }

  // Calculate total amount
  const totalAmount = orderDetail.data.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Chi tiết đơn hàng #{orderDetail.data[0].orderId}</h1>
        <Link
          href="/OrderHistory"
          className="text-blue-500 hover:text-blue-600"
        >
          ← Quay lại danh sách
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-gray-600">Ngày đặt hàng:</p>
            <p className="font-semibold">
              {new Date(orderDetail.data[0].createdTime).toLocaleDateString('vi-VN')}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-semibold mb-4">Sản phẩm</h2>
          <div className="space-y-4">
            {orderDetail.data.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-4">
                <div>
                  <p className="font-semibold">Sản phẩm #{item.item}</p>
                  <p className="text-gray-600">Số lượng: {item.quantity}</p>
                  {item.discount && (
                    <p className="text-green-600">Giảm giá: {item.discount.toLocaleString('vi-VN')} {item.currency}</p>
                  )}
                </div>
                <div className="text-right">
                  <p className="font-semibold">{item.price.toLocaleString('vi-VN')} {item.currency}</p>
                  <p className="text-gray-600">
                    Tổng: {(item.price * item.quantity).toLocaleString('vi-VN')} {item.currency}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 mt-6 pt-6">
          <div className="flex justify-between items-center text-xl">
            <span className="font-semibold">Tổng tiền:</span>
            <span className="font-bold text-blue-600">
              {totalAmount.toLocaleString('vi-VN')} {orderDetail.data[0].currency}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 