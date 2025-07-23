import { UserProfile } from "@/utils/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: UserProfile | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserProfile>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      // Clear localStorage
      if (typeof window !== 'undefined') {
        localStorage.clear();
      }
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
