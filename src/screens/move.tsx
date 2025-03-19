import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const Move = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.contents}>
          <View style={styles.topNav}>
            <Text style={styles.title}>실 이동</Text>
          </View>
          <View style={styles.checkWrap}>
            <Text style={styles.checkText}>실 이동 신청 목록</Text>
          </View>
          <TouchableOpacity style={styles.checkButton}>
            <Text style={{color: 'white', fontSize: width * 0.04}}>
              신청하기
            </Text>
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
    backgroundColor: '#F6F7F9',
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: 600,
  },
  container: {
    width: '80%',
    position: 'relative',
    height: '100%',
  },
  contents: {
    width: '100%',
    position: 'absolute',
    display: 'flex',
    gap: height * 0.025,
    top: height * 0.04,
  },
  checkText: {
    fontWeight: 600,
    fontSize: width * 0.04,
  },
  topNav: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkWrap: {
    width: '100%',
    paddingVertical: height * 0.03,
    paddingHorizontal: width * 0.05,
    backgroundColor: 'white',
    borderRadius: 10,
    gap: height * 0.03,
  },
  checkButton: {
    paddingVertical: height * 0.03,
    paddingHorizontal: width * 0.05,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#323A45',
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  formText: {
    fontSize: width * 0.035,
  },
  formValue: {
    fontSize: width * 0.035,
    fontWeight: 500,
  },
});
export default Move;
