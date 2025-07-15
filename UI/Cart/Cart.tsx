"use client";
import {
  deCreaseItem,
  inCreaseItem,
  removeItem,
  updateQuantity,
  updateOrderHeader,
  updateOrderDetails,
  clearCart,
  OrderHeader
} from "@/Redux/cart";
import { useAppDispatch, useAppSelector } from "@/Redux/hook";
import { CartIntemType } from "@/Utils/type";
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowUp } from "react-icons/fa";
import emptyCart from "@/public/Image/lovepik-empty-shopping-cart-png-image_401651506_wh860.png";

const CartPage = () => {
  const router = useRouter();
  const [selectedItems, setSelectedItems] = useState<CartIntemType[]>([]);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.cart);
  const user = useAppSelector((state) => state.user.user);

  // Form state
  const [formData, setFormData] = useState({
    fullName: user?.FullName || '',
    phone: user?.Phone || '',
    email: user?.Email || '',
    address: user?.Address || '',
    note: ''
  });

  // Loading state
  const [loading, setLoading] = useState(false);

  // Selected items total quantity
  const selectedTotalQuantity = useMemo(() => {
    return selectedItems.reduce((total, item) => total + item.qualitiy, 0);
  }, [selectedItems]);

  // Selected items total amount
  const selectedTotalAmount = useMemo(() => {
    return selectedItems.reduce((total, item) => total + (item.Price * item.qualitiy), 0);
  }, [selectedItems]);

  // Coupon state
  const [coupon, setCoupon] = useState("KEEPWARM");
  const [couponStatus, setCouponStatus] = useState<null | "success" | "error">(null);
  const [couponMessage, setCouponMessage] = useState("");

  const handleApplyCoupon = () => {
    setLoading(true);
    setTimeout(() => {
      if (coupon.trim().toUpperCase() === "KEEPWARM") {
        setCouponStatus("success");
        setCouponMessage("Mã giảm giá đã được áp dụng!");
      } else {
        setCouponStatus("error");
        setCouponMessage("Mã giảm giá không hợp lệ");
      }
      setLoading(false);
    }, 800);
  };

  // Payment method state
  const [paymentMethod, setPaymentMethod] = useState("Thanh toán khi nhận hàng");
  const paymentMethods = [
    "Thanh toán khi nhận hàng",
    "Ví MOMO",
    "Thanh toán qua ZaloPay",
    "Ví điện tử VNPAY",
  ];

  const handleItemCheckboxChange = (item: CartIntemType) => {
    const isSelected = selectedItems.some(
      (selectedItem) => selectedItem.id === item.id
    );
    if (isSelected) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem.id !== item.id)
      );
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleCheckAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedItems([...items]);
    } else {
      setSelectedItems([]);
    }
  };

  const isItemSelected = (item: CartIntemType) => {
    return selectedItems.some((selectedItem) => selectedItem.id === item.id);
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle payment submission
  const handlePayment = () => {
    if (!user?.Id) {
      alert('Vui lòng đăng nhập để tiếp tục');
      router.push('/login');
      return;
    }

    if (selectedItems.length === 0) {
      alert('Vui lòng chọn sản phẩm để thanh toán');
      return;
    }

    if (!formData.fullName || !formData.phone || !formData.email || !formData.address) {
      alert('Vui lòng điền đầy đủ thông tin giao hàng');
      return;
    }

    // Create order header
    const orderHeader: OrderHeader = {
      userId: user.Id.toString(),
      totalAmount: selectedTotalAmount,
      shippingAddress: formData.address,
      phone: formData.phone,
      email: formData.email,
      fullName: formData.fullName,
      note: formData.note
    };

    // Update order data in Redux
    dispatch(updateOrderHeader(orderHeader));
    dispatch(updateOrderDetails());

    // Remove selected items from cart
    selectedItems.forEach(item => {
      dispatch(removeItem(item.id));
    });

    // Save success message to localStorage
    localStorage.setItem('paymentSuccess', JSON.stringify({
      message: 'Đặt hàng thành công!',
      timestamp: new Date().getTime()
    }));

    // Redirect to payment confirmation page
    router.push('/Cart/Payment');
  };

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Update form data when user changes
  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        fullName: user.FullName || '',
        phone: user.Phone || '',
        email: user.Email || '',
        address: user.Address || ''
      }));
    }
  }, [user]);

  return (
    <>
      <div className="flex flex-col lg:flex-row p-4 lg:p-8 gap-8">
        {/* Left section - Customer Info */}
        <section className="flex-1 space-y-8">
          {/* Order Info */}
          <div className="bg-white p-6 rounded-lg shadow space-y-6">
            <h2 className="text-xl font-semibold">Thông tin đơn hàng</h2>

            {/* Customer Info Form */}
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block mb-1 text-sm">Họ và tên</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Nhập họ và tên của bạn"
                    className="border rounded-lg p-2 w-full"
                    style={{borderColor: 'lightgray'}}
                  />
                </div>
                <div className="flex-1">
                  <label className="block mb-1 text-sm">Số điện thoại</label>
                  <div className="flex items-center gap-2">
                    <span className="p-2 bg-gray-100 rounded-lg">+84</span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Nhập số điện thoại"
                      className="border rounded-lg p-2 flex-1"
                      style={{borderColor: 'lightgray'}}
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1 text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Nhập email của bạn"
                  className="border rounded-lg p-2 w-full"
                  style={{borderColor: 'lightgray'}}
                />
              </div>

              {/* Address */}
              <div>
                <label className="block mb-1 text-sm">Địa chỉ giao hàng</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Nhập địa chỉ giao hàng"
                  className="border rounded-lg p-2 w-full"
                  style={{borderColor: 'lightgray'}}
                />
              </div>

              {/* Note */}
              <div>
                <label className="block mb-1 text-sm">Ghi chú</label>
                <input
                  type="text"
                  name="note"
                  value={formData.note}
                  onChange={handleInputChange}
                  placeholder="Ghi chú thêm cho đơn hàng"
                  className="border rounded-lg p-2 w-full"
                  style={{borderColor: 'lightgray'}}
                />
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <h2 className="text-xl font-semibold">Hình thức thanh toán</h2>

            {/* Payment options */}
            <div className="space-y-4">
              {paymentMethods.map((method, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-3 border rounded-lg"
                  style={{borderColor: paymentMethod === method ? 'blue' : 'lightgray'}}
                >
                  <input
                    type="radio"
                    name="payment-method"
                    checked={paymentMethod === method}
                    onChange={() => setPaymentMethod(method)}
                  />
                  <label className="flex items-center gap-2">
                    <img
                      src={`https://mcdn.coolmate.me/image/October2024/mceclip${idx}_${
                        idx === 1 ? 171 : idx === 2 ? 6 : idx === 3 ? 81 : 42
                      }.png`}
                      className="w-8 h-8"
                      alt="payment"
                    />
                    {method}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Right section - Cart Items */}
        <section className="flex-1 space-y-6">
          {/* Cart Section */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Giỏ hàng</h2>

            {selectedItems.length > 0 && (
              <div className="mb-2 text-blue-600 font-semibold">
                Đã chọn {selectedTotalQuantity} sản phẩm
              </div>
            )}

            {selectedItems.length > 0 && (
              <div className="mb-2">
                <button
                  onClick={() => {
                    selectedItems.forEach(item => dispatch(removeItem(item.id)));
                    setSelectedItems([]);
                  }}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Xóa các sản phẩm đã chọn
                </button>
              </div>
            )}

            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8">
                <Image
                  src={emptyCart}
                  alt="empty cart"
                  className="w-32 h-32 mb-4"
                />
                <em className="text-gray-400 mb-2">
                  Giỏ hàng của bạn đang trống. Bắt đầu mua sắm thôi!
                </em>
                <Link
                  href="/"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
                >
                  Tiếp tục mua sắm
                </Link>
              </div>
            ) : (
              <div className="overflow-x-auto mt-6">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100 text-left">
                    <tr>
                      <th className="p-3">
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="chkAllItems"
                            onChange={handleCheckAll}
                            checked={
                              selectedItems.length === items.length &&
                              items.length > 0
                            }
                          />
                          <label htmlFor="chkAllItems">Tất cả sản phẩm</label>
                        </div>
                      </th>
                      <th className="p-3">ĐVT</th>
                      <th className="p-3">Số lượng</th>
                      <th className="p-3">Tổng tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id} className="border-t">
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={isItemSelected(item)}
                              onChange={() => handleItemCheckboxChange(item)}
                            />
                            <div>
                              <Link href="#" className="font-semibold">
                                {item.productname}
                              </Link>
                              <div className="text-sm text-gray-500">
                                Thuộc tính sản phẩm
                              </div>
                              <div className="text-sm">{item.Price}</div>
                              <button
                                onClick={() => dispatch(removeItem(item.id))}
                                className="text-red-500 text-xs mt-1"
                              >
                                Xóa
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="p-3">Đơn vị tính</td>
                        <td className="p-3">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              disabled={item.qualitiy <= 1}
                              onClick={() => dispatch(deCreaseItem(item))}
                              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded text-lg font-semibold hover:bg-gray-100"
                            >
                              -
                            </button>

                            <input
                              type="number"
                              min="1"
                              value={item.qualitiy}
                              onChange={(e) =>
                                dispatch(
                                  updateQuantity({
                                    ...item,
                                    qualitiy: Number(e.target.value),
                                  })
                                )
                              }
                              className="w-12 h-8 text-center border border-gray-300 rounded"
                            />

                            <button
                              onClick={() => dispatch(inCreaseItem(item))}
                              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded text-lg font-semibold hover:bg-gray-100"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="p-3">
                          <p className="text-center">
                            {item.Price * item.qualitiy}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Coupons */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center text-sm text-gray-700">
              <div>
                Mã giảm giá <b>{coupon}</b>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="border p-2 rounded-lg"
                  placeholder="Nhập mã giảm giá"
                />
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  onClick={handleApplyCoupon}
                  disabled={loading}
                >
                  Áp dụng
                </button>
              </div>
            </div>
            {couponStatus === "success" && (
              <p className="text-green-600 text-sm mt-1">{couponMessage}</p>
            )}
            {couponStatus === "error" && (
              <p className="text-red-600 text-sm mt-1">{couponMessage}</p>
            )}
          </div>

          {/* Pricing Info */}
          <div className="bg-white p-6 rounded-lg shadow space-y-2">
            <div className="flex justify-between">
              <p>Tạm tính</p>
              <p className="text-right">{selectedTotalAmount.toLocaleString('vi-VN')} VNĐ</p>
            </div>
            <div className="flex justify-between">
              <p>Giảm giá</p>
              <p>0đ</p>
            </div>
            <div className="flex justify-between">
              <p>Phí vận chuyển</p>
              <p>Miễn phí</p>
            </div>
            <div className="border-t my-2"></div>
            <div className="flex justify-between font-bold text-lg">
              <p>Tổng cộng</p>
              <p>{selectedTotalAmount.toLocaleString('vi-VN')} VNĐ</p>
            </div>
          </div>

          {/* Payment Button */}
          <div className="bg-white p-6 rounded-lg shadow">
            <button
              onClick={handlePayment}
              disabled={selectedItems.length === 0}
              className={`w-full py-3 rounded-lg text-white font-semibold ${
                selectedItems.length === 0
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-500 hover:bg-blue-600'
              }`}
            >
              Thanh toán
            </button>
          </div>
        </section>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`
          fixed z-50 bg-gray-400 text-white p-3 rounded-full shadow-lg
          transition-all duration-300 hover:bg-gray-500
          ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
          md:bottom-8 md:right-8
          bottom-20 right-4
        `}
        style={{ zIndex: 100 }}
        aria-label="Scroll to top"
      >
        <FaArrowUp size={20} />
      </button>
    </>
  );
};

export default CartPage;