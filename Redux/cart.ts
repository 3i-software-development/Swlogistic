import { CartIntemType } from "@/utils/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface OrderHeader {
  userId: string;
  totalAmount: number;
  shippingAddress: string;
  phone: string;
  email: string;
  fullName: string;
  note?: string;
}

export interface OrderDetail {
  productId: number; // Changed from string to number
  quantity: number;
  price: number;
  productName: string;
}

interface CartState {
  items: Array<CartIntemType>;
  orderHeader: OrderHeader | null;
  orderDetails: OrderDetail[];
}

// Load initial state from localStorage
const loadState = (): CartState => {
  if (typeof window === 'undefined') {
    return {
      items: [],
      orderHeader: null,
      orderDetails: []
    };
  }

  try {
    const savedState = localStorage.getItem('cartState');
    if (savedState) {
      return JSON.parse(savedState);
    }
  } catch (err) {
    console.error('Error loading cart state from localStorage:', err);
  }

  return {
    items: [],
    orderHeader: null,
    orderDetails: []
  };
};

const initialState: CartState = loadState();

// Helper function to save state to localStorage
const saveState = (state: CartState) => {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cartState', JSON.stringify(state));
    }
  } catch (err) {
    console.error('Error saving cart state to localStorage:', err);
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateQuantity(state, action: PayloadAction<CartIntemType>) {
      const { id, qualitiy } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.qualitiy = qualitiy;
        saveState(state);
      }
    },

    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.qualitiy++;
      } else {
        state.items.push({ ...newItem, qualitiy: 1 });
      }
      saveState(state);
    },

    inCreaseItem(state, action: PayloadAction<CartIntemType>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.qualitiy++;
        saveState(state);
      }
    },

    deCreaseItem(state, action: PayloadAction<CartIntemType>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem && existingItem.qualitiy > 1) {
        existingItem.qualitiy--;
      } else if (existingItem && existingItem.qualitiy === 1) {
        state.items = state.items.filter((item) => item.id !== newItem.id);
      }
      saveState(state);
    },

    removeItem(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      saveState(state);
    },

    clearCart(state) {
      state.items = [];
      state.orderHeader = null;
      state.orderDetails = [];
      saveState(state);
    },

    // New actions for order header and details
    updateOrderHeader(state, action: PayloadAction<OrderHeader>) {
      state.orderHeader = action.payload;
      saveState(state);
    },

    updateOrderDetails(state) {
      // Convert cart items to order details
      state.orderDetails = state.items.map(item => ({
        productId: Number(item.id), // Convert id to number
        quantity: item.qualitiy,
        price: item.Price,
        productName: item.productname
      }));
      saveState(state);
    },

    clearOrderData(state) {
      state.orderHeader = null;
      state.orderDetails = [];
      saveState(state);
    }
  },
});

export const {
  updateQuantity,
  addItem,
  inCreaseItem,
  deCreaseItem,
  removeItem,
  clearCart,
  updateOrderHeader,
  updateOrderDetails,
  clearOrderData
} = cartSlice.actions;

export default cartSlice.reducer;
