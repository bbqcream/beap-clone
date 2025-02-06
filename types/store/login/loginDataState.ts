import { LoginForm } from "../../props/auth/loginForm";

export interface LoginDataState {
  loginData: LoginForm;
  setLoginData: (loginData: LoginForm) => void;
}
