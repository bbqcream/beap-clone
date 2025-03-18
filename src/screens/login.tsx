import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const Login = () => {
  const [em, setEm] = useState('');
  const [pw, setPw] = useState('');

  const handleEmail = (text: string) => {
    setEm(text);
  };

  const handlePassword = (text: string) => {
    setPw(text);
  };

  return (
    <SafeAreaView style={styles.main}>
      <TouchableOpacity style={styles.arrowOpa}>
        <Image
          style={styles.arrowImg}
          source={require('../assets/arrow.png')}
        />
      </TouchableOpacity>
      <View style={styles.loginContainer}>
        <View style={styles.loginWrap}>
          <Text style={styles.loginText}>로그인</Text>
          <View style={styles.inputWrap}>
            <TextInput
              placeholder="이메일"
              style={styles.input}
              onSubmitEditing={Keyboard.dismiss}
              value={em}
              onChangeText={handleEmail}
            />
            <TextInput
              onSubmitEditing={Keyboard.dismiss}
              secureTextEntry={true}
              placeholder="비밀번호"
              style={styles.input}
              value={pw}
              onChangeText={handlePassword}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>비밀번호를 잊으셨나요?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>로그인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#323A45',
    position: 'relative',
  },
  arrowOpa: {
    position: 'absolute',
    top: height * 0.08,
    left: width * 0.08,
  },
  arrowImg: {
    width: width * 0.1,
    height: width * 0.1,
  },
  loginContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    height: height * 0.7,
    borderTopLeftRadius: 25,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  loginWrap: {
    width: width * 0.8,
    paddingVertical: height * 0.05,
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  loginText: {
    fontSize: width * 0.07,
    fontWeight: '600',
  },
  inputWrap: {
    width: '100%',
    display: 'flex',
    gap: height * 0.01,
  },
  input: {
    width: '100%',
    paddingVertical: height * 0.03,
    paddingHorizontal: width * 0.02,
    borderColor: '#B7B7B7',
    borderWidth: 1,
    borderRadius: 5,
  },
  forgotPassword: {
    display: 'flex',
    alignSelf: 'flex-end',
    color: '#323A45',
    textDecorationLine: 'underline',
    textDecorationColor: '#323A45',
  },
  loginButton: {
    width: '100%',
    paddingVertical: height * 0.03,
    paddingHorizontal: width * 0.02,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#323A45',
    borderRadius: 5,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 700,
    fontSize: width * 0.04,
  },
});

export default Login;
