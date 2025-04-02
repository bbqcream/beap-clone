import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Button from '../components/button';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const Move = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.contents}>
          <View style={styles.topNav}>
            <Text style={styles.title}>실 이동</Text>
          </View>
          <View style={styles.checkWrap}>
            <Text style={styles.checkText}>실 이동 신청 목록</Text>
            <View style={styles.checkContainer}>
              <Text style={styles.checkTitle}>LAB 21, 22실 -{'> '}LAB 2실</Text>
              <Text style={styles.checkTime}>10교시 - 11교시</Text>
              <Text style={styles.checkDetail}>
                안녕하세요 안녕하세요 안ㄴ여핫ㅔ요
              </Text>
            </View>
          </View>
          <Button
            title="신청하기"
            action={() => navigation.navigate('실신청')}
            color="#323A45"
          />
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
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  contents: {
    width: '100%',
    position: 'absolute',
    display: 'flex',
    gap: height * 0.025,
    top: height * 0.04,
  },
  checkText: {
    fontWeight: 800,
    fontSize: width * 0.055,
  },
  checkContainer: {
    backgroundColor: '#FBFBFB',
    paddingHorizontal: width * 0.03,
    paddingVertical: width * 0.02,
    display: 'flex',
    gap: width * 0.01,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  checkTitle: {
    fontSize: width * 0.045,
    fontWeight: 600,
  },
  checkTime: {
    fontSize: width * 0.035,
    fontWeight: 400,
  },
  checkDetail: {
    fontSize: width * 0.03,
    fontWeight: 200,
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
    minHeight: height * 0.5,
    paddingVertical: height * 0.03,
    paddingHorizontal: width * 0.05,
    backgroundColor: 'white',
    borderRadius: 20,
    gap: height * 0.03,
  },
  checkButton: {
    paddingVertical: height * 0.03,
    paddingHorizontal: width * 0.05,
    alignItems: 'center',
    borderRadius: 20,
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
