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
import {useLogin} from '../../hooks/useLogin';

const {width, height} = Dimensions.get('window');

const Login = () => {
  const {id, setId, pw, setPw, handleLogin, loading, error} = useLogin();

  return (
    <SafeAreaView style={styles.main}>
      <Image style={styles.logo} source={require('../assets/beep.png')} />
      <View style={styles.loginWrap}>
        <Text style={styles.loginText}>
          <Text style={{color: '#0083F0'}}>도담도담</Text> 계정으로 시작하기
        </Text>
        <View style={styles.inputWrap}>
          <TextInput
            placeholder="아이디"
            style={styles.input}
            onSubmitEditing={Keyboard.dismiss}
            value={id}
            onChangeText={setId}
          />
          <TextInput
            onSubmitEditing={Keyboard.dismiss}
            secureTextEntry={true}
            placeholder="비밀번호"
            style={styles.input}
            value={pw}
            onChangeText={setPw}
          />
        </View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => handleLogin()}>
          <Text style={styles.loginButtonText}>로그인</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FCFCFC',
  },
  logo: {
    width: width * 0.22,
    height: width * 0.2,
  },
  loginWrap: {
    width: width * 0.8,
    paddingVertical: height * 0.05,
    height: '90%',
    display: 'flex',
    gap: height * 0.02,
    flexDirection: 'column',
  },
  loginText: {
    fontSize: width * 0.05,
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
    paddingHorizontal: width * 0.03,
    borderColor: '#B7B7B7',
    borderWidth: 1,
    borderRadius: 20,
  },
  loginButton: {
    width: '100%',
    paddingVertical: height * 0.025,
    paddingHorizontal: width * 0.02,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0083F0',
    borderRadius: 20,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 700,
    fontSize: width * 0.045,
  },
});

export default Login;
