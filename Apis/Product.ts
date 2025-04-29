"use client";
import { setListProduct } from "@/Redux/product";
import axiosInstance from "@/Utils/Axios";
// import { ProductType } from "@/Utils/type";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const GetAllProduct = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.post(
        "/Product/GetListProductByGroup",
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(setListProduct(response.data));
    };
    fetchData();
  }, []);
};

export const GetProductById = async (id: string) => {
  return await axiosInstance
    .post(
      `/Product/GetProduct?productCode=${id}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getReviewProducts = async () => {
  return await axiosInstance
    .get("/MobileLogin/GetListProductReview")
    .then((res) => res.data);
};
