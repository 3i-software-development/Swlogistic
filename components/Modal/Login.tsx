"use client";

import { setUser } from "@/Redux/auth";
import { useAppDispatch } from "@/Redux/hook";
import { useRef, useState } from "react";
import axios from "axios";

const ModalAuth = ({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) => {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [loginUsername, setLoginUsername] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");
  const [registerUsername, setRegisterUsername] = useState<string>("");
  const [registerEmail, setRegisterEmail] = useState<string>("");
  const [registerPassword, setRegisterPassword] = useState<string>("");
  const [registerFullName, setRegisterFullName] = useState<string>("");
  const [registerPhone, setRegisterPhone] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleLogin = async () => {
    try {
      setError("");
      setLoading(true);
      const response = await axios.post('https://localhost:7272/api/v1/auth/login', {
        userName: loginUsername,
        password: loginPassword
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      dispatch(setUser(response.data));
      closeModal();
    } catch (err: any) {
      setError(err.response?.data || 'Đăng nhập thất bại');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    try {
      setError("");
      setLoading(true);
      await axios.post('https://localhost:7272/api/v1/auth/register', {
        userName: registerUsername,
        password: registerPassword,
        fullName: registerFullName,
        email: registerEmail,
        phone: registerPhone
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // Switch to login tab after successful registration
      setActiveTab("login");
      setLoginUsername(registerUsername);
      setLoginPassword(registerPassword);
      setError("Đăng ký thành công! Vui lòng đăng nhập.");
    } catch (err: any) {
      setError(err.response?.data || 'Đăng ký thất bại');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-400 bg-opacity-50">
      <div
        ref={modalRef}
        className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative animate-fadeIn"
      >
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
        >
          &times;
        </button>

        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 font-semibold rounded-l-md ${
              activeTab === "login"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("login")}
          >
            Đăng nhập
          </button>
          <button
            className={`px-4 py-2 font-semibold rounded-r-md ${
              activeTab === "register"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("register")}
          >
            Đăng ký
          </button>
        </div>

        {error && (
          <div className={`text-sm text-center mb-4 ${error.includes('thành công') ? 'text-green-500' : 'text-red-500'}`}>
            {error}
          </div>
        )}

        {activeTab === "login" ? (
          <div className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Tên đăng nhập
              </label>
              <input
                type="text"
                placeholder="Nhập tên đăng nhập"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Mật khẩu
              </label>
              <input
                type="password"
                placeholder="Nhập mật khẩu"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <button
              onClick={handleLogin}
              disabled={loading}
              className={`w-full text-white py-2 rounded-md transition ${
                loading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "Đang đăng nhập..." : "Đăng nhập"}
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Tên đăng nhập
              </label>
              <input
                type="text"
                placeholder="Chọn tên đăng nhập"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                value={registerUsername}
                onChange={(e) => setRegisterUsername(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Họ và tên
              </label>
              <input
                type="text"
                placeholder="Nhập họ và tên"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                value={registerFullName}
                onChange={(e) => setRegisterFullName(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Nhập email"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Số điện thoại
              </label>
              <input
                type="tel"
                placeholder="Nhập số điện thoại"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                value={registerPhone}
                onChange={(e) => setRegisterPhone(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Mật khẩu
              </label>
              <input
                type="password"
                placeholder="Tạo mật khẩu"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
              />
            </div>
            <button
              onClick={handleRegister}
              disabled={loading}
              className={`w-full text-white py-2 rounded-md transition ${
                loading
                  ? "bg-green-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {loading ? "Đang đăng ký..." : "Đăng ký"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalAuth;
