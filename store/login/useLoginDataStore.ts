import { create } from "zustand";
import { LoginForm } from "../../types/props/auth/loginForm";
import { LoginDataState } from "../../types/store/login/loginDataState";

export const useLoginDataStore = create<LoginDataState>((set) => ({
  loginData: {
    email: "",
    password: "",
  },
  setLoginData: (loginData: LoginForm) => set({ loginData }),
}));
