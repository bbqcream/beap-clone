import { Alert } from "react-native";
import { useLoginDataStore } from "../store/login/useLoginDataStore";

const useLogin = () => {
  const { loginData, setLoginData } = useLoginDataStore();

  const handleData = (name: "email" | "password", text: string) => {
    setLoginData({ ...loginData, [name]: text });
  };

  return { handleData };
};

export default useLogin;
