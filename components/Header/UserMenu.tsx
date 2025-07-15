"use client";

import { useAppDispatch } from "@/Redux/hook";
import { logout } from "@/Redux/auth";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";

const UserMenu = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user.user);

  const handleLogout = () => {
    dispatch(logout());
    router.push("/"); // Redirect to home page after logout
  };

  return (
    <div className="relative group">
      <button className="flex items-center space-x-1 focus:outline-none">
        <span className="text-sm">{user?.FullName || "Người dùng"}</span>
        <span className="text-xs text-gray-500">{user?.Email}</span>
      </button>
      
      <div className="absolute right-0 w-48 py-2 mt-2 bg-white rounded-md shadow-xl hidden group-hover:block">
        <a
          href="/profile"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Thông tin tài khoản
        </a>
        <a
          href="/orders"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Lịch sử giao hàng
        </a>
        <button
          onClick={handleLogout}
          className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
        >
          Đăng xuất
        </button>
      </div>
    </div>
  );
};

export default UserMenu; 