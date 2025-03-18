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

const {width, height} = Dimensions.get('window');

const Main = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.topNav}>
          <TouchableOpacity>
            <Image
              style={styles.arrowImg}
              source={require('../assets/beep.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.infoImg}
              source={require('../assets/info.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.checkWrap}>
          <Text style={styles.title}>출석체크</Text>
          <View style={styles.checkStatWrap}>
            <Image
              source={require('../assets/phone.png')}
              style={styles.phone}
            />
            <TouchableOpacity style={styles.checkButton}>
              <Text style={styles.checkText}>출석하기</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.checkWrap}>
          <Text style={styles.title}>출석 현황</Text>
          <Text>출석 상태 : 나르샤</Text>
          <Text>출석 장소 : LAB 20실</Text>
          <Text>출석 시간 : 7:06</Text>
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
  container: {
    width: '80%',
  },
  topNav: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  arrowImg: {
    width: width * 0.1,
    height: width * 0.1,
  },
  infoImg: {
    width: width * 0.07,
    height: width * 0.07,
  },
  title: {
    fontSize: width * 0.05,
    fontWeight: 600,
  },
  checkWrap: {
    width: '100%',
    paddingVertical: height * 0.03,
    paddingHorizontal: width * 0.04,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  phone: {
    width: width * 0.4,
    height: height * 0.17,
  },
  checkStatWrap: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  checkButton: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: height * 0.025,
    backgroundColor: '#32A89C',
    borderRadius: 5,
  },
  checkText: {
    color: 'white',
    fontWeight: 600,
    fontSize: width * 0.04,
  },
});
export default Main;
