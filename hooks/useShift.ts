import {API_URL} from '@env';
import axios from 'axios';
import attendState from '../store/attendState';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useShift = () => {
  const {attendData} = attendState();

  const shift = async () => {
    const date = new Date();
    const updatedAttendData = {
      ...attendData,
      date,
    };
    try {
      const ACCESS_TOKEN = await AsyncStorage.getItem('accessToken');
      const response = await axios.post(
        `${API_URL}/shifts`,
        updatedAttendData,
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        },
      );
      if (response.status === 200) {
        console.log('성공');
      } else {
        console.log(updatedAttendData);
        console.log(response);
        console.log('실패');
      }
    } catch (e) {
      console.log(e);
      console.log('에러 발생');
    }
  };

  return {shift};
};

export default useShift;
