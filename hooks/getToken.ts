import axios from 'axios';
import {API_URL} from '@env';
import {GetTokenProps} from '../types/getTokenProps.ts';

export const getToken = async ({ data, navigation }: GetTokenProps) => {
  try {
    const response = await axios.post(`${API_URL}/dauth/login`, {code:data?.match(/code=([^&]*)/)?.[1]});
    if (response.status === 200) {
      console.log("됐다", response);
      navigation.navigate("Tabs");
    } else {
      console.log("안됨");
    }
  } catch (e) {
    console.error(e);
  }
};
