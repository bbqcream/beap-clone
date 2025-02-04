import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/RootStackParamProps";

const useHandleNavigation = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const handleNavigation = (screen: keyof RootStackParamList) => {
    return () => {
      navigation.navigate(screen);
    };
  };

  return handleNavigation;
};

export default useHandleNavigation;
