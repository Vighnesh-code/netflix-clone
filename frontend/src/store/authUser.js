import axios from "axios";
import { create } from "zustand";
import { toast } from "react-hot-toast";

export const useAuthStore = create((set) => ({
  user: null,
  isSigningUp: false,
  isCheckingAuth: true,
  isLoggingOut: false,
  signUp: async (credentials) => {
    set({ isSigningUp: true });
    try {
      const res = await axios.post("/api/v1/auth/signup", credentials);
      set({ user: res.data.user, isSigningUp: false });
      toast.success("Account Created Successfully");
    } catch (error) {
      toast.error(error.response.data.message);
      set({ isSigningUp: false, user: null });
    }
  },
  logIn: async () => {},
  logOut: async () => {
    set({ isLoggingOut: true });
    try {
      await axios.post("/api/v1/auth/logout");
      set({ user: null, isLoggingOut: false });
      toast.success("Logged Out Successfully!");
    } catch (error) {
      set({ isLoggingOut: false });
      toast.error(error.response.data.message);
    }
  },
  authCheck: async () => {
    set({ isCheckingAuth: true });
    try {
      const res = await axios.get("/api/v1/auth/authCheck");
      set({ user: res.data.user, isCheckingAuth: false });
    } catch (error) {
      set({ isCheckingAuth: false, user: null });
    }
  },
}));
