import AsyncStorage from '@react-native-async-storage/async-storage';

export const getTokens = async () => {
  try {
    const accessToken = await AsyncStorage.getItem('accessToken');
    const refreshToken = await AsyncStorage.getItem('refreshToken');

    console.log('Access Token:', accessToken);
    console.log('Refresh Token:', refreshToken);

    return {accessToken, refreshToken};
  } catch (error) {
    console.error('토큰 가져오기 실패:', error);
    return {accessToken: null, refreshToken: null};
  }
};

getTokens().then(({accessToken, refreshToken}) => {
  if (accessToken) {
    console.log('토큰정상수');
  } else {
    console.log('❌ 토큰이 없음');
  }
});
