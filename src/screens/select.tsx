import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const {width} = Dimensions.get('window');

const Select = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>로그인</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#323A45',
  },
  logo: {
    width: width * 0.45,
    height: width * 0.4,
  },
  loginText: {
    color: 'black',
    fontSize: width * 0.05,
  },
  loginButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: width * 0.03,
    width: width * 0.4,
  },
});

export default Select;
