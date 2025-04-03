import axios from 'axios';
import {API_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getMyData from '../store/getMyData.ts';

export const getMe = async () => {
  try {
    const ACCESS_TOKEN = await AsyncStorage.getItem('accessToken');
    if (!ACCESS_TOKEN) {
      console.error('액세스 토큰이 없습니다.');
      return;
    }

    const response = await axios.get(`${API_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });

    if (response.status === 200) {
      console.log(response.data);
      getMyData.getState().setMyData(response.data?.data);
    } else {
      console.log('실패');
    }
  } catch (e) {
    console.error('오류 발생:', e);
  }
};
