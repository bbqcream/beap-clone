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

const Profile = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.contents}>
          <View style={styles.topNav}>
            <Text style={styles.title}>프로필</Text>
          </View>
          <View style={styles.checkWrap}>
            <View style={styles.form}>
              <Text style={styles.formText}>이름</Text>
              <Text style={styles.formValue}>김성한</Text>
            </View>
            <View style={styles.form}>
              <Text style={styles.formText}>실</Text>
              <Text style={styles.formValue}>LAB 9, 10</Text>
            </View>
            <View style={styles.form}>
              <Text style={styles.formText}>학번</Text>
              <Text style={styles.formValue}>1학년 2반 10번</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.checkWrap}>
            <Text style={{color: '#FF6C6C', fontSize: width * 0.035}}>
              로그아웃
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
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
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
  checkButton: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: height * 0.025,
    backgroundColor: '#32A89C',
    borderRadius: 5,
  },
});
export default Profile;
