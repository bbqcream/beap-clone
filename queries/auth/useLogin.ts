import { useLoadingStore } from "../../store/global/useLoadingStore";
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
  const { setLoading } = useLoadingStore();
  const handleNavigation = useHandleNavigation();
  const { loginData } = useLoginDataStore();

  const mutation = useMutation<BaseResponse<LoginResponse>, Error, void>({
    mutationFn: async () => {
      try {
        const { data } = await axios.post<BaseResponse<LoginResponse>>(
          `${API_KEY}/auth/sign-in`,
          loginData
        );
        if (!data || !data.data) {
          throw new Error("유효하지 않은 응답 데이터입니다.");
        }
        await AsyncStorage.setItem(ACCESS_TOKEN_KEY, data.data.accessToken);
        await AsyncStorage.setItem(REFRESH_TOKEN_KEY, data.data.refreshToken);
        return data;
      } catch (error) {
        console.error("로그인 요청 중 오류 발생:", error);
        throw error;
      }
    },
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      handleNavigation("Main");
    },
    onError: (error) => {
      setError(error);
      console.error(error);
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  return {
    onSubmit: mutation.mutate,
    isError: mutation.isError,
  };
};

export default useLoginMutation;
