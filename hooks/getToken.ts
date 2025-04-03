import axios from 'axios';
import {API_URL} from '@env';
import {GetTokenProps} from '../types/getTokenProps.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getMe} from './useGetMe.ts';

export const getToken = async ({data, navigation}: GetTokenProps) => {
  try {
    const response = await axios.post(`${API_URL}/dauth/login`, {
      code: data?.match(/code=([^&]*)/)?.[1],
    });
    if (response.status === 200) {
      navigation.navigate('Tabs');
      await AsyncStorage.setItem('accessToken', response.data?.accessToken);
      await AsyncStorage.setItem('refreshToken', response.data?.refreshToken);
      await getMe();
    } else {
      console.log('안됨');
    }
  } catch (e) {
    console.error(e);
  }
};
