import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const Select = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <View style={styles.buttonWrap}>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.regButton}>
          <Text style={styles.regText}>회원가입</Text>
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
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#323A45',
  },
  logo: {
    width: width * 0.45,
    height: width * 0.4,
  },
  loginText: {
    color: 'black',
    fontSize: width * 0.04,
  },
  loginButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: width * 0.05,
    width: width * 0.7,
    borderRadius: 5,
  },
  regText: {
    color: 'white',
    fontSize: width * 0.04,
  },
  regButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#305B7D',
    paddingVertical: width * 0.05,
    width: width * 0.7,
    borderRadius: 5,
  },
  buttonWrap: {
    display: 'flex',
    gap: height * 0.01,
  },
});

export default Select;
