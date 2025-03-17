import React from 'react';
import {Dimensions, Image, SafeAreaView, StyleSheet, Text} from 'react-native';

const {width} = Dimensions.get('window');

const Start = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
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
});

export default Start;
