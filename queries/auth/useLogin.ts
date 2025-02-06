import { useLoadingStore } from "../../store/global/useLoadingStore";
import { LoginForm } from "../../types/props/auth/loginForm";
import { API_KEY } from "@env";
import { useMutation } from "@tanstack/react-query";
import { useLoginDataStore } from "../../store/login/useLoginDataStore";
import axios from "axios";
import { BaseResponse } from "../../types/response/baseResponse";
import { LoginResponse } from "../../types/response/loginResponse";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/token/token";
import { useErrorStore } from "../../store/global/useErrorStore";
import useHandleNavigation from "../../hooks/useHandleNavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useLoginMutation = () => {
  const { setError } = useErrorStore();
  const { loading, setLoading } = useLoadingStore();
  const handleNavigation = useHandleNavigation();
  const { loginData } = useLoginDataStore();

  const { mutate, isLoading, isError } = useMutation(
    async () => {
      setLoading(true); // loading 상태 설정

      const { data } = await axios.post<BaseResponse<LoginResponse>>(
        `${API_KEY}/auth/sign-in`,
        loginData
      );

      if (data) {
        // 로그인 성공 시 토큰을 AsyncStorage에 저장
        await AsyncStorage.setItem(ACCESS_TOKEN_KEY, data.data.accessToken);
        await AsyncStorage.setItem(REFRESH_TOKEN_KEY, data.data.refreshToken);
        console.log("로그인 성공");
        handleNavigation("Main");
      }

      return data;
    },
    {
      onSuccess: (data) => {
        setLoading(false); // 성공 후 loading 상태 해제
        console.log("로그인 성공:", data);
      },
      onError: (error) => {
        setLoading(false); // 실패 시 loading 상태 해제
        setError(error);
        console.error("로그인 실패:", error);
      },
      onSettled: () => {
        setLoading(false); // 완료 후 loading 상태 해제
      },
    }
  );

  const onSubmit = () => {
    mutate();
  };

  return { onSubmit, isLoading, isError };
};

export default useLoginMutation;
