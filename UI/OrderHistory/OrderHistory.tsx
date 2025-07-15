"use client";
import { useAppSelector } from "@/Redux/hook";
import { Spin } from "antd";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import emptyOrder from "@/public/Image/lovepik-empty-shopping-cart-png-image_401651506_wh860.png";
import { UserProfile } from "@/Utils/type";
import { RootState } from "@/Redux/store";

interface Order {
  id: string;
  orderId: string; // Added orderId field
  status: string;
  sOrderTime: string;
  total: number;
  shippingAddress: string;
  orderDetails: Array<{
    id: string;
    productName: string;
    quantity: number;
    price: number;
  }>;
}

const OrderHistory = () => {
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const userData: any = useAppSelector((state) => state.user.user);
  const user = userData?.user;

  const fetchOrders = useCallback(async (userId: string) => {
    try {
      setLoading(true);
      setError(null);
      console.log('Fetching orders for user ID:', userId);
      const response = await axios.get(`https://localhost:7272/api/v1/orderManagers/GetOrdersByUserId?userId=${userId}`);
      console.log('Orders data:', response.data);
      
      // Ensure orders is always an array
      const orderData = response.data?.data || response.data || [];
      setOrders(Array.isArray(orderData) ? orderData : []);
      
    } catch (err) {
      console.error('Error fetching orders:', err);
      setError('Có lỗi xảy ra khi tải dữ liệu');
      setOrders([]); // Reset to empty array on error
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!user?.userId) {
      setError('Vui lòng đăng nhập để xem lịch sử đơn hàng');
      console.log('User ID:', user?.userId);
      setLoading(false);
      return;
    }
    fetchOrders(user.userId);
  }, [user?.userId, fetchOrders]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-8" style={{height: '100vh'}}>
        <Image
          src={emptyOrder}
          alt="error state"
          className="w-32 h-32 mb-4"
        />
        <em className="text-gray-400 mb-2">
          {error}
        </em>
        <Link
          href="/"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
        >
          Quay về trang chủ
        </Link>
      </div>
    );
  }

  if (!orders || orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-8" style={{height: '100vh'}}>
        <Image
          src={emptyOrder}
          alt="empty orders"
          className="w-32 h-32 mb-4"
        />
        <em className="text-gray-400 mb-2">
          Bạn chưa có đơn hàng nào. Bắt đầu mua sắm thôi!
        </em>
        <Link
          href="/"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
        >
          Tiếp tục mua sắm
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Lịch sử đơn hàng</h1>
      
      <div className="grid gap-6">
        {orders.map((order: Order) => (
          <div key={order.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Đơn hàng #{order.orderId || order.id}</h2>
              <span className={`px-3 py-1 rounded-full text-sm ${
                order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {order.status}
              </span>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Ngày đặt hàng:</p>
                  <p>{new Date(order.sOrderTime).toLocaleDateString('vi-VN')}</p>
                </div>
                <div>
                  <p className="text-gray-600">Tổng tiền:</p>
                  <p className="font-semibold">{order.total?.toLocaleString('vi-VN')} VNĐ</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Sản phẩm:</h3>
                <div className="space-y-2">
                  {order.orderDetails?.map((item) => (
                    <div key={item.id} className="flex justify-between items-center border-b pb-2">
                      <div>
                        <p>{item.productName}</p>
                        <p className="text-sm text-gray-600">Số lượng: {item.quantity}</p>
                      </div>
                      <p className="font-semibold">{item.price?.toLocaleString('vi-VN')} VNĐ</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Địa chỉ giao hàng:</h3>
                <p>{order.shippingAddress}</p>
              </div>

              <div className="mt-4 flex justify-end">
                <Link 
                  href={`/order/${order.orderId || order.id}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  Xem chi tiết
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
