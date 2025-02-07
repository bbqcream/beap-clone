import { useLoadingStore } from "../../store/global/useLoadingStore";
import { useMutation } from "@tanstack/react-query";
import { useLoginDataStore } from "../../store/login/useLoginDataStore";
import axios from "axios";
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

  return useMutation({
    mutationFn: async () => {
      const { data } = await axios.post(`${API_KEY}/auth/sign-in`, loginData);
      await AsyncStorage.setItem(ACCESS_TOKEN_KEY, data.data.accessToken);
      await AsyncStorage.setItem(REFRESH_TOKEN_KEY, data.data.refreshToken);
      return data;
    },
    onSuccess: () => {
      handleNavigation("Main");
    },
    onMutate: () => {
      setLoading(true);
    },
    onError: (error) => {
      setError(error);
      console.error(error);
    },
    onSettled: () => {
      setLoading(false);
    },
  });
};

export default useLoginMutation;
