import useLoginMutation from "../queries/auth/useLogin";
import { useLoadingStore } from "../store/global/useLoadingStore";
import { useLoginDataStore } from "../store/login/useLoginDataStore";

const useLogin = () => {
  const { loginData, setLoginData } = useLoginDataStore();
  const { loading, setLoading } = useLoadingStore();

  const onSubmit = async () => {
    if (loading) return;
    setLoading(useLoginMutation.isPending);
    await useLoginMutation.mutateAsync();
    setLoading(false);
  };

  const handleData = (name: "email" | "password", text: string) => {
    setLoginData({ ...loginData, [name]: text });
  };

  return { handleData, onSubmit };
};

export default useLogin;
