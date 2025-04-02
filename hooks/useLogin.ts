import axios from 'axios';
import {useState} from 'react';
import {API_URL} from '@env';
import {DODAM_API_URL} from '@env';
import {REDIRECT_API_URL} from '@env';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getTokens} from '../tokens/token';

export const useLogin = () => {
  const navigation = useNavigation();
  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState(null);

  const loginData = {
    id: id,
    pw: pw,
    clientId:
      '575fe863c46f4126a9c17e4af4b82d5d351bdff5507d454086a88edd19afa723',
    redirectUrl: REDIRECT_API_URL,
  };

  const goToMoveTab = () => {
    navigation.navigate('Tabs');
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${DODAM_API_URL}/api/auth/login`,
        loginData,
      );
      if (response) {
        console.log(response);
        goToMoveTab();
      }
    } catch (e) {
      console.log('실패');
    }
  };
  return {
    id,
    pw,
    loading,
    error,
    handleLogin,
    setId,
    setError,
    setLoading,
    setPw,
  };
};
