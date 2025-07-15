"use client";
import { useAppSelector } from "@/Redux/hook";
import { Spin } from "antd";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";

const UpdateProfileModal = dynamic(
  () => import("@/components/Profile/UpdateModal"),
  {
    loading: () => (
      <div className="flex justify-center items-center h-32">
        <Spin indicator={<AiOutlineLoading style={{ fontSize: 24 }} />} />
      </div>
    ),
    ssr: false,
  }
);

const ProfileUI = () => {
  const userData: any = useAppSelector((state) => state.user.user);
  if (!userData) {
    redirect("/");
  }

  // Extract the nested user object
  const user = userData.user;
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-100 p-8 rounded-md max-w-3xl mx-auto my-8">
      <h2 className="text-3xl font-semibold mb-6">Thông tin tài khoản</h2>
      <div className="grid grid-cols-2 gap-y-4 text-gray-800">
        <span className="font-medium">Họ và tên</span>
        <span>{user?.fullName || 'Chưa cập nhật'}</span>

        <span className="font-medium">Số điện thoại</span>
        <span>{user?.phone || 'Chưa cập nhật'}</span>

        <span className="font-medium">Địa chỉ</span>
        <span>{user?.address || 'Chưa cập nhật'}</span>

        <span className="font-medium">Giới tính</span>
        <span>
          {user?.gender === 'male' 
            ? 'Nam' 
            : user?.gender === 'female' 
              ? 'Nữ' 
              : 'Chưa cập nhật'}
        </span>

        <span className="font-medium">Ngày sinh</span>
        <span>
          {user?.birthDay 
            ? new Date(user.birthDay).toLocaleDateString('vi-VN') 
            : 'Chưa cập nhật'}
        </span>
      </div>
      <div className="mt-4">
        <button
          onClick={() => setIsModalOpen(!isModalOpen)}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Cập nhật thông tin
        </button>
      </div>

      {isModalOpen && (
        <UpdateProfileModal open={isModalOpen} onClose={closeModal} />
      )}
      
      <h2 className="text-3xl font-semibold mt-10 mb-6">Thông tin đăng nhập</h2>
      <div className="grid grid-cols-2 gap-y-4 text-gray-800">
        <span className="font-medium">Email</span>
        <span>{user?.email || 'Chưa cập nhật'}</span>

        <span className="font-medium">Tên đăng nhập</span>
        <span>{user?.userName || 'Chưa cập nhật'}</span>

        <span className="font-medium">Mật khẩu</span>
        <span>••••••••</span>
      </div>
      <div className="mt-4">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Đổi mật khẩu
        </button>
      </div>
    </div>
  );
};

export default ProfileUI;
