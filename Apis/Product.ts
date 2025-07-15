"use client";
import { useDispatch } from "react-redux";
import axiosInstance from "@/Utils/Axios";
import { setListProduct } from "@/Redux/product";
import { useEffect, useState } from "react";
import axios from "axios";

export interface Product {
  id: number;
  productcode: string;
  productname: string;
  locationTxt: string;
  locationGps: string;
  unit: string;
  productgroup: string;
  producttype: string;
  pathimg: string;
  material: string | null;
  pattern: string | null;
  note: string | null;
  sBarCode: string;
  sQrCode: string;
  supplier: string | null;
  brand: string;
  serial: string;
  jsonStatus: string;
  mappingCode: string;
  specification: string | null;
  cusName: string | null;
  listProductAttrGalaxy: string | null;
  supName: string | null;
  voucher: string | null;
  currency: string | null;
  price: number;
  tax: number | null;
  discount: number | null;
  mpStatus: string | null;
  expireDate: string | null;
  createdTime: string;
}

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const fetchWithRetry = async (url: string, options: any, retries = MAX_RETRIES) => {
  try {
    const response = await axios({
      url,
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'strict-origin-when-cross-origin': 'strict-origin-when-cross-origin',
        ...options.headers
      }
    });
    return response.data;
  } catch (error: any) {
    if (retries > 0 && error.message === 'Network Error') {
      await sleep(RETRY_DELAY);
      return fetchWithRetry(url, options, retries - 1);
    }
    throw error;
  }
};

export const getAllProduct = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.post(
          "/Product/GetListProductByGroup",
          {},
          { headers: { "Content-Type": "application/json" } }
        );
        dispatch(setListProduct(response.data));
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, [dispatch]);
};

export const useGetAllProducts = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchWithRetry(
          "https://localhost:7272/api/v1/materialProducts/GetListProductByGroup?groupcode=smart-tivi",
          {
            method: 'POST',
            data: {}
          }
        );
        setProducts(data);
        dispatch(setListProduct(data));
      } catch (err: any) {
        console.error("Error fetching products:", err);
        setError(err.message || "Failed to fetch products");
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [dispatch]);

  return { products, isLoading, error };
};

export const GetListProductByGroup = async (id: string): Promise<Product[]> => {
  try {
    const data = await fetchWithRetry(
      `https://localhost:7272/api/v1/materialProducts/GetListProductByGroup?groupcode=${id}`,
      {
        method: 'POST',
        data: {}
      }
    );
    return data;
  } catch (error: any) {
    console.error(`Error fetching products for group ${id}:`, error);
    throw error;
  }
};

// export const GetProductById = async (id: string) => {
//   return await axiosInstance
//     .post(
//       `/Product/GetProduct?id=${id}`,
//       {},
//       { headers: { "Content-Type": "application/json" } }
//     )
//     .then((res) => res.data)
//     .catch((err) => console.log(err));
// };
export const GetProductById = async (id: number) => {
  try {
    const response = await axios.get(
      `https://localhost:7272/api/v1/materialProducts/get-item/${id}`,
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching product groups:", error);
    throw error;
  }
};

// export const GetProductDetailById = async (id: number) => {
//   try {
//     const response = await axios.get(
//       `https://localhost:7272/api/v1/materialProducts/get-item-detail/${id}`,
//       { headers: { 'accept': '*/*' } }
//     );
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching product detail by id:', error);
//     throw error;
//   }
// };

export const GetProductGroup = async () => {
  try {
    const response = await axios.post(
      "https://localhost:7272/api/v1/materialProducts/GetProductGroup",
      {},
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching product groups:", error);
    throw error;
  }
};

export const getReviewProducts = async () => {
  return await axiosInstance
    .get("/MobileLogin/GetListProductReview")
    .then((res) => res.data);
};

export const GetListGroupProduct = async () => {
  return await axiosInstance
    .get("/MobileLogin/GetListGroupProduct")
    .then((res) => res.data);
};
